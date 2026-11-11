<script setup lang="ts">
/**
 * App.vue — 深空制图仪 · 页面外壳与 HUD
 * ---------------------------------------------------------------------------
 * 本文件只负责 DOM / UI 层：
 *   1. 承载 ParticleEarth 3D 场景（手势数据透传为 props，用法保持不变）
 *   2. 消费 ParticleEarth 的 @telemetry 遥测事件，渲染左侧遥测面板 / 底部题注 / 顶栏
 *   3. 摄像头镜像预览 + 权限遮罩，沿用 useHandTracking 的状态机
 *   4. 键盘与图标按钮交互：M 切模式 / 左 右 切城市 / H 切 HUD / F 全屏
 * telemetry 尚未就绪时使用契约默认值，不会崩溃；无 WebGL 也只影响 3D 层。
 * ---------------------------------------------------------------------------
 */
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import ParticleEarth from './components/ParticleEarth.vue'
import { useHandTracking } from './composables/useHandTracking'

/* ============================ telemetry 契约 ============================ */
type Mode = 'chart' | 'meteor'

interface CityTelemetry {
  cn: string
  en: string
  tag: string
  lon: number
  lat: number
  /** ParticleEarth 提供的城市序号，用于题注过渡 key */
  index?: number
}

interface Telemetry {
  mode: Mode
  modeCn: string
  modeEn: string
  city: CityTelemetry | null
  lon: number
  lat: number
  distance: number
  fps: number
  gesture: string
  focus: string
  cities: number
  satellites: number
  zones: number
  rangeKm: number
  signal: number
  date: string
}

/** ParticleEarth 通过 defineExpose 暴露的控制器（未就绪时安全降级） */
interface EarthApi {
  setMode?: (mode: Mode) => void
  nextCity?: () => void
  prevCity?: () => void
  webglError?: string | null
}

const MODE_LABELS: Record<Mode, { cn: string; en: string }> = {
  chart: { cn: '深空制图', en: 'DEEP SPACE CHART' },
  meteor: { cn: '流星雨', en: 'METEOR SHOWER' },
}

/** 3D 组件 telemetry 未就绪时用于演示城市切换 */
const FALLBACK_CITIES: CityTelemetry[] = [
  { cn: '上海', en: 'SHANGHAI', tag: '31.23°N · 121.47°E', lon: 121.47, lat: 31.23 },
  { cn: '东京', en: 'TOKYO', tag: '35.68°N · 139.69°E', lon: 139.69, lat: 35.68 },
  { cn: '新加坡', en: 'SINGAPORE', tag: '1.35°N · 103.82°E', lon: 103.82, lat: 1.35 },
  { cn: '迪拜', en: 'DUBAI', tag: '25.20°N · 55.27°E', lon: 55.27, lat: 25.2 },
  { cn: '巴黎', en: 'PARIS', tag: '48.86°N · 2.35°E', lon: 2.35, lat: 48.86 },
  { cn: '纽约', en: 'NEW YORK', tag: '40.71°N · 74.01°W', lon: -74.01, lat: 40.71 },
  { cn: '悉尼', en: 'SYDNEY', tag: '33.87°S · 151.21°E', lon: 151.21, lat: -33.87 },
]

function todayIso(): string {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  return String(d.getFullYear()) + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate())
}

function defaultTelemetry(): Telemetry {
  return {
    mode: 'chart',
    modeCn: MODE_LABELS.chart.cn,
    modeEn: MODE_LABELS.chart.en,
    city: FALLBACK_CITIES[0],
    lon: 121.47,
    lat: 31.23,
    distance: 1.9,
    fps: 60,
    gesture: '待启动',
    focus: '地球',
    cities: 13414,
    satellites: 1144,
    zones: 1,
    rangeKm: 384400,
    signal: 77,
    date: todayIso(),
  }
}

/* ============================ 手势 / 摄像头 ============================ */
const videoRef = ref<HTMLVideoElement | null>(null)
const overlayRef = ref<HTMLCanvasElement | null>(null)
const earthRef = ref<InstanceType<typeof ParticleEarth> | null>(null)

const {
  status,
  errorMessage,
  handDetected,
  handOpenness,
  handSpread,
  palmPosition,
  palmVelocity,
  landmarks,
  fps,
  start,
  stop,
  dispose,
} = useHandTracking()

