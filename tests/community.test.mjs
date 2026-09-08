import test from 'node:test'
import assert from 'node:assert/strict'
import { loadSource, readTranslations } from './source.mjs'

const { selectUpcomingEvents } = await loadSource('../src/utils/upcomingEvents.ts')
const { primaryNavigation, isNavigationActive } = await loadSource('../src/data/navigation.ts')
const now = Date.parse('2030-09-01T12:00:00Z')
const fixture = (id, startsAt, category = 'communityCulture', endsAt) => ({ id, startsAt, endsAt, category, title: `Test ${id}`, date: '', location: '', description: '', calendarUrl: '' })

test('upcoming preview excludes undated samples and ended events, sorts chronologically and caps at three', () => {
  const events = [fixture('later', '2030-09-05T12:00:00Z'), fixture('sample'), fixture('past', '2029-01-01T12:00:00Z'), fixture('next', '2030-09-02T12:00:00Z'), fixture('middle', '2030-09-03T12:00:00Z'), fixture('fourth', '2030-09-04T12:00:00Z'), fixture('invalid', 'not-a-date')]
  const original = events.map((event) => event.id)
  assert.deepEqual(selectUpcomingEvents(events, undefined, now).map((event) => event.id), ['next', 'middle', 'fourth'])
  assert.deepEqual(events.map((event) => event.id), original)
})

test('career preview filters before its limit and retains an ongoing event until its end', () => {
  const events = [fixture('ongoing', '2030-09-01T11:00:00Z', 'career', '2030-09-01T13:00:00Z'), fixture('community', '2030-09-01T12:30:00Z'), fixture('career', '2030-09-02T12:00:00Z', 'career'), fixture('ended', '2030-09-01T08:00:00Z', 'career', '2030-09-01T09:00:00Z')]
  assert.deepEqual(selectUpcomingEvents(events, 'career', now).map((event) => event.id), ['ongoing', 'career'])
  assert.deepEqual(selectUpcomingEvents([], undefined, now), [])
})

test('legacy URLs retain the correct new navigation parent', () => {
  const owner = (pathname) => primaryNavigation.filter((item) => isNavigationActive(item, pathname)).map((item) => item.to)
  assert.deepEqual(owner('/exchange/arriving-in-madison'), ['/resources'])
  assert.deepEqual(owner('/resources/japanese-students'), ['/resources'])
  assert.deepEqual(owner('/partners'), ['/careers'])
  assert.deepEqual(owner('/sponsorship'), ['/careers'])
  assert.deepEqual(owner('/faq'), ['/about'])
  assert.deepEqual(owner('/board/2025-2026'), ['/board'])
  assert.deepEqual(owner('/'), ['/'])
  assert.deepEqual(owner('/about-invalid'), [])
})

test('new community content has matching EN/JA structure and preserves the supplied purpose and vision', async () => {
  const { en, ja } = await readTranslations()
  const flatten = (value, prefix = '') => Object.entries(value).flatMap(([key, child]) => typeof child === 'object' ? flatten(child, `${prefix}${key}.`) : [`${prefix}${key}`]).sort()
  for (const section of ['community', 'involvement', 'studentResources', 'careerSections', 'nav', 'board']) {
    assert.deepEqual(flatten(en.translation[section]), flatten(ja.translation[section]), section)
  }
  assert.equal(en.translation.community.purposeBody, 'To create a community where people connect through Japan, everyone can find a sense of belonging, and Japanese students can feel at home at UW–Madison.')
  assert.equal(ja.translation.community.visionBody, 'UW–Madisonで、日本を通じてつながるすべての人にとって、いつでも戻ってこられる居場所になる。')
})
