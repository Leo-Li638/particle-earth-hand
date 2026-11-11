/**
 * earthTextures.ts
 * ---------------------------------------------------------------------------
 * 加载本地等距圆柱投影贴图，并衍生出 PBR 所需的全部贴图：
 *   - earth-day.jpg   → colorMap（地表颜色）
 *   - earth-day.jpg   → normalMap（由亮度 Sobel 求导生成法线，表现山脉凹凸）
 *   - earth-water.png → roughnessMap（水=光滑低粗糙，陆=粗糙）+ 高光差异
 *   - earth-night.jpg → emissiveMap（夜间城市灯光）
 *   - 程序化噪声       → cloudAlpha（云层透明度）
 *
 * 几何体保持完美球体，禁止使用 displacementMap 改变顶点几何。
 * 所有地貌细节由 normalMap / roughnessMap 表现。
 * ---------------------------------------------------------------------------
 */
import * as THREE from 'three'

export interface Sampler {
  data: Uint8ClampedArray
  width: number
  height: number
}

export interface EarthTextures {
  color: THREE.Texture
  normal: THREE.Texture
  roughness: THREE.Texture
  emissive: THREE.Texture
  cloud: THREE.Texture
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error(`图片加载失败：${src}`))
    img.src = src
  })
}

function imageToCanvas(img: HTMLImageElement): HTMLCanvasElement {
  const cv = document.createElement('canvas')
  cv.width = img.naturalWidth || img.width
  cv.height = img.naturalHeight || img.height
  const ctx = cv.getContext('2d', { willReadFrequently: true })!
  ctx.drawImage(img, 0, 0)
  return cv
}

function canvasToTexture(cv: HTMLCanvasElement, srgb = false): THREE.Texture {
  const tex = new THREE.CanvasTexture(cv)
  tex.needsUpdate = true
  tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace
  tex.wrapS = THREE.RepeatWrapping
  tex.anisotropy = 8
  return tex
}

/** 由亮度图生成法线贴图（Sobel 求导，再切线空间编码） */
function generateNormalMap(
  src: ImageData,
  strength = 2.2,
): HTMLCanvasElement {
  const { width: w, height: h, data } = src
  const cv = document.createElement('canvas')
  cv.width = w
  cv.height = h
  const ctx = cv.getContext('2d')!
  const out = ctx.createImageData(w, h)

  const lum = (x: number, y: number) => {
    x = (x + w) % w
    y = Math.max(0, Math.min(h - 1, y))
    const i = (y * w + x) * 4
    return (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255
  }

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const tl = lum(x - 1, y - 1)
      const t = lum(x, y - 1)
      const tr = lum(x + 1, y - 1)
      const l = lum(x - 1, y)
      const r = lum(x + 1, y)
      const bl = lum(x - 1, y + 1)
      const b = lum(x, y + 1)
      const br = lum(x + 1, y + 1)

      // Sobel
      const dx = (tr + 2 * r + br) - (tl + 2 * l + bl)
      const dy = (bl + 2 * b + br) - (tl + 2 * t + tr)

      // 切线空间法线
      const nx = -dx * strength
      const ny = -dy * strength
      const nz = 1.0
      const len = Math.hypot(nx, ny, nz) || 1
      const i = (y * w + x) * 4
      out.data[i] = ((nx / len) * 0.5 + 0.5) * 255
      out.data[i + 1] = ((ny / len) * 0.5 + 0.5) * 255
      out.data[i + 2] = ((nz / len) * 0.5 + 0.5) * 255
      out.data[i + 3] = 255
    }
  }
  ctx.putImageData(out, 0, 0)
  return cv
}

