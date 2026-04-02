import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tên repository của bạn để GitHub Pages nhận diện đúng đường dẫn CSS/JS
  base: '/MYRA-ArchiGen-AI/',
  build: {
    outDir: 'dist',
  },
})
