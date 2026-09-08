import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { studentResources } from '../data/studentResources'
import Icon from './Icon'

function ResourceCards() {
  const { t } = useTranslation()
  return (
    <div className="resource-card-grid">
      {studentResources.map((resource) => (
        <article className="info-card resource-card" key={resource.key}>
          <h3>{t(`studentResources.topics.${resource.key}.title`)}</h3>
          <p>{t(`studentResources.topics.${resource.key}.body`)}</p>
          {'to' in resource ? <Link className="text-link" to={resource.to}>{t(resource.action)}<Icon name="arrow" /></Link> : <span className="resource-pending">{t('studentResources.pending')}</span>}
        </article>
      ))}
    </div>
  )
}

export default ResourceCards
