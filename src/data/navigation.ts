export type NavigationItem = {
  to: string
  label: string
  matches?: string[]
  children?: { to: string; label: string }[]
}

export const primaryNavigation: NavigationItem[] = [
  { to: '/', label: 'nav.home' },
  { to: '/about', label: 'nav.about', matches: ['/faq'], children: [
    { to: '/about', label: 'about.eyebrow' },
    { to: '/about#purpose', label: 'community.purposeMissionValues' },
    { to: '/about#story', label: 'community.history' },
    { to: '/faq', label: 'nav.faq' },
  ] },
  { to: '/events', label: 'nav.events' },
  { to: '/resources', label: 'nav.resources', matches: ['/exchange'], children: [
    { to: '/resources/japanese-students', label: 'studentResources.title' },
    { to: '/exchange', label: 'nav.exchange' },
    { to: '/resources/uw-madison', label: 'studentResources.uwMadisonTitle' },
  ] },
  { to: '/careers', label: 'nav.careers', matches: ['/partners', '/sponsorship'], children: [
    { to: '/careers#career-events', label: 'careerSections.events' },
    { to: '/careers#opportunities', label: 'careerSections.opportunities' },
    { to: '/careers#alumni', label: 'careerSections.alumni' },
    { to: '/partners', label: 'careerSections.partners' },
    { to: '/sponsorship', label: 'involvement.collaborateTitle' },
  ] },
  { to: '/board', label: 'nav.board', children: [
    { to: '/board#current-board', label: 'board.current' },
    { to: '/board#past-boards', label: 'board.archive' },
  ] },
  { to: '/contact', label: 'nav.contact' },
]

export const isNavigationActive = (item: NavigationItem, pathname: string) =>
  [item.to, ...(item.matches ?? [])].some((path) =>
    path === '/' ? pathname === '/' : pathname === path || pathname.startsWith(`${path}/`),
  )
