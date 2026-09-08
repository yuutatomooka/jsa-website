import { cp, mkdir } from 'node:fs/promises'

await mkdir('docs/win', { recursive: true })
await cp('dist-win/jsa-win.js', 'docs/win/jsa-win.js')

// GitHub Pages currently deploys the Vite dist directory through the existing workflow.
await mkdir('dist/win', { recursive: true })
await cp('dist-win/jsa-win.js', 'dist/win/jsa-win.js')
