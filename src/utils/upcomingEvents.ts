import type { EventCategory } from '../config/appConfig'
import type { EventItem } from '../data/events'

export const selectUpcomingEvents = (events: EventItem[], category?: EventCategory, now = Date.now()) =>
  events.filter((event) => {
    const start = event.startsAt ? Date.parse(event.startsAt) : NaN
    const end = event.endsAt ? Date.parse(event.endsAt) : start
    return Number.isFinite(start) && end >= now && (!category || event.category === category)
  }).sort((a, b) => Date.parse(a.startsAt!) - Date.parse(b.startsAt!)).slice(0, 3)
