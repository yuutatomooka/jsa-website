import { cp, mkdir } from 'node:fs/promises'

await mkdir('dist/win', { recursive: true })
await cp('dist-win/jsa-win.js', 'dist/win/jsa-win.js')
