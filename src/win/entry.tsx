import { Component, useLayoutEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { createInstance } from 'i18next'
import { I18nextProvider, useTranslation } from 'react-i18next'
import { editorSelector, isPublic, readSection } from './adapter'
import css from './theme.css?inline'

const i18n = createInstance()
void i18n.init({ lng: 'en', fallbackLng: 'en', initAsync: false, resources: {
  en: { translation: { expand: 'Expand all', collapse: 'Collapse all' } },
  ja: { translation: { expand: 'すべて開く', collapse: 'すべて閉じる' } },
} })
const mounts = new Map<HTMLElement, { root: Root; target: HTMLElement; display: string; priority: string }>()
let observer: MutationObserver | undefined
let enabled = false
const allowed = () => isPublic(new URL(location.href), window.top !== window.self) && !document.querySelector(editorSelector)

class Recovery extends Component<{ restore: () => void; children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch() { this.props.restore() }
  render() { return this.state.failed ? null : this.props.children }
}
// eslint-disable-next-line react-refresh/only-export-components
function Block({ data, ready }: { data: NonNullable<ReturnType<typeof readSection>>; ready: () => void }) {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(false)
  useLayoutEffect(ready, [ready])
  return <section className={`jsa-win ${data.kind}`} lang={i18n.language}>
    <style>{css}</style>
    <div className="jsa-win-copy">
      {data.kind === 'hero' ? <><h1>{data.title}</h1>{data.body && <div className="jsa-win-body" dangerouslySetInnerHTML={{ __html: data.body }} />}</> : <>
        <button type="button" onClick={() => setExpanded(!expanded)}>{t(expanded ? 'collapse' : 'expand')}</button>
        <div key={String(expanded)}>{data.items.map((item, index) => <details key={index} open={expanded}>
          <summary>{item.title}</summary><div dangerouslySetInnerHTML={{ __html: item.html }} />
        </details>)}</div>
      </>}
    </div>
    {data.image && <img src={data.image} alt={data.alt} loading="lazy" />}
  </section>
}
function restore(source: HTMLElement) {
  const mount = mounts.get(source)
  if (mount) {
    if (mount.display) source.style.setProperty('display', mount.display, mount.priority)
    else source.style.removeProperty('display')
    mount.target.hidden = true
  }
}
export function stop() {
  enabled = false
  observer?.disconnect()
  observer = undefined
  for (const [source, mount] of mounts) {
    restore(source)
    mount.root.unmount()
    mount.target.remove()
  }
  mounts.clear()
}
export function start() {
  if (enabled || !allowed()) return
  enabled = true
  void i18n.changeLanguage(location.pathname.endsWith('-ja/') ? 'ja' : 'en')
  try {
    document.querySelectorAll<HTMLElement>('.section-cont').forEach(source => {
      if (source.hidden || getComputedStyle(source).display === 'none') return
      const data = readSection(source)
      if (!data) return
      const target = document.createElement('div')
      target.dataset.jsaRendered = ''
      source.after(target)
      const root = createRoot(target, { onUncaughtError: () => restore(source) })
      mounts.set(source, { root, target, display: source.style.getPropertyValue('display'), priority: source.style.getPropertyPriority('display') })
      root.render(<Recovery restore={() => restore(source)}><I18nextProvider i18n={i18n}><Block data={data} ready={() => {
        if (enabled && allowed()) source.style.setProperty('display', 'none', 'important')
        else restore(source)
      }} /></I18nextProvider></Recovery>)
    })
    observer = new MutationObserver(() => { if (!allowed()) stop() })
    observer.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['contenteditable', 'data-jsa-editor', 'class'] })
  } catch (error) { stop(); console.warn('JSA WIN: original content restored.', error) }
}
window.addEventListener('popstate', () => { if (!allowed()) stop() })
