import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { JSDOM } from 'jsdom'
import { loadSource } from './source.mjs'
const { readSection, isPublic, richText } = await loadSource('../src/win/adapter.ts')
const fixture = await readFile(new URL('./fixtures/win-home.html', import.meta.url), 'utf8')
const bundle = await readFile(new URL('../docs/win/jsa-win.js', import.meta.url), 'utf8')
const make = (url = 'https://win.wisc.edu/JSA/home/') => new JSDOM(fixture, { url, runScripts: 'outside-only', pretendToBeVisual: true })
const tick = () => new Promise(resolve => setTimeout(resolve, 80))
test('real WIN sections: header/footer preserved, hero and all accordion bodies read', () => {
  const dom = make()
  const sections = [...dom.window.document.querySelectorAll('.section-cont')]
  assert.equal(sections.length, 4)
  const data = sections.map(readSection)
  assert.equal(data[0], null)
  assert.equal(data[3], null)
  assert.equal(data[1].title, 'Simple Title')
  assert.equal(data[2].items.length, 3)
  assert.match(data[2].items[0].html, /thoughtfully presented documentation/)
  assert.equal(data[2].image, 'https://win.wisc.edu/css/themes/stack/img/inner-2.jpg')
  dom.window.close()
})
test('allowlist rejects scripts, handlers and unsafe URLs while preserving rich text', () => {
  const dom = new JSDOM('<div><script>bad()</script><a href="javascript:bad()" onclick="bad()">bad</a><p><strong>Good</strong><a href="/JSA/home/">Home</a></p><img src="data:x" onerror="bad()"></div>')
  const result = richText(dom.window.document.querySelector('div'), 'https://win.wisc.edu/')
  assert.doesNotMatch(result, /script|onclick|onerror|data:|bad\(\)/)
  assert.match(result, /<strong>Good<\/strong>/)
  assert.match(result, /href="https:\/\/win.wisc.edu\/JSA\/home\/"/)
  dom.window.close()
})
test('public guard rejects admin URLs, queries, foreign hosts and frames', () => {
  for (const url of ['https://win.wisc.edu/web_pages', 'https://win.wisc.edu/JSA/home/?edit=1', 'https://example.com/JSA/home/']) assert.equal(isPublic(new URL(url), false), false)
  assert.equal(isPublic(new URL('https://win.wisc.edu/JSA/home/'), true), false)
})
test('production bundle mounts in place, stops exactly, restarts and restores on editor detection', async () => {
  const dom = make()
  const { document } = dom.window
  const sources = [...document.querySelectorAll('.section-cont')]
  sources[1].style.setProperty('display', 'block', 'important')
  dom.window.eval(bundle)
  dom.window.JSAWin.start(); dom.window.JSAWin.start()
  await tick()
  assert.equal(document.querySelectorAll('[data-jsa-rendered]').length, 2)
  assert.equal(sources[1].nextElementSibling.dataset.jsaRendered, '')
  assert.equal(sources[1].style.display, 'none')
  assert.equal(sources[0].style.display, '')
  assert.equal(document.querySelectorAll('details').length, 3)
  dom.window.JSAWin.stop()
  assert.equal(sources[1].style.display, 'block')
  assert.equal(sources[1].style.getPropertyPriority('display'), 'important')
  assert.equal(document.querySelectorAll('[data-jsa-rendered]').length, 0)
  dom.window.JSAWin.start(); await tick()
  sources[1].classList.add('section-cont--edit'); await tick()
  assert.equal(document.querySelectorAll('[data-jsa-rendered]').length, 0)
  dom.window.close()
})
test('Japanese labels use page slug; WIN content stays unchanged', async () => {
  const dom = make('https://win.wisc.edu/JSA/home-ja/')
  dom.window.eval(bundle); dom.window.JSAWin.start(); await tick()
  assert.equal(dom.window.document.querySelector('.jsa-win button').textContent, 'すべて開く')
  assert.equal(dom.window.document.querySelector('.jsa-win h1').textContent, 'Simple Title')
  dom.window.JSAWin.stop(); dom.window.close()
})
