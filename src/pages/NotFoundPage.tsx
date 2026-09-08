import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import bascomHill from '../assets/optimized/bascom_hill.jpg'

function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <div className="not-found-page">
      <section
        className="not-found-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.36), rgba(18, 18, 18, 0.66)), url(${bascomHill})`,
        }}
      >
        <div className="not-found-copy">
          <p className="eyebrow">{t('notFound.eyebrow')}</p>
          <h1>{t('notFound.title')}</h1>
          <p className="hero-copy">{t('notFound.description')}</p>
          <div className="d-flex flex-wrap gap-3">
            <Link to="/" className="cta-link cta-primary">
              {t('notFound.homeCta')}
            </Link>
            <Link to="/events" className="cta-link cta-secondary">
              {t('notFound.eventsCta')}
            </Link>
          </div>
        </div>
      </section>

      <section className="not-found-links" aria-label={t('notFound.helpfulLinks')}>
        <article className="not-found-link-card">
          <h2>{t('notFound.faqTitle')}</h2>
          <p>{t('notFound.faqBody')}</p>
          <Link to="/faq" className="cta-link cta-outline">
            {t('notFound.faqCta')}
          </Link>
        </article>
        <article className="not-found-link-card">
          <h2>{t('notFound.contactTitle')}</h2>
          <p>{t('notFound.contactBody')}</p>
          <Link to="/contact" className="cta-link cta-outline">
            {t('notFound.contactCta')}
          </Link>
        </article>
      </section>
    </div>
  )
}

export default NotFoundPage
