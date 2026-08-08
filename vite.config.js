import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  // `preview` inherits server options otherwise, and auto-open fails on
  // machines without a browser (CI, a build box).
  preview: {
    port: 4173,
    open: false,
  },
})
