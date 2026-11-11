<script setup lang="ts">
/**
 * ParticleEarth.vue
 * ---------------------------------------------------------------------------
 * 深空制图仪 · 手势地球（第一号）
 *   - 点阵地球：经纬规则排列的粒子，陆地亮白 / 海洋深蓝 / 夜面金色城市灯
 *   - 深空构图：左上太阳、右下点阵月球、倾斜暗环、蓝色边缘辉光、星野与流星
 *   - 城市网络：重点城市金色光点、中英标签、从焦点城市放射的蓝白光弧
 *   - 双模式：chart（点阵制图） / meteor（流星雨，深蓝高光实体球 + 云层 + 强辉光）
 *   - 交互：MediaPipe 隔空手势（捏合缩放 / 平移旋转 / 握拳流星雨 / 张开制图），
 *           同时支持鼠标拖拽、滚轮、键盘
 * ---------------------------------------------------------------------------
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { CITIES, FEATURED, cityDir, findCityIndex } from '../three/cities'

interface PalmPoint {
  x: number
  y: number
}

type Mode = 'chart' | 'meteor'

export interface CityCaption {
  cn: string
  en: string
  tag: string
  lon: number
  lat: number
  index: number
}

export interface Telemetry {
  mode: Mode
  modeCn: string
  modeEn: string
  city: CityCaption | null
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

/** public 下资源转成带 base 的 URL（GitHub Pages 子路径部署兼容） */
function texUrl(p: string): string {
  return import.meta.env.BASE_URL + p.replace(/^\//, '')
}

const props = defineProps<{
  pinch: number
  spread: number
  palm: PalmPoint
  palmVel: PalmPoint
  detected: boolean
}>()

const emit = defineEmits<{ (e: 'telemetry', payload: Telemetry): void }>()

const canvasRef = ref<HTMLCanvasElement | null>(null)
const webglError = ref('')

/* ============================ 常量 ============================ */
const DEG = Math.PI / 180
const EARTH_R = 1
const FOV = 42
const DIST_DEFAULT = 4.9
const DIST_MIN = 3.0
const DIST_MAX = 6.6
const CITY_DWELL = 9.5
const DOT_ROWS = 158
const STAR_COUNT = 5600

const C = {
  background: 0x04070e,
  land: 0xdfeeff,
  ocean: 0x143a5c,
  city: 0xffc46b,
  rim: 0x4aa8ff,
  arc: 0x9adcff,
  ringBand: 0x050b16,
  ringEdge: 0x5fa8e8,
  sun: 0xfff3d6,
  moon: 0x9aa4b4,
}

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v))
const damp = (cur: number, target: number, lambda: number, dt: number) =>
  cur + (target - cur) * (1 - Math.exp(-lambda * dt))
const normDeg = (v: number) => ((((v + 180) % 360) + 360) % 360) - 180

/* ============================ 纹理工具 ============================ */
function makeRadialTexture(size: number, stops: Array<[number, string]>): THREE.Texture {
  const cv = document.createElement('canvas')
  cv.width = cv.height = size
  const ctx = cv.getContext('2d')!
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  for (const [o, c] of stops) g.addColorStop(o, c)
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(cv)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.needsUpdate = true
  return tex
}

function makeStarSprite(): THREE.Texture {
  return makeRadialTexture(96, [
    [0, 'rgba(255,255,255,1)'],
    [0.16, 'rgba(214,238,255,0.9)'],
    [0.4, 'rgba(150,205,255,0.22)'],
    [1, 'rgba(120,180,255,0)'],
  ])
}

function makeSunTexture(): THREE.Texture {
  return makeRadialTexture(512, [
    [0, 'rgba(255,255,255,1)'],
    [0.06, 'rgba(255,252,240,0.99)'],
    [0.12, 'rgba(255,244,214,0.82)'],
    [0.22, 'rgba(255,231,188,0.35)'],
    [0.4, 'rgba(255,216,160,0.12)'],
    [0.7, 'rgba(255,206,150,0.03)'],
    [1, 'rgba(255,200,140,0)'],
  ])
}

function makeCityTexture(): THREE.Texture {
  return makeRadialTexture(128, [
    [0, 'rgba(255,255,255,1)'],
    [0.09, 'rgba(255,248,232,0.97)'],
    [0.2, 'rgba(255,214,150,0.42)'],
    [0.46, 'rgba(255,184,100,0.09)'],
    [1, 'rgba(255,170,80,0)'],
  ])
}

function makeLabelTexture(cn: string, en: string): THREE.Texture {
  const W = 640
  const H = 112
  const cv = document.createElement('canvas')
  cv.width = W
  cv.height = H
  const ctx = cv.getContext('2d')!
  ctx.clearRect(0, 0, W, H)
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'center'
  try {
    // 现代 Chromium 支持 canvas letterSpacing
    ;(ctx as unknown as { letterSpacing: string }).letterSpacing = '10px'
  } catch {
    /* ignore */
  }
  ctx.font = '500 44px "HarmonyOS Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
  ctx.shadowColor = 'rgba(110,190,255,0.9)'
  ctx.shadowBlur = 14
  ctx.fillStyle = 'rgba(226,244,255,0.96)'
  ctx.fillText(cn + '  ' + en, W / 2, H / 2)
  const tex = new THREE.CanvasTexture(cv)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.needsUpdate = true
  return tex
}

function makeMoonTexture(w = 512): THREE.CanvasTexture {
  const h = w / 2
  const cv = document.createElement('canvas')
  cv.width = w
  cv.height = h
  const ctx = cv.getContext('2d')!
  ctx.fillStyle = '#8e98a8'
  ctx.fillRect(0, 0, w, h)
  // 大块明暗（月海）
  for (let i = 0; i < 26; i++) {
    const x = Math.random() * w
    const y = Math.random() * h
    const r = (0.05 + Math.random() * 0.16) * w
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    g.addColorStop(0, 'rgba(70,78,92,0.35)')
    g.addColorStop(1, 'rgba(70,78,92,0)')
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }
  // 撞击坑
  for (let i = 0; i < 190; i++) {
    const x = Math.random() * w
    const y = Math.random() * h
    const r = 1 + Math.pow(Math.random(), 3) * 12
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    g.addColorStop(0, 'rgba(52,58,70,0.55)')
    g.addColorStop(0.7, 'rgba(120,128,142,0.35)')
    g.addColorStop(1, 'rgba(190,198,210,0.12)')
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }
  // 细噪点
  const img = ctx.getImageData(0, 0, w, h)
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 16
    img.data[i] = clamp(img.data[i] + n, 0, 255)
    img.data[i + 1] = clamp(img.data[i + 1] + n, 0, 255)
    img.data[i + 2] = clamp(img.data[i + 2] + n, 0, 255)
  }
  ctx.putImageData(img, 0, 0)
  const tex = new THREE.CanvasTexture(cv)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.needsUpdate = true
  return tex
}

