import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import JoinLink from '../components/JoinLink'
import ResourceCards from '../components/ResourceCards'
import Icon from '../components/Icon'

function JapaneseStudentsPage() {
  const { t } = useTranslation()
  return (
    <div className="d-grid gap-4">
      <div className="section-intro"><p className="section-kicker">{t('studentResources.title')}</p><h1 className="section-title">{t('studentResources.welcomeTitle')}</h1><p className="section-description">{t('studentResources.description')}</p></div>
      <section className="info-card community-panel">
        <div><h2>{t('studentResources.connectTitle')}</h2><p>{t('studentResources.connectBody')}</p><p className="small text-muted">{t('involvement.joinNote')}</p></div>
        <div className="d-flex flex-wrap gap-3"><JoinLink /><Link to="/contact" className="text-link">{t('studentResources.sayHello')}<Icon name="arrow" /></Link></div>
      </section>
      <section className="info-card community-panel"><div><h2>{t('studentResources.welcomeEventsTitle')}</h2><p>{t('studentResources.welcomeEventsBody')}</p></div><Link to="/events" className="text-link">{t('community.viewAllEvents')}<Icon name="arrow" /></Link></section>
      <section aria-labelledby="student-life"><div className="home-section-heading"><div><h2 id="student-life">{t('studentResources.lifeTitle')}</h2><p className="section-description">{t('studentResources.contentNote')}</p></div></div><ResourceCards /></section>
      <section className="info-card community-panel"><div><h2>{t('studentResources.helpTitle')}</h2><p>{t('studentResources.helpBody')}</p></div><Link to="/contact" className="cta-link home-primary">{t('nav.contact')}<Icon name="arrow" /></Link></section>
    </div>
  )
}

export default JapaneseStudentsPage
