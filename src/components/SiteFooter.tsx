import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Icon from './Icon'
import JoinLink from './JoinLink'
import { primaryNavigation } from '../data/navigation'
import { siteLinks } from '../config/siteLinks'

function SiteFooter() {
  const { t } = useTranslation()
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div className="footer-identity"><Link to="/" className="footer-brand"><img src={logo} width="48" height="48" alt="" /><span>{t('common.organizationName')}<small>University of Wisconsin–Madison</small></span></Link><p>{t('community.visionBody')}</p></div>
          <div className="footer-link-group"><h2>{t('community.quickLinks')}</h2><nav className="footer-nav" aria-label={t('common.footerNavigation')}>{primaryNavigation.filter((item) => item.to !== '/').map((item) => <Link key={item.to} to={item.to} className="footer-link">{t(item.label)}</Link>)}</nav></div>
          <div className="footer-link-group"><h2>{t('community.communityLabel')}</h2><div className="d-grid"><JoinLink className="footer-link" /><a href={siteLinks.instagram} target="_blank" rel="noreferrer" className="footer-link">Instagram<Icon name="external" width="14" height="14" /></a></div></div>
        </div>
        <div className="footer-bottom"><p className="footer-copyright">© {new Date().getFullYear()} JSA at UW–Madison</p><p className="footer-copyright">{t('home.eyebrow')}</p></div>
      </Container>
    </footer>
  )
}

export default SiteFooter
