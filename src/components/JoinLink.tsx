import { useTranslation } from 'react-i18next'
import { siteLinks } from '../config/siteLinks'
import Icon from './Icon'

function JoinLink({ className = 'cta-link home-primary', onClick }: { className?: string; onClick?: () => void }) {
  const { t } = useTranslation()
  return (
    <a href={siteLinks.join} className={className} target="_blank" rel="noreferrer" onClick={onClick} aria-label={t('involvement.joinAccessible')}>
      {t('nav.join')}<Icon name="external" width="16" height="16" />
    </a>
  )
}

export default JoinLink
