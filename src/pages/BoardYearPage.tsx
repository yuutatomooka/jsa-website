import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { boardsByYear } from '../data/board'

function BoardYearPage({ academicYear }: { academicYear?: string }) {
  const { t } = useTranslation()
  const { year } = useParams()
  const selectedYear = academicYear ?? year ?? ''
  const members = boardsByYear[selectedYear]
  if (!members) return <div className="info-card resource-card"><h2>{t('board.unavailable')}</h2><Link className="text-link" to="/board">{t('board.archive')}</Link></div>
  return (
    <section className="d-grid gap-3">
      <div className="board-year-header"><h2 className="saved-heading">{selectedYear}</h2><p className="section-description">{t('board.yearIntro', { year: selectedYear })}</p></div>
      <div className="resource-card-grid">
        {members.map((member) => <article className="info-card resource-card board-member" key={member.name}>
          {member.photo ? <img className="board-avatar" src={member.photo} alt={member.name} loading="lazy" width="72" height="72" /> : <span className="board-avatar board-monogram" aria-hidden="true">{member.name.split(' ').map((part) => part[0]).join('')}</span>}
          <h3>{member.name}</h3><p className="board-role">{t(`roles.${member.role}`)}</p>
          {member.majorKey && <p>{t('board.major')}: {t(member.majorKey)}</p>}
          {member.yearKey && <p>{t('board.year')}: {t(member.yearKey)}</p>}
          {member.bioKey && <p>{t(member.bioKey)}</p>}
        </article>)}
      </div>
    </section>
  )
}

export default BoardYearPage