/** 由水域蒙版生成粗糙度图：水=光滑(0.15)，陆=粗糙(0.85) */
function generateRoughnessMap(water: ImageData): HTMLCanvasElement {
  const { width: w, height: h, data } = water
  const cv = document.createElement('canvas')
  cv.width = w
  cv.height = h
  const ctx = cv.getContext('2d')!
  const out = ctx.createImageData(w, h)
  for (let i = 0; i < w * h; i++) {
    const j = i * 4
    const isWater = (data[j] + data[j + 1] + data[j + 2]) / 3 > 128
    // roughness 0=光滑 1=粗糙；水取 0.5（减少镜面高光），陆取 0.9
    const r = isWater ? 0.5 : 0.9
    const v = Math.round(r * 255)
    out.data[j] = v
    out.data[j + 1] = v
    out.data[j + 2] = v
    out.data[j + 3] = 255
  }
  ctx.putImageData(out, 0, 0)
  return cv
}

/** 程序化云层透明度贴图（value noise 叠加，避免穿帮） */
function generateCloudTexture(w = 1024, h = 512): HTMLCanvasElement {
  const cv = document.createElement('canvas')
  cv.width = w
  cv.height = h
  const ctx = cv.getContext('2d')!
  const img = ctx.createImageData(w, h)

  // 多层 value noise
  const noise = (x: number, y: number) => {
    const s = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453
    return s - Math.floor(s)
  }
  const smooth = (t: number) => t * t * (3 - 2 * t)
  const vnoise = (x: number, y: number) => {
    const x0 = Math.floor(x)
    const y0 = Math.floor(y)
    const fx = smooth(x - x0)
    const fy = smooth(y - y0)
    const a = noise(x0, y0)
    const b = noise(x0 + 1, y0)
    const c = noise(x0, y0 + 1)
    const d = noise(x0 + 1, y0 + 1)
    return a * (1 - fx) * (1 - fy) + b * fx * (1 - fy) + c * (1 - fx) * fy + d * fx * fy
  }

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const u = x / w
      const v = y / h
      // 多倍频叠加
      let n = 0
      n += vnoise(u * 4, v * 4) * 0.5
      n += vnoise(u * 8, v * 8) * 0.25
      n += vnoise(u * 16, v * 16) * 0.15
      n += vnoise(u * 32, v * 32) * 0.1
      // 极地带云少一点，避免极地成团
      const polar = 1 - Math.pow(Math.abs(v - 0.5) * 2, 3) * 0.35
      n *= polar
      n = Math.pow(n, 1.4)
      const alpha = Math.round(n * 255)
      const i = (y * w + x) * 4
      img.data[i] = 255
      img.data[i + 1] = 255
      img.data[i + 2] = 255
      img.data[i + 3] = alpha
    }
  }
  ctx.putImageData(img, 0, 0)
  return cv
}

export async function loadEarthTextures(): Promise<EarthTextures | null> {
  try {
    const [dayImg, waterImg, nightImg] = await Promise.all([
      loadImage(import.meta.env.BASE_URL + 'textures/earth-day.jpg'),
      loadImage(import.meta.env.BASE_URL + 'textures/earth-water.png'),
      loadImage(import.meta.env.BASE_URL + 'textures/earth-night.jpg'),
    ])

    const dayCv = imageToCanvas(dayImg)
    const waterCv = imageToCanvas(waterImg)
    const nightCv = imageToCanvas(nightImg)

    const dayCtx = dayCv.getContext('2d', { willReadFrequently: true })!
    const waterCtx = waterCv.getContext('2d', { willReadFrequently: true })!
    const dayData = dayCtx.getImageData(0, 0, dayCv.width, dayCv.height)
    const waterData = waterCtx.getImageData(0, 0, waterCv.width, waterCv.height)

    const colorTex = canvasToTexture(dayCv, true)
    const normalCv = generateNormalMap(dayData, 2.5)
    const normalTex = canvasToTexture(normalCv)
    const roughCv = generateRoughnessMap(waterData)
    const roughTex = canvasToTexture(roughCv)
    const emissiveTex = canvasToTexture(nightCv, true)
    const cloudCv = generateCloudTexture()
    const cloudTex = canvasToTexture(cloudCv)

    return { color: colorTex, normal: normalTex, roughness: roughTex, emissive: emissiveTex, cloud: cloudTex }
  } catch (err) {
    console.warn('[earth] 贴图加载失败，回退为纯色球面：', err)
    return null
  }
}
