import { useEffect, useLayoutEffect, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'
import { Outlet, useLocation } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import NewsletterSignup from './NewsletterSignup'
import SiteFooter from './SiteFooter'

const pageTitles: Record<string, string> = {
  about: 'nav.about', events: 'nav.events', exchange: 'nav.exchange',
  board: 'nav.board', faq: 'nav.faq', careers: 'nav.careers',
  partners: 'nav.partners', sponsorship: 'sponsorship.eyebrow', contact: 'nav.contact',
  resources: 'nav.resources',
}

function SiteLayout() {
  const { pathname, hash, key } = useLocation()
  const { i18n, t } = useTranslation()
  const mainRef = useRef<HTMLElement>(null)
  const previousPath = useRef(pathname)

  useLayoutEffect(() => {
    const section = hash ? document.getElementById(hash.slice(1)) : null
    if (section) {
      section.focus({ preventScroll: true })
      section.scrollIntoView({ behavior: 'instant', block: 'start' })
      previousPath.current = pathname
      return
    }
    if (previousPath.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      mainRef.current?.focus({ preventScroll: true })
      previousPath.current = pathname
    }
  }, [pathname, hash, key])

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage === 'ja' ? 'ja' : 'en'
    const pageKey = pathname === '/resources/japanese-students' ? 'studentResources.title' : pathname === '/resources/uw-madison' ? 'studentResources.uwMadisonTitle' : pageTitles[pathname.split('/')[1]]
    document.title = `${pathname === '/' ? t('nav.home') : t(pageKey ?? 'notFound.eyebrow')} | JSA at UW–Madison`
  }, [pathname, i18n.resolvedLanguage, t])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content" onClick={(event) => {
        event.preventDefault()
        mainRef.current?.focus()
        mainRef.current?.scrollIntoView({ behavior: 'instant' })
      }}>{t('common.skipContent')}</a>
      <NavigationBar key={pathname} />
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        <Container className="site-content">
          <div key={pathname} className="route-content"><Outlet /></div>
        </Container>
      </main>
      {pathname !== '/' && <NewsletterSignup />}
      <SiteFooter />
    </div>
  )
}

export default SiteLayout
