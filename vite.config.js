/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/template_example_01/',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.js'
  }
})
