export const editorSelector = '[contenteditable]:not([contenteditable="false"]), [data-jsa-editor], .section-cont--edit'
export function isPublic(url: URL, framed: boolean) {
  return url.origin === 'https://win.wisc.edu' && /^\/JSA\/[a-z0-9-]+\/$/i.test(url.pathname) && !url.search && !framed
}
export function safeUrl(value: string | null, base: string) {
  if (!value) return undefined
  try {
    const url = new URL(value, base)
    return ['https:', 'http:'].includes(url.protocol) ? url.href : undefined
  } catch { return undefined }
}
// Allowlist serialization: no source HTML, handlers, CSS, IDs or embedded widgets survive.
export function richText(node: Node, base: string): string {
  const escape = (s: string) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
  if (node.nodeType === 3) return escape(node.textContent ?? '')
  if (node.nodeType !== 1) return ''
  const el = node as Element
  const tag = el.tagName.toLowerCase()
  if (['script', 'style', 'iframe', 'object', 'form', 'input', 'button', 'svg', 'template'].includes(tag)) return ''
  const content = Array.from(el.childNodes).map(child => richText(child, base)).join('')
  if (tag === 'a') {
    const href = safeUrl(el.getAttribute('href'), base)
    return href ? `<a href="${escape(href)}">${content}</a>` : content
  }
  if (tag === 'img') {
    const src = safeUrl(el.getAttribute('src'), base)
    return src ? `<img src="${escape(src)}" alt="${escape(el.getAttribute('alt') ?? '')}" loading="lazy">` : ''
  }
  if (tag === 'br') return '<br>'
  return ['p', 'strong', 'em', 'b', 'i', 'ul', 'ol', 'li', 'h2', 'h3', 'h4', 'blockquote'].includes(tag) ? `<${tag}>${content}</${tag}>` : content
}
export function readSection(source: HTMLElement) {
  if (source.matches('header, footer, nav') || source.closest('header, footer, nav') || source.querySelector('header, footer, nav, .section-cont__content-menu')) return null
  const accordion = source.querySelector('.accordion')
  const hero = source.querySelector('.simple-section-title-bg')
  if (!accordion && !hero) return null
  // Preserve unsupported interactive content by leaving its whole section native.
  if (source.querySelector('iframe, form, video, audio, object, input, select, textarea')) return null
  if (accordion) {
    const items = Array.from(accordion.children).map(item => ({
      title: item.querySelector('.accordion__title')?.textContent?.trim(),
      html: Array.from(item.querySelectorAll('.accordion__content')).map(el => richText(el, source.baseURI)).join(''),
    }))
    if (!items.length || items.some(item => !item.title || !item.html)) return null
    const image = Array.from(source.querySelectorAll('img')).find(img => !accordion.contains(img))
    return { kind: 'accordion', items, title: '', image: safeUrl(image?.getAttribute('src') ?? null, source.baseURI), alt: image?.alt ?? '' }
  }
  const title = hero?.querySelector('h1')?.textContent?.trim()
  if (!title) return null
  const body = hero
    ? Array.from(hero.querySelectorAll('p')).map(paragraph => richText(paragraph, source.baseURI)).join('')
    : ''
  return { kind: 'hero', title, body, items: [], image: undefined, alt: '' }
}
