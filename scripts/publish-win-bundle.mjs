import { cp, mkdir } from 'node:fs/promises'

await mkdir('docs/win', { recursive: true })
await cp('dist-win/jsa-win.js', 'docs/win/jsa-win.js')
