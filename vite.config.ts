import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api-discogs': {
        target: 'https://api.discogs.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-discogs/, ''),
        headers: {
          // Discogs требует обязательный User-Agent
          'User-Agent': 'SignalToNoise/1.0'
        }
      }
    }
  }
})