/** 手部骨架连线（MediaPipe 21 点标准拓扑） */
const HAND_CONNECTIONS: ReadonlyArray<readonly [number, number]> = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [5, 9], [9, 10], [10, 11], [11, 12],
  [9, 13], [13, 14], [14, 15], [15, 16],
  [13, 17], [17, 18], [18, 19], [19, 20],
  [0, 17],
]

const isReady = computed(() => status.value === 'ready')
/** 只看地球（不启用摄像头）：?preview=1 直接进入，或遮罩按钮进入 */
const previewOnly = ref(new URLSearchParams(window.location.search).has('preview'))
const showGate = computed(() => status.value !== 'ready' && !previewOnly.value)

/* ============================ 遥测状态 ============================ */
const telemetry = ref<Telemetry>(defaultTelemetry())
const hasTelemetry = ref(false)
/** 本地乐观状态：3D 组件尚未回传时保证 UI 立刻响应 */
const localMode = ref<Mode | null>(null)
const localCity = ref<CityTelemetry | null>(null)

const hudVisible = ref(true)
const soundOn = ref(true)
const isFullscreen = ref(false)

function onTelemetry(payload?: Partial<Telemetry> | null) {
  if (!payload || typeof payload !== 'object') return
  telemetry.value = { ...telemetry.value, ...payload }
  hasTelemetry.value = true
  // 本地乐观状态与真实遥测对齐后交回 3D 组件
  if (localMode.value && payload.mode === localMode.value) localMode.value = null
  if (localCity.value && payload.city && payload.city.cn === localCity.value.cn) localCity.value = null
}

function earthApi(): EarthApi | null {
  return earthRef.value as unknown as EarthApi | null
}

const mode = computed<Mode>(() => localMode.value ?? telemetry.value.mode)
const activeCity = computed<CityTelemetry | null>(() => localCity.value ?? telemetry.value.city)

/* ============================ 数值格式化 ============================ */
const safe = (value: unknown, fallback: number): number =>
  typeof value === 'number' && Number.isFinite(value) ? value : fallback

const fmtLon = (value: number) => {
  const v = safe(value, 0)
  return Math.abs(v).toFixed(2) + '°' + (v >= 0 ? 'E' : 'W')
}
const fmtLat = (value: number) => {
  const v = safe(value, 0)
  return Math.abs(v).toFixed(2) + '°' + (v >= 0 ? 'N' : 'S')
}
const fmtCount = (value: number) => Math.round(safe(value, 0)).toLocaleString('en-US')

const fpsValue = computed(() => {
  if (hasTelemetry.value && Number.isFinite(telemetry.value.fps)) {
    return Math.round(telemetry.value.fps)
  }
  return fps.value > 0 ? fps.value : 60
})

/** telemetry 缺失时由手势数据推导 */
const gestureLabel = computed(() => {
  if (hasTelemetry.value && telemetry.value.gesture) return telemetry.value.gesture
  if (status.value === 'loading') return '待启动'
  if (!isReady.value || !handDetected.value) return '待启动'
  if (handSpread.value < 0.3) return '握持'
  if (handSpread.value > 0.72) return '张开'
  if (Math.hypot(palmVelocity.value.x, palmVelocity.value.y) > 0.18) return '移动'
  return '握持'
})

const signalValue = computed(() => Math.round(safe(telemetry.value.signal, 77)))

/** 左侧遥测面板的 12 行 */
const railRows = computed(() => {
  const t = telemetry.value
  return [
    { k: '经度', v: fmtLon(t.lon) },
    { k: '纬度', v: fmtLat(t.lat) },
    { k: '距率', v: safe(t.distance, 1.9).toFixed(2) + '×' },
    { k: '帧率', v: String(fpsValue.value) + ' fps' },
    { k: '手势', v: gestureLabel.value },
    { k: '焦点', v: t.focus || '地球' },
    { k: '城市', v: fmtCount(t.cities) },
    { k: '卫星', v: fmtCount(t.satellites) },
    { k: '空间区', v: String(Math.round(safe(t.zones, 1))) },
    { k: '测距', v: fmtCount(t.rangeKm) + ' km' },
    { k: '日期', v: t.date || todayIso() },
    { k: '信号', v: String(signalValue.value) + '%' },
  ]
})

