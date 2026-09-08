import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    outDir: 'dist-win',
    lib: { entry: 'src/win/entry.tsx', name: 'JSAWin', formats: ['iife'], fileName: () => 'jsa-win.js' },
  },
})
