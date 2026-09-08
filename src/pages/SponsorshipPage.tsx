import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const benefitKeys = [
  'visibility',
  'studentEngagement',
  'communityImpact',
  'careerConnection',
  'collaboration',
  'relationship',
] as const

const formatKeys = [
  'eventSponsor',
  'careerPartner',
  'cultureSupporter',
  'inKind',
] as const

function SponsorshipPage() {
  const { t } = useTranslation()

  return (
    <div className="sponsorship-page">
      <section className="sponsorship-hero">
        <div className="sponsorship-hero-copy">
          <p className="eyebrow">{t('sponsorship.eyebrow')}</p>
          <h1>{t('sponsorship.title')}</h1>
          <p className="hero-copy">{t('sponsorship.description')}</p>
          <Link to="/contact" className="cta-link cta-primary">
            {t('sponsorship.contactCta')}
          </Link>
        </div>
      </section>

      <section className="sponsorship-section">
        <div className="section-intro">
          <p className="section-kicker">{t('sponsorship.benefitsEyebrow')}</p>
          <h2 className="saved-heading">{t('sponsorship.benefitsTitle')}</h2>
        </div>
        <div className="sponsorship-benefits-grid">
          {benefitKeys.map((key) => (
            <article key={key} className="sponsorship-benefit-card">
              <p className="pill-label">{t(`sponsorship.benefits.${key}.label`)}</p>
              <h3>{t(`sponsorship.benefits.${key}.title`)}</h3>
              <p>{t(`sponsorship.benefits.${key}.body`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sponsorship-formats">
        <div className="sponsorship-formats-copy">
          <p className="section-kicker">{t('sponsorship.formatsEyebrow')}</p>
          <h2>{t('sponsorship.formatsTitle')}</h2>
          <p>{t('sponsorship.formatsDescription')}</p>
        </div>
        <div className="sponsorship-format-list">
          {formatKeys.map((key) => (
            <article key={key} className="sponsorship-format-item">
              <h3>{t(`sponsorship.formats.${key}.title`)}</h3>
              <p>{t(`sponsorship.formats.${key}.body`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sponsorship-cta">
        <div>
          <p className="section-kicker">{t('sponsorship.nextEyebrow')}</p>
          <h2>{t('sponsorship.nextTitle')}</h2>
          <p>{t('sponsorship.nextBody')}</p>
        </div>
        <Link to="/contact" className="cta-link cta-primary">
          {t('sponsorship.contactCta')}
        </Link>
      </section>
    </div>
  )
}

export default SponsorshipPage