function makeCloudTexture(w = 1024, h = 512): THREE.CanvasTexture {
  const cv = document.createElement('canvas')
  cv.width = w
  cv.height = h
  const ctx = cv.getContext('2d')!
  const img = ctx.createImageData(w, h)
  const hash = (x: number, y: number) => {
    const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453
    return s - Math.floor(s)
  }
  const smooth = (t: number) => t * t * (3 - 2 * t)
  const vnoise = (x: number, y: number) => {
    const x0 = Math.floor(x)
    const y0 = Math.floor(y)
    const fx = smooth(x - x0)
    const fy = smooth(y - y0)
    const a = hash(x0, y0)
    const b = hash(x0 + 1, y0)
    const c = hash(x0, y0 + 1)
    const d = hash(x0 + 1, y0 + 1)
    return a * (1 - fx) * (1 - fy) + b * fx * (1 - fy) + c * (1 - fx) * fy + d * fx * fy
  }
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const u = x / w
      const v = y / h
      let n = 0
      n += vnoise(u * 5, v * 5) * 0.55
      n += vnoise(u * 11, v * 11) * 0.27
      n += vnoise(u * 23, v * 23) * 0.12
      n += vnoise(u * 47, v * 47) * 0.06
      const polar = 1 - Math.pow(Math.abs(v - 0.5) * 2, 3) * 0.4
      n *= polar
      n = Math.pow(n, 1.55)
      const alpha = Math.round(clamp(n * 1.5, 0, 1) * 255)
      const i = (y * w + x) * 4
      img.data[i] = 255
      img.data[i + 1] = 255
      img.data[i + 2] = 255
      img.data[i + 3] = alpha
    }
  }
  ctx.putImageData(img, 0, 0)
  const tex = new THREE.CanvasTexture(cv)
  tex.needsUpdate = true
  return tex
}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('图片加载失败：' + url))
    img.src = url
  })
}

async function loadSampler(url: string, w = 1024, h = 512): Promise<ImageData | null> {
  try {
    const img = await loadImage(url)
    const cv = document.createElement('canvas')
    cv.width = w
    cv.height = h
    const ctx = cv.getContext('2d', { willReadFrequently: true })!
    ctx.drawImage(img, 0, 0, w, h)
    return ctx.getImageData(0, 0, w, h)
  } catch (err) {
    console.warn('[earth] 采样贴图加载失败', url, err)
    return null
  }
}

function sampleLum(data: ImageData | null, u: number, v: number): number {
  if (!data) return 0
  const x = clamp(Math.floor(u * data.width), 0, data.width - 1)
  const y = clamp(Math.floor(v * data.height), 0, data.height - 1)
  const i = (y * data.width + x) * 4
  return (data.data[i] * 0.299 + data.data[i + 1] * 0.587 + data.data[i + 2] * 0.114) / 255
}

/* ============================ 场景状态 ============================ */
let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let composer: EffectComposer | null = null
let bloom: UnrealBloomPass | null = null
let clock: THREE.Clock
let raf = 0
let disposed = false

let dotsMat: THREE.ShaderMaterial | null = null
let glossyMat: THREE.ShaderMaterial | null = null
let cloudMat: THREE.MeshBasicMaterial | null = null
let atmosMat: THREE.ShaderMaterial | null = null
let ringMat: THREE.ShaderMaterial | null = null
let haloMat: THREE.SpriteMaterial | null = null
let cityGroup: THREE.Group | null = null
let labelGroup: THREE.Group | null = null
let arcGroup: THREE.Group | null = null
let citySprites: THREE.Sprite[] = []
let labelSprites: Array<{ sprite: THREE.Sprite; dir: THREE.Vector3 }> = []
let arcObjs: THREE.Line[] = []
let arcCurves: THREE.CatmullRomCurve3[] = []
let pulseSprites: THREE.Sprite[] = []
let meteors: Array<{ head: THREE.Vector3; dir: THREE.Vector3; len: number; speed: number; t: number; life: number }> = []
let meteorGeo: THREE.BufferGeometry | null = null
let meteorPos: Float32Array | null = null
let meteorCol: Float32Array | null = null
let sunSprite: THREE.Sprite | null = null
let moonGroup: THREE.Group | null = null
let starsMat: THREE.ShaderMaterial | null = null
let keyLight: THREE.DirectionalLight | null = null

const sunDirWorld = new THREE.Vector3(-0.62, 0.5, 0.6).normalize()
const tmpV = new THREE.Vector3()
const tmpCamDir = new THREE.Vector3()

/* ============================ 相机与交互状态 ============================ */
let camAz = 0
let camEl = 0
let camDist = DIST_DEFAULT
let azTarget = 0
let elTarget = 0
let distTarget = DIST_DEFAULT

let mode: Mode = 'chart'
let modeMix = 0
let modeTarget = 0

let focusIndex = 0
let focusTimer = 0
let lastInputAt = 0
let demoMode = true

let spreadLowTimer = 0
let spreadHighTimer = 0

let dragging = false
let dragX = 0
let dragY = 0

let fpsAvg = 60
let frameCount = 0
let fpsTimer = 0
let telemetryTimer = 0
let elapsed = 0

