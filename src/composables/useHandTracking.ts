/**
 * useHandTracking.ts
 * ---------------------------------------------------------------------------
 * 封装 MediaPipe HandLandmarker：
 *   1. 初始化（本地 WASM + 本地模型，GPU 失败自动回落 CPU）
 *   2. 摄像头权限请求（getUserMedia）
 *   3. 逐帧检测 21 个手部关键点
 *   4. 计算并平滑输出：捏合距离 / 手掌坐标 / 手指伸展度 / 手掌速度
 *
 * 坐标说明：摄像头画面在 UI 上是镜像显示的（CSS scaleX(-1)），
 * 所以这里输出的 palmPosition.x 已经做过 1 - x 的镜像处理，
 * 保证「手向右移 = 数值向右增大」，方向与肉眼看到的一致。
 * ---------------------------------------------------------------------------
 */
import { ref, shallowRef } from 'vue'
import {
  FilesetResolver,
  HandLandmarker,
  type HandLandmarkerResult,
  type NormalizedLandmark,
} from '@mediapipe/tasks-vision'

/** 本地资源路径（由 scripts/copy-mediapipe-assets.mjs 复制到 public 下）
 *  用 BASE_URL 拼接，部署到 GitHub Pages 子路径时同样可用 */
const ASSET_BASE = import.meta.env.BASE_URL
const WASM_DIR = ASSET_BASE + 'mediapipe/wasm'
const MODEL_PATH = ASSET_BASE + 'models/hand_landmarker.task'

/** 手掌中心参考点：腕关节 + 四指根部 + 中指根部 */
const PALM_IDS = [0, 5, 9, 13, 17]
/** 除拇指外四根手指的骨骼链（mcp → pip → dip → tip） */
const FINGER_CHAINS: ReadonlyArray<ReadonlyArray<number>> = [
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
]

/** 平滑系数（0~1，越小越平滑但越滞后）—— 数值偏小以抑制抖动 */
const SMOOTH_PINCH = 0.16
const SMOOTH_SPREAD = 0.2
const SMOOTH_PALM = 0.15
const SMOOTH_VELOCITY = 0.12

/** 手掌速度死区（归一化坐标/秒）：低于此值视为「没动」，避免呼吸般的手抖引起旋转 */
const VELOCITY_DEADZONE = 0.05
/** 速度上限，防止单帧跳变把地球甩飞 */
const VELOCITY_CLAMP = 2.2

/** 检测频率上限（ms），避免每帧同步阻塞渲染 */
const DETECT_INTERVAL = 30

export type TrackingStatus = 'idle' | 'loading' | 'ready' | 'denied' | 'no-camera' | 'error'

const clamp = (v: number, min: number, max: number) => (v < min ? min : v > max ? max : v)

const dist2d = (a: NormalizedLandmark, b: NormalizedLandmark) => {
  const dx = a.x - b.x
  const dy = a.y - b.y
  return Math.hypot(dx, dy)
}

