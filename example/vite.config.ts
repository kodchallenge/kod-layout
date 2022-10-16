import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@kod-layout': path.join(__dirname, '../src/index.d.ts'),
    },
    extensions: ['.ts', '.d.ts', ".js", ".tsx", ".jsx"],
  },
  plugins: [react()]
})