/* ============================ 构建：点阵地球 ============================ */
function buildDotEarth(water: ImageData | null, night: ImageData | null) {
  const rows = DOT_ROWS
  const positions: number[] = []
  const lands: number[] = []
  const nights: number[] = []
  const seeds: number[] = []

  for (let i = 0; i < rows; i++) {
    const lat = -90 + ((i + 0.5) * 180) / rows
    const v = 0.5 - lat / 180
    const r = Math.cos(lat * DEG)
    const y = Math.sin(lat * DEG)
    const cols = Math.max(3, Math.round(rows * 2 * r))
    for (let j = 0; j < cols; j++) {
      const u = j / cols
      const phi = u * Math.PI * 2
      positions.push(r * Math.sin(phi) * EARTH_R, y * EARTH_R, r * Math.cos(phi) * EARTH_R)
      const wl = sampleLum(water, u, v)
      const land = clamp(1 - wl, 0, 1)
      lands.push(land > 0.55 ? 1 : land < 0.42 ? 0 : (land - 0.42) / 0.13)
      const nl = sampleLum(night, u, v)
      nights.push(nl > 0.055 ? clamp((nl - 0.055) * 2.4, 0, 1) : 0)
      seeds.push(Math.random())
    }
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geo.setAttribute('aLand', new THREE.Float32BufferAttribute(lands, 1))
  geo.setAttribute('aNight', new THREE.Float32BufferAttribute(nights, 1))
  geo.setAttribute('aSeed', new THREE.Float32BufferAttribute(seeds, 1))

  dotsMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    depthTest: true,
    uniforms: {
      uSunDir: { value: sunDirWorld.clone() },
      uPointScale: { value: 1000 },
      uPointSize: { value: 0.0116 },
      uTime: { value: 0 },
      uOpacity: { value: 1 },
      uLandColor: { value: new THREE.Color(C.land) },
      uOceanColor: { value: new THREE.Color(C.ocean) },
      uCityColor: { value: new THREE.Color(C.city) },
      uRimColor: { value: new THREE.Color(C.rim) },
    },
    vertexShader: /* glsl */ `
      uniform vec3 uSunDir;
      uniform float uPointScale;
      uniform float uPointSize;
      uniform float uOpacity;
      attribute float aLand;
      attribute float aNight;
      attribute float aSeed;
      varying float vLand;
      varying float vNight;
      varying float vDay;
      varying float vRim;
      varying float vSeed;
      varying float vFade;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        vec3 n = normalize(position);
        float d = dot(n, uSunDir);
        float day = smoothstep(-0.18, 0.42, d);
        float night = 1.0 - smoothstep(-0.05, 0.45, d);
        vec3 vn = normalize(normalMatrix * n);
        float rim = pow(1.0 - abs(vn.z), 2.2);
        float size = uPointSize * (0.78 + 0.5 * aSeed);
        gl_PointSize = size * uPointScale / max(-mv.z, 0.001);
        vLand = aLand;
        vNight = aNight * night;
        vDay = day;
        vRim = rim;
        vSeed = aSeed;
        vFade = uOpacity;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uLandColor;
      uniform vec3 uOceanColor;
      uniform vec3 uCityColor;
      uniform vec3 uRimColor;
      uniform float uTime;
      varying float vLand;
      varying float vNight;
      varying float vDay;
      varying float vRim;
      varying float vSeed;
      varying float vFade;
      void main() {
        vec2 p = gl_PointCoord - 0.5;
        float d = length(p);
        if (d > 0.5) discard;
        float core = smoothstep(0.5, 0.10, d);
        float twinkle = 0.86 + 0.14 * sin(uTime * 1.6 + vSeed * 31.0);
        vec3 landC = uLandColor * (0.22 + 1.02 * vDay);
        vec3 oceanC = uOceanColor * (0.42 + 0.85 * vDay);
        vec3 col = mix(oceanC, landC, vLand);
        col += uCityColor * vNight * 1.7;
        col += uRimColor * vRim * 0.4;
        float alpha = core * vFade * twinkle;
        if (alpha < 0.004) discard;
        gl_FragColor = vec4(col, alpha);
      }
    `,
  })
  const points = new THREE.Points(geo, dotsMat)
  points.renderOrder = 12
  points.frustumCulled = false
  return points
}