/* ============================ 底部题注 ============================ */
/* chart 模式：当前焦点城市（中文 / 英文 / tag）；meteor 模式：流星雨 */
const captionCn = computed(() => {
  if (mode.value === 'meteor') return '流星雨'
  return activeCity.value?.cn ?? '地球'
})
const captionEn = computed(() => {
  if (mode.value === 'meteor') return 'METEOR SHOWER'
  return activeCity.value?.en ?? 'EARTH'
})
const captionMeta = computed(() => {
  if (mode.value === 'meteor') return 'METEOR SHOWER · 轨道合成'
  const c = activeCity.value
  if (c) return c.tag || fmtLat(c.lat) + ' ' + fmtLon(c.lon)
  return fmtLat(telemetry.value.lat) + ' ' + fmtLon(telemetry.value.lon)
})
const captionKey = computed(
  () => String(activeCity.value?.index ?? activeCity.value?.cn ?? 'earth') + '-' + mode.value,
)

/* ============================ 交互 ============================ */
function toggleMode() {
  const next: Mode = mode.value === 'chart' ? 'meteor' : 'chart'
  localMode.value = next
  earthApi()?.setMode?.(next)
}

function stepCity(dir: 1 | -1) {
  const api = earthApi()
  if (api?.nextCity || api?.prevCity) {
    if (dir > 0) api.nextCity?.()
    else api.prevCity?.()
    return
  }
  // 3D 组件尚未提供城市接口时，用本地列表演示题注切换
  const list = FALLBACK_CITIES
  const current = activeCity.value?.cn
  const found = list.findIndex((c) => c.cn === current)
  const index = Math.max(0, found)
  localCity.value = list[(index + dir + list.length) % list.length]
}

function toggleHud() {
  hudVisible.value = !hudVisible.value
}

function toggleSound() {
  soundOn.value = !soundOn.value
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) await document.exitFullscreen()
    else await document.documentElement.requestFullscreen()
  } catch {
    // 全屏被浏览器策略拒绝时静默降级
  }
}

function onFullscreenChange() {
  isFullscreen.value = Boolean(document.fullscreenElement)
}

function onKeydown(event: KeyboardEvent) {
  if (event.metaKey || event.ctrlKey || event.altKey) return
  const target = event.target as HTMLElement | null
  if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
    return
  }

  // capture 阶段拦截：ParticleEarth 内部也监听 window keydown（M / ← / → / 空格），
  // 这里 stopPropagation 保证同一按键只被 UI 外壳处理一次，避免城市被连切两次。
  switch (event.key) {
    case 'm':
    case 'M':
      event.preventDefault()
      event.stopPropagation()
      toggleMode()
      break
    case 'ArrowLeft':
      event.preventDefault()
      event.stopPropagation()
      stepCity(-1)
      break
    case 'ArrowRight':
      event.preventDefault()
      event.stopPropagation()
      stepCity(1)
      break
    case 'h':
    case 'H':
      event.preventDefault()
      event.stopPropagation()
      toggleHud()
      break
    case 'f':
    case 'F':
      event.preventDefault()
      event.stopPropagation()
      void toggleFullscreen()
      break
    default:
      break
  }
}

/* ============================ 摄像头流程 ============================ */
async function enableCamera() {
  const video = videoRef.value
  if (!video) return
  await start(video)
}

function retry() {
  stop()
  status.value = 'idle'
  errorMessage.value = ''
  void enableCamera()
}

function stopTracking() {
  stop()
}

/** 在摄像头预览上绘制 21 个关键点（坐标已镜像，与画面一致） */
function drawLandmarks() {
  const canvas = overlayRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const W = canvas.width
  const H = canvas.height
  ctx.clearRect(0, 0, W, H)

  const lms = landmarks.value
  if (!lms || lms.length < 21) return

  const px = (p: { x: number }) => (1 - p.x) * W
  const py = (p: { y: number }) => p.y * H

  ctx.lineWidth = 2
  ctx.strokeStyle = 'rgba(120, 205, 255, 0.8)'
  ctx.shadowColor = 'rgba(120, 205, 255, 0.9)'
  ctx.shadowBlur = 6
  for (const [a, b] of HAND_CONNECTIONS) {
    ctx.beginPath()
    ctx.moveTo(px(lms[a]), py(lms[a]))
    ctx.lineTo(px(lms[b]), py(lms[b]))
    ctx.stroke()
  }

  for (let i = 0; i < lms.length; i++) {
    const isTip = [4, 8, 12, 16, 20].includes(i)
    const r = isTip ? 4 : 2.6
    ctx.beginPath()
    ctx.arc(px(lms[i]), py(lms[i]), r, 0, Math.PI * 2)
    ctx.fillStyle = isTip ? 'rgba(255, 255, 255, 0.95)' : 'rgba(150, 235, 255, 0.85)'
    ctx.fill()
  }

  // 捏合距离可视化（拇指尖 4 与食指尖 8）
  const ax = px(lms[4])
  const ay = py(lms[4])
  const bx = px(lms[8])
  const by = py(lms[8])
  ctx.shadowBlur = 10
  ctx.strokeStyle = 'rgba(255, 214, 150, 0.8)'
  ctx.lineWidth = 1.6
  ctx.setLineDash([4, 3])
  ctx.beginPath()
  ctx.moveTo(ax, ay)
  ctx.lineTo(bx, by)
  ctx.stroke()
  ctx.setLineDash([])
  ctx.shadowBlur = 0

  ctx.font = '11px "Cascadia Mono", Consolas, monospace'
  ctx.fillStyle = 'rgba(255, 226, 160, 0.9)'
  ctx.fillText(handOpenness.value.toFixed(2), (ax + bx) / 2 + 6, (ay + by) / 2 - 4)
}

