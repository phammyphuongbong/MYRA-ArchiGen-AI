import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tên repository của bạn trên GitHub để các đường dẫn tĩnh (css, js) không bị lỗi 404
  base: '/MYRA-ArchiGen-AI/', 
  build: {
    outDir: 'dist',
  },
})