/* ============================ 构建：实体高光地球（流星雨模式） ============================ */
function buildGlossyEarth(
  dayTex: THREE.Texture | null,
  nightTex: THREE.Texture | null,
  cloudTex: THREE.Texture,
  waterTex: THREE.Texture | null,
) {
  glossyMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: true,
    uniforms: {
      uDay: { value: dayTex },
      uNight: { value: nightTex },
      uClouds: { value: cloudTex },
      uWater: { value: waterTex },
      uSunDir: { value: sunDirWorld.clone() },
      uOpacity: { value: 0 },
      uTime: { value: 0 },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      varying vec3 vWorldN;
      varying vec3 vViewN;
      varying vec3 vViewDir;
      void main() {
        vUv = uv;
        vWorldN = normalize(mat3(modelMatrix) * normal);
        vViewN = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vViewDir = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D uDay;
      uniform sampler2D uNight;
      uniform sampler2D uClouds;
      uniform sampler2D uWater;
      uniform vec3 uSunDir;
      uniform float uOpacity;
      uniform float uTime;
      varying vec2 vUv;
      varying vec3 vWorldN;
      varying vec3 vViewN;
      varying vec3 vViewDir;
      void main() {
        if (uOpacity < 0.01) discard;
        vec3 n = normalize(vWorldN);
        float d = dot(n, uSunDir);
        float day = smoothstep(-0.25, 0.55, d);
        float fres = pow(1.0 - clamp(dot(normalize(vViewN), normalize(vViewDir)), 0.0, 1.0), 2.6);
        vec3 dayRgb = texture2D(uDay, vUv).rgb;
        float dlum = dot(dayRgb, vec3(0.2126, 0.7152, 0.0722));
        float wl = dot(texture2D(uWater, vUv).rgb, vec3(0.299, 0.587, 0.114));
        float landM = smoothstep(0.38, 0.52, 1.0 - wl);
        vec3 oceanC = vec3(0.0016, 0.007, 0.028);
        vec3 landC = vec3(0.34, 0.47, 0.68) * (0.62 + 0.85 * dlum);
        vec3 base = mix(oceanC, landC, landM) * (0.04 + 1.0 * day);
        float nightA = texture2D(uNight, vUv).r;
        vec3 lamp = vec3(1.0, 0.56, 0.22) * pow(nightA, 0.35) * (1.0 - day) * 3.2;
        float cloudA = texture2D(uClouds, vUv + vec2(uTime * 0.0015, 0.0)).a * 0.8;
        vec3 cloud = vec3(0.52, 0.68, 0.96) * cloudA * (0.015 + 0.26 * day);
        vec3 rim = vec3(0.16, 0.42, 1.0) * fres * (0.22 + 0.70 * day);
        vec3 col = base + lamp + cloud + rim + vec3(0.003, 0.007, 0.018);
        gl_FragColor = vec4(col, uOpacity);
      }
    `,
  })
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(EARTH_R * 0.998, 96, 64), glossyMat)
  mesh.renderOrder = 10
  return mesh
}

/* ============================ 构建：云层壳 ============================ */
function buildCloudShell(cloudTex: THREE.Texture) {
  cloudMat = new THREE.MeshBasicMaterial({
    map: cloudTex,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    color: new THREE.Color(0xbfe4ff),
  })
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(EARTH_R * 1.012, 64, 48), cloudMat)
  mesh.renderOrder = 11
  return mesh
}

/* ============================ 构建：大气辉光 ============================ */
function buildAtmosphere() {
  atmosMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uColor: { value: new THREE.Color(0x3f9bff) },
      uOpacity: { value: 1 },
    },
    vertexShader: /* glsl */ `
      varying float vI;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vec3 n = normalize(normalMatrix * normal);
        vec3 vd = normalize(-mv.xyz);
        vI = pow(1.0 - abs(dot(n, vd)), 3.1);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vI;
      void main() {
        float a = vI * uOpacity;
        if (a < 0.002) discard;
        gl_FragColor = vec4(uColor * vI * 1.9, a * 0.95);
      }
    `,
  })
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(EARTH_R * 1.06, 72, 48), atmosMat)
  mesh.renderOrder = 20
  return mesh
}

/* ============================ 构建：星野 ============================ */
function buildStars(): THREE.Points {
  const count = STAR_COUNT
  const pos = new Float32Array(count * 3)
  const col = new Float32Array(count * 3)
  const size = new Float32Array(count)
  const seed = new Float32Array(count)
  const palette = [new THREE.Color(0xffffff), new THREE.Color(0xcfe4ff), new THREE.Color(0xffe9c8), new THREE.Color(0x9fc4ff)]
  for (let i = 0; i < count; i++) {
    // 均匀球壳 + 轻微聚团
    const u = Math.random() * 2 - 1
    const th = Math.random() * Math.PI * 2
    const r = Math.sqrt(1 - u * u)
    const rad = 34 + Math.random() * 12
    pos[i * 3] = Math.cos(th) * r * rad
    pos[i * 3 + 1] = u * rad
    pos[i * 3 + 2] = Math.sin(th) * r * rad
    const c = palette[Math.floor(Math.random() * palette.length)]
    col[i * 3] = c.r
    col[i * 3 + 1] = c.g
    col[i * 3 + 2] = c.b
    size[i] = 0.7 + Math.pow(Math.random(), 2.4) * 2.6
    seed[i] = Math.random()
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  geo.setAttribute('aColor', new THREE.BufferAttribute(col, 3))
  geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1))
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1))
  starsMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uPixelRatio: { value: 1 },
      uTime: { value: 0 },
      uOpacity: { value: 1 },
    },
    vertexShader: /* glsl */ `
      attribute vec3 aColor;
      attribute float aSize;
      attribute float aSeed;
      uniform float uPixelRatio;
      uniform float uTime;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = aSize * uPixelRatio * 1.4;
        vColor = aColor;
        float tw = 0.72 + 0.28 * sin(uTime * (0.6 + aSeed * 1.4) + aSeed * 42.0);
        vAlpha = tw;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uOpacity;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec2 p = gl_PointCoord - 0.5;
        float d = length(p) * 2.0;
        if (d > 1.0) discard;
        float a = pow(1.0 - d, 2.2) * vAlpha * uOpacity;
        gl_FragColor = vec4(vColor, a);
      }
    `,
  })
  const points = new THREE.Points(geo, starsMat)
  points.renderOrder = 0
  return points
}

/* ============================ 构建：太阳 / 月球 / 暗环 / 辉光 ============================ */
function buildSun(): THREE.Sprite {
  const tex = makeSunTexture()
  haloMat = null
  const mat = new THREE.SpriteMaterial({
    map: tex,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    blending: THREE.AdditiveBlending,
    color: 0xfffbef,
    opacity: 1,
  })
  const sp = new THREE.Sprite(mat)
  sp.scale.setScalar(0.62)
  sp.renderOrder = 30
  return sp
}

function buildMoon(): THREE.Group {
  const g = new THREE.Group()
  const tex = makeMoonTexture(512)
  const mat = new THREE.MeshStandardMaterial({
    map: tex,
    roughness: 0.92,
    metalness: 0.02,
    bumpMap: tex,
    bumpScale: 0.6,
    color: 0xb9c2d2,
  })
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.28, 48, 32), mat)
  mesh.renderOrder = 25
  g.add(mesh)
  const glow = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: makeStarSprite(),
      color: 0xcfe2ff,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  )
  glow.scale.setScalar(1.1)
  g.add(glow)
  return g
}

function buildRing() {
  const geo = new THREE.RingGeometry(1.62, 2.36, 220, 1)
  ringMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    uniforms: {
      uInner: { value: 1.62 },
      uOuter: { value: 2.36 },
      uColor: { value: new THREE.Color(C.ringBand) },
      uEdgeColor: { value: new THREE.Color(C.ringEdge) },
      uOpacity: { value: 1 },
    },
    vertexShader: /* glsl */ `
      varying float vR;
      void main() {
        vR = length(position.xy);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uInner;
      uniform float uOuter;
      uniform vec3 uColor;
      uniform vec3 uEdgeColor;
      uniform float uOpacity;
      varying float vR;
      void main() {
        float t = clamp((vR - uInner) / (uOuter - uInner), 0.0, 1.0);
        float innerFade = smoothstep(0.0, 0.08, t);
        float outerFade = 1.0 - smoothstep(0.86, 1.0, t);
        float grain = 0.85 + 0.15 * sin(vR * 120.0);
        float a = 0.26 * innerFade * outerFade * grain;
        vec3 col = mix(uColor, uColor * 2.2, smoothstep(0.35, 1.0, t));
        float edgeOut = exp(-pow((t - 1.0) / 0.03, 2.0));
        float edgeIn = exp(-pow((t - 0.015) / 0.025, 2.0));
        col += uEdgeColor * (edgeOut * 0.7 + edgeIn * 0.28);
        a += edgeOut * 0.38 * innerFade + edgeIn * 0.12;
        gl_FragColor = vec4(col, a * uOpacity);
      }
    `,
  })
  const mesh = new THREE.Mesh(geo, ringMat)
  mesh.renderOrder = 1
  return mesh
}

function buildHalo(): THREE.Sprite {
  const mat = new THREE.SpriteMaterial({
    map: makeRadialTexture(256, [
      [0, 'rgba(70,150,255,0.05)'],
      [0.3, 'rgba(60,130,235,0.09)'],
      [0.5, 'rgba(45,105,205,0.10)'],
      [0.72, 'rgba(30,80,170,0.04)'],
      [1, 'rgba(20,60,140,0)'],
    ]),
    transparent: true,
    depthWrite: false,
    depthTest: true,
    blending: THREE.AdditiveBlending,
    opacity: 0.9,
  })
  haloMat = mat
  const sp = new THREE.Sprite(mat)
  sp.scale.setScalar(3.0)
  sp.renderOrder = -1
  return sp
}

/* ============================ 构建：城市 / 标签 / 弧线 ============================ */
function buildCities() {
  cityGroup = new THREE.Group()
  const tex = makeCityTexture()
  for (let i = 0; i < CITIES.length; i++) {
    const c = CITIES[i]
    const dir = new THREE.Vector3(...cityDir(c))
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
      color: new THREE.Color(c.major ? 0xfff6e2 : 0xffd9a6),
      opacity: 0,
    })
    const sp = new THREE.Sprite(mat)
    const size = c.major ? 0.062 : 0.04
    sp.scale.setScalar(size)
    sp.position.copy(dir).multiplyScalar(1.004)
    sp.renderOrder = 13
    sp.userData.dir = dir
    cityGroup.add(sp)
    citySprites.push(sp)
  }
}

function buildLabels() {
  labelGroup = new THREE.Group()
  for (const idx of FEATURED) {
    const c = CITIES[idx]
    const dir = new THREE.Vector3(...cityDir(c))
    const tex = makeLabelTexture(c.cn, c.en)
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      opacity: 0,
    })
    const sp = new THREE.Sprite(mat)
    sp.scale.set(0.44, 0.077, 1)
    sp.position.copy(dir).multiplyScalar(1.035)
    sp.renderOrder = 14
    labelGroup.add(sp)
    labelSprites.push({ sprite: sp, dir: dir.clone() })
  }
}

function arcPoints(a: THREE.Vector3, b: THREE.Vector3, segs = 64): THREE.Vector3[] {
  const axis = new THREE.Vector3().crossVectors(a, b)
  if (axis.lengthSq() < 1e-8) axis.set(0, 1, 0)
  axis.normalize()
  const ang = a.angleTo(b)
  const lift = Math.min(0.165, 0.05 + ang * 0.13)
  const out: THREE.Vector3[] = []
  for (let i = 0; i <= segs; i++) {
    const t = i / segs
    const p = a.clone().applyAxisAngle(axis, ang * t)
    p.multiplyScalar(1 + Math.sin(Math.PI * t) * lift)
    out.push(p)
  }
  return out
}

function disposeGroup(g: THREE.Group | null) {
  if (!g) return
  g.traverse((obj) => {
    const anyObj = obj as THREE.Mesh
    if (anyObj.geometry) anyObj.geometry.dispose()
    const mat = (obj as THREE.Mesh).material as THREE.Material | THREE.Material[] | undefined
    if (Array.isArray(mat)) mat.forEach((m) => m.dispose())
    else if (mat) mat.dispose()
  })
  g.clear()
}

function rebuildArcs() {
  if (!arcGroup) return
  disposeGroup(arcGroup)
  arcCurves = []
  arcObjs = []
  pulseSprites = []
  const focusCity = CITIES[FEATURED[focusIndex]]
  if (!focusCity) return
  const from = new THREE.Vector3(...cityDir(focusCity))
  const focusIdx = FEATURED[focusIndex]
  const ranked = CITIES.map((c, i) => ({ i, d: from.angleTo(new THREE.Vector3(...cityDir(c))) }))
    .filter((o) => o.i !== focusIdx)
    .sort((a, b) => a.d - b.d)
  const targets: number[] = []
  for (const fi of FEATURED) {
    if (fi !== focusIdx && !targets.includes(fi)) targets.push(fi)
  }
  for (const o of ranked) {
    if (targets.length >= 20) break
    if (!targets.includes(o.i)) targets.push(o.i)
  }
  const baseColor = new THREE.Color(C.arc)
  const pulseTex = makeCityTexture()

  for (const idx of targets) {
    const c = CITIES[idx]
    const to = new THREE.Vector3(...cityDir(c))
    const pts = arcPoints(from, to)
    const pos: number[] = []
    const col: number[] = []
    for (let i = 0; i < pts.length; i++) {
      const t = i / (pts.length - 1)
      const fade = Math.pow(Math.sin(Math.PI * t), 0.6) * 0.9 + 0.08
      pos.push(pts[i].x, pts[i].y, pts[i].z)
      col.push(baseColor.r * fade, baseColor.g * fade, baseColor.b * fade)
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3))
    const mat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const line = new THREE.Line(geo, mat)
    line.renderOrder = 15
    line.userData.targetDir = to.clone()
    arcGroup.add(line)
    arcObjs.push(line)
    arcCurves.push(new THREE.CatmullRomCurve3(pts))

    const pulse = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: pulseTex,
        color: 0xd6f2ff,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    )
    pulse.scale.setScalar(0.035)
    pulse.renderOrder = 16
    pulse.userData.t = Math.random()
    pulse.userData.speed = 0.18 + Math.random() * 0.22
    arcGroup.add(pulse)
    pulseSprites.push(pulse)
  }
}

/* ============================ 构建：流星 ============================ */
const METEOR_MAX = 26
let meteorLines: THREE.LineSegments | null = null
let meteorTimer = 0

function buildMeteors(): THREE.LineSegments {
  meteorPos = new Float32Array(METEOR_MAX * 2 * 3)
  meteorCol = new Float32Array(METEOR_MAX * 2 * 3)
  meteorGeo = new THREE.BufferGeometry()
  meteorGeo.setAttribute('position', new THREE.BufferAttribute(meteorPos, 3))
  meteorGeo.setAttribute('color', new THREE.BufferAttribute(meteorCol, 3))
  const mat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    depthTest: false,
    blending: THREE.AdditiveBlending,
  })
  meteorLines = new THREE.LineSegments(meteorGeo, mat)
  meteorLines.frustumCulled = false
  meteorLines.renderOrder = 2
  return meteorLines
}

function spawnMeteor() {
  if (meteors.length >= METEOR_MAX) return
  const z = -10 - Math.random() * 7
  const h = 0.768 * Math.abs(z)
  const startX = (Math.random() * 2 - 1) * h * 0.9
  const startY = (Math.random() * 1.7 - 0.4) * h * 0.5
  const ang = Math.PI * (0.62 + Math.random() * 0.3)
  const dir = new THREE.Vector3(Math.cos(ang), Math.sin(ang) * 0.9, 0).normalize()
  meteors.push({
    head: new THREE.Vector3(startX, startY, z),
    dir,
    len: 0.2 + Math.random() * 0.42,
    speed: 1.4 + Math.random() * 1.6,
    t: 0,
    life: 1.4 + Math.random() * 1.2,
  })
}

function updateMeteors(dt: number) {
  if (!meteorGeo || !meteorPos || !meteorCol) return
  meteorTimer -= dt
  if (meteorTimer <= 0) {
    spawnMeteor()
    meteorTimer = 0.26 + Math.random() * 0.6 - modeMix * 0.12
  }
  for (let i = meteors.length - 1; i >= 0; i--) {
    const m = meteors[i]
    m.t += dt
    m.head.addScaledVector(m.dir, m.speed * dt)
    if (m.t > m.life) meteors.splice(i, 1)
  }
  meteorPos.fill(0)
  meteorCol.fill(0)
  for (let i = 0; i < METEOR_MAX; i++) {
    const m = meteors[i]
    if (!m) continue
    const fade = Math.sin(Math.PI * clamp(m.t / m.life, 0, 1))
    const tail = m.head.clone().addScaledVector(m.dir, -m.len)
    meteorPos[i * 6] = m.head.x
    meteorPos[i * 6 + 1] = m.head.y
    meteorPos[i * 6 + 2] = m.head.z
    meteorPos[i * 6 + 3] = tail.x
    meteorPos[i * 6 + 4] = tail.y
    meteorPos[i * 6 + 5] = tail.z
    meteorCol[i * 6] = 1.0 * fade
    meteorCol[i * 6 + 1] = 0.93 * fade
    meteorCol[i * 6 + 2] = 0.8 * fade
    meteorCol[i * 6 + 3] = 0.12 * fade
    meteorCol[i * 6 + 4] = 0.22 * fade
    meteorCol[i * 6 + 5] = 0.42 * fade
  }
  const pAttr = meteorGeo.getAttribute('position') as THREE.BufferAttribute
  const cAttr = meteorGeo.getAttribute('color') as THREE.BufferAttribute
  pAttr.needsUpdate = true
  cAttr.needsUpdate = true
  meteorGeo.setDrawRange(0, meteors.length * 2)
}

/* ============================ 资源加载 ============================ */
async function loadTex(url: string, srgb = true): Promise<THREE.Texture | null> {
  try {
    const tex = await new THREE.TextureLoader().loadAsync(url)
    tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace
    tex.anisotropy = renderer ? Math.min(8, renderer.capabilities.getMaxAnisotropy()) : 1
    tex.needsUpdate = true
    return tex
  } catch (err) {
    console.warn('[earth] 贴图加载失败', url, err)
    return null
  }
}

/* ============================ 初始化 ============================ */
const SUN_LIGHT_CAM = new THREE.Vector3(0.52, 0.46, 0.72).normalize()

async function init() {
  const canvas = canvasRef.value
  if (!canvas) return
  let r: THREE.WebGLRenderer
  try {
    r = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' })
  } catch (err) {
    console.error('[earth] WebGL 初始化失败', err)
    webglError.value = '当前浏览器无法初始化 WebGL'
    return
  }
  renderer = r
  r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  r.outputColorSpace = THREE.SRGBColorSpace
  r.toneMapping = THREE.ACESFilmicToneMapping
  r.toneMappingExposure = 1.04

  scene = new THREE.Scene()
  scene.background = new THREE.Color(C.background)

  camera = new THREE.PerspectiveCamera(FOV, 1, 0.05, 240)
  camera.position.set(0, 0, DIST_DEFAULT)
  scene.add(camera)

  clock = new THREE.Clock()

  keyLight = new THREE.DirectionalLight(0xfff3dc, 2.6)
  keyLight.position.copy(sunDirWorld).multiplyScalar(12)
  scene.add(keyLight)
  scene.add(new THREE.AmbientLight(0x22406e, 1.15))

  const [water, nightData, dayTex, nightTex, waterTex] = await Promise.all([
    loadSampler(texUrl('/textures/earth-water.png')),
    loadSampler(texUrl('/textures/earth-night.jpg')),
    loadTex(texUrl('/textures/earth-day.jpg')),
    loadTex(texUrl('/textures/earth-night.jpg')),
    loadTex(texUrl('/textures/earth-water.png'), false),
  ])
  if (disposed) return

  const cloudTex = makeCloudTexture()

  /* ---------- 地球本体（世界坐标） ---------- */
  const earthGroup = new THREE.Group()
  const body = new THREE.Mesh(
    new THREE.SphereGeometry(EARTH_R * 0.982, 64, 48),
    new THREE.MeshBasicMaterial({ color: 0x03070f }),
  )
  body.renderOrder = 9
  earthGroup.add(body)
  const glossyMesh = buildGlossyEarth(dayTex, nightTex, cloudTex, waterTex)
  const cloudShell = buildCloudShell(cloudTex)
  const atmosShell = buildAtmosphere()
  const dotMesh = buildDotEarth(water, nightData)
  earthGroup.add(glossyMesh)
  earthGroup.add(cloudShell)
  earthGroup.add(atmosShell)
  earthGroup.add(dotMesh)

  // 调试开关：?hide=clouds,atmos,dots,ring,halo,glossy
  const hideList = (new URLSearchParams(window.location.search).get('hide') ?? '').split(',').filter(Boolean)
  if (hideList.includes('clouds')) cloudShell.visible = false
  if (hideList.includes('atmos')) atmosShell.visible = false
  if (hideList.includes('dots')) dotMesh.visible = false
  if (hideList.includes('glossy')) glossyMesh.visible = false
  if (hideList.includes('cities')) { cityGroup && (cityGroup.visible = false); labelGroup && (labelGroup.visible = false) }

  buildCities()
  if (cityGroup) earthGroup.add(cityGroup)
  buildLabels()
  if (labelGroup) earthGroup.add(labelGroup)
  arcGroup = new THREE.Group()
  earthGroup.add(arcGroup)

  scene.add(earthGroup)
  const starField = buildStars()
  if (hideList.includes('stars')) starField.visible = false
  scene.add(starField)

  /* ---------- 相机空间叠加层（屏幕构图恒定） ---------- */
  sunSprite = buildSun()
  sunSprite.scale.setScalar(0.5)
  sunSprite.visible = !hideList.includes('sun')
  camera.add(sunSprite)

  moonGroup = buildMoon()
  moonGroup.scale.setScalar(0.8)
  moonGroup.visible = !hideList.includes('moon')
  camera.add(moonGroup)

  const ring = buildRing()
  if (hideList.includes('ring')) ring.visible = false
  ring.position.set(0, 0, -7)
  ring.rotation.x = 1.28
  ring.rotation.z = -0.1
  camera.add(ring)

  const halo = buildHalo()
  if (hideList.includes('halo')) halo.visible = false
  halo.scale.setScalar(4.2)
  halo.position.set(0, 0, -7.4)
  camera.add(halo)

  camera.add(buildMeteors())

  /* ---------- 后处理 ---------- */
  composer = new EffectComposer(r)
  composer.addPass(new RenderPass(scene, camera))
  bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.62, 0.5, 0.62)
  if (!hideList.includes('bloom')) composer.addPass(bloom)
  composer.addPass(new OutputPass())

  /* ---------- URL 参数与初始焦点 ---------- */
  const q = new URLSearchParams(window.location.search)
  if (q.get('mode') === 'meteor') {
    mode = 'meteor'
    modeTarget = 1
    modeMix = 1
  }
  if (q.get('demo') === '0') demoMode = false
  let startIdx = 0
  const cityKey = q.get('city')
  if (cityKey) {
    const ci = findCityIndex(cityKey)
    const fi = ci >= 0 ? FEATURED.indexOf(ci) : -1
    if (fi >= 0) startIdx = fi
  }

  resize()
  setFocus(startIdx, true)
  for (let i = 0; i < 9; i++) {
    spawnMeteor()
    const m = meteors[meteors.length - 1]
    if (m) m.t = Math.random() * 0.9
  }
  updateCameraTransform()
  emitTelemetry()
  animate()
}

/* ============================ 相机 ============================ */
function placeOverlays() {
  if (!camera) return
  const t = Math.tan(FOV * 0.5 * DEG)
  const aspect = camera.aspect || 1.6
  const toLocal = (nx: number, ny: number, z: number) =>
    new THREE.Vector3(nx * t * aspect * z, ny * t * z, -z)
  if (sunSprite) sunSprite.position.copy(toLocal(-0.68, 0.58, 2.6))
  if (moonGroup) moonGroup.position.copy(toLocal(0.66, -0.58, 5.6))
}

function updateCameraTransform() {
  if (!camera) return
  const ce = Math.cos(camEl)
  camera.position.set(
    camDist * ce * Math.sin(camAz),
    camDist * Math.sin(camEl),
    camDist * ce * Math.cos(camAz),
  )
  camera.lookAt(0, -0.04, 0)
  camera.updateMatrixWorld(true)
  sunDirWorld.copy(SUN_LIGHT_CAM).applyQuaternion(camera.quaternion).normalize()
  if (keyLight) keyLight.position.copy(sunDirWorld).multiplyScalar(12)
}

/* ============================ 焦点城市 ============================ */
function nearestAngle(cur: number, target: number): number {
  let d = (target - cur) % (Math.PI * 2)
  if (d > Math.PI) d -= Math.PI * 2
  if (d < -Math.PI) d += Math.PI * 2
  return cur + d
}

function setFocus(i: number, immediate = false) {
  const n = FEATURED.length
  if (n === 0) return
  focusIndex = ((i % n) + n) % n
  const city = CITIES[FEATURED[focusIndex]]
  if (!city) return
  const targetAz = city.lon * DEG
  const targetEl = clamp(city.lat * DEG * 0.9, -1.1, 1.1)
  if (immediate) {
    azTarget = targetAz
    camAz = targetAz
    elTarget = targetEl
    camEl = targetEl
    distTarget = DIST_DEFAULT
    camDist = DIST_DEFAULT
  } else {
    azTarget = nearestAngle(azTarget, targetAz)
    elTarget = targetEl
  }
  focusTimer = 0
  lastInputAt = performance.now()
  rebuildArcs()
}

function nextCity() {
  setFocus(focusIndex + 1)
}

function prevCity() {
  setFocus(focusIndex - 1)
}

function setMode(m: Mode) {
  mode = m
  modeTarget = m === 'meteor' ? 1 : 0
  lastInputAt = performance.now()
}

/* ============================ 交互 ============================ */
function computeGesture(): string {
  if (!props.detected) return '待启动'
  if (mode === 'meteor') return '握持'
  if (props.spread > 0.72) return '张开'
  if (props.spread < 0.34) return '握拳'
  if (Math.hypot(props.palmVel.x, props.palmVel.y) > 0.22) return '挥动'
  return '悬停'
}

function updateHandInput(dt: number) {
  if (props.detected) {
    // 捏合开合 → 远近
    distTarget = clamp(
      DIST_MAX - (props.pinch - 0.06) * (DIST_MAX - DIST_MIN) * 1.02,
      DIST_MIN,
      DIST_MAX,
    )
    const vx = props.palmVel.x
    const vy = props.palmVel.y
    if (Math.hypot(vx, vy) > 0.05) {
      azTarget -= vx * dt * 5.2
      elTarget = clamp(elTarget - vy * dt * 3.2, -1.15, 1.15)
      lastInputAt = performance.now()
    }
    spreadLowTimer = props.spread < 0.3 ? spreadLowTimer + dt : 0
    spreadHighTimer = props.spread > 0.8 ? spreadHighTimer + dt : 0
    if (spreadLowTimer > 0.28 && mode !== 'meteor') setMode('meteor')
    if (spreadHighTimer > 0.28 && mode !== 'chart') setMode('chart')
  } else {
    spreadLowTimer = 0
    spreadHighTimer = 0
  }
}

function updateFocus(dt: number) {
  if (mode !== 'chart' || !demoMode) return
  if (dragging || performance.now() - lastInputAt < 2600) {
    focusTimer = 0
    return
  }
  focusTimer += dt
  const dwell = props.detected ? CITY_DWELL : 5.2
  if (focusTimer > dwell) nextCity()
}

function updateVisuals(dt: number) {
  modeMix = damp(modeMix, modeTarget, 2.2, dt)
  const oc = 1 - modeMix

  if (dotsMat) {
    dotsMat.uniforms.uTime.value = elapsed
    dotsMat.uniforms.uOpacity.value = oc
    ;(dotsMat.uniforms.uSunDir.value as THREE.Vector3).copy(sunDirWorld)
  }
  if (glossyMat) {
    glossyMat.uniforms.uTime.value = elapsed
    glossyMat.uniforms.uOpacity.value = modeMix
    ;(glossyMat.uniforms.uSunDir.value as THREE.Vector3).copy(sunDirWorld)
  }
  if (cloudMat) cloudMat.opacity = modeMix * 0.09
  if (atmosMat) atmosMat.uniforms.uOpacity.value = 0.32 + modeMix * 1.0
  if (ringMat) ringMat.uniforms.uOpacity.value = 0.95 + modeMix * 0.45
  if (haloMat) haloMat.opacity = 0.42 + modeMix * 0.6
  if (bloom) {
    bloom.strength = 0.62 + modeMix * 0.35
    bloom.threshold = 0.62 + modeMix * 0.3
  }
  if (starsMat) {
    starsMat.uniforms.uTime.value = elapsed
    starsMat.uniforms.uOpacity.value = 0.9
  }
  if (sunSprite) {
    const s = 0.5 + Math.sin(elapsed * 1.7) * 0.01
    sunSprite.scale.setScalar(s)
  }

  if (camera) {
    tmpCamDir.copy(camera.position).normalize()
    for (const sp of citySprites) {
      const dir = sp.userData.dir as THREE.Vector3
      const facing = dir.dot(tmpCamDir)
      const mat = sp.material as THREE.SpriteMaterial
      mat.opacity = clamp((facing - 0.05) * 2.4, 0, 1) * 0.95 * oc
    }
    for (let i = 0; i < labelSprites.length; i++) {
      const item = labelSprites[i]
      const facing = item.dir.dot(tmpCamDir)
      const mat = item.sprite.material as THREE.SpriteMaterial
      // 只要正对相机、且不在左侧 HUD 面板与底部题注区域内的标签
      tmpV.copy(item.sprite.position).project(camera)
      const onScreen = tmpV.x > -0.5 && tmpV.x < 0.8 && tmpV.y > -0.6 && tmpV.y < 0.72
      const vis = facing > 0.26 && onScreen ? 1 : 0
      mat.opacity = clamp((facing - 0.26) * 3.2, 0, 1) * 0.85 * oc * vis
    }
  }
  if (arcGroup) {
    arcGroup.visible = oc > 0.02
    if (camera) tmpCamDir.copy(camera.position).normalize()
    for (const line of arcObjs) {
      const td = line.userData.targetDir as THREE.Vector3 | undefined
      const facing = td ? td.dot(tmpCamDir) : 1
      // 背面城市的弧线淡出，避免弧线从球体后面绕出来
      const vis = clamp((facing - 0.02) * 4.5, 0, 1)
      ;(line.material as THREE.LineBasicMaterial).opacity = 0.85 * oc * vis
      line.visible = vis > 0.03
    }
  }
}

function updatePulses(dt: number) {
  for (let i = 0; i < pulseSprites.length; i++) {
    const sp = pulseSprites[i]
    const curve = arcCurves[i]
    if (!curve) continue
    const t = ((sp.userData.t as number) + dt * (sp.userData.speed as number)) % 1
    sp.userData.t = t
    curve.getPointAt(t, tmpV)
    sp.position.copy(tmpV)
    const arcLine = arcObjs[i]
    const arcVisible = arcLine ? arcLine.visible : true
    ;(sp.material as THREE.SpriteMaterial).opacity =
      Math.pow(Math.sin(Math.PI * t), 1.1) * 0.9 * (1 - modeMix) * (arcVisible ? 1 : 0)
    sp.visible = arcVisible
  }
}

/* ============================ 遥测 ============================ */
function emitTelemetry() {
  const now = new Date()
  const idx = FEATURED[focusIndex] ?? 0
  const city = CITIES[idx]
  emit('telemetry', {
    mode,
    modeCn: mode === 'chart' ? '制图' : '流星雨',
    modeEn: mode === 'chart' ? 'CHART' : 'METEOR SHOWER',
    city: city
      ? { cn: city.cn, en: city.en, tag: city.tag ?? '', lon: city.lon, lat: city.lat, index: idx }
      : null,
    lon: normDeg(camAz / DEG),
    lat: camEl / DEG,
    distance: Math.round(1.9 * (DIST_DEFAULT / camDist) * 100) / 100,
    fps: Math.round(fpsAvg),
    gesture: computeGesture(),
    focus: mode === 'meteor' ? '流星雨' : city ? city.cn : '地球',
    cities: 13414,
    satellites: 1144,
    zones: 1,
    rangeKm: 384400,
    signal: 74 + Math.round(3 * Math.sin(elapsed * 0.7)),
    date: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`,
  })
}

