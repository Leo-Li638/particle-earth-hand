/**
 * scripts/download-model.mjs
 * ---------------------------------------------------------------------------
 * 下载 MediaPipe 手部关键点模型 hand_landmarker.task 到 public/models 下。
 * 下载完成后校验文件大小，避免拿到半截文件。
 * ---------------------------------------------------------------------------
 */
import { existsSync } from 'node:fs'
import { mkdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const targetDir = path.join(projectRoot, 'public', 'models')
const targetFile = path.join(targetDir, 'hand_landmarker.task')

const MODEL_URL =
  'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task'

/** 官方 float16 版模型约 7.5MB，低于 5MB 视为下载不完整 */
const MIN_BYTES = 5 * 1024 * 1024

if (existsSync(targetFile)) {
  const s = await stat(targetFile)
  if (s.size >= MIN_BYTES) {
    console.log(`[model] 已存在，跳过下载：${targetFile} (${(s.size / 1024 / 1024).toFixed(2)} MB)`)
    process.exit(0)
  }
  console.warn('[model] 现有文件过小，重新下载')
}

await mkdir(targetDir, { recursive: true })

console.log(`[model] 下载中：${MODEL_URL}`)
const res = await fetch(MODEL_URL)
if (!res.ok) {
  console.error(`[model] 下载失败 HTTP ${res.status}。可手动下载后放到 ${targetFile}`)
  process.exit(1)
}

const buf = Buffer.from(await res.arrayBuffer())
if (buf.byteLength < MIN_BYTES) {
  console.error(`[model] 文件不完整（${(buf.byteLength / 1024).toFixed(0)} KB），请重试`)
  process.exit(1)
}

await writeFile(targetFile, buf)
console.log(`[model] 完成：${targetFile} (${(buf.byteLength / 1024 / 1024).toFixed(2)} MB)`)