watch(landmarks, drawLandmarks)

/* ============================ 遮罩文案 ============================ */
const hasCameraError = computed(
  () => status.value === 'denied' || status.value === 'no-camera' || status.value === 'error',
)

const gateTitle = computed(() => {
  switch (status.value) {
    case 'loading':
      return '正在启动隔空手势'
    case 'denied':
      return '摄像头权限被拒绝'
    case 'no-camera':
      return '没有找到可用摄像头'
    case 'error':
      return '启动失败'
    default:
      return '深空制图仪'
  }
})

const gateDesc = computed(() => {
  switch (status.value) {
    case 'loading':
      return '正在请求摄像头权限并加载本地手势模型（MediaPipe HandLandmarker），首次加载约需 1~3 秒。'
    case 'denied':
    case 'no-camera':
    case 'error':
      return errorMessage.value || '请检查摄像头与权限后重试。'
    default:
      return '开启摄像头后，用拇指与食指开合缩放地球，平移手掌旋转地球，握拳唤起流星雨，五指张开回到制图模式。画面仅在本机浏览器内计算，不会上传。'
  }
})

/* ============================ 生命周期 ============================ */
onMounted(() => {
  // capture: true —— 抢在 3D 组件内部的 window keydown 之前处理 HUD 快捷键
  window.addEventListener('keydown', onKeydown, true)
  document.addEventListener('fullscreenchange', onFullscreenChange)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown, true)
  document.removeEventListener('fullscreenchange', onFullscreenChange)
  dispose()
})
</script>

