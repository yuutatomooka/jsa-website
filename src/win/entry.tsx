import { Component, useLayoutEffect } from 'react'
import type { ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import type { Root } from 'react-dom/client'
import css from './theme.css?inline'

// Source HTML remains the content owner. No generated HTML is read back as content.
const mounts = new Map<HTMLElement, { root: Root; target: HTMLElement; hidden: boolean }>()
let observer: MutationObserver | undefined
let enabled = false
const selector = '[data-jsa-block]'
const editable = () => !!document.querySelector('[contenteditable="true"], [data-jsa-editor]')

function read(source: HTMLElement) {
  const field = (name: string) => source.querySelector(`[data-jsa-field="${name}"]`)
  const picture = field('image') as HTMLImageElement | null
  const link = field('link') as HTMLAnchorElement | null
  const safeUrl = (value: string | undefined) => {
    if (!value) return undefined
    try {
      const url = new URL(value, document.baseURI)
      return ['https:', 'http:'].includes(url.protocol) ? url.href : undefined
    } catch { return undefined }
  }
  return {
    kind: source.dataset.jsaBlock,
    title: field('title')?.textContent?.trim(),
    eyebrow: field('eyebrow')?.textContent?.trim(),
    body: field('body')?.textContent?.trim(),
    image: safeUrl(picture?.getAttribute('src') ?? undefined),
    alt: picture?.alt ?? '',
    href: safeUrl(link?.getAttribute('href') ?? undefined),
    label: link?.textContent?.trim(),
  }
}

class Recovery extends Component<{ restore: () => void; children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch() { this.props.restore() }
  render() { return this.state.failed ? null : this.props.children }
}

// This library exposes lifecycle functions rather than a Fast Refresh component module.
// eslint-disable-next-line react-refresh/only-export-components
function Block({ data, ready }: { data: ReturnType<typeof read>; ready: () => void }) {
  useLayoutEffect(ready, [ready])
  return <section className={`jsa-win ${data.kind}`}>
    <style>{css}</style>
    <div className="jsa-win-copy">
      {data.eyebrow && <p className="jsa-win-eyebrow">{data.eyebrow}</p>}
      {data.kind === 'hero' ? <h1>{data.title}</h1> : <h2>{data.title}</h2>}
      {data.body && <p className="jsa-win-body">{data.body}</p>}
      {data.href && data.label && <a href={data.href}>{data.label}<span aria-hidden="true"> →</span></a>}
    </div>
    {data.image && <img src={data.image} alt={data.alt} loading={data.kind === 'hero' ? 'eager' : 'lazy'} />}
  </section>
}

function remove(source: HTMLElement) {
  const mount = mounts.get(source)
  if (!mount) return
  source.hidden = mount.hidden
  mount.root.unmount()
  mount.target.remove()
  mounts.delete(source)
}

function refresh() {
  observer?.disconnect()
  if (!enabled || editable()) {
    for (const source of mounts.keys()) remove(source)
  } else {
    for (const source of mounts.keys()) {
      if (!source.isConnected || !source.matches(selector)) remove(source)
    }
    document.querySelectorAll<HTMLElement>(selector).forEach(source => {
      const data = read(source)
      if (!['hero', 'activity'].includes(data.kind ?? '') || !data.title || source.parentElement?.closest(selector)) {
        remove(source)
        return
      }
      let mount = mounts.get(source)
      if (!mount) {
        if (source.hidden) return
        const target = document.createElement('div')
        target.dataset.jsaRendered = ''
        source.after(target)
        mount = { root: createRoot(target), target, hidden: source.hidden }
        mounts.set(source, mount)
      }
      mount.root.render(<Recovery restore={() => { source.hidden = false }}><Block data={data} ready={() => { source.hidden = true }} /></Recovery>)
    })
  }
  observer?.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['src', 'href', 'alt', 'data-jsa-block', 'data-jsa-field', 'contenteditable', 'data-jsa-editor'] })
}

export function start() {
  if (enabled) return
  enabled = true
  observer = new MutationObserver(records => {
    if (records.some(record => !(record.target instanceof Element ? record.target : record.target.parentElement)?.closest('[data-jsa-rendered]'))) refresh()
  })
  refresh()
}

export function stop() {
  enabled = false
  observer?.disconnect()
  observer = undefined
  for (const source of mounts.keys()) remove(source)
}

// No automatic mounting on WIN: the verified public-page loader calls start().
