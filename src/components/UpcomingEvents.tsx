import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import useCalendarEvents from '../hooks/useCalendarEvents'
import type { EventCategory } from '../config/appConfig'
import { siteLinks } from '../config/siteLinks'
import { selectUpcomingEvents } from '../utils/upcomingEvents'
import Icon from './Icon'

function UpcomingEvents({ category }: { category?: EventCategory }) {
  const { t } = useTranslation()
  const { events, isLoading, errorKey, hasCalendarConfig, retry } = useCalendarEvents()
  const upcoming = selectUpcomingEvents(events, category)

  if (isLoading) return <p className="compact-event-state" role="status">{t('events.loading')}</p>
  if (errorKey) return (
    <div className="compact-event-state" role="status">
      <p>{t(errorKey)}</p>
      <div className="d-flex flex-wrap gap-3">
        {hasCalendarConfig && <button className="text-link" type="button" onClick={retry}>{t('events.retry')}</button>}
        <a className="text-link" href={siteLinks.instagram} target="_blank" rel="noreferrer">{t('events.instagramFallback')}<Icon name="external" width="16" height="16" /></a>
      </div>
    </div>
  )
  if (!upcoming.length) return <div className="compact-event-state"><p>{t(category ? 'careerSections.noEvents' : 'events.noUpcomingBody')}</p><Link to={category ? '/events?category=career' : '/events'} className="text-link">{t('community.viewAllEvents')}<Icon name="arrow" /></Link></div>

  return (
    <div className="upcoming-grid">
      {upcoming.map((event) => (
        <article className="event-preview-card upcoming-card" key={`${event.category}:${event.id ?? event.title}`}>
          <p className="upcoming-date"><time dateTime={event.startsAt}>{event.date}</time>{event.allDay && <span> · {t('events.allDay')}</span>}</p>
          <h3>{event.title}</h3>
          {event.location && <p className="event-location">{event.location}</p>}
          <p className="upcoming-description">{event.description}</p>
          <a className="text-link" href={event.detailsUrl ?? event.calendarUrl} target="_blank" rel="noreferrer" aria-label={`${t('events.learnMore')}: ${event.title}`}>{t('events.learnMore')}<Icon name="external" width="16" height="16" /></a>
        </article>
      ))}
    </div>
  )
}

export default UpcomingEvents
