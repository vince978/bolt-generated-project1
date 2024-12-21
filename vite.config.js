import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: false // Permet à Vite de chercher le prochain port disponible si 3000 est occupé
  },
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
