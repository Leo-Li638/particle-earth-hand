import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // Vite 的依赖预构建缓存、转换缓存全部落在项目目录内，不写 C 盘
  cacheDir: '.vite-cache',

  server: {
    host: '127.0.0.1', // localhost / 127.0.0.1 属于安全上下文，可授权摄像头
    port: 5173,
    strictPort: false,
    open: false,
    // MediaPipe 的 wasm 与模型都放在 public 下本地加载，不依赖 CDN
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'credentialless',
    },
  },

  preview: {
    host: '127.0.0.1',
    port: 4173,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'credentialless',
    },
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    chunkSizeWarningLimit: 1500,
  },
})
