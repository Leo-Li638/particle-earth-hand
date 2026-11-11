/**
 * scripts/copy-mediapipe-assets.mjs
 * ---------------------------------------------------------------------------
 * 把 @mediapipe/tasks-vision 包内的 WASM 运行时复制到 public/mediapipe/wasm，
 * 使浏览器完全从本地加载，不走 CDN。
 *
 * 用法： npm run assets:mediapipe
 * ---------------------------------------------------------------------------
 */
import { existsSync } from 'node:fs'
import { cp, mkdir, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pkgRoot = path.join(projectRoot, 'node_modules', '@mediapipe', 'tasks-vision')
const targetDir = path.join(projectRoot, 'public', 'mediapipe', 'wasm')
const modelPath = path.join(projectRoot, 'public', 'models', 'hand_landmarker.task')

function fail(msg) {
  console.error(`\n[assets] 失败：${msg}\n`)
  process.exit(1)
}

if (!existsSync(pkgRoot)) {
  fail(`未找到 ${pkgRoot}，请先执行 npm install`)
}

// 包内 wasm 目录可能叫 wasm / wasm_esm 等，做一次探测
const candidates = ['wasm', 'wasm_esm']
let wasmSrc = null
for (const name of candidates) {
  const p = path.join(pkgRoot, name)
  if (existsSync(p)) {
    wasmSrc = p
    break
  }
}

if (!wasmSrc) {
  const entries = await readdir(pkgRoot)
  console.error('[assets] 包内目录结构：', entries.join(', '))
  fail('在 @mediapipe/tasks-vision 中未找到 wasm 目录')
}

await mkdir(targetDir, { recursive: true })

const files = await readdir(wasmSrc)
let copied = 0
for (const f of files) {
  if (!/\.(wasm|js)$/i.test(f)) continue
  const from = path.join(wasmSrc, f)
  const to = path.join(targetDir, f)
  await cp(from, to)
  const s = await stat(to)
  console.log(`[assets] ${f}  ${(s.size / 1024).toFixed(0)} KB`)
  copied += 1
}

if (copied === 0) fail(`wasm 目录 ${wasmSrc} 中没有 .wasm/.js 文件`)

console.log(`\n[assets] 已复制 ${copied} 个文件 → ${targetDir}`)

// 模型检查
if (existsSync(modelPath)) {
  const s = await stat(modelPath)
  console.log(`[assets] 模型已就位：${modelPath}  ${(s.size / 1024 / 1024).toFixed(2)} MB`)
} else {
  console.warn(
    `\n[assets] 警告：模型缺失 ${modelPath}\n` +
      `         请执行 npm run model:download 或手动下载后放入该目录。\n`,
  )
}