/* ============================ 主循环 ============================ */
function animate() {
  if (disposed) return
  raf = requestAnimationFrame(animate)
  const dt = Math.min(clock.getDelta(), 0.06)
  elapsed += dt

  frameCount++
  fpsTimer += dt
  if (fpsTimer >= 0.5) {
    fpsAvg = fpsAvg * 0.35 + (frameCount / fpsTimer) * 0.65
    frameCount = 0
    fpsTimer = 0
  }

  updateHandInput(dt)

  camAz = damp(camAz, azTarget, 2.6, dt)
  camEl = damp(camEl, elTarget, 2.6, dt)
  camDist = damp(camDist, distTarget, 3.4, dt)

  updateCameraTransform()
  updateFocus(dt)
  updateVisuals(dt)
  updatePulses(dt)
  updateMeteors(dt)

  telemetryTimer += dt
  if (telemetryTimer > 0.28) {
    telemetryTimer = 0
    emitTelemetry()
  }

  if (composer) composer.render()
  else if (renderer) renderer.render(scene, camera)
}

/* ============================ 尺寸 ============================ */
function resize() {
  const canvas = canvasRef.value
  if (!canvas || !renderer || !camera) return
  const w = canvas.clientWidth || window.innerWidth
  const h = canvas.clientHeight || window.innerHeight
  renderer.setSize(w, h, false)
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  composer?.setSize(w, h)
  bloom?.setSize(w, h)
  if (dotsMat) dotsMat.uniforms.uPointScale.value = (h * 0.5) / Math.tan(FOV * 0.5 * DEG)
  if (starsMat) starsMat.uniforms.uPixelRatio.value = renderer.getPixelRatio()
  placeOverlays()
}

