import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function ExchangePage() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const isConsidering = pathname === '/exchange' || pathname === '/exchange/considering-uw-madison'

  return (
    <div className="d-grid gap-4">
      <nav className="section-navigation" aria-label={t('nav.resources')}><Link to="/resources">{t('nav.resources')}</Link><Link to="/resources/japanese-students">{t('studentResources.title')}</Link><span aria-current="page">{t('nav.exchange')}</span></nav>
      <div className="section-intro">
        <p className="section-kicker">{t('exchange.eyebrow')}</p>
        <h1 className="section-title">{t('exchange.title')}</h1>
        <p className="section-description">{t('exchange.description')}</p>
      </div>

      <div className="exchange-links-row">
        <Link to="/exchange/considering-uw-madison" aria-current={isConsidering ? 'page' : undefined} className={`cta-link cta-outline${isConsidering ? ' active' : ''}`}>
          {t('exchange.subnavConsidering')}
        </Link>
        <NavLink to="/exchange/preparing-for-uw-madison" className="cta-link cta-outline">
          {t('exchange.subnavPreparing')}
        </NavLink>
        <NavLink to="/exchange/arriving-in-madison" className="cta-link cta-outline">
          {t('exchange.subnavArriving')}
        </NavLink>
        <NavLink to="/exchange/resources" className="cta-link cta-outline">
          {t('exchange.subnavResources')}
        </NavLink>
      </div>

      <Outlet />
    </div>
  )
}

export default ExchangePage
