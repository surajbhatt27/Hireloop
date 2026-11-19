import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      //Real-time collaborative editing runs on the backend over WebSocket.
      '/ws': {
        target: 'ws://localhost:3000',
        ws: true,
      },
    },
  },
})
