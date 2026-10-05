import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // A API fake não libera CORS, então o Vite repassa as chamadas
    // de /login e /lares para http://localhost:3000
    proxy: {
      '/login': 'http://localhost:3000',
      '/lares': 'http://localhost:3000',
    },
  },
})
