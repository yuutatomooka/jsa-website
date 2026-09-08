# Home: WIN content migration

The Home page will keep WIN as the content owner. Its page source currently has four top-level `section-cont` blocks: header, hero, accordion, and footer. Keep the header and footer exactly as WIN generated them.

## What is moved now

| React content | WIN owner |
| --- | --- |
| Intro copy, purpose, student and career links | Home HTML editor |
| Upcoming events | CampusGroups events module (`cgparamsevents`) |
| Photos | WIN Photos page / uploaded WIN image URLs |
| Instagram | Link to the official JSA Instagram; no third-party feed script |

## Required Home blocks

Use the Website Builder to create these blocks between the existing header and footer. The visible text is the initial English copy from the React site; it can be edited in WIN afterwards.

1. **Hero / Simple Title**
   - Title: `A home for the Japanese community.`
   - Supporting copy: `JSA brings together Japanese students and anyone interested in Japan to build lasting connections, share culture, and create a community where everyone can find a sense of belonging at UW–Madison.`
   - Links: `Explore Events` → `/JSA/events/`; `Join JSA` → `https://mailchi.mp/6df4c9853b22/uwjsa-newsletter-sign-up`

2. **Featured Events**
   - Heading: `Upcoming events`
   - Preserve the exact CampusGroups module below. Set `limit:3` on Home.

   ```html
   <div cgparamsevents="[{limit:3}]" class="row section-cont__content-events--large">[CONTENT-EVENTS--LARGE]</div>
   ```

3. **About JSA**
   - Heading: `Connected by Japan. Rooted in community.`
   - Copy: `To create a community where people connect through Japan, everyone can find a sense of belonging, and Japanese students can feel at home at UW–Madison.`
   - Link: `Discover our purpose` → `/JSA/about/`

4. **For Japanese Students**
   - Heading: `New to UW–Madison?`
   - Copy: `JSA helps Japanese students connect with one another, navigate life in Madison, and find a community from day one.`
   - Link: `Connect with Japanese students` → `/JSA/japanese-students/`

5. **Get involved**
   - `Attend events` — `Meet people through gatherings, conversation, and shared experiences.` → `/JSA/events/`
   - `Join the community` — `Sign up for the newsletter to hear about events and ways to connect.` → newsletter URL above
   - `Become an officer` — `Interested in helping run JSA? Ask about officer roles and next steps.` → `/JSA/contact-us/`
   - `Collaborate with JSA` — `Explore working together on events, career connections, and community support.` → `/JSA/sponsorship/`

6. **Careers**
   - Heading: `Connections for your next chapter.`
   - Copy: `Explore career events, internship and job-related programs, and connections with alumni and partner organizations.`
   - Link: `Explore careers & opportunities` → `/JSA/careers/`

7. **Community links**
   - `Meet our partners` → `/JSA/partners/`
   - `Life at JSA.` → `https://www.instagram.com/jsamadison/`

## Do not move into the HTML editor

Do not paste the former React bundle, Google Calendar API code, Elfsight/Instagram script, page header/footer, or any `[CONTENT-*]` placeholders. CampusGroups owns the event list; WIN owns all editable copy and links.

## Image handling

Use WIN's uploaded image URLs. The original React hero image is publicly reachable at `https://yuutatomooka.github.io/jsa-website/assets/home_background-C-OzHFzq.jpg`, but upload a managed copy to WIN before relying on it. Do not use local `/src/assets/` paths in WIN.
