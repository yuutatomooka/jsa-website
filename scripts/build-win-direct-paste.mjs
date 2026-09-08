import { mkdir, readFile, writeFile } from 'node:fs/promises'

const bundle = await readFile('dist-win/jsa-win.js', 'utf8')
const testMarkup = `
<section data-jsa-direct-test data-jsa-block="hero">
  <p data-jsa-field="eyebrow">JSA / WIN compatibility test</p>
  <h1 data-jsa-field="title">React is running on WIN.</h1>
  <p data-jsa-field="body">This temporary block is rendered by the exact JSA React bundle. Remove the Custom JavaScript entry to return the page to normal.</p>
</section>`

const output = `<!-- Paste the complete contents of this file into WIN Website Custom JavaScript. -->
<script>
${bundle}

(() => {
  const mountTest = () => {
  const id = 'jsa-win-direct-paste-test'
  document.getElementById(id)?.remove()

  const host = document.createElement('div')
  host.id = id
  host.innerHTML = ${JSON.stringify(testMarkup)}
  document.body.appendChild(host)

  window.JSAWin?.start()
  window.__jsaWinDirectPasteCleanup = () => {
    window.JSAWin?.stop()
    document.getElementById(id)?.remove()
  }
  }

  if (document.body) mountTest()
  else document.addEventListener('DOMContentLoaded', mountTest, { once: true })
})()
</script>
`

await mkdir('dist-win', { recursive: true })
await writeFile('dist-win/jsa-win-direct-paste.html', output)
