import { useTranslation } from 'react-i18next'
import { Link, Outlet } from 'react-router-dom'
import { boardsByYear, currentBoardYear } from '../data/board'
import BoardYearPage from './BoardYearPage'

export function BoardOverview() {
  const { t } = useTranslation()
  return <>
    <section id="current-board" tabIndex={-1} className="jump-target"><h2 className="saved-heading">{t('board.current')}</h2>{currentBoardYear && boardsByYear[currentBoardYear] ? <BoardYearPage academicYear={currentBoardYear} /> : <div className="info-card resource-card"><p>{t('board.currentPending')}</p><Link className="text-link" to="/contact">{t('nav.contact')}</Link></div>}</section>
    <section id="past-boards" tabIndex={-1} className="jump-target"><h2 className="saved-heading">{t('board.archive')}</h2><p>{t('board.archiveBody')}</p><div className="board-archive-links">{Object.keys(boardsByYear).filter((year) => year !== currentBoardYear).sort().reverse().map((year) => <Link key={year} className="cta-link cta-outline" to={`/board/${year}`}>{year}</Link>)}</div></section>
  </>
}

function BoardPage() {
  const { t } = useTranslation()
  return (
    <div className="d-grid gap-4">
      <div className="section-intro"><p className="section-kicker">{t('board.eyebrow')}</p><h1 className="section-title">{t('board.title')}</h1><p className="section-description">{t('board.description')}</p></div>
      <nav className="section-navigation" aria-label={t('nav.board')}><Link to="/board#current-board">{t('board.current')}</Link><Link to="/board#past-boards">{t('board.archive')}</Link><Link to="/contact">{t('involvement.officerTitle')}</Link></nav>
      <Outlet />
    </div>
  )
}

export default BoardPage
