import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = '/portfolio/' para que funcione en https://TUUSUARIO.github.io/portfolio/
// En desarrollo local Vite ignora el subpath y sirve en '/'.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