<template>
  <div class="app" :class="{ 'hud-hidden': !hudVisible, 'gate-open': showGate }">
    <!-- 3D 场景（Lead 负责，props 契约不变） -->
    <ParticleEarth
      ref="earthRef"
      :pinch="handOpenness"
      :spread="handSpread"
      :palm="palmPosition"
      :palm-vel="palmVelocity"
      :detected="handDetected"
      @telemetry="onTelemetry"
    />

    <!-- 四角压暗 -->
    <div class="vignette" aria-hidden="true" />

    <!-- ==================== 顶栏 ==================== -->
    <div class="topbar">
      <div class="top-actions">
        <button
          class="icon-btn"
          :class="{ active: !soundOn }"
          :title="soundOn ? '声音：开（点击静音）' : '声音：已静音（点击开启）'"
          :aria-label="soundOn ? '静音' : '开启声音'"
          @click="toggleSound"
        >
          <svg v-if="soundOn" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 9.5v5h3.2L12 18.6V5.4L7.2 9.5H4Z" />
            <path d="M15.6 9.2a4.1 4.1 0 0 1 0 5.6" />
            <path d="M18.2 6.6a7.8 7.8 0 0 1 0 10.8" />
          </svg>
          <svg v-else viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 9.5v5h3.2L12 18.6V5.4L7.2 9.5H4Z" />
            <path d="m15.8 9.6 4.4 4.8" />
            <path d="m20.2 9.6-4.4 4.8" />
          </svg>
        </button>

        <button
          class="icon-btn"
          :class="{ active: hudVisible }"
          :title="hudVisible ? '隐藏 HUD（H）' : '显示 HUD（H）'"
          aria-label="切换 HUD 显示"
          @click="toggleHud"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7.5h8.5" />
            <path d="M17 7.5h3" />
            <circle cx="14.8" cy="7.5" r="2.1" />
            <path d="M4 16.5h3" />
            <path d="M11.5 16.5h8.5" />
            <circle cx="9.2" cy="16.5" r="2.1" />
          </svg>
        </button>

        <button
          class="icon-btn"
          :class="{ active: isFullscreen }"
          title="全屏（F）"
          aria-label="切换全屏"
          @click="toggleFullscreen"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.2 4H4v5.2" />
            <path d="M14.8 4H20v5.2" />
            <path d="M20 14.8V20h-5.2" />
            <path d="M4 14.8V20h5.2" />
          </svg>
        </button>
      </div>
    </div>

    <!-- ==================== 左侧遥测面板 ==================== -->
    <aside class="rail" aria-label="遥测数据">
      <h1 class="rail-title">深空制图仪</h1>
      <p class="rail-sub">手势地球 · 第一号</p>
      <i class="rail-rule" aria-hidden="true" />
      <div class="rail-rows">
        <div v-for="row in railRows" :key="row.k" class="rail-row">
          <span class="k">{{ row.k }}</span>
          <span class="v mono">{{ row.v }}</span>
        </div>
      </div>
    </aside>

    <!-- ==================== 底部题注 ==================== -->
    <div class="caption">
      <Transition name="cap" mode="out-in">
        <div :key="captionKey" class="cap-inner">
          <h2 class="cap-cn">{{ captionCn }}</h2>
          <p class="cap-en">{{ captionEn }}</p>
          <p class="cap-meta">{{ captionMeta }}</p>
        </div>
      </Transition>
    </div>

    <!-- ==================== 左下操作提示 ==================== -->
    <footer class="hints">
      <p>
        <span class="gap">握拳 · 流星雨</span>
        <span class="gap">五指张开 · 制图模式</span>
        <span class="gap">捏合 · 缩放</span>
        <span>平移 · 旋转</span>
      </p>
      <p class="dim">鼠标拖拽旋转 · 滚轮缩放 · M 切换模式 · ← → 切换城市</p>
    </footer>

    <!-- ==================== 右下摄像头预览 ==================== -->
    <aside v-show="isReady" class="cam-card" :class="{ detected: handDetected }" aria-label="摄像头预览">
      <div class="cam-frame">
        <video ref="videoRef" class="cam-video" autoplay muted playsinline />
        <canvas ref="overlayRef" class="cam-overlay" width="640" height="480" />
        <button class="cam-stop" title="停止摄像头" aria-label="停止摄像头" @click="stopTracking">×</button>
      </div>
      <div class="cam-foot">
        <i class="dot" :class="{ on: isReady }" />
        <span class="mono">{{ handDetected ? 'HAND' : 'SCAN' }}</span>
        <span class="mono fps">{{ fps }}FPS</span>
      </div>
    </aside>

    <!-- ==================== 权限 / 状态遮罩 ==================== -->
    <div v-if="showGate" class="gate">
      <div class="gate-inner" :class="{ error: hasCameraError }">
        <p class="gate-eyebrow">GESTURE EARTH · TERMINAL 01</p>
        <h2 class="gate-title">深空制图仪</h2>
        <p class="gate-sub">手势地球 · 第一号</p>
        <i class="gate-rule" aria-hidden="true" />

        <p v-if="hasCameraError" class="gate-status">{{ gateTitle }}</p>
        <p class="gate-desc">{{ gateDesc }}</p>

        <div v-if="!hasCameraError" class="gate-gestures">
          <span>捏合 · 缩放</span>
          <span>握拳 · 流星雨</span>
          <span>五指张开 · 制图</span>
          <span>平移 · 旋转</span>
        </div>

        <div v-if="status === 'loading'" class="gate-loading">
          <span class="spinner" />
          <span>正在请求摄像头与加载本地手势模型…</span>
        </div>
        <div v-else class="gate-actions">
          <button class="gate-btn primary" @click="status === 'idle' ? enableCamera() : retry()">
            {{ status === 'idle' ? '开启摄像头' : '重试' }}
          </button>
          <button class="gate-btn ghost" @click="previewOnly = true">先只看地球</button>
        </div>

        <p v-if="status === 'denied'" class="gate-note">
          恢复方法：点击地址栏左侧的锁形 / 摄像头图标 → 将「摄像头」设为「允许」→ 刷新页面。
        </p>
        <p v-else-if="status === 'no-camera'" class="gate-note">
          也可以先只观看地球自转；接入摄像头后刷新本页即可启用隔空手势。
        </p>
        <p v-else-if="status === 'error'" class="gate-note">
          若手势模型加载失败，请确认 public/mediapipe/wasm 与 public/models/hand_landmarker.task 已就位。
        </p>
        <p v-else-if="status === 'idle'" class="gate-note">
          需通过 http://127.0.0.1:5173 或 https 访问，浏览器才会允许摄像头授权；所有画面仅在本机计算，不会上传。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ============================ 基础 ============================ */
