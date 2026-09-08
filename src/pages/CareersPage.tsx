import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SectionCard from '../components/SectionCard'
import UpcomingEvents from '../components/UpcomingEvents'
import Icon from '../components/Icon'

const opportunityKeys = ['jelperClub', 'tkf', 'jet', 'careerForum', 'jrCentral', 'jFind'] as const

function CareersPage() {
  const { t } = useTranslation()
  return (
    <div className="d-grid gap-4">
      <div className="section-intro"><p className="section-kicker">{t('careers.eyebrow')}</p><h1 className="section-title">{t('careers.title')}</h1><p className="section-description">{t('careerSections.description')}</p></div>
      <nav className="section-navigation" aria-label={t('nav.careers')}><Link to="/careers#career-events">{t('careerSections.events')}</Link><Link to="/careers#opportunities">{t('careerSections.opportunities')}</Link><Link to="/careers#alumni">{t('careerSections.alumni')}</Link><Link to="/partners">{t('careerSections.partners')}</Link></nav>
      <section id="career-events" tabIndex={-1} className="jump-target" aria-labelledby="career-events-title"><div className="home-section-heading"><h2 id="career-events-title">{t('careerSections.events')}</h2><Link className="text-link" to="/events?category=career">{t('careerSections.viewEvents')}<Icon name="arrow" /></Link></div><UpcomingEvents category="career" /></section>
      <section id="opportunities" tabIndex={-1} className="jump-target" aria-labelledby="opportunities-title"><h2 className="saved-heading" id="opportunities-title">{t('careerSections.opportunities')}</h2><p className="section-description mb-4">{t('careerSections.opportunitiesNote')}</p><Row className="g-4">{opportunityKeys.map((key) => <Col md={6} lg={4} key={key}><SectionCard title={t(`careers.${key}Title`)} body={t(`careers.${key}Body`)} /></Col>)}</Row></section>
      <section id="alumni" tabIndex={-1} className="info-card community-panel jump-target"><div><h2>{t('careerSections.alumni')}</h2><p>{t('careerSections.alumniBody')}</p></div><Link className="text-link" to="/contact">{t('nav.contact')}<Icon name="arrow" /></Link></section>
      <section className="mission-grid"><article className="info-card resource-card"><h2>{t('careerSections.partners')}</h2><p>{t('careerSections.partnersBody')}</p><Link className="text-link" to="/partners">{t('community.viewPartners')}<Icon name="arrow" /></Link></article><article className="info-card resource-card"><h2>{t('involvement.collaborateTitle')}</h2><p>{t('careerSections.collaborateBody')}</p><Link className="text-link" to="/sponsorship">{t('careerSections.collaborateAction')}<Icon name="arrow" /></Link></article></section>
    </div>
  )
}

export default CareersPage
