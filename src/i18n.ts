import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      community: {
        "purpose": "Purpose",
        "mission": "Mission",
        "vision": "Vision",
        "values": "Values",
        "purposeMissionValues": "Purpose / Mission / Values",
        "purposeBody": "To create a community where people connect through Japan, everyone can find a sense of belonging, and Japanese students can feel at home at UW–Madison.",
        "missionBody": "We bring together people through shared connections to Japan, foster meaningful relationships and cultural exchange, and support Japanese students throughout their life at UW–Madison.",
        "visionBody": "A lasting home for everyone connected by Japan at UW–Madison.",
        "valueItems": {
          "belonging": {
            "title": "Belonging",
            "body": "Everyone should feel that they have a place in JSA."
          },
          "connection": {
            "title": "Connection",
            "body": "We create meaningful relationships through a shared connection to Japan."
          },
          "support": {
            "title": "Mutual Support",
            "body": "We look out for one another and support each other through life at UW–Madison."
          },
          "culture": {
            "title": "Cultural Appreciation",
            "body": "We celebrate, share, and deepen our understanding of Japanese culture with respect and openness."
          }
        },
        "whatWeDo": "What we do",
        "whoFor": "Who JSA is for",
        "whoForBody": "Japanese undergraduate, graduate, professional, and exchange students; students learning Japanese; and people whose interests and experiences connect them to Japan.",
        "activities": {
          "community": {
            "title": "Build lasting connections",
            "body": "Gatherings and conversation create relationships that continue beyond a single event."
          },
          "culture": {
            "title": "Share Japanese culture",
            "body": "Food, seasonal traditions, language exchange, and cultural programs offer ways to learn from one another."
          },
          "support": {
            "title": "Support student life",
            "body": "A community to turn to, connections with other Japanese students, and practical guidance for life at UW–Madison."
          },
          "careers": {
            "title": "Connect to opportunities",
            "body": "Career events, existing program resources, and relationships with alumni and partner organizations help students explore their next steps."
          }
        },
        "history": "JSA’s history & campus context",
        "whatIsJsa": "What is JSA?",
        "homeAboutTitle": "Connected by Japan. Rooted in community.",
        "discoverPurpose": "Discover our purpose",
        "nextTogether": "Our next chance to connect",
        "upcomingEvents": "Upcoming events",
        "viewAllEvents": "View all events",
        "newToUw": "New to UW–Madison?",
        "newToUwBody": "JSA helps Japanese students connect with one another, navigate life in Madison, and find a community from day one.",
        "connectStudents": "Connect with Japanese students",
        "careersTitle": "Connections for your next chapter.",
        "careersBody": "Explore career events, internship and job-related programs, and connections with alumni and partner organizations.",
        "exploreCareers": "Explore careers & opportunities",
        "pastMoments": "Past events & campus life",
        "galleryTitle": "Moments that bring us together.",
        "viewPartners": "Meet our partners",
        "quickLinks": "Quick links",
        "communityLabel": "Community"
      },
      involvement: {
        "title": "Get involved",
        "joinNote": "Start with our newsletter for community updates.",
        "joinAccessible": "Join JSA — sign up for community updates (opens in a new tab)",
        "attendTitle": "Attend events",
        "attendBody": "Meet people through gatherings, conversation, and shared experiences.",
        "communityTitle": "Join the community",
        "communityBody": "Sign up for the newsletter to hear about events and ways to connect.",
        "officerTitle": "Become an officer",
        "officerBody": "Interested in helping run JSA? Ask about officer roles and next steps.",
        "officerAction": "Ask about getting involved",
        "collaborateTitle": "Collaborate with JSA",
        "collaborateBody": "Explore working together on events, career connections, and community support.",
        "collaborateAction": "Explore collaboration"
      },
      studentResources: {
        "title": "For Japanese Students",
        "description": "Connect with other Japanese students, find your footing in Madison, and build a community you can turn to throughout your time at UW–Madison.",
        "hubTitle": "Support for life at UW–Madison.",
        "hubBody": "Find the right starting point: the Japanese student community, study abroad guidance, or campus and Madison resources.",
        "overview": "Resources overview",
        "uwMadisonTitle": "UW & Madison Resources",
        "uwMadisonBody": "Existing student-life guides and space for reviewed campus and local resources.",
        "exchangeBody": "Explore the existing guides to considering UW–Madison, preparing to arrive, and settling into life in Madison.",
        "exchangeAction": "Explore study abroad guidance",
        "browseResources": "Browse resources",
        "welcomeTitle": "A place to turn to, from day one.",
        "connectTitle": "Join the Japanese student community",
        "connectBody": "Whether you have just arrived or have been here for years, connect with JSA through events and community updates. Send us a message if you would like to meet other Japanese students.",
        "sayHello": "Say hello to JSA",
        "welcomeEventsTitle": "New student & welcome events",
        "welcomeEventsBody": "Find published gatherings on the events calendar. Welcome-event details will appear when announced; you can contact JSA before attending your first event.",
        "lifeTitle": "Finding your way in Madison",
        "contentNote": "Start with the guides already available below. Topics marked “Details to come” do not yet have reviewed resource listings.",
        "pending": "Details to come",
        "existingGuide": "Read the Madison guide",
        "existingResources": "See existing student resources",
        "preparationGuide": "Read the preparation guide",
        "helpTitle": "A question, a concern, or just a hello.",
        "helpBody": "Contact JSA if you would like to meet people or ask about the community. You do not need to have a specific question to get in touch.",
        "topics": {
          "living": {
            "title": "Living in Madison",
            "body": "Get started with the existing guide to your first weeks, campus life, and meeting people."
          },
          "uw": {
            "title": "UW resources",
            "body": "Find the site’s existing student resources, FAQs, events, and contact options."
          },
          "iss": {
            "title": "International Student Services",
            "body": "Reviewed International Student Services links and contacts have not yet been published here."
          },
          "housing": {
            "title": "Housing",
            "body": "The preparation guide includes introductory housing information. Reviewed housing listings are not yet available here."
          },
          "health": {
            "title": "Health & wellbeing",
            "body": "Reviewed campus health and wellbeing contacts have not yet been published here."
          },
          "groceries": {
            "title": "Japanese & Asian groceries",
            "body": "A reviewed list of local Japanese and Asian grocery stores is not yet available here."
          },
          "careers": {
            "title": "Career resources",
            "body": "Explore career events and the existing collection of programs and partner organizations."
          }
        }
      },
      careerSections: {
        "description": "Explore career events, existing programs, and connections through Japan. JSA brings career opportunities and community relationships into the same conversation.",
        "events": "Career Events",
        "opportunities": "Internship & Job Opportunities",
        "alumni": "Alumni Connections",
        "partners": "Partners / Employers",
        "viewEvents": "View career events",
        "noEvents": "No upcoming career events are listed right now. Check the events page for future announcements.",
        "opportunitiesNote": "Explore the programs and organizations already collected here. Check current application dates and eligibility with each program.",
        "alumniBody": "Interested in sharing your experience or connecting with the community? Contact JSA. Alumni profiles and specific networking opportunities will be listed when confirmed.",
        "partnersBody": "Meet the organizations in JSA’s existing partner directory, spanning careers, campus programs, and cultural exchange.",
        "collaborateBody": "Start a conversation about career events, student opportunities, sponsorship, or other ways to support the community.",
        "collaborateAction": "Explore collaboration & sponsorship"
      },
      siteTitle: 'Japanese Student Association at UW-Madison',
      nav: {
        resources: "Resources",
        join: "Join JSA",
        sectionMenu: "{{section}} sections",

        home: 'Home',
        about: 'About',
        events: 'Events',
        exchange: 'Study Abroad',
        board: 'Board',
        faq: 'FAQ',
        careers: 'Careers',
        partners: 'Partners',
        contact: 'Contact',
      },
      lang: {
        en: 'EN',
        ja: 'JA',
      },
      common: {
        organizationName: 'Japanese Student Association',
        skipContent: 'Skip to main content',
        mainNavigation: 'Main navigation',
        footerNavigation: 'Footer navigation',
        language: 'Language',
        toggleNavigation: 'Toggle navigation',
        optional: '(optional)',
        requiredFields: 'Fields marked * are required.',
        noSavedEvents: 'No saved events yet',
        savedEventsPreview: 'Saved events',
        savedSnapshot: 'Your saved list',
      },
      notFound: {
        eyebrow: '404',
        title: 'This page is not\non the map.',
        description:
          'The link may be outdated or the page may have moved. Use the links below to get back to JSA.',
        homeCta: 'Go Home',
        eventsCta: 'View Events',
        helpfulLinks: 'Helpful links',
        faqTitle: 'Questions about JSA?',
        faqBody:
          'Check answers about membership, events, and getting involved.',
        contactTitle: 'Still looking?',
        contactBody:
          'Send us a message and we can point you in the right direction.',
        faqCta: 'Read FAQ',
        contactCta: 'Contact JSA',
      },
      categories: {
        career: 'Career',
        communityCulture: 'Community & Culture',
        collaborations: 'Collaborations',
        external: 'External',
      },
      roles: {
        coPresident: 'Co-President',
        coPresidentFinance: 'Co-President & Finance Officer',
        socialMediaCoordinator: 'Social Media Coordinator',
        eventCoordinator: 'Event Coordinator',
        globalRelationsCoordinator: 'Global Relations Coordinator',
        globalRelationsIntern: 'Global Relations Intern',
        communicationsCoordinator: 'Communications Coordinator',
      },
      newsletter: {
        eyebrow: 'Newsletter',
        title: 'Stay up to date with JSA',
        description:
          'Sign up for our newsletter to hear about upcoming events, announcements, and community updates.',
        button: 'Sign up',
      },
      home: {
        supportingLine: 'A place for everyone to connect through Japan.',
        titleLead: 'A home for the',
        titleAccent: 'Japanese community.',
        welcome: 'All backgrounds. All language levels. All welcome.',
        photoAlt: 'JSA members gathering for an onigiri-making event at UW–Madison',
        photoCaption: 'A little taste of home, together.',
        communityEyebrow: 'Find your people',
        communityTitle: 'Many ways to feel at home.',
        communityDescription: 'Come for the culture. Stay for the connections.',
        culturalAction: 'Find an event',
        languageAction: 'Get to know JSA',
        careerAction: 'Explore opportunities',
        instagramEyebrow: 'Our community, in moments',
        instagramTitle: 'Life at JSA.',
        instagramDescription: 'Campus life, shared traditions, and everything in between.',
        loadFeed: 'Show latest Instagram posts',
        feedLoading: 'Loading the latest posts…',
        openInstagram: 'View on Instagram',
        feedError: 'Instagram could not load here. You can still see our latest posts on Instagram.',
        onigiriAlt: 'Onigiri-making with the JSA community',
        festivalAlt: 'JSA spring festival',
        campusAlt: 'Bascom Hill at UW–Madison',
        eyebrow: 'UW-Madison Registered Student Organization',
        title: 'A home for the Japanese community',
        description:
          'JSA brings together Japanese students and anyone interested in Japan to build lasting connections, share culture, and create a community where everyone can find a sense of belonging at UW–Madison.',
        ctaEvents: 'Explore Events',
        ctaAbout: 'Learn About JSA',
        culturalTitle: 'Cultural Community',
        culturalBody:
          'We celebrate traditions, seasonal events, and casual gatherings that help students feel at home.',
        languageTitle: 'Language Exchange',
        languageBody:
          'We create approachable spaces for students to practice Japanese conversation and build confidence.',
        careerTitle: 'Career Support',
        careerBody:
          'We share opportunities, alumni connections, and professional events for both international and domestic students.',
      },
      about: {
        eyebrow: 'About JSA',
        title: 'A lasting home, connected by Japan.',
        description:
          'Learn how JSA supports Japanese students, language learners, and anyone hoping to connect with Japanese culture at UW-Madison.',
        storyTitle: 'JSA at UW-Madison',
        storyP1:
          'The Japanese Student Association (JSA) at UW-Madison was founded in 2014. Although the Japanese student population is relatively small, UW-Madison has one of the largest Japanese language programs in the Midwest, with around 400 learners. JSA supports both the Japanese student community and students learning Japanese through campus activities and collaboration with the Japanese program.',
        storyP2:
          'UW-Madison has a long relationship with Japan. The university has developed research partnerships, study abroad pathways, and international internships, and it maintains exchange agreements with universities such as Waseda, Keio, and Kyoto University.',
        storyP3:
          'JSA is open to undergraduate, graduate, and professional students from all backgrounds. Through monthly events and cultural exchange programs, members can learn about Japanese culture and build strong connections on campus.',
        storyP4:
          'Activities include Japanese meals, karaoke, movie nights, and discussion events. We focus on creating a friendly space where people can learn from one another.',
        storyP5:
          'JSA aims to help students build both academic and social connections through Japanese culture. UW-Madison also offers Japan-related opportunities such as the JR Central internship and alumni networking. For details, please visit our Events and Contact pages.',
        missionTitle: 'Mission',
        missionBody:
          'We support students through events that make campus feel smaller, warmer, and more connected.',
        hostTitle: 'What We Host',
        hostBody:
          'Cultural programs, conversation tables, social mixers, and professional development opportunities.',
        communityEyebrow: 'UW and Japan',
        communityTitle: 'Japanese student community at UW-Madison',
        communityDescription:
          'An enrollment snapshot preserved from the site’s existing records. The reporting period has not been recorded; these figures should not be read as current enrollment.',
        communityTotalLabel: 'Students from Japan',
        communityTotalContext: 'Total across the enrollment rows below',
        undergraduateLabel: 'Undergraduate students',
        undergraduateContext: 'Freshman through senior levels',
        graduateLabel: 'Graduate students',
        graduateContext: 'Master’s and PhD levels',
        sourceLabel: 'Source',
        sourceValue:
          'Office of the Registrar, University of Wisconsin-Madison (Enrollment Reports)',
        academicLevels: {
          freshman: 'Freshman',
          sophomore: 'Sophomore',
          junior: 'Junior',
          senior: 'Senior',
          masters: 'Masters',
          phd: 'PhD',
          specialStudent: 'Special students (exchange students, etc.)',
        },
        table: {
          academicLevel: 'Academic Level / Program',
          count: 'Students',
        },
      },
      board: {
        current: "Current Board",
        archive: "Past Boards / Archive",
        currentPending: "The current academic year’s roster has not yet been published here. For now, meet the 2025–2026 officers in the archive or contact JSA.",
        archiveBody: "The people who have helped carry JSA forward, organized by academic year.",
        unavailable: "This board directory is not available.",
        yearIntro: "Meet the officers who served during {{year}}.",
        major: "Major",
        year: "Year",

        eyebrow: 'Board',
        title: 'Meet the student leaders shaping this community.',
        description:
          'Meet the officers who organize JSA programs, events, and student support.',
        yearLabel: 'Board member directory',
        yearDescription: 'Meet the officers serving JSA during the 2025-2026 academic year.',
      },
      events: {
        allDay: "All day",
        learnMore: "Learn more",
        retry: 'Try again',
        instagramFallback: 'Check Instagram for updates',
        clearFilters: 'Clear filters',
        resultCount_one: '{{count}} event',
        resultCount_other: '{{count}} events',
        noUpcomingTitle: 'More good times are on the way.',
        noUpcomingBody: 'There are no upcoming events listed right now. Follow us on Instagram for the next announcement.',
        eyebrow: 'Events',
        title: 'See what is coming up at JSA.',
        description:
          'Explore upcoming gatherings, cultural programs, and community events hosted by JSA. Search by keyword, save events for later, or add them directly to Google Calendar.',
        loading: 'Loading events...',
        configMissing: 'Our event calendar is temporarily unavailable. Check Instagram for upcoming gatherings.',
        fetchError: 'We couldn’t load the event calendar. Please try again, or find the latest updates on Instagram.',
        emptyTitle: 'No events found',
        emptyBody: 'Try a different search, category, or date — or clear your filters to see everything.',
        search: 'Search events',
        searchPlaceholder: 'Search by keyword',
        category: 'Category',
        all: 'All',
        dateFilter: 'Date',
        allDates: 'All Dates',
        today: 'Today',
        thisWeek: 'This Week',
        thisMonth: 'This Month',
        customRange: 'Custom Range',
        startDate: 'Start Date',
        endDate: 'End Date',
        savedCount_one: 'You have {{count}} saved event.',
        savedCount_other: 'You have {{count}} saved events.',
        noSavedBody:
          'Use the save button above to keep track of events you want to revisit.',
        save: 'Save Event',
        saved: 'Saved',
        removeSaved: 'Remove',
        addToCalendar: 'Add to Calendar',
      },
      exchange: {
        eyebrow: 'Exchange & Study Abroad',
        title: 'For exchange students and students considering study abroad.',
        description:
          'This section helps incoming exchange students, visiting students, and UW-Madison students exploring study abroad opportunities connected to Japan.',
        considering: {
          eyebrow: 'Considering UW-Madison',
          heroHeadline:
            'Study at a top U.S. public university and build a real support network.',
          whyTitle: 'Why UW-Madison',
          whyBody:
            'UW-Madison is a strong choice if you want both academic quality and a practical student-life experience. You will find globally recognized programs, active research opportunities, and a large campus community where international students can meet peers quickly.',
          pillar1Title: 'Top-Ranked Public University',
          pillar1Body: 'Consistently recognized among the strongest U.S. public universities.',
          pillar2Title: 'Strong Academics & Research',
          pillar2Body: 'Leading programs with research labs and project-based learning.',
          pillar3Title: 'Vibrant Community',
          pillar3Body: 'A large student network with active organizations and events.',
          pillar4Title: 'Beautiful Campus & Location',
          pillar4Body: 'Lakeside campus life in a safe and student-friendly college city.',
          quickFactsTitle: 'Quick Facts',
          quickFact1:
            'Ranked around #36 overall and #12 among U.S. public universities in the 2026 U.S. News rankings.',
          quickFact1b:
            'Consistently recognized as one of the top public universities in the United States.',
          quickFact2:
            'Education is ranked around the No.1 among U.S.universities (in the latest U.S. News rankings).',
          quickFact4:
            'Large university scale means many course choices, student organizations, and campus resources, but you should expect to plan early for popular classes.',
          quickFact5:
            'Madison, Wisconsin is a safe, student-focused capital city with strong quality of life.',
          academicsTitle: 'Academics',
          academicsBody:
            'Strong options include Education,Computer Science, Engineering, and Business, with opportunities to join labs, design teams, and career-focused events. Some gateway courses are challenging, and intro classes can be large, so it helps to use office hours, study groups, and advising early.',
          studentLifeTitle: 'Student Life',
          studentLifeBody:
            'Housing costs vary by location and style, but many students budget roughly $800-$1,500/month for rent. Groceries and meals are manageable with planning, and campus food options are broad. Madison winters are serious: snow, wind, and below-freezing days are normal, so a proper coat, boots, and layers are essential for daily life.',
          whyJsaTitle: 'Why JSA',
          whyJsaBody:
            'JSA helps exchange and international students find people quickly, ask practical questions, and feel less isolated in the first months. From events to everyday advice, you are not expected to figure everything out alone.',
          voicesTitle: 'Student Voices',
          voice1:
            '"My first semester was hard academically, but joining a student group made Madison feel smaller and friendlier."',
          voice2:
            '"Winter surprised me, but once I bought proper gear, campus life became much easier."',
          voice3:
            '"The classes are demanding, but I gained practical skills and better confidence in English discussion."',
          ctaEyebrow: 'Next Step',
          ctaTitle: 'If this feels like the right direction, start preparing early.',
          ctaBody:
            'Compare your course goals, budget, and climate preferences now, then move to "Preparing for UW-Madison" to build your checklist.',
        },
        subnavConsidering: 'Considering UW-Madison',
        subnavPreparing: 'Preparing for UW-Madison',
        subnavArriving: 'Arriving in Madison',
        subnavResources: 'Current Students / Resources',
        preparingEyebrow: 'Before Departure',
        preparingTitle: 'Preparing for UW-Madison',
        preparingDescription:
          'Plan the essentials early, including housing, academics, visa timing, and the support networks you will use after arrival.',
        preparingHousingTitle: 'Housing',
        preparingHousingBody:
          'Start housing research early. Compare on-campus options and off-campus leases, and check move-in dates, contract terms, and commuting time before you decide.',
        preparingCoursesTitle: 'Courses',
        preparingCoursesBody:
          'Draft a realistic course plan with your home university requirements in mind. Some high-demand classes fill quickly, so prepare alternatives before registration opens.',
        preparingVisaTitle: 'Visa',
        preparingVisaBody:
          'Track visa timelines carefully from DS-2019/I-20 issuance through interview scheduling and entry deadlines. Keep digital and printed copies of key documents.',
        preparingFinanceTitle: 'Finance',
        preparingFinanceBody:
          'Build a monthly budget for rent, food, transport, books, and winter gear. Confirm how you will handle banking, card fees, and emergency expenses in the U.S.',
        preparingEssentialsTitle: 'Essentials',
        preparingEssentialsBody:
          'Prepare practical basics: health insurance confirmation, medication refills, weather-appropriate clothing, SIM plan, and important campus contacts for your first month.',
        arrivingEyebrow: 'First Weeks On Campus',
        arrivingTitle: 'Arriving in Madison',
        arrivingDescription:
          'Use your first weeks to settle your routines, build community, and connect with events and organizations that make campus life easier.',
        firstWeeksTitle: 'Your First Weeks',
        firstWeeksBody:
          'In the first few weeks, focus on setting up daily essentials, learning how campus works, and finding a few people or places you can return to. You do not have to figure everything out at once.',
        campusLifeTitle: 'Campus Life',
        campusLifeBody:
          'Get familiar with your class buildings, libraries, dining options, bus routes, and student services. Small routines make the campus feel much easier to navigate.',
        communityTitle: 'Finding Community',
        communityBody:
          'Student organizations, language tables, and cultural events are some of the easiest ways to meet people. JSA events are open to students who want a friendly place to start.',
        languageTitle: 'Language Support',
        languageBody:
          'Whether you want to practice English, Japanese, or both, conversation-based events can help you build confidence and meet people naturally.',
        resourcesEyebrow: 'Practical Resources',
        resourcesTitle: 'Current Students / Resources',
        resourcesDescription:
          'Use these pages and channels to find events, common answers, career opportunities, and direct support from JSA.',
        ctaEvents: 'View Events',
        ctaFaq: 'Read the FAQ',
        ctaContact: 'Contact JSA',
        beforeArrivalBody:
          'Start by checking housing, course planning, visa timelines, and what kind of support network you want once you get to Madison.',
        supportBody:
          'If you are unsure where to start, the best next step is to look through upcoming events, read the FAQ, or reach out through the contact form.',
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Common questions from new and prospective members.',
        description:
          'This page helps reduce friction for visitors who want to join events, practice Japanese, or learn what to expect.',
        q1: 'Who can be part of JSA?',
        a1: 'JSA includes undergraduates, graduate and professional students, Japanese American students, students from Japan, exchange students, and students with no Japanese background at all. If you are interested, you are welcome here.',
        q2: 'Are there any requirements to join?',
        a2: 'Not really. JSA is open to all UW-Madison students. You do not need to be Japanese, and you do not need to speak Japanese. There is currently no membership fee, no formal sign-up system, and no required number of events you have to attend.',
        q3: "Can I still join if I don't speak Japanese or if I'm not Japanese?",
        a3: 'Yes, absolutely. JSA is meant to be a welcoming space for students with all kinds of backgrounds, identities, and language levels. If you are unsure about whether JSA is a good fit, feel free to reach out.',
        q4: 'How often does JSA host events?',
        a4: 'We usually host events every other week during the fall and spring semesters. The best way to keep up with what is happening is to check our Instagram, email updates, or the Events page.',
        q5: 'How do I come to an event for the first time? Can I join mid-semester?',
        a5: 'You can start coming to events at any point in the semester. We share times and locations through our website, Instagram, email, and other platforms. Feel free to join at whatever pace feels comfortable. JSA is always happy to welcome new people, and if you are nervous about coming for the first time, you can message us and we will help.',
        q6: 'What kinds of events does JSA put on?',
        a6: 'JSA hosts a wide variety of events that introduce Japanese culture and help students build community in Madison. That can include Japanese food events, movie nights, outings around Madison, seasonal celebrations, and recurring traditions like Spring Festival. We also host support events for students interested in working in Japan. You can find more details on the Events page.',
        q7: 'Who is the JSA advisor?',
        a7: 'Associate Professor Naomi Geyer of the Japanese Language and Linguistics from the Department of East Asian Languages and Literature.',
      },
      careers: {
        eyebrow: 'Careers',
        title: 'Career support for students exploring Japan-related pathways.',
        description:
          "JSA supports students interested in Japan-related careers by sharing opportunities, hosting events, and connecting them with our partners.",
        jelperClubTitle: 'Jelper Club',
        jelperClubBody:
          'A platform for high-achieving students interested in professional opportunities and authentic cultural experiences in Japan, regardless of Japanese proficiency.',
        tkfTitle: 'TKF Global',
        tkfBody:
          'A student-led career support community with a large mentor network of students and graduates who have received offers from top-tier companies. It provides practical, firsthand job-search advice. (Advanced-level Japanese proficiency required.)',
        careerForumTitle: 'Career Forum (by Career-tasu, Inc.)',
        careerForumBody:
          'A well-established career resource for students with study abroad experience and Japanese-English bilingual professionals. Its events now take place in Boston, Los Angeles, Tokyo, Osaka, and London, creating opportunities for global companies and bilingual talent to connect.',
        jetTitle: 'JET Program',
        jetBody:
          'A competitive employment opportunity that allows participants to live and work in cities, towns, and villages throughout Japan. Most serve as Assistant Language Teachers (ALTs) in public and private schools; some work as Coordinators for International Relations (CIRs), often supporting interpretation and translation.',
        jrCentralTitle: 'JR Central Internship',
        jrCentralBody:
          'This internship gives students a close look at one of the world’s leading high-speed-rail operators and the professional culture of Japan. Developed by University of Wisconsin–Madison alumnus and JR Central Chairman Emeritus Yoshiyuki Kasai, it allows two to three students to spend eight weeks in various roles with the company.',
        jFindTitle: 'J-Find Visa',
        jFindBody:
          'The Future Creation Individual Visa (J-Find) allows graduates of highly ranked overseas universities, including UW-Madison, to receive "Designated Activities" residence status while job hunting or preparing to start a business in Japan, enabling them to stay for up to two years.',
      },
      partners: {
        eyebrow: 'Partners',
        title: 'Organizations helping JSA connect students with opportunities.',
        description:
          'JSA works with partner organizations that support students exploring Japan-related careers, professional development, and cross-cultural connections.',
        partnerListLabel: 'Partner organizations',
        visitWebsite: 'Visit Website',
        sponsorEyebrow: 'Sponsorship',
        sponsorTitle: 'Become a JSA sponsor',
        sponsorDescription:
          'We welcome companies and organizations interested in supporting cultural exchange, student events, career programming, and the Japanese community at UW-Madison.',
        sponsorCta: 'View Sponsorship Benefits',
        items: {
          jelperClub: {
            name: 'Jelper Club',
            type: 'Career Platform',
            logoAlt: 'Jelper Club logo',
            description:
              'A career platform connecting students and recent graduates with Japan-focused internship, job, and community opportunities.',
          },
          tkfGlobal: {
            name: 'TKF Global',
            type: 'Career Support',
            logoAlt: 'TKF Global logo',
            description:
              'A career support initiative for students at universities outside Japan, offering mentoring, events, and job-search guidance for Japan-related careers.',
          },
          careerForum: {
            name: 'Career Forum / Career-tasu',
            type: 'Career Events',
            logoAlt: 'Career Forum logo',
            description:
              'An international career event series and career resource for Japanese-English bilingual students and professionals.',
          },
          jaswi: {
            name: 'Japan America Society of Wisconsin (JASWI)',
            type: 'Community Organization',
            logoAlt: 'Japan America Society of Wisconsin logo',
            description:
              'A Wisconsin nonprofit organization promoting and strengthening U.S.-Japan relations through community programs, events, and cross-sector collaboration.',
          },
          ceas: {
            name: 'Center for East Asian Studies (CEAS)',
            type: 'Academic Center',
            logoAlt: 'Center for East Asian Studies logo',
            description:
              'A UW-Madison center supporting East Asia-related research, education, and outreach, with programming connected to China, Japan, and Korea.',
          },
          japaneseProgram: {
            name: 'Japanese Program at UW-Madison',
            type: 'Academic Program',
            logoAlt: 'Japanese Program at UW-Madison logo',
            description:
              'UW-Madison’s Japanese program offers language, culture, literature, and linguistics courses for students building deeper engagement with Japan.',
          },
        },
      },
      sponsorship: {
        eyebrow: 'Sponsorship',
        title: 'Support a community that connects UW-Madison and Japan.',
        description:
          'Sponsorship helps JSA host cultural programs, career events, and community gatherings while giving organizations a meaningful way to connect with students interested in Japan.',
        contactCta: 'Contact JSA',
        benefitsEyebrow: 'Benefits',
        benefitsTitle: 'Why sponsor JSA',
        formatsEyebrow: 'Ways to Support',
        formatsTitle: 'Flexible sponsorship opportunities',
        formatsDescription:
          'We can shape sponsorship around your goals, from event support to career programming and in-kind contributions.',
        nextEyebrow: 'Next Step',
        nextTitle: 'Start a sponsorship conversation',
        nextBody:
          'Tell us what kind of audience, event, or student support you have in mind. We will follow up with a sponsorship option that fits your organization.',
        benefits: {
          visibility: {
            label: 'Visibility',
            title: 'Be seen by Japan-connected students',
            body:
              'Sponsors can be recognized through JSA event materials, website placement, and communication channels tied to relevant programming.',
          },
          studentEngagement: {
            label: 'Engagement',
            title: 'Meet students in a trusted setting',
            body:
              'Sponsorship can create space for approachable conversations with students through events, info sessions, or collaborative programming.',
          },
          communityImpact: {
            label: 'Impact',
            title: 'Support cultural exchange on campus',
            body:
              'Your support helps make student-led cultural events more accessible, welcoming, and sustainable throughout the academic year.',
          },
          careerConnection: {
            label: 'Career',
            title: 'Connect with globally minded talent',
            body:
              'JSA reaches students interested in Japan, language, culture, business, technology, education, and cross-border careers.',
          },
          collaboration: {
            label: 'Collaboration',
            title: 'Build programming around shared goals',
            body:
              'We can collaborate on career panels, cultural workshops, speaker events, or student resources that match sponsor priorities.',
          },
          relationship: {
            label: 'Relationship',
            title: 'Grow a long-term campus presence',
            body:
              'Sponsorship gives organizations a consistent way to support and stay connected with the UW-Madison Japanese community.',
          },
        },
        formats: {
          eventSponsor: {
            title: 'Event sponsorship',
            body:
              'Support a cultural event, social gathering, speaker session, or student program hosted by JSA.',
          },
          careerPartner: {
            title: 'Career programming partner',
            body:
              'Collaborate on panels, workshops, company introductions, or Japan-related professional development events.',
          },
          cultureSupporter: {
            title: 'Cultural program supporter',
            body:
              'Help fund materials, food, venue needs, and activities that make cultural programming possible.',
          },
          inKind: {
            title: 'In-kind support',
            body:
              'Provide goods, services, space, or other resources that directly support student experiences.',
          },
        },
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Reach out with questions, collaboration ideas, or event interest.',
        description:
          'Use this form to contact JSA about membership, events, collaboration, sponsorship, or general questions.',
        formFallback: 'If the custom form does not work, open the original Google Form in a new tab.',
        openForm: 'Open Google Form',
        successTitle: 'Check the Google Forms tab.',
        successBody: 'Your submission opens in a new tab. Please check Google Forms for confirmation. Your draft is still saved here.',
        submitFrameTitle: 'Google Form submission frame',
        draft:
          'This form now keeps a local draft, so reloading the page does not immediately erase your progress.',
        name: 'Name',
        email: 'Email',
        affiliation: 'Affiliation',
        inquiryType: 'Inquiry Type',
        subject: 'Subject',
        message: 'Message',
        placeholderName: 'Your name',
        placeholderEmail: 'name@wisc.edu',
        placeholderAffiliation: 'UW-Madison student, organization, company, etc.',
        placeholderSubject: 'What is this about?',
        placeholderMessage: 'How can JSA help?',
        selectPlaceholder: 'Select one',
        googleNotice: 'Submitting opens Google Forms in a new tab so you can confirm delivery. Your draft stays on this device.',
        inquiryOptions: {
          general: 'General Inquiry',
          eventParticipation: 'Event Participation',
          collaboration: 'Collaboration / Sponsorship',
          membership: 'Membership',
          other: 'Other',
        },
        submit: 'Send Inquiry',
      },
    },
  },
  ja: {
    translation: {
      community: {
        "purpose": "存在意義",
        "mission": "ミッション",
        "vision": "ビジョン",
        "values": "大切にする価値観",
        "purposeMissionValues": "存在意義・ミッション・価値観",
        "purposeBody": "日本を接点として人と人がつながり、誰もが居場所を感じられるコミュニティをつくるとともに、日本人学生がUW–Madisonで安心して生活できる心の拠り所となる。",
        "missionBody": "日本とのつながりを通じて、人々が出会い、交流し、互いを支え合える機会をつくる。同時に、日本人学生がUW–Madisonでの生活を安心して送れるよう、コミュニティとして支える。",
        "visionBody": "UW–Madisonで、日本を通じてつながるすべての人にとって、いつでも戻ってこられる居場所になる。",
        "valueItems": {
          "belonging": {
            "title": "居場所",
            "body": "一人ひとりが、JSAに自分の居場所があると感じられることを大切にします。"
          },
          "connection": {
            "title": "つながり",
            "body": "日本という共通の接点を通じて、人と人との確かなつながりを育みます。"
          },
          "support": {
            "title": "支え合い",
            "body": "互いを気にかけ、UW–Madisonでの生活を支え合います。"
          },
          "culture": {
            "title": "日本文化への理解と敬意",
            "body": "敬意と開かれた姿勢を持ち、日本文化を楽しみ、共有し、理解を深めます。"
          }
        },
        "whatWeDo": "私たちの活動",
        "whoFor": "JSAにつながる人たち",
        "whoForBody": "日本人の学部生・大学院生・専門職学生・交換留学生、日本語を学ぶ学生、そして日本への関心や経験を持つ人々がつながるコミュニティです。",
        "activities": {
          "community": {
            "title": "続いていくつながりをつくる",
            "body": "集まりや会話をきっかけに、一度のイベントで終わらない関係を育みます。"
          },
          "culture": {
            "title": "日本文化を分かち合う",
            "body": "食や季節の行事、言語交流、文化企画を通じて、互いに学ぶ機会をつくります。"
          },
          "support": {
            "title": "学生生活を支え合う",
            "body": "日本人学生同士のつながりや生活の情報を通じて、UW–Madisonで頼れるコミュニティをつくります。"
          },
          "careers": {
            "title": "次の機会へつなげる",
            "body": "キャリアイベントや既存のプログラム情報、卒業生・提携団体とのつながりを通じて、将来を考えるきっかけを届けます。"
          }
        },
        "history": "JSAの歩みと大学とのつながり",
        "whatIsJsa": "JSAとは",
        "homeAboutTitle": "日本でつながり、ここに居場所を。",
        "discoverPurpose": "JSAの想いを知る",
        "nextTogether": "次の出会いのきっかけに",
        "upcomingEvents": "今後のイベント",
        "viewAllEvents": "すべてのイベントを見る",
        "newToUw": "UW–Madisonでの生活を始める方へ",
        "newToUwBody": "日本人学生同士のつながり、マディソンでの暮らし、初日から頼れる仲間。JSAが新しい生活の一歩を支えます。",
        "connectStudents": "日本人学生とつながる",
        "careersTitle": "つながりを、次の一歩へ。",
        "careersBody": "キャリアイベントやインターンシップ・就職関連のプログラム、卒業生や提携団体とのつながりを紹介します。",
        "exploreCareers": "キャリア・機会を探す",
        "pastMoments": "これまでのイベントとキャンパスの日常",
        "galleryTitle": "一緒につくる、思い出。",
        "viewPartners": "提携団体を見る",
        "quickLinks": "主なページ",
        "communityLabel": "コミュニティ"
      },
      involvement: {
        "title": "JSAに関わる",
        "joinNote": "まずはニュースレターで、コミュニティの最新情報を。",
        "joinAccessible": "JSAに参加する — ニュースレターに登録（別タブで開きます）",
        "attendTitle": "イベントに参加する",
        "attendBody": "集まりや会話、一緒に過ごす時間を通じて、仲間と出会う。",
        "communityTitle": "コミュニティにつながる",
        "communityBody": "ニュースレターに登録して、イベントや交流の機会を受け取る。",
        "officerTitle": "運営に関わる",
        "officerBody": "JSAを一緒につくりたい方へ。役員の活動や関わり方について、お問い合わせください。",
        "officerAction": "運営への参加を相談する",
        "collaborateTitle": "JSAと協力する",
        "collaborateBody": "イベントやキャリア支援、コミュニティづくりでの連携を考える。",
        "collaborateAction": "連携について知る"
      },
      studentResources: {
        "title": "日本人学生の方へ",
        "description": "日本人学生同士でつながり、マディソンでの暮らしに少しずつ慣れ、UW–Madisonでの生活を通じて頼れる仲間を見つけませんか。",
        "hubTitle": "UW–Madisonでの暮らしを、つながりから。",
        "hubBody": "日本人学生のコミュニティ、留学準備、大学やマディソンの生活情報。今の自分に合った入口から探せます。",
        "overview": "リソース一覧",
        "uwMadisonTitle": "大学・マディソンの生活情報",
        "uwMadisonBody": "既存の学生生活ガイドと、大学・地域の情報をまとめるページです。",
        "exchangeBody": "UW–Madisonへの留学を考える段階から、渡航準備、到着後の生活まで、既存のガイドをご覧いただけます。",
        "exchangeAction": "留学ガイドを見る",
        "browseResources": "生活情報を見る",
        "welcomeTitle": "初日から、頼れる居場所に。",
        "connectTitle": "日本人学生のコミュニティにつながる",
        "connectBody": "来たばかりの方も、長く在籍している方も。イベントやニュースレターを通じてJSAにつながれます。日本人学生と知り合いたいときは、気軽にメッセージをお送りください。",
        "sayHello": "JSAに声をかける",
        "welcomeEventsTitle": "新入生・歓迎イベント",
        "welcomeEventsBody": "開催が決まった集まりはイベントカレンダーでご案内します。歓迎イベントの詳細も、発表後に掲載します。初めての参加が気になるときは、事前にご連絡ください。",
        "lifeTitle": "マディソンでの生活を始める",
        "contentNote": "まずは掲載済みのガイドをご活用ください。「詳細は今後掲載」とある項目は、確認済みの案内がまだありません。",
        "pending": "詳細は今後掲載",
        "existingGuide": "到着後の生活ガイドを見る",
        "existingResources": "掲載済みのリソースを見る",
        "preparationGuide": "渡航準備ガイドを見る",
        "helpTitle": "相談でも、質問でも、ちょっとした挨拶でも。",
        "helpBody": "仲間と出会いたいとき、コミュニティについて知りたいときはJSAへ。具体的な質問がなくても、気軽にご連絡ください。",
        "topics": {
          "living": {
            "title": "マディソンでの暮らし",
            "body": "到着後の数週間、キャンパスでの生活、人との出会いについて、既存のガイドをご覧ください。"
          },
          "uw": {
            "title": "大学のリソース",
            "body": "掲載済みの学生向けリソース、FAQ、イベント、お問い合わせ先をまとめています。"
          },
          "iss": {
            "title": "留学生支援（ISS）",
            "body": "International Student Servicesの確認済みリンクや連絡先は、このページにはまだ掲載していません。"
          },
          "housing": {
            "title": "住まい探し",
            "body": "渡航準備ガイドに住まい探しの基本情報があります。確認済みの物件情報はまだ掲載していません。"
          },
          "health": {
            "title": "健康・ウェルビーイング",
            "body": "学内の健康・ウェルビーイングに関する確認済みの窓口情報は、まだ掲載していません。"
          },
          "groceries": {
            "title": "日本・アジア食材のお店",
            "body": "地域の日本・アジア食材店について、確認済みのお店リストはまだ掲載していません。"
          },
          "careers": {
            "title": "キャリア情報",
            "body": "キャリアイベントや、掲載済みのプログラム・提携団体の情報をご覧いただけます。"
          }
        }
      },
      careerSections: {
        "description": "日本を接点としたキャリアイベント、既存のプログラム情報、人とのつながりを紹介します。将来への機会を、コミュニティとともに考える場です。",
        "events": "キャリアイベント",
        "opportunities": "インターンシップ・就職関連情報",
        "alumni": "卒業生とのつながり",
        "partners": "提携団体・企業",
        "viewEvents": "キャリアイベントを見る",
        "noEvents": "現在、掲載中のキャリアイベントはありません。今後のお知らせはイベントページをご確認ください。",
        "opportunitiesNote": "掲載済みのプログラムや団体を紹介します。最新の応募期間・応募資格は、各プログラムでご確認ください。",
        "alumniBody": "経験を共有したい方、コミュニティとつながりたい方はJSAへご連絡ください。卒業生の紹介や具体的な交流機会は、確認後に掲載します。",
        "partnersBody": "キャリア支援、学内プログラム、文化交流など、既存のパートナー一覧に掲載されている団体を紹介します。",
        "collaborateBody": "キャリアイベントや学生向けの機会、スポンサーシップなど、コミュニティを支える連携についてご相談ください。",
        "collaborateAction": "連携・スポンサーシップを知る"
      },
      siteTitle: 'ウィスコンシン大学マディソン校 日本学生会',
      nav: {
        resources: "リソース",
        join: "JSAに参加する",
        sectionMenu: "{{section}}のメニュー",

        home: 'ホーム',
        about: '団体紹介',
        events: 'イベント',
        exchange: '留学案内',
        board: '役員紹介',
        faq: 'FAQ',
        careers: 'キャリア',
        partners: 'パートナー',
        contact: 'お問い合わせ',
      },
      lang: {
        en: 'EN',
        ja: 'JA',
      },
      common: {
        organizationName: '日本学生会',
        skipContent: '本文へ移動',
        mainNavigation: 'メインナビゲーション',
        footerNavigation: 'フッターナビゲーション',
        language: '表示言語',
        toggleNavigation: 'メニューを開閉',
        optional: '（任意）',
        requiredFields: '* は必須項目です。',
        noSavedEvents: '保存したイベントはまだありません',
        savedEventsPreview: '保存したイベント',
        savedSnapshot: 'マイリスト',
      },
      notFound: {
        eyebrow: '404',
        title: 'ページが\n見つかりません',
        description:
          'リンクが古いか、ページの場所が変わった可能性があります。以下のリンクからJSAのページへ戻れます。',
        homeCta: 'ホームへ戻る',
        eventsCta: 'イベントを見る',
        helpfulLinks: '関連リンク',
        faqTitle: 'JSAについて知りたい方へ',
        faqBody:
          '参加方法やイベントについて、よくある質問を確認できます。',
        contactTitle: 'お探しの情報が見つからない場合',
        contactBody:
          'お問い合わせフォームからご連絡ください。必要な情報へご案内します。',
        faqCta: 'FAQを見る',
        contactCta: '問い合わせる',
      },
      categories: {
        career: 'キャリア',
        communityCulture: '交流・文化',
        collaborations: '連携イベント',
        external: '学外イベント',
      },
      roles: {
        coPresident: '共同会長',
        coPresidentFinance: '共同会長・会計担当',
        socialMediaCoordinator: 'ソーシャルメディア担当',
        eventCoordinator: 'イベント担当',
        globalRelationsCoordinator: '渉外担当',
        globalRelationsIntern: '渉外担当インターン',
        communicationsCoordinator: '広報担当',
      },
      newsletter: {
        eyebrow: 'ニュースレター',
        title: 'イベント情報をメールでお届けします',
        description:
          'JSAのイベントやお知らせを、まとめて受け取れます。',
        button: 'ニュースレターに登録',
      },
      home: {
        supportingLine: 'そして、日本を通じて誰もがつながれるコミュニティ。',
        titleLead: '日本人にとっての、',
        titleAccent: 'UWでの居場所。',
        welcome: 'どんな背景でも、日本語のレベルでも。誰でも歓迎。',
        photoAlt: 'UW–Madisonのおにぎり作りイベントに集まったJSAメンバー',
        photoCaption: 'みんなで囲む、なつかしい味。',
        communityEyebrow: 'ここから広がるつながり',
        communityTitle: '自分らしく、つながろう。',
        communityDescription: '文化を楽しみ、仲間と出会う。あなたらしい参加のかたちで。',
        culturalAction: 'イベントを探す',
        languageAction: 'JSAを知る',
        careerAction: 'キャリア情報を見る',
        instagramEyebrow: 'コミュニティの日常',
        instagramTitle: 'JSAのある日々。',
        instagramDescription: 'キャンパスでの毎日、日本の行事、みんなとの思い出。',
        loadFeed: 'Instagramの最新投稿を表示',
        feedLoading: '最新の投稿を読み込み中…',
        openInstagram: 'Instagramで見る',
        feedError: '投稿を読み込めませんでした。最新情報はInstagramでご覧いただけます。',
        onigiriAlt: 'JSAのみんなで楽しむおにぎり作り',
        festivalAlt: 'JSAの春祭り',
        campusAlt: 'UW–Madisonのバスコム・ヒル',
        eyebrow: 'UW-Madison 公認学生団体',
        title: '日本コミュニティの中心として',
        description:
          'JSAは、日本人学生と日本に関心を持つ人々がつながり、文化を共有し、UW–Madisonで一人ひとりが居場所を感じられるコミュニティをつくります。',
        ctaEvents: 'イベントを見る',
        ctaAbout: 'JSAについて知る',
        culturalTitle: '季節の行事を楽しむ',
        culturalBody: '日本の季節行事や食文化、気軽な交流会を通じて、ほっとできる居場所をつくります。',
        languageTitle: '日本語で話してみる',
        languageBody: '日本語を学ぶ人も、普段から使いたい人も、気軽に会話を楽しめる機会をつくります。',
        careerTitle: '日本につながる進路を考える',
        careerBody: '卒業生や提携団体とのつながりを活かし、日本に関わるキャリア情報を共有します。',
      },
      about: {
        eyebrow: '団体紹介',
        title: 'JSAは、日本をきっかけに人がつながる場所です。',
        description:
          '活動内容やJSAが大切にしていること、UW-Madisonと日本のつながりを紹介します。',
        storyTitle: 'UW-Madisonの日本学生会について',
        storyP1:
          'ウィスコンシン大学マディソン校・日本学生会（JSA）は2014年に設立されました。日本人学生の数は多くありませんが、UW–Madisonには中西部最大規模の日本語プログラムがあり、約400人の学習者が在籍しています。JSAは日本人コミュニティを支えながら、日本語を学ぶ学生にも交流や実践の機会を届けています。',
        storyP2:
          'UW–Madisonは日本との関係が深く、研究連携、留学プログラム、国際インターンシップなどの機会があります。早稲田大学、慶應大学、京都大学などとの交換留学協定もあり、国際的な学びの選択肢が広がっています。',
        storyP3:
          'JSAは学部生、大学院生、専門職学生を含む、あらゆるバックグラウンドの学生に開かれた団体です。月例イベントや文化交流を通じて、日本文化への理解を深めながら、学生同士のつながりを広げています。',
        storyP4:
          '活動内容は、日本食の共有、カラオケ、映画鑑賞、ディスカッションなど多岐にわたります。リラックスした雰囲気で、楽しく学び合える場を大切にしています。',
        storyP5:
          'JSAは、日本文化を学びながら学術的・社会的なつながりを築ける場を目指しています。UW–MadisonにはJR東海インターンシップや日本在住UW卒業生との交流など、日本関連の機会もあります。詳細はイベントページ・お問い合わせページをご確認ください。みなさんのご参加をお待ちしています。',
        missionTitle: 'ミッション',
        missionBody:
          '大きなキャンパスでも、知り合いが増え、気軽に立ち寄れる場所がある。そんな安心感をイベントを通じてつくります。',
        hostTitle: '開催しているイベント',
        hostBody:
          '文化イベント、日本語会話の交流会、学生同士のミキサー、キャリア関連企画などを行っています。',
        communityEyebrow: 'UW-Madisonと日本',
        communityTitle: 'UW-Madisonで学ぶ日本出身の学生',
        communityDescription: '既存のサイトに記録されていた在籍者数です。集計時期の記録がないため、現在の在籍者数を示すものではありません。',
        communityTotalLabel: '日本国籍の学生数',
        communityTotalContext: '下の区分を合計した人数',
        undergraduateLabel: '学部生',
        undergraduateContext: '学部1年生から4年生まで',
        graduateLabel: '大学院生',
        graduateContext: '修士課程・博士課程',
        sourceLabel: '出典',
        sourceValue:
          'Office of the Registrar, University of Wisconsin-Madison（Enrollment Reports）',
        academicLevels: {
          freshman: '1年生',
          sophomore: '2年生',
          junior: '3年生',
          senior: '4年生',
          masters: '修士課程',
          phd: '博士課程',
          specialStudent: '特別履修生（交換留学生など）',
        },
        table: {
          academicLevel: '区分',
          count: '人数',
        },
      },
      board: {
        current: "現在の運営メンバー",
        archive: "歴代の運営メンバー",
        currentPending: "今年度の運営メンバーは、このページにはまだ掲載していません。2025–2026年度のメンバーはアーカイブでご覧いただけます。ご質問はJSAへご連絡ください。",
        archiveBody: "JSAをつないできた運営メンバーを、年度ごとに紹介します。",
        unavailable: "この年度のメンバーは掲載されていません。",
        yearIntro: "{{year}}年度に活動した運営メンバーです。",
        major: "専攻",
        year: "学年",

        eyebrow: '役員紹介',
        title: 'JSAを運営する学生メンバー',
        description:
          'イベント企画や広報、学生サポートを担う役員メンバーを紹介します。',
        yearLabel: '役員一覧',
        yearDescription: '2025-2026年度にJSAを運営するメンバーです。',
      },
      events: {
        allDay: "終日",
        learnMore: "詳細を見る",
        retry: '再読み込み',
        instagramFallback: 'Instagramで最新情報を見る',
        clearFilters: '条件をクリア',
        resultCount: '{{count}}件のイベント',
        noUpcomingTitle: '次のイベントをお楽しみに。',
        noUpcomingBody: '現在、掲載中のイベントはありません。最新のお知らせはInstagramをご覧ください。',
        eyebrow: 'イベント',
        title: '開催予定のイベント',
        description:
          '交流会や文化イベント、コラボ企画など、JSAの最新イベント情報を掲載しています。気になるイベントは保存したり、Googleカレンダーに追加したりできます。',
        loading: 'イベント情報を読み込んでいます...',
        configMissing: 'イベントカレンダーを現在ご利用いただけません。最新情報はInstagramをご覧ください。',
        fetchError: 'イベントを読み込めませんでした。再読み込みするか、Instagramで最新情報をご確認ください。',
        emptyTitle: '該当するイベントがありません',
        emptyBody: 'キーワード・カテゴリー・日付を変更するか、条件をクリアしてください。',
        search: 'イベントを探す',
        searchPlaceholder: 'キーワードで検索',
        category: 'カテゴリ',
        all: 'すべて',
        dateFilter: '日付',
        allDates: 'すべて',
        today: '今日',
        thisWeek: '今週',
        thisMonth: '今月',
        customRange: '期間を指定',
        startDate: '開始日',
        endDate: '終了日',
        savedCount_one: '保存したイベントが {{count}} 件あります。',
        savedCount_other: '保存したイベントが {{count}} 件あります。',
        noSavedBody: '気になるイベントは保存して、あとから簡単に確認できます。',
        save: '保存する',
        saved: '保存済み',
        removeSaved: '削除',
        addToCalendar: 'カレンダーに追加',
      },
      exchange: {
        eyebrow: '留学・交換留学',
        title: 'UW-Madisonへの留学を考えている方へ',
        description:
          'これからUW-Madisonへ来る交換留学生や、アメリカ留学を検討している学生に向けて、準備や現地でのつながり方をまとめています。',
        considering: {
          eyebrow: '留学先として検討する',
          heroHeadline: '学びも生活も充実。　　UW-Madisonでの留学。',
          whyTitle: 'UW-Madisonが選ばれる理由',
          whyBody:
            'UW-Madisonは、学問の質も学生生活の充実も大切にしたい人に向いています。評価の高いプログラム、活発な研究環境、そして多くの学生が集まるキャンパスがあり、留学生でも早い段階で居場所を見つけやすい大学です。',
          pillar1Title: '全米でも評価の高い公立大学',
          pillar1Body: '米国の公立大学として、各種ランキングで安定して高い評価を受けています。',
          pillar2Title: '研究と実践に強い学び',
          pillar2Body: '研究室、プロジェクト型授業、デザインチームなど、授業外で学びを深める機会も豊富です。',
          pillar3Title: '人と出会いやすいキャンパス',
          pillar3Body: '学生団体やイベントが多く、留学生でもコミュニティを見つけやすい環境です。',
          pillar4Title: '湖と街に囲まれた学生生活',
          pillar4Body: '湖畔のキャンパスと暮らしやすい州都マディソンで、学業と生活の両方を楽しめます。',
          quickFactsTitle: '基本情報',
          quickFact1:
            '2026年版U.S. Newsでは、全米総合で約36位、公立大学で約12位にランクされています。',
          quickFact1b:
            '全米の公立大学の中でも、継続して高い評価を受けている大学です。',
          quickFact2:
            '教育学は全米の大学の中で常に１位前後に位置しています。（2026年版U.S. NewsにてBest Education Schoolを獲得）',
          quickFact4:
            '大規模大学のため、科目・学生団体・大学の支援制度が充実しています。人気科目は早めの準備が安心です。',
          quickFact5:
            'マディソンはウィスコンシン州の州都で、米国屈指の治安の良さとと学生が暮らしやすい街として知られています。',
          academicsTitle: '学びの環境',
          academicsBody:
            '教育学、コンピュータサイエンス、工学、ビンネスなどの分野に強く、研究室、チーム活動、キャリア関連イベントに参加する機会もあります。基礎科目は難しく、導入科目は大人数になることもありますが、オフィスアワーや学習グループ、アドバイザーを早めに活用すれば十分に対応できます。',
          studentLifeTitle: '現地での暮らし',
          studentLifeBody:
            '住居費は場所や住み方によって変わりますが、家賃は月$800-$1,500程度で見積もる学生が多いです。食費は計画次第で調整しやすく、学内外の選択肢も豊富です。マディソンの冬は本格的で、雪・強風・氷点下の日が続くため、防寒着、ブーツ、重ね着は欠かせません。',
          whyJsaTitle: 'JSAでできること',
          whyJsaBody:
            'JSAは、交換留学生や留学生が早く人とつながり、生活のことを気軽に相談できるコミュニティです。イベント参加から日常のちょっとした相談まで、一人で抱え込まなくてよい環境をつくっています。',
          voicesTitle: '留学生の声',
          voice1:
            '「最初の学期は学業が大変でしたが、学生団体に入ってからマディソンでの生活がぐっと身近になりました。」',
          voice2:
            '「冬は想像以上でしたが、防寒をそろえたら生活はかなり楽になりました。」',
          voice3:
            '「授業は厳しいですが、実践的な力と英語で議論する自信がつきました。」',
          ctaEyebrow: '次にすること',
          ctaTitle: '興味が固まってきたら、早めに準備を始めましょう。',
          ctaBody:
            '履修したい科目、予算、気候への不安などを整理したら、「渡航前の準備」ページで具体的なチェック項目を確認してみてください。',
        },
        subnavConsidering: '留学先として検討する',
        subnavPreparing: '渡航前の準備',
        subnavArriving: '到着後の生活',
        subnavResources: '在学生向け情報',
        preparingEyebrow: '出発前に確認',
        preparingTitle: '渡航前に準備しておきたいこと',
        preparingDescription:
          '住まい、履修、ビザ、お金、到着後の相談先などを早めに整理しておきましょう。',
        preparingHousingTitle: '住まい探し',
        preparingHousingBody:
          '住居探しは早めに始めるのがおすすめです。学内寮と学外物件を比較し、入居日、契約条件、通学時間まで確認してから決めましょう。',
        preparingCoursesTitle: '履修計画',
        preparingCoursesBody:
          '所属大学の要件と照らし合わせて履修計画を立てましょう。人気科目はすぐ埋まることがあるため、登録開始前に代替案を用意しておくと安心です。',
        preparingVisaTitle: 'ビザ・必要書類',
        preparingVisaBody:
          'DS-2019/I-20 の発行、面接予約、入国期限までを時系列で管理しましょう。重要書類はデータと紙の両方で保管しておくのが安全です。',
        preparingFinanceTitle: 'お金の準備',
        preparingFinanceBody:
          '家賃、食費、交通費、教材費、防寒用品を含めた月次予算を作りましょう。米国での口座・カード手数料・緊急出費への備えも確認しておくと安心です。',
        preparingEssentialsTitle: '生活必需品',
        preparingEssentialsBody:
          '出発前に、保険の確認、常備薬、防寒着、SIMプラン、到着後すぐ使う連絡先を準備しておくと初月が安定します。',
        arrivingEyebrow: '到着してから',
        arrivingTitle: 'マディソンでの生活を始める',
        arrivingDescription:
          '最初の数週間は、生活リズムを整えながら、授業・住まい・コミュニティの土台を少しずつ作っていきましょう。',
        firstWeeksTitle: '最初の数週間にすること',
        firstWeeksBody:
          '到着直後は、生活に必要な手続きや移動方法、授業の流れを少しずつ確認していけば大丈夫です。最初からすべて完璧にこなす必要はありません。困ったときに相談できる人や、安心して立ち寄れる場所を早めに見つけておくと、生活がぐっと落ち着きます。',
        campusLifeTitle: 'キャンパスに慣れる',
        campusLifeBody:
          '授業の建物、図書館、食事ができる場所、バスの乗り方、学生向けサービスなどを少しずつ把握していきましょう。毎日の動き方が見えてくると、キャンパスが一気に身近になります。',
        communityTitle: '居場所を見つける',
        communityBody:
          '学生団体、日本語・英語の会話イベント、文化イベントは、知り合いを増やすきっかけになります。JSAのイベントも、まず誰かとつながりたいときに気軽に参加できる場です。',
        languageTitle: '言語面のサポート',
        languageBody:
          '英語を練習したい人も、日本語を使いたい人も、会話を通じたイベントに参加することで、自然に自信をつけていけます。',
        resourcesEyebrow: '困ったときのリンク集',
        resourcesTitle: '在学生向け情報',
        resourcesDescription:
          'イベント情報、FAQ、キャリア関連情報、お問い合わせ先をまとめています。必要な情報にすぐアクセスできます。',
        ctaEvents: 'イベントを見る',
        ctaFaq: 'FAQを見る',
        ctaContact: 'JSAに問い合わせる',
        beforeArrivalBody:
          '住居、履修、ビザの準備に加えて、到着後にどんなコミュニティとつながりたいかを考えておくと安心です。',
        supportBody:
          '何から始めればよいか分からない場合は、イベント一覧、FAQ、お問い合わせフォームを見るのがおすすめです。',
      },
      faq: {
        eyebrow: 'FAQ',
        title: '参加前によくある質問',
        description:
          'JSAへの参加やイベントについて、よくある質問をまとめました。',
        q1: 'JSAには誰が参加できますか？',
        a1: '学部生、大学院生、専門職大学院生、日系アメリカ人の学生、日本からの留学生、交換留学生、日本にルーツのない学生など、さまざまな人が参加しています。JSAに興味がある方なら、どなたでも歓迎です。',
        q2: '入会条件などはありますか？',
        a2: 'UW-Madisonの学生であれば、どなたでも参加できます。日本人である必要も、日本語を話せる必要もありません。現在、会費や正式な入会手続きはなく、参加必須のイベントもありません。',
        q3: '日本語を話せなくても、日本にルーツがなくても参加できますか？',
        a3: 'もちろんです。JSAは、背景や言語レベルに関係なく参加できる団体です。自分が参加してよいか迷う場合も、気軽にご連絡ください。',
        q4: 'JSAのイベントはどのくらいの頻度でありますか？',
        a4: '秋学期と春学期は、基本的に隔週でイベントを開催しています。最新情報はInstagram、メール、イベントページでお知らせしています。',
        q5: '初めてイベントに参加するにはどうすればよいですか？学期の途中からでも参加できますか？',
        a5: '学期の途中からでも、いつでも参加できます。イベントの日時や場所は、ウェブサイト、Instagram、メールなどで案内しています。初めてで不安な場合は、事前にメールやInstagramで連絡していただければ、参加しやすいようにご案内します。',
        q6: 'どんなイベントを開催していますか？',
        a6: '日本食イベント、映画鑑賞会、マディソン周辺へのお出かけ、日本の季節行事、春祭りなど、さまざまなイベントを行っています。日本での就職に関心のある学生向けのキャリアイベントもあります。詳しくはイベントページをご覧ください。',
        q7: 'JSAのアドバイザーは誰ですか？',
        a7: '東アジア言語文学科 日本語学・言語学分野の Naomi Geyer 准教授です。',
      },
      careers: {
        eyebrow: 'キャリア',
        title: '日本につながるキャリアを考える',
        description:
          '日本に関わる進路や就職に関心のある学生へ、イベントや外部団体の情報を紹介しています。',
        jelperClubTitle: 'Jelper Club',
        jelperClubBody:
          '日本語力に関係なく、日本でのキャリア形成や本格的な文化体験に関心のある優秀な学生を支援するプラットフォームです。（正規生のみ対象）',
        tkfTitle: 'TKF Global',
        tkfBody:
          '学生主体のキャリア支援コミュニティです。トップ企業から内定を得たメンターとの広いネットワークがあり、実践的な就職活動アドバイスを得られます。（上級レベルの日本語力が必要、正規生のみ対象）',
        careerForumTitle: 'キャリアフォーラム',
        careerForumBody:
          '留学経験のある学生だけでなく、日英バイリンガルの社会人にも役立つ就職情報サービスです。イベントはボストンだけでなく、ロサンゼルス、東京、大阪、ロンドンにも広がっており、グローバル企業とバイリンガル人材をつなぐ場となっています。',
        jetTitle: 'JET Program',
        jetBody:
          '日本各地の都市や町、村で働きながら生活できる競争率の高いプログラムです。多くの参加者は ALT（外国語指導助手）として学校で勤務し、一部は CIR（国際交流員）として通訳・翻訳などの業務を担当します。（日本国籍者は対象外）',
        jrCentralTitle: 'JR東海インターンシップ',
        jrCentralBody:
          '世界有数の高速鉄道会社の一つである JR東海と、日本の職業文化について深く知ることができるインターンシップです。UW–Madison 卒業生であり元JR東海名誉会長であった葛西敬之氏の支援のもと設計され、毎年 2〜3 名の学生が 8 週間にわたりさまざまな業務を経験できます。',
        jFindTitle: '未来創造人材制度（J-Find）',
        jFindBody:
          '未来創造人材制度（J-Find）は、UW–Madison を含む優秀な海外大学を卒業した人を対象に、日本での「就職活動」や「起業準備活動」を行う場合、「特定活動（未来創造人材）」の在留資格が付与され、最長 2 年間日本に滞在できる制度です。',
      },
      partners: {
        eyebrow: 'パートナー',
        title: '学生の機会づくりを支えるパートナー団体',
        description:
          'JSAは、日本に関わるキャリア、学生交流、文化的なつながりを広げるため、さまざまな団体と連携しています。',
        partnerListLabel: 'パートナー団体一覧',
        visitWebsite: '公式サイトを見る',
        sponsorEyebrow: 'スポンサー募集',
        sponsorTitle: 'JSAの活動を支援しませんか',
        sponsorDescription:
          '文化交流イベント、学生向けキャリア企画、UW-Madisonの日本コミュニティ支援に関心のある企業・団体からのスポンサーシップを募集しています。',
        sponsorCta: 'スポンサーのメリットを見る',
        items: {
          jelperClub: {
            name: 'Jelper Club',
            type: 'キャリアプラットフォーム',
            logoAlt: 'Jelper Club ロゴ',
            description:
              '日本でのインターンシップ、就職、コミュニティ機会に関心のある学生・若手人材を支援するキャリアプラットフォームです。',
          },
          tkfGlobal: {
            name: 'TKF Global',
            type: 'キャリア支援',
            logoAlt: 'TKF Global ロゴ',
            description:
              '海外大学で学ぶ学生に向けて、日本での就職活動に関するメンタリング、イベント、情報提供を行うキャリア支援サービスです。',
          },
          careerForum: {
            name: 'Career Forum / Career-tasu',
            type: 'キャリアイベント',
            logoAlt: 'Career Forum ロゴ',
            description:
              '日英バイリンガルの学生・社会人に向けた国際的なキャリアイベントと就職情報サービスです。',
          },
          jaswi: {
            name: 'Japan America Society of Wisconsin (JASWI)',
            type: '地域団体',
            logoAlt: 'Japan America Society of Wisconsin ロゴ',
            description:
              'ウィスコンシン州で日米関係を深めるため、地域イベントやプログラム、官民の連携機会をつくる非営利団体です。',
          },
          ceas: {
            name: 'Center for East Asian Studies (CEAS)',
            type: '学術センター',
            logoAlt: 'Center for East Asian Studies ロゴ',
            description:
              'UW-Madisonで中国・日本・韓国を含む東アジアに関する研究、教育、アウトリーチを支える学術センターです。',
          },
          japaneseProgram: {
            name: 'Japanese Program at UW-Madison',
            type: '学術プログラム',
            logoAlt: 'Japanese Program at UW-Madison ロゴ',
            description:
              '日本語、文化、文学、言語学などを学べるUW-Madisonの日本語・日本研究プログラムです。',
          },
        },
      },
      sponsorship: {
        eyebrow: 'スポンサー募集',
        title: 'UW-Madisonと日本をつなぐコミュニティを支援する',
        description:
          'スポンサーシップは、JSAの文化交流イベント、キャリア企画、学生同士のつながりづくりを支えます。同時に、企業・団体が日本に関心のある学生と自然につながる機会にもなります。',
        contactCta: 'JSAに問い合わせる',
        benefitsEyebrow: 'メリット',
        benefitsTitle: 'JSAを支援するメリット',
        formatsEyebrow: '支援方法',
        formatsTitle: '目的に合わせたスポンサーシップ',
        formatsDescription:
          'イベント協賛、キャリア企画、物品・サービス提供など、団体の目的に合わせて柔軟に相談できます。',
        nextEyebrow: '次のステップ',
        nextTitle: 'スポンサーについて相談する',
        nextBody:
          '届けたい学生層、関わりたいイベント、支援したい内容をお知らせください。JSAから適した形をご提案します。',
        benefits: {
          visibility: {
            label: '認知',
            title: '日本に関心のある学生に届く',
            body:
              '関連イベントの告知物、ウェブサイト、JSAの発信を通じて、スポンサー団体として認知を広げられます。',
          },
          studentEngagement: {
            label: '交流',
            title: '学生と自然に接点を持てる',
            body:
              'イベント、説明会、共同企画などを通じて、学生と話しやすい形でつながる機会をつくれます。',
          },
          communityImpact: {
            label: '貢献',
            title: 'キャンパスの文化交流を支える',
            body:
              '学生主体の文化イベントをより参加しやすく、継続しやすいものにする支援につながります。',
          },
          careerConnection: {
            label: 'キャリア',
            title: 'グローバル志向の学生とつながる',
            body:
              '日本、言語、文化、ビジネス、テクノロジー、教育、国際的なキャリアに関心のある学生に接点を持てます。',
          },
          collaboration: {
            label: '連携',
            title: '目的に合わせた企画ができる',
            body:
              'キャリアパネル、文化ワークショップ、講演会、学生向けリソースなど、支援目的に合う企画を相談できます。',
          },
          relationship: {
            label: '継続性',
            title: 'キャンパスとの長期的な関係を育てる',
            body:
              'スポンサーシップを通じて、UW-Madisonの日本コミュニティと継続的につながることができます。',
          },
        },
        formats: {
          eventSponsor: {
            title: 'イベント協賛',
            body:
              'JSAが開催する文化イベント、交流会、講演会、学生向けプログラムを支援できます。',
          },
          careerPartner: {
            title: 'キャリア企画パートナー',
            body:
              'パネル、ワークショップ、企業紹介、日本に関わるキャリアイベントを共同で企画できます。',
          },
          cultureSupporter: {
            title: '文化プログラム支援',
            body:
              '企画に必要な物品、食事、会場、活動費などを支援し、文化交流の場を広げられます。',
          },
          inKind: {
            title: '物品・サービス提供',
            body:
              '学生体験を支える物品、サービス、場所、その他のリソース提供も歓迎しています。',
          },
        },
      },
      contact: {
        eyebrow: 'お問い合わせ',
        title: '質問・連携のご相談はこちら',
        description:
          '入会、イベント参加、団体連携、スポンサーシップなどに関するお問い合わせを受け付けています。',
        formFallback: 'フォームが表示されない場合は、Google Formを新しいタブで開いてください。',
        openForm: 'Google Form を開く',
        successTitle: 'Googleフォームのタブをご確認ください。',
        successBody: '送信結果は別タブのGoogleフォームでご確認ください。入力内容はこちらに保存されています。',
        submitFrameTitle: 'Google Form 送信用フレーム',
        draft:
          '入力内容はこの端末に一時保存されます。ページを再読み込みしても、すぐには消えません。',
        name: '名前',
        email: 'メールアドレス',
        affiliation: '所属',
        inquiryType: 'お問い合わせ種別',
        subject: '件名',
        message: 'メッセージ',
        placeholderName: 'お名前',
        placeholderEmail: 'name@wisc.edu',
        placeholderAffiliation: 'UW-Madisonの学生、団体名、企業名など',
        placeholderSubject: 'お問い合わせの件名',
        placeholderMessage: 'どのようなご相談ですか？',
        selectPlaceholder: '選択してください',
        googleNotice: '送信すると別タブでGoogleフォームが開き、送信結果を確認できます。入力内容はこの端末に保存されます。',
        inquiryOptions: {
          general: '一般的な質問',
          eventParticipation: 'イベント参加',
          collaboration: '団体連携・スポンサーシップ',
          membership: '入会について',
          other: 'その他',
        },
        submit: '送信する',
      },
    },
  },
} as const

const savedLanguage = window.localStorage.getItem('jsa-language')
const browserLanguage = navigator.language.toLowerCase().startsWith('ja') ? 'ja' : 'en'

void i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage === 'ja' || savedLanguage === 'en' ? savedLanguage : browserLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
