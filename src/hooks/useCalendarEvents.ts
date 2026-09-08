import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { appConfig, eventCategories } from '../config/appConfig'
import type { EventItem } from '../data/events'
import { fetchGoogleCalendarEvents } from '../utils/googleCalendar'

const apiKey = appConfig.googleCalendarApiKey
const hasCalendarConfig = Boolean(apiKey && eventCategories.some((category) => appConfig.googleCalendarIds[category]))

// Every event surface uses the same live calendars; sample data is never a fallback.
function useCalendarEvents() {
  const { i18n } = useTranslation()
  const [events, setEvents] = useState<EventItem[]>([])
  const [isLoading, setIsLoading] = useState(hasCalendarConfig)
  const [errorKey, setErrorKey] = useState(hasCalendarConfig ? '' : 'events.configMissing')
  const [attempt, setAttempt] = useState(0)
  const locale = i18n.resolvedLanguage ?? 'en'

  useEffect(() => {
    if (!apiKey || !hasCalendarConfig) return
    const controller = new AbortController()
    const load = async () => {
      setIsLoading(true)
      setErrorKey('')
      try {
        const lists = await Promise.all(eventCategories.map(async (category) => {
          const calendarId = appConfig.googleCalendarIds[category]
          if (!calendarId) return []
          const items = await fetchGoogleCalendarEvents({ apiKey, calendarId, locale, signal: controller.signal })
          return items.map((event) => ({ ...event, category }))
        }))
        if (!controller.signal.aborted) setEvents(lists.flat())
      } catch {
        if (!controller.signal.aborted) setErrorKey('events.fetchError')
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }
    void load()
    return () => controller.abort()
  }, [locale, attempt])

  return { events, isLoading, errorKey, hasCalendarConfig, retry: () => setAttempt((value) => value + 1) }
}

export default useCalendarEvents
