import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-icons'], // Example: separate vendor libraries
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust as per your requirement
  },
})
