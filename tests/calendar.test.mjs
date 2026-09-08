import test from 'node:test'
import assert from 'node:assert/strict'
import { loadSource } from './source.mjs'

const { fetchGoogleCalendarEvents } = await loadSource('../src/utils/googleCalendar.ts')

test('live calendar records retain details, time, location and cancellation signal', async (t) => {
  const controller = new AbortController()
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url.searchParams.get('orderBy'), 'startTime')
    assert.equal(url.searchParams.get('singleEvents'), 'true')
    assert.ok(url.searchParams.get('timeMin'))
    assert.equal(options.signal, controller.signal)
    return new Response(JSON.stringify({ items: [{ id: 'fixture', summary: 'Test event', location: 'Test location', description: 'Test description', start: { dateTime: '2030-09-07T17:00:00-05:00' }, end: { dateTime: '2030-09-07T18:00:00-05:00' }, htmlLink: 'https://calendar.google.com/calendar/event?eid=fixture' }] }), { status: 200 })
  })
  const [event] = await fetchGoogleCalendarEvents({ apiKey: 'test-only', calendarId: 'test-only', locale: 'en', signal: controller.signal })
  assert.equal(event.location, 'Test location')
  assert.match(event.date, /5:00/)
  assert.equal(event.startsAt, '2030-09-07T22:00:00.000Z')
  assert.equal(event.endsAt, '2030-09-07T23:00:00.000Z')
  assert.equal(event.detailsUrl, 'https://calendar.google.com/calendar/event?eid=fixture')
  assert.equal(event.allDay, false)
})

test('all-day events remain untimed; incomplete records and unsafe detail links are excluded', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => new Response(JSON.stringify({ items: [
    { id: 'missing-start', summary: 'Incomplete fixture' },
    { id: 'all-day', summary: 'All-day fixture', start: { date: '2030-09-07' }, end: { date: '2030-09-08' }, htmlLink: 'javascript:invalid' },
  ] }), { status: 200 }))
  const events = await fetchGoogleCalendarEvents({ apiKey: 'test-only', calendarId: 'test-only', locale: 'ja' })
  assert.equal(events.length, 1)
  assert.equal(events[0].allDay, true)
  assert.doesNotMatch(events[0].date, /\d:\d/)
  assert.equal(events[0].detailsUrl, undefined)
})

test('calendar failure is an error, never an invented event list', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => new Response(JSON.stringify({ error: { message: 'Test failure' } }), { status: 403 }))
  await assert.rejects(fetchGoogleCalendarEvents({ apiKey: 'test-only', calendarId: 'test-only', locale: 'en' }), /403/)
})
