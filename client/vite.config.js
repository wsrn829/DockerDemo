import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   // server: {
  //   port: 8080, // server port. if in use, vite wil auto try next available port
  //   strictPort: true, // exit if port is already in use
  //   host: true, // specify which ip addresses the server should listen on. true = all
  //   origin: "http://0.0.0.0:8080" // defines origin of generated asset URLs during development
  // }
  proxy: {
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      secure: false
    }
  }
})