export function useHandTracking() {
  /** 运行状态：idle 未启动 / loading 加载中 / ready 就绪 / denied 用户拒绝 / no-camera 无摄像头 / error 出错 */
  const status = ref<TrackingStatus>('idle')
  const errorMessage = ref('')

  /** 是否检测到手 */
  const handDetected = ref(false)
  /** 捏合距离：拇指尖(4) 到 食指尖(8)，以手掌长度为 1 的单位（≈0 完全捏合，≈1.3 完全张开） */
  const handOpenness = ref(0)
  /** 手指伸展度 0~1（0 = 握拳，1 = 五指完全张开） */
  const handSpread = ref(0)
  /** 手掌中心（镜像后的归一化坐标，0~1） */
  const palmPosition = ref({ x: 0.5, y: 0.5 })
  /** 手掌移动速度（归一化坐标 / 秒，已平滑，用于映射旋转速度） */
  const palmVelocity = ref({ x: 0, y: 0 })
  /** 第一只手的 21 个关键点（原始未镜像坐标，用于绘制骨架） */
  const landmarks = shallowRef<NormalizedLandmark[]>([])
  /** 检测帧率 */
  const fps = ref(0)

  let landmarker: HandLandmarker | null = null
  let stream: MediaStream | null = null
  let rafId = 0
  let running = false
  let lastDetectTime = 0
  let lastVideoTime = -1
  let lastVelTime = 0
  let fpsWindowStart = 0
  let fpsFrames = 0

  /** ---------- 初始化模型（懒加载，只建一次） ---------- */
  async function createLandmarker(): Promise<HandLandmarker> {
    const fileset = await FilesetResolver.forVisionTasks(WASM_DIR)

    const build = (delegate: 'GPU' | 'CPU') =>
      HandLandmarker.createFromOptions(fileset, {
        baseOptions: {
          modelAssetPath: MODEL_PATH,
          delegate,
        },
        runningMode: 'VIDEO',
        numHands: 1,
        minHandDetectionConfidence: 0.5,
        minHandPresenceConfidence: 0.5,
        minTrackingConfidence: 0.5,
      })

    // 优先 GPU，部分核显/驱动不支持时回落到 CPU（WASM）
    try {
      return await build('GPU')
    } catch (gpuErr) {
      console.warn('[hand] GPU delegate 不可用，回落到 CPU：', gpuErr)
      return await build('CPU')
    }
  }

  /** ---------- 权限错误友好化 ---------- */
  function handleCameraError(err: unknown) {
    const name = (err as DOMException)?.name || ''
    console.error('[hand] 摄像头/模型初始化失败：', err)

    if (name === 'NotAllowedError' || name === 'PermissionDeniedError' || name === 'SecurityError') {
      status.value = 'denied'
      errorMessage.value = '摄像头权限被拒绝。请在浏览器地址栏左侧的「摄像头」图标里选择「允许」，然后点击重试。'
      return
    }
    if (name === 'NotFoundError' || name === 'DevicesNotFoundError' || name === 'OverconstrainedError') {
      status.value = 'no-camera'
      errorMessage.value = '没有检测到可用摄像头。请连接摄像头后重试，或改用带摄像头的设备。'
      return
    }
    if (name === 'NotReadableError' || name === 'TrackStartError') {
      status.value = 'error'
      errorMessage.value = '摄像头被其他程序占用（如微信/钉钉/其他浏览器标签）。请关闭占用摄像头的程序后重试。'
      return
    }
    status.value = 'error'
    errorMessage.value = `初始化失败：${(err as Error)?.message || String(err)}`
  }

  /** ---------- 单帧结果处理 ---------- */
  function handleResult(result: HandLandmarkerResult) {
    if (!result.landmarks || result.landmarks.length === 0) {
      handDetected.value = false
      landmarks.value = []
      // 手离开画面：速度快速衰减，地球回到缓慢自转
      palmVelocity.value = {
        x: palmVelocity.value.x * 0.82,
        y: palmVelocity.value.y * 0.82,
      }
      if (Math.abs(palmVelocity.value.x) < 0.01) palmVelocity.value.x = 0
      if (Math.abs(palmVelocity.value.y) < 0.01) palmVelocity.value.y = 0
      return
    }

    const lms = result.landmarks[0]
    handDetected.value = true
    landmarks.value = lms

    // ---- 手掌中心 + 镜像 ----
    let sumX = 0
    let sumY = 0
    for (const id of PALM_IDS) {
      sumX += lms[id].x
      sumY += lms[id].y
    }
    const rawX = sumX / PALM_IDS.length
    const rawY = sumY / PALM_IDS.length
    // 画面镜像 → 坐标镜像，否则左右方向相反
    const mirroredX = 1 - rawX
    const mirroredY = rawY

    // ---- 手掌尺度（腕 0 → 中指根 9），用于把手部距离归一化，做到远近无关 ----
    const palmSize = Math.max(dist2d(lms[0], lms[9]), 1e-4)

    // ---- 捏合距离（拇指尖 4 ↔ 食指尖 8）----
    const pinchRaw = dist2d(lms[4], lms[8]) / palmSize
    handOpenness.value =
      handOpenness.value + (clamp(pinchRaw, 0, 2) - handOpenness.value) * SMOOTH_PINCH

    // ---- 手指伸展度：骨骼伸直程度 + 食指/小指张开幅度 ----
    let straightSum = 0
    for (const chain of FINGER_CHAINS) {
      const mcp = lms[chain[0]]
      const pip = lms[chain[1]]
      const dip = lms[chain[2]]
      const tip = lms[chain[3]]
      const chainLen =
        dist2d(mcp, pip) + dist2d(pip, dip) + dist2d(dip, tip)
      const direct = dist2d(mcp, tip)
      straightSum += chainLen > 1e-6 ? direct / chainLen : 0
    }
    const straightness = straightSum / FINGER_CHAINS.length
    // 握拳 straightness ≈ 0.55~0.65，伸直 ≈ 0.95~1.0
    const extension = clamp((straightness - 0.62) / 0.33, 0, 1)

    // 食指指尖 ↔ 小指指尖的张开幅度（五指大张时明显变大）
    const aperture = clamp((dist2d(lms[8], lms[20]) / palmSize - 0.45) / 0.55, 0, 1)
    const spreadRaw = clamp(extension * 0.72 + aperture * 0.28, 0, 1)
    handSpread.value = handSpread.value + (spreadRaw - handSpread.value) * SMOOTH_SPREAD

    // ---- 手掌位移 → 速度（归一化 / 秒）----
    const now = performance.now()
    const dt = lastVelTime ? Math.max((now - lastVelTime) / 1000, 1e-3) : 0
    lastVelTime = now
    if (dt > 0 && dt < 0.5) {
      const vx = clamp((mirroredX - palmPosition.value.x) / dt, -VELOCITY_CLAMP, VELOCITY_CLAMP)
      const vy = clamp((mirroredY - palmPosition.value.y) / dt, -VELOCITY_CLAMP, VELOCITY_CLAMP)
      const smoothedX = palmVelocity.value.x + (vx - palmVelocity.value.x) * SMOOTH_VELOCITY
      const smoothedY = palmVelocity.value.y + (vy - palmVelocity.value.y) * SMOOTH_VELOCITY
      // 死区：小于阈值直接归零，手不动时地球不再被噪声带着转
      palmVelocity.value = {
        x: Math.abs(smoothedX) < VELOCITY_DEADZONE ? 0 : smoothedX,
        y: Math.abs(smoothedY) < VELOCITY_DEADZONE ? 0 : smoothedY,
      }
    }

    palmPosition.value = {
      x: palmPosition.value.x + (mirroredX - palmPosition.value.x) * SMOOTH_PALM,
      y: palmPosition.value.y + (mirroredY - palmPosition.value.y) * SMOOTH_PALM,
    }
  }

  /** ---------- 检测主循环 ---------- */
  function loop() {
    if (!running) return
    rafId = requestAnimationFrame(loop)

    const video = videoEl
    if (!video || video.readyState < 2 || !landmarker) return

    const now = performance.now()

    // 帧率统计
    if (!fpsWindowStart) fpsWindowStart = now
    if (now - fpsWindowStart >= 500) {
      fps.value = Math.round((fpsFrames * 1000) / (now - fpsWindowStart))
      fpsFrames = 0
      fpsWindowStart = now
    }

    if (now - lastDetectTime < DETECT_INTERVAL) return
    if (video.currentTime === lastVideoTime) return
    lastDetectTime = now
    lastVideoTime = video.currentTime

    try {
      // 时间戳必须单调递增
      const result = landmarker.detectForVideo(video, now)
      fpsFrames += 1
      handleResult(result)
    } catch (err) {
      console.warn('[hand] 单帧检测失败：', err)
    }
  }

  let videoEl: HTMLVideoElement | null = null

  /** ---------- 启动：请求权限 + 加载模型 + 开始检测 ---------- */
  async function start(video: HTMLVideoElement) {
    if (running || status.value === 'loading') return
    videoEl = video
    status.value = 'loading'
    errorMessage.value = ''

    // 1) 摄像头
    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new DOMException(
          '当前浏览器不支持摄像头接口（需要 https 或 http://localhost / 127.0.0.1 环境）',
          'SecurityError',
        )
      }
      stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: 'user',
          width: { ideal: 640 },
          height: { ideal: 480 },
          frameRate: { ideal: 30, max: 30 },
        },
      })
      video.srcObject = stream
      video.muted = true
      video.playsInline = true
      await video.play()
    } catch (err) {
      handleCameraError(err)
      stop()
      return
    }

    // 2) 模型（本地 wasm + 本地 .task）
    try {
      if (!landmarker) landmarker = await createLandmarker()
    } catch (err) {
      status.value = 'error'
      errorMessage.value =
        `手势模型加载失败：${(err as Error)?.message || String(err)}。` +
        '请确认 public/mediapipe/wasm 与 public/models/hand_landmarker.task 已就位。'
      stop()
      return
    }

    status.value = 'ready'
    running = true
    lastVideoTime = -1
    lastDetectTime = 0
    lastVelTime = 0
    fpsWindowStart = 0
    fpsFrames = 0
    loop()
  }

  /** ---------- 停止并释放资源 ---------- */
  function stop() {
    running = false
    if (rafId) cancelAnimationFrame(rafId)
    rafId = 0

    stream?.getTracks().forEach((t) => t.stop())
    stream = null
    if (videoEl) videoEl.srcObject = null

    handDetected.value = false
    landmarks.value = []
    palmVelocity.value = { x: 0, y: 0 }
    fps.value = 0
    if (status.value !== 'denied' && status.value !== 'no-camera' && status.value !== 'error') {
      status.value = 'idle'
    }
  }

  /** 完全销毁（组件卸载时调用） */
  function dispose() {
    stop()
    landmarker?.close()
    landmarker = null
  }

  return {
    // 状态
    status,
    errorMessage,
    // 手势数据
    handDetected,
    handOpenness,
    handSpread,
    palmPosition,
    palmVelocity,
    landmarks,
    fps,
    // 控制
    start,
    stop,
    dispose,
  }
}

export type HandTracking = ReturnType<typeof useHandTracking>