/* ============================ 指针 / 键盘 ============================ */
function onPointerDown(e: PointerEvent) {
  const canvas = canvasRef.value
  if (!canvas) return
  dragging = true
  dragX = e.clientX
  dragY = e.clientY
  lastInputAt = performance.now()
  try {
    canvas.setPointerCapture(e.pointerId)
  } catch {
    /* ignore */
  }
}

function onPointerMove(e: PointerEvent) {
  if (!dragging) return
  const dx = e.clientX - dragX
  const dy = e.clientY - dragY
  dragX = e.clientX
  dragY = e.clientY
  azTarget -= dx * 0.0048
  elTarget = clamp(elTarget + dy * 0.0034, -1.2, 1.2)
  lastInputAt = performance.now()
}

function onPointerUp() {
  dragging = false
}

function onWheel(e: WheelEvent) {
  e.preventDefault()
  distTarget = clamp(distTarget + e.deltaY * 0.0022, DIST_MIN, DIST_MAX)
  lastInputAt = performance.now()
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'm' || e.key === 'M') {
    setMode(mode === 'chart' ? 'meteor' : 'chart')
  } else if (e.key === 'ArrowRight') {
    nextCity()
  } else if (e.key === 'ArrowLeft') {
    prevCity()
  } else if (e.key === ' ') {
    e.preventDefault()
    setMode(mode === 'chart' ? 'meteor' : 'chart')
  }
}