.app {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  isolation: isolate;
}

/* 四角压暗 + 边缘渐隐 */
.vignette {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background:
    radial-gradient(118% 94% at 50% 45%, rgba(4, 7, 14, 0) 40%, rgba(4, 7, 14, 0.3) 74%, rgba(2, 4, 9, 0.66) 100%),
    radial-gradient(58% 42% at 0% 0%, rgba(2, 4, 9, 0.44), rgba(2, 4, 9, 0) 72%),
    radial-gradient(58% 42% at 100% 0%, rgba(2, 4, 9, 0.4), rgba(2, 4, 9, 0) 72%),
    radial-gradient(58% 42% at 0% 100%, rgba(2, 4, 9, 0.48), rgba(2, 4, 9, 0) 72%),
    radial-gradient(58% 42% at 100% 100%, rgba(2, 4, 9, 0.48), rgba(2, 4, 9, 0) 72%);
}

/* ============================ 顶栏 ============================ */
.topbar {
  position: absolute;
  inset: 0 0 auto 0;
  height: 76px;
  z-index: 5;
  pointer-events: none;
}

.top-actions {
  position: absolute;
  top: 34px;
  right: 34px;
  display: flex;
  gap: 8px;
  pointer-events: auto;
}

.icon-btn {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: rgba(168, 202, 230, 0.6);
  background: rgba(6, 14, 26, 0.5);
  border: 1px solid rgba(120, 170, 210, 0.14);
  backdrop-filter: blur(8px);
  transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease,
    box-shadow 0.2s ease, opacity 0.4s ease;
}

.icon-btn svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.35;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.icon-btn:hover {
  color: #eaf6ff;
  border-color: rgba(120, 190, 255, 0.38);
  background: rgba(18, 40, 68, 0.62);
  box-shadow: 0 0 20px rgba(80, 160, 255, 0.16);
}

.icon-btn.active {
  color: rgba(226, 244, 255, 0.92);
  border-color: rgba(120, 190, 255, 0.34);
}

/* ============================ 左侧遥测面板 ============================ */
.rail {
  position: absolute;
  left: 34px;
  top: 88px;
  width: 250px;
  z-index: 5;
  pointer-events: none;
  text-shadow: 0 0 18px rgba(0, 0, 0, 0.55);
  transition: opacity 0.4s ease;
}

/* 极淡压暗：只压 rail 背后的星体强光，不形成卡片边界 */
.rail::before {
  content: '';
  position: absolute;
  inset: -34px -74px -30px -48px;
  z-index: -1;
  pointer-events: none;
  background: radial-gradient(
    ellipse 116% 92% at 24% 42%,
    rgba(4, 7, 14, 0.58),
    rgba(4, 7, 14, 0.3) 56%,
    rgba(4, 7, 14, 0) 79%
  );
}

.rail-title {
  margin: 0;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.22em;
  color: #dceeff;
  text-shadow: 0 0 22px rgba(120, 190, 255, 0.28);
}

.rail-sub {
  margin: 7px 0 0;
  font-size: 9.5px;
  letter-spacing: 0.18em;
  color: rgba(150, 190, 220, 0.45);
}

.rail-rule {
  display: block;
  height: 1px;
  margin: 13px 0 9px;
  background: linear-gradient(90deg, rgba(120, 170, 210, 0.28), rgba(120, 170, 210, 0));
}

.rail-rows {
  position: relative;
}

.rail-rows::before {
  content: '';
  position: absolute;
  top: 3px;
  bottom: 3px;
  left: 158px;
  width: 1px;
  background: linear-gradient(
    180deg,
    rgba(120, 170, 210, 0),
    rgba(120, 170, 210, 0.16) 14%,
    rgba(120, 170, 210, 0.16) 86%,
    rgba(120, 170, 210, 0)
  );
}

.rail-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  height: 19px;
  line-height: 19px;
}

