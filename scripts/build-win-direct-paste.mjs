import { mkdir, readFile, writeFile } from 'node:fs/promises'
const bundle = await readFile('dist-win/jsa-win.js', 'utf8')
const output = `<script>\n${bundle}\nif (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => window.JSAWin?.start(), { once: true });\nelse window.JSAWin?.start();\n</script>\n`
await mkdir('dist-win', { recursive: true })
await writeFile('dist-win/jsa-win-direct-paste.html', output)
