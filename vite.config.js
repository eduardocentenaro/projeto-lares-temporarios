import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Quando o navegador pede uma PÁGINA (HTML), devolvemos o site React.
// Quando é uma chamada de dados (fetch), deixamos o proxy mandar para a API.
function sePaginaVoltaParaOSite(req) {
  if (req.headers.accept?.includes('text/html')) {
    return '/index.html'
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // A API fake não libera CORS, então o Vite repassa as chamadas
    // de /login e /lares para http://localhost:3000
    proxy: {
      '/login': {
        target: 'http://localhost:3000',
        bypass: sePaginaVoltaParaOSite,
      },
      '/lares': {
        target: 'http://localhost:3000',
        bypass: sePaginaVoltaParaOSite,
      },
    },
  },
})