.rail-row .k {
  font-size: 9.5px;
  letter-spacing: 0.12em;
  color: rgba(140, 175, 205, 0.42);
  white-space: nowrap;
}

.rail-row .v {
  font-size: 10.5px;
  letter-spacing: 0.02em;
  color: rgba(226, 242, 255, 0.85);
  white-space: nowrap;
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* ============================ 底部题注 ============================ */
.caption {
  position: absolute;
  left: 50%;
  bottom: 11%;
  z-index: 5;
  width: max-content;
  max-width: 86vw;
  transform: translateX(-50%);
  text-align: center;
  pointer-events: none;
  transition: opacity 0.4s ease;
}

.cap-cn {
  margin: 0;
  padding-left: 0.34em;
  font-size: 34px;
  font-weight: 300;
  line-height: 1.08;
  letter-spacing: 0.34em;
  color: #eaf6ff;
  text-shadow: 0 0 30px rgba(120, 190, 255, 0.5);
}

.cap-en {
  margin: 8px 0 0;
  padding-left: 0.56em;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.56em;
  color: rgba(190, 222, 245, 0.62);
}

.cap-meta {
  margin: 6px 0 0;
  padding-left: 0.2em;
  font-size: 9.5px;
  letter-spacing: 0.2em;
  color: rgba(150, 190, 220, 0.4);
}

.cap-enter-active,
.cap-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.22, 0.68, 0.2, 1);
}

.cap-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.cap-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ============================ 左下操作提示 ============================ */
.hints {
  position: absolute;
  left: 34px;
  bottom: 26px;
  z-index: 5;
  pointer-events: none;
  transition: opacity 0.4s ease;
}

.hints p {
  margin: 0;
  font-size: 9.5px;
  line-height: 1.85;
  letter-spacing: 0.1em;
  color: rgba(140, 175, 205, 0.38);
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.65);
}

.hints p.dim {
  color: rgba(120, 155, 185, 0.26);
}

.hints .gap {
  margin-right: 26px;
}

/* ============================ 右下摄像头预览 ============================ */
.cam-card {
  position: absolute;
  right: 34px;
  bottom: 26px;
  z-index: 5;
  width: 152px;
  padding: 6px;
  border-radius: 12px;
  background: rgba(6, 14, 26, 0.62);
  border: 1px solid rgba(120, 190, 255, 0.16);
  backdrop-filter: blur(10px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
  transition: opacity 0.4s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.cam-card.detected {
  border-color: rgba(120, 190, 255, 0.38);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45), 0 0 24px rgba(90, 170, 255, 0.14);
}

.cam-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 9px;
  overflow: hidden;
  background: #04090f;
  border: 1px solid rgba(120, 190, 255, 0.08);
}

/* 关键：摄像头画面镜像 */
.cam-video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleX(-1);
  background: #04090f;
}

.cam-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  pointer-events: none;
}

.cam-stop {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 18px;
  height: 18px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-size: 12px;
  line-height: 1;
  color: rgba(200, 225, 245, 0.55);
  background: rgba(4, 10, 18, 0.55);
  border: 1px solid rgba(120, 170, 210, 0.14);
  opacity: 0;
  transition: opacity 0.2s ease, color 0.2s ease;
}

.cam-card:hover .cam-stop {
  opacity: 1;
}

.cam-stop:hover {
  color: #ffffff;
}

.cam-foot {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 4px 2px;
  font-size: 9px;
  letter-spacing: 0.12em;
  color: rgba(170, 205, 232, 0.55);
}

.cam-foot .fps {
  margin-left: auto;
  color: rgba(190, 220, 245, 0.62);
}

.dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #3d5566;
}

.dot.on {
  background: #63f0c2;
  box-shadow: 0 0 8px rgba(99, 240, 194, 0.9);
}

/* ============================ HUD 显隐 ============================ */
.app.hud-hidden .rail,
.app.hud-hidden .caption,
.app.hud-hidden .hints,
.app.hud-hidden .cam-card,
.app.gate-open .rail,
.app.gate-open .caption,
.app.gate-open .hints,
.app.gate-open .cam-card {
  opacity: 0;
  pointer-events: none;
}

/* ============================ 权限 / 状态遮罩 ============================ */
.gate {
  position: absolute;
  inset: 0;
  z-index: 20;
  display: grid;
  place-items: center;
  padding: 24px;
  background:
    radial-gradient(58% 50% at 50% 42%, rgba(12, 30, 56, 0.32), rgba(3, 6, 12, 0.82) 76%),
    rgba(3, 6, 12, 0.6);
  backdrop-filter: blur(2px) saturate(1.05);
}

