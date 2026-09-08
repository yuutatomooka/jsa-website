export type BoardMember = {
  name: string
  role: string
  photo?: string
  majorKey?: string
  yearKey?: string
  bioKey?: string
}

// Set only after the current academic year's roster has been confirmed.
export const currentBoardYear: string | null = null

export const boardsByYear: Record<string, BoardMember[]> = {
  '2025-2026': [
    { name: 'Julie Walsh', role: 'coPresident' },
    { name: 'Max Maejima', role: 'coPresidentFinance' },
    { name: 'Naomi Morioka', role: 'socialMediaCoordinator' },
    { name: 'Hiroaki Taniyama', role: 'eventCoordinator' },
    { name: 'Akesh Mallia', role: 'eventCoordinator' },
    { name: 'Yuuta Tomooka', role: 'globalRelationsCoordinator' },
    { name: 'Kazumi Choi', role: 'globalRelationsIntern' },
    { name: 'Jolyne Chen', role: 'communicationsCoordinator' },
  ],
}
