import { useRef, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import Icon from './Icon'
import JoinLink from './JoinLink'
import { primaryNavigation, isNavigationActive } from '../data/navigation'
import { siteLinks } from '../config/siteLinks'

function NavigationBar() {
  const { i18n, t } = useTranslation()
  const [expanded, setExpanded] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()
  const activeLanguage = i18n.resolvedLanguage === 'ja' ? 'ja' : 'en'
  const handleLanguageChange = (language: 'en' | 'ja') => {
    void i18n.changeLanguage(language)
    try { window.localStorage.setItem('jsa-language', language) } catch { /* Language still works without storage. */ }
  }

  return (
    <Navbar expand="lg" expanded={expanded} onToggle={setExpanded} className="site-navbar" sticky="top"
      aria-label={t('common.mainNavigation')}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && expanded) {
          setExpanded(false)
          toggleRef.current?.focus()
        }
      }}>
      <Container className="navbar-shell">
        <div className="navbar-brand-row">
          <Navbar.Brand as={NavLink} to="/" className="brand-mark" aria-label={t('siteTitle')} onClick={() => setExpanded(false)}>
            <img src={logo} alt="" className="brand-logo" width="48" height="48" />
            <span className="brand-wordmark">
              <span className="brand-title-desktop">{t('common.organizationName')}</span>
              <span className="brand-title-mobile">JSA</span>
              <span className="brand-campus">UW–MADISON</span>
            </span>
          </Navbar.Brand>
          <div className="navbar-actions">
            <a className="nav-social" href={siteLinks.instagram} target="_blank" rel="noreferrer">@jsamadison <Icon name="external" width="14" height="14" /></a>
            <div className="language-toggle" role="group" aria-label={t('common.language')}>
              <Icon name="globe" width="17" height="17" />
              <button type="button" aria-pressed={activeLanguage === 'en'} aria-label="English" lang="en" onClick={() => handleLanguageChange('en')}>EN</button>
              <button type="button" aria-pressed={activeLanguage === 'ja'} aria-label="日本語" lang="ja" onClick={() => handleLanguageChange('ja')}>日本語</button>
            </div>
            <Navbar.Toggle ref={toggleRef} aria-controls="site-nav" label={t('common.toggleNavigation')} />
          </div>
        </div>
        <Navbar.Collapse id="site-nav" className="navbar-menu-row">
          <Nav className="nav-links-wrap">
            {primaryNavigation.map((item) => (
              <div key={item.to} className={`primary-nav-item${isNavigationActive(item, pathname) ? ' is-active' : ''}`}>
                <Nav.Link as={Link} to={item.to} aria-current={pathname === item.to ? 'page' : undefined}
                  className={`nav-link-custom${isNavigationActive(item, pathname) ? ' active' : ''}`}
                  onClick={() => setExpanded(false)}>{t(item.label)}</Nav.Link>
                {item.children && (
                  <Dropdown className="nav-submenu">
                    <Dropdown.Toggle variant="link" className="nav-submenu-toggle" id={`menu-${item.to.slice(1)}`} aria-label={t('nav.sectionMenu', { section: t(item.label) })} />
                    <Dropdown.Menu>
                      {item.children.map((child) => <Dropdown.Item key={child.to} as={Link} to={child.to} onClick={() => setExpanded(false)}>{t(child.label)}</Dropdown.Item>)}
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </div>
            ))}
            <JoinLink className="cta-link home-primary nav-join" onClick={() => setExpanded(false)} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