.gate-inner {
  width: min(560px, 92vw);
  text-align: center;
}

.gate-eyebrow {
  margin: 0 0 18px;
  padding-left: 0.42em;
  font-size: 9.5px;
  letter-spacing: 0.42em;
  color: rgba(150, 190, 220, 0.4);
}

.gate-title {
  margin: 0;
  padding-left: 0.34em;
  font-size: 30px;
  font-weight: 300;
  letter-spacing: 0.34em;
  color: #eaf6ff;
  text-shadow: 0 0 34px rgba(120, 190, 255, 0.45);
}

.gate-inner.error .gate-title {
  color: #ffe8e0;
  text-shadow: 0 0 30px rgba(255, 120, 90, 0.32);
}

.gate-sub {
  margin: 9px 0 0;
  padding-left: 0.24em;
  font-size: 9.5px;
  letter-spacing: 0.24em;
  color: rgba(150, 190, 220, 0.45);
}

.gate-rule {
  display: block;
  width: 120px;
  height: 1px;
  margin: 22px auto 20px;
  background: linear-gradient(90deg, rgba(120, 170, 210, 0), rgba(120, 170, 210, 0.45), rgba(120, 170, 210, 0));
}

.gate-status {
  margin: 0 0 10px;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: rgba(255, 188, 158, 0.85);
}

.gate-desc {
  margin: 0 auto;
  max-width: 470px;
  font-size: 12.5px;
  line-height: 1.95;
  letter-spacing: 0.04em;
  color: rgba(178, 212, 236, 0.78);
}

.gate-gestures {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 10px;
  margin-top: 20px;
}

.gate-gestures span {
  padding: 5px 11px;
  border-radius: 999px;
  border: 1px solid rgba(120, 170, 210, 0.14);
  background: rgba(8, 18, 32, 0.4);
  font-size: 9.5px;
  letter-spacing: 0.14em;
  color: rgba(170, 205, 232, 0.55);
}

.gate-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 26px;
  font-size: 11px;
  letter-spacing: 0.1em;
  color: rgba(160, 205, 235, 0.7);
}

.spinner {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1.5px solid rgba(120, 190, 255, 0.18);
  border-top-color: #7fd6ff;
  animation: spin 0.9s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.gate-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 28px;
}

.gate-btn {
  padding: 11px 26px;
  border-radius: 999px;
  font-size: 12px;
  letter-spacing: 0.14em;
  transition: color 0.22s ease, background 0.22s ease, border-color 0.22s ease,
    box-shadow 0.22s ease, transform 0.22s ease;
}

.gate-btn.primary {
  color: #04121c;
  background: linear-gradient(135deg, #c9f4ff, #7fd6ff 52%, #4a9fe0);
  box-shadow: 0 10px 30px rgba(80, 170, 240, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.gate-btn.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 36px rgba(80, 170, 240, 0.4);
}

.gate-btn.ghost {
  color: rgba(178, 212, 236, 0.7);
  border: 1px solid rgba(120, 170, 210, 0.18);
  background: rgba(8, 18, 32, 0.4);
}

.gate-btn.ghost:hover {
  color: #eaf6ff;
  border-color: rgba(120, 190, 255, 0.4);
  background: rgba(16, 36, 60, 0.5);
}

.gate-note {
  margin: 18px auto 0;
  max-width: 440px;
  font-size: 10.5px;
  line-height: 1.8;
  color: rgba(150, 190, 215, 0.5);
}

/* ============================ 窄屏适配 ============================ */
@media (max-width: 1180px) {
  .rail {
    left: 22px;
    top: 76px;
    transform: scale(0.92);
    transform-origin: top left;
  }
  .hints {
    left: 22px;
    bottom: 18px;
  }
  .hints .gap {
    margin-right: 16px;
  }
  .cam-card {
    right: 22px;
    bottom: 18px;
    width: 132px;
  }
  .top-actions {
    right: 22px;
  }
  .cap-cn {
    font-size: 26px;
  }
}

@media (max-width: 760px) {
  .rail {
    display: none;
  }
  .hints p.dim {
    display: none;
  }
  .cap-cn {
    font-size: 22px;
  }
  .cap-en {
    letter-spacing: 0.34em;
  }
}
</style>
