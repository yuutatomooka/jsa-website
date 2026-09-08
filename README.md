# JSA Website (UW-Madison)

This is the official website for the Japanese Student Association (JSA) at UW-Madison.  
It provides event listings, organization information, study abroad guidance, FAQ, career resources, and a contact form.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router (`HashRouter`)
- React Bootstrap + Bootstrap 5
- i18next / react-i18next

## Local Development

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Run TypeScript build and production build
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint
- `npm test`: Run calendar, navigation, and bilingual content regression tests without external requests

## Environment Variables

The following variables are used for Google Calendar event integration.

```env
VITE_GOOGLE_CALENDAR_API_KEY=your_google_calendar_api_key_here
VITE_GOOGLE_CALENDAR_ID_CAREER=your_career_calendar_id_here
VITE_GOOGLE_CALENDAR_ID_COMMUNITY_CULTURE=your_community_culture_calendar_id_here
VITE_GOOGLE_CALENDAR_ID_COLLABORATIONS=your_collaborations_calendar_id_here
VITE_GOOGLE_CALENDAR_ID_EXTERNAL=your_external_calendar_id_here
```

Copy `.env.example` to `.env` and fill in your values.

## Routing Structure

- `/` Home
- `/about` About
- `/events` Events
- `/resources` Resources overview
- `/resources/japanese-students` Japanese student community and support
- `/resources/uw-madison` Existing UW/Madison guidance and resource placeholders
- `/exchange`
- `/exchange/considering-uw-madison`
- `/exchange/preparing-for-uw-madison`
- `/exchange/arriving-in-madison`
- `/exchange/resources`
- `/board`
- `/board/2025-2026`
- `/board/:year` Published board archive, populated from `src/data/board.ts`
- `/faq`
- `/careers`
- `/partners`
- `/sponsorship`
- `/contact`

## Deployment (GitHub Pages)

Pushes to the `main` branch trigger GitHub Pages deployment via GitHub Actions (`.github/workflows/deploy.yml`).

The following GitHub Secrets are required in Actions.

- `VITE_GOOGLE_CALENDAR_API_KEY`
- `VITE_GOOGLE_CALENDAR_ID_CAREER`
- `VITE_GOOGLE_CALENDAR_ID_COMMUNITY_CULTURE`
- `VITE_GOOGLE_CALENDAR_ID_COLLABORATIONS`
- `VITE_GOOGLE_CALENDAR_ID_EXTERNAL`

## Project Structure (Main)

- `src/pages/`: Page components
- `src/components/`: Reusable UI components
- `src/config/appConfig.ts`: Environment variable loading and app config
- `src/utils/googleCalendar.ts`: Google Calendar fetching logic
- `src/i18n.ts`: English/Japanese translation resources

## Community content and maintenance

The existing design and legacy URLs are retained. The primary navigation is Home, About, Events, Resources, Careers, Board, and Contact. Study Abroad remains at `/exchange` under Resources; FAQ belongs to About, and Partners/Sponsorship belong to Careers. Navigation and footer destinations are shared in `src/data/navigation.ts`.

- **Purpose and bilingual copy:** `src/i18n.ts` contains the supplied purpose, mission, vision, and values, plus synchronized English/Japanese page copy. Continue using this translation system for new content.
- **Join JSA:** `src/config/siteLinks.ts` centralizes the existing Mailchimp newsletter and Instagram destinations. `JoinLink` clearly identifies the newsletter signup; it does not claim to be a formal membership application.
- **Upcoming events:** `src/hooks/useCalendarEvents.ts` uses the existing Google Calendar configuration for Home, Events, and Careers. The compact preview shows at most three current/upcoming records, including ongoing events until their recorded end. Timed labels use Madison time. No sample dates are used as a fallback. Without calendar configuration, the site shows a clear unavailable state and the existing Instagram link.
- **Student resources:** `src/data/studentResources.ts` links only to existing internal guides. ISS, health/wellbeing, and grocery listings are visibly unpublished. Add reviewed information and confirmed URLs before replacing those placeholders.
- **Board continuity:** `src/data/board.ts` preserves the eight existing 2025–2026 officers. Set `currentBoardYear` only after a current roster is confirmed. Optional photo, major, year, and bio translation keys support future profiles; absent fields are omitted and initials stand in for missing photos.
- **Partners and careers:** `src/data/partners.ts` is the existing partner directory shared by Home and Partners. All six existing career program descriptions are retained. Add opportunities, employer relationships, and alumni profiles only when confirmed.
- **Historical context:** The existing About story and enrollment figures remain in the expandable history section. The figures are explicitly labeled as an undated historical snapshot.

## Acknowledgements

This project was initially developed as the final project for COMP SCI 571: Building User Interfaces at UW-Madison in Spring 2026. We would like to thank our instructor, Cole Nelson, for his guidance and support.
