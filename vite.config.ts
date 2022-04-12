import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve :{
    alias: { '@utils': resolve(__dirname, '/src/utils'), '@type': resolve(__dirname, '/src/type') },
  },
  build:{
    // sourcemap: true,
    // polyfillModulePreload: false,
    // minify: false,
    watch: {
      include: 'src/**'
    },
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html')
      },
    }
  }
})
