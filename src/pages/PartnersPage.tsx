import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { partners } from '../data/partners'

function PartnersPage() {
  const { t } = useTranslation()

  return (
    <div className="partners-page">
      <nav className="section-navigation" aria-label={t('nav.careers')}><Link to="/careers">{t('nav.careers')}</Link><span aria-current="page">{t('careerSections.partners')}</span><Link to="/sponsorship">{t('involvement.collaborateTitle')}</Link></nav>
      <div className="section-intro">
        <p className="section-kicker">{t('partners.eyebrow')}</p>
        <h1 className="section-title">{t('partners.title')}</h1>
        <p className="section-description">{t('partners.description')}</p>
      </div>

      <section className="partners-grid" aria-label={t('partners.partnerListLabel')}>
        {partners.map((partner) => (
          <article key={partner.key} className="partner-card">
            <div
              className="partner-logo-wrap"
              role="img"
              aria-label={t(`partners.items.${partner.key}.logoAlt`)}
            >
              <span className="partner-logo-text">{partner.logoText}</span>
            </div>
            <div className="partner-card-copy">
              <p className="pill-label">{t(`partners.items.${partner.key}.type`)}</p>
              <h2>{t(`partners.items.${partner.key}.name`)}</h2>
              <p>{t(`partners.items.${partner.key}.description`)}</p>
            </div>
            {partner.href && (
              <a
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="cta-link cta-outline partner-link"
              >
                {t('partners.visitWebsite')}
              </a>
            )}
          </article>
        ))}
      </section>

      <section className="sponsor-card">
        <div className="sponsor-card-copy">
          <p className="section-kicker">{t('partners.sponsorEyebrow')}</p>
          <h2>{t('partners.sponsorTitle')}</h2>
          <p>{t('partners.sponsorDescription')}</p>
        </div>
        <Link to="/sponsorship" className="cta-link cta-primary sponsor-card-link">
          {t('partners.sponsorCta')}
        </Link>
      </section>
    </div>
  )
}

export default PartnersPage
