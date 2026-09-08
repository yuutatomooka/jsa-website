import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ResourceCards from '../components/ResourceCards'

function UwMadisonResourcesPage() {
  const { t } = useTranslation()
  return <div className="d-grid gap-4"><div className="section-intro"><p className="section-kicker">{t('nav.resources')}</p><h1 className="section-title">{t('studentResources.uwMadisonTitle')}</h1><p className="section-description">{t('studentResources.contentNote')}</p></div><ResourceCards /><p>{t('studentResources.helpBody')} <Link className="text-link" to="/contact">{t('nav.contact')}</Link></p></div>
}

export default UwMadisonResourcesPage
