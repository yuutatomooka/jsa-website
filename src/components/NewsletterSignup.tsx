import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'
import Icon from './Icon'

import { siteLinks } from '../config/siteLinks'

function NewsletterSignup() {
  const { t } = useTranslation()

  return (
    <section className="newsletter-band">
      <Container>
        <div className="newsletter-card">
          <span className="newsletter-icon"><Icon name="mail" width="30" height="30" /></span>
          <div className="newsletter-copy">
            <p className="section-kicker">{t('newsletter.eyebrow')}</p>
            <h2 className="newsletter-title">{t('newsletter.title')}</h2>
            <p className="newsletter-description">{t('newsletter.description')}</p>
          </div>
          <Button
            as="a"
            href={siteLinks.join}
            target="_blank"
            rel="noreferrer"
            variant="danger"
          >
            {t('newsletter.button')}
            <Icon name="external" width="17" height="17" />
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default NewsletterSignup
