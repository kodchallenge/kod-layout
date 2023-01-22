import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

const pkg = require('./package.json')

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.d.ts'),
      name: 'KodLayout',
      formats: ['es', 'umd'],
      fileName: (format) => `kod-layout.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', "react-split"],
      output: {
        globals: {
          react: 'React',
          'react-split': 'Split'
        }
      },
    }
  },
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      insertTypesEntry: true
    }),
  ]
})