/* ============================ 生命周期 ============================ */
let bound = false

function bindEvents() {
  if (bound) return
  bound = true
  window.addEventListener('resize', resize)
  window.addEventListener('keydown', onKey)
  const canvas = canvasRef.value
  if (canvas) {
    canvas.addEventListener('pointerdown', onPointerDown)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerup', onPointerUp)
    canvas.addEventListener('pointercancel', onPointerUp)
    canvas.addEventListener('wheel', onWheel, { passive: false })
  }
}

function unbindEvents() {
  window.removeEventListener('resize', resize)
  window.removeEventListener('keydown', onKey)
  const canvas = canvasRef.value
  if (canvas) {
    canvas.removeEventListener('pointerdown', onPointerDown)
    canvas.removeEventListener('pointermove', onPointerMove)
    canvas.removeEventListener('pointerup', onPointerUp)
    canvas.removeEventListener('pointercancel', onPointerUp)
    canvas.removeEventListener('wheel', onWheel)
  }
}

function disposeObject3D(root: THREE.Object3D | null | undefined) {
  if (!root) return
  const mats = new Set<THREE.Material>()
  const texs = new Set<THREE.Texture>()
  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh
    if (mesh.geometry) mesh.geometry.dispose()
    const raw = (obj as THREE.Mesh).material
    const list = Array.isArray(raw) ? raw : raw ? [raw] : []
    for (const m of list) mats.add(m)
  })
  for (const m of mats) {
    const rec = m as unknown as Record<string, unknown>
    for (const key of ['map', 'alphaMap', 'uDay', 'uNight', 'uClouds']) {
      const v = rec[key]
      if (v instanceof THREE.Texture) texs.add(v)
    }
    const uniforms = (m as THREE.ShaderMaterial).uniforms
    if (uniforms) {
      for (const u of Object.values(uniforms)) {
        const v = (u as { value: unknown }).value
        if (v instanceof THREE.Texture) texs.add(v)
      }
    }
  }
  texs.forEach((t) => t.dispose())
  mats.forEach((m) => m.dispose())
}

function dispose() {
  if (disposed) return
  disposed = true
  cancelAnimationFrame(raf)
  unbindEvents()
  disposeObject3D(scene)
  cometCleanup()
  composer?.dispose()
  composer = null
  bloom = null
  renderer?.dispose()
  renderer = null
  citySprites = []
  labelSprites = []
  arcObjs = []
  arcCurves = []
  pulseSprites = []
  meteors = []
}

function cometCleanup() {
  meteorGeo = null
  meteorPos = null
  meteorCol = null
}

defineExpose({ setMode, nextCity, prevCity })

onMounted(() => {
  bindEvents()
  void init()
})

onBeforeUnmount(() => {
  dispose()
})

</script>
<template>
  <div class="earth-stage">
    <canvas ref="canvasRef" class="earth-canvas" />
    <div v-if="webglError" class="earth-fallback mono">{{ webglError }}</div>
  </div>
</template>

<style scoped>
.earth-stage {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #04070e;
}

.earth-canvas {
  display: block;
  width: 100%;
  height: 100%;
  touch-action: none;
  cursor: grab;
}

.earth-canvas:active {
  cursor: grabbing;
}

.earth-fallback {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: #8fb4d8;
  font-size: 13px;
  letter-spacing: 0.16em;
}
</style>
