import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '192.168.1.11', // Allows access from any IP address on the local network
    port: 3000,      // Optional: Specify the port (default is 3000)
  },
})
