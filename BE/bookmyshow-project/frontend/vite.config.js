import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://feintermediatejuly2024.onrender.com', // Your backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
