import { useTranslation } from 'react-i18next'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Icon from '../components/Icon'

const entries = [
  { to: '/resources/japanese-students', title: 'studentResources.title', body: 'studentResources.description', action: 'community.connectStudents' },
  { to: '/exchange', title: 'nav.exchange', body: 'studentResources.exchangeBody', action: 'studentResources.exchangeAction' },
  { to: '/resources/uw-madison', title: 'studentResources.uwMadisonTitle', body: 'studentResources.uwMadisonBody', action: 'studentResources.browseResources' },
] as const

export function ResourcesOverview() {
  const { t } = useTranslation()
  return (
    <>
      <div className="section-intro"><p className="section-kicker">{t('nav.resources')}</p><h1 className="section-title">{t('studentResources.hubTitle')}</h1><p className="section-description">{t('studentResources.hubBody')}</p></div>
      <div className="resource-card-grid">
        {entries.map((entry) => <article className="info-card resource-card" key={entry.to}><h2>{t(entry.title)}</h2><p>{t(entry.body)}</p><Link className="text-link" to={entry.to}>{t(entry.action)}<Icon name="arrow" /></Link></article>)}
      </div>
    </>
  )
}

function ResourcesPage() {
  const { t } = useTranslation()
  return (
    <div className="d-grid gap-4">
      <nav className="section-navigation" aria-label={t('nav.resources')}>
        <NavLink end to="/resources">{t('studentResources.overview')}</NavLink>
        <NavLink to="/resources/japanese-students">{t('studentResources.title')}</NavLink>
        <Link to="/exchange">{t('nav.exchange')}</Link>
        <NavLink to="/resources/uw-madison">{t('studentResources.uwMadisonTitle')}</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default ResourcesPage
