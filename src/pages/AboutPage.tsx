import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import { useTranslation } from 'react-i18next'
import SectionCard from '../components/SectionCard'
import { Link, useLocation } from 'react-router-dom'
import JoinLink from '../components/JoinLink'

function AboutPage() {
  const { t } = useTranslation()
  const { hash } = useLocation()
  const stats = [
    {
      value: '61',
      label: t('about.communityTotalLabel'),
      context: t('about.communityTotalContext'),
    },
    {
      value: '17',
      label: t('about.undergraduateLabel'),
      context: t('about.undergraduateContext'),
    },
    {
      value: '34',
      label: t('about.graduateLabel'),
      context: t('about.graduateContext'),
    },
  ]
  const registrarRows = [
    [t('about.academicLevels.freshman'), 3],
    [t('about.academicLevels.sophomore'), 4],
    [t('about.academicLevels.junior'), 8],
    [t('about.academicLevels.senior'), 2],
    [t('about.academicLevels.masters'), 9],
    [t('about.academicLevels.phd'), 25],
    [t('about.academicLevels.specialStudent'), 10],
  ]

  return (
    <div className="d-grid gap-4">
      <div className="section-intro">
        <p className="section-kicker">{t('about.eyebrow')}</p>
        <h1 className="section-title">{t('about.title')}</h1>
        <p className="section-description">{t('about.description')}</p>
      </div>

      <nav className="section-navigation" aria-label={t('nav.about')}>
        <Link to="/about#purpose">{t('community.purpose')}</Link>
        <Link to="/about#values">{t('community.values')}</Link>
        <Link to="/about#what-we-do">{t('community.whatWeDo')}</Link>
        <Link to="/faq">{t('nav.faq')}</Link>
      </nav>
      <section id="purpose" tabIndex={-1} className="info-card community-panel jump-target purpose-panel">
        <p className="section-kicker">{t('community.purpose')}</p>
        <h2>{t('community.purposeBody')}</h2>
      </section>
      <div className="mission-grid">
        <section className="info-card resource-card"><h2>{t('community.mission')}</h2><p>{t('community.missionBody')}</p></section>
        <section className="info-card resource-card"><h2>{t('community.vision')}</h2><p>{t('community.visionBody')}</p></section>
      </div>
      <section id="values" tabIndex={-1} className="jump-target" aria-labelledby="values-title">
        <h2 className="saved-heading" id="values-title">{t('community.values')}</h2>
        <div className="values-grid">{['belonging', 'connection', 'support', 'culture'].map((value) => <article className="info-card resource-card" key={value}><h3>{t(`community.valueItems.${value}.title`)}</h3><p>{t(`community.valueItems.${value}.body`)}</p></article>)}</div>
      </section>
      <section id="what-we-do" tabIndex={-1} className="jump-target" aria-labelledby="what-title">
        <h2 className="saved-heading" id="what-title">{t('community.whatWeDo')}</h2>
        <Row className="g-4">
          {['community', 'culture', 'support', 'careers'].map((activity) => <Col md={6} key={activity}><SectionCard title={t(`community.activities.${activity}.title`)} body={t(`community.activities.${activity}.body`)} /></Col>)}
        </Row>
      </section>
      <section className="info-card community-panel"><div><h2>{t('community.whoFor')}</h2><p>{t('community.whoForBody')}</p><p className="small text-muted">{t('involvement.joinNote')}</p></div><div className="d-flex flex-wrap gap-3"><JoinLink /><Link to="/resources/japanese-students" className="text-link">{t('studentResources.title')}</Link><Link to="/faq" className="text-link">{t('nav.faq')}</Link></div></section>
      <details id="story" tabIndex={-1} className="organization-history jump-target" open={hash === '#story' || undefined}>
        <summary>{t('community.history')}</summary>
      <section className="about-story">
        <h2 className="saved-heading">{t('about.storyTitle')}</h2>
        <p className="section-description">{t('about.storyP1')}</p>
        <p className="section-description">{t('about.storyP2')}</p>
        <p className="section-description">{t('about.storyP3')}</p>
        <p className="section-description">{t('about.storyP4')}</p>
        <p className="section-description">{t('about.storyP5')}</p>
      </section>

      <section className="about-stats">
        <div className="section-intro">
          <p className="section-kicker">{t('about.communityEyebrow')}</p>
          <h2 className="saved-heading">{t('about.communityTitle')}</h2>
          <p className="section-description">{t('about.communityDescription')}</p>
        </div>
        <div className="community-layout">
          <div className="community-stats-column">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <h3 className="stat-value">{stat.value}</h3>
                <h3 className="stat-label">{stat.label}</h3>
                <p className="stat-context">{stat.context}</p>
              </div>
            ))}
          </div>
          <div className="community-table-wrap">
            <div className="community-source">
              <h3 className="board-nav-label">{t('about.sourceLabel')}</h3>
              <p className="stat-context">{t('about.sourceValue')}</p>
            </div>
            <Table responsive className="community-table">
              <thead>
                <tr>
                  <th>{t('about.table.academicLevel')}</th>
                  <th>{t('about.table.count')}</th>
                </tr>
              </thead>
              <tbody>
                {registrarRows.map(([academicLevel, count]) => (
                  <tr key={`${academicLevel}`}>
                    <td>{academicLevel}</td>
                    <td>{count}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </section>
      </details>
    </div>
  )
}

export default AboutPage
