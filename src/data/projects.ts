export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'Real Estate' | 'Business & Services' | 'Travel & Hospitality';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  liveUrl: string;
  image: string;
  tags: string[];
  skillsHighlighted: string[];
  features: string[];
  designHighlights: string[];
  themeColor: {
    accent: string;
    badgeBg: string;
    badgeText: string;
  };
}

export const projectsData: Project[] = [
  {
    id: 'sarakki-homes',
    number: '01',
    title: 'Sarakki Homes',
    category: 'Real Estate',
    categoryLabel: 'Real Estate / Property Website',
    shortDescription: 'A premium real-estate web experience focused on property discovery, business presentation, and helping prospective customers connect with the team.',
    fullDescription: 'Designed and developed for Sarakki Homes, this digital real estate platform showcases premium residential properties, trusted builder partnerships (such as Mahaveer, Shriram, Embassy, and Total Environment), and an intuitive search filter to connect prospective buyers with real estate advisors seamlessly.',
    liveUrl: 'https://www.sarakkihomes.com/',
    image: '/assets/projects/sarakki-homes.png',
    tags: ['React', 'Responsive UI', 'Property Discovery', 'Search Filters', 'Tailwind CSS'],
    skillsHighlighted: [
      'Responsive UI & mobile ergonomics',
      'Property discovery & location search',
      'User journey optimization',
      'Business requirements translation',
      'WhatsApp direct consultation flow'
    ],
    features: [
      'Interactive location and property-type search interface',
      'Key metric badges (500+ properties transacted, 250+ Cr transaction value)',
      'Partner builder showcase ticker',
      'Instant consultation pathways via phone and WhatsApp',
      'High-resolution imagery cards with clean typography'
    ],
    designHighlights: [
      'Deep navy backdrop paired with warm gold accents (#DDA853)',
      'Spacious luxury architectural photography hero',
      'High contrast readability for quick browsing',
      'Polished floating search bar over hero photography'
    ],
    themeColor: {
      accent: '#5B5CE2',
      badgeBg: 'rgba(91, 92, 226, 0.12)',
      badgeText: '#5B5CE2'
    }
  },
  {
    id: 'winter-cab-service',
    number: '02',
    title: 'Winter Cab Service',
    category: 'Business & Services',
    categoryLabel: 'Transportation / Business Website',
    shortDescription: 'A service-oriented website designed to present cab services, travel options, and booking enquiries through a clear customer journey.',
    fullDescription: 'Winter Cab Service is an active regional transport and travel agency platform. The website is engineered around quick lead generation, fare transparency, and 24/7 route booking for one-way rides, round trips, airport transfers, and group tempo travellers across scenic routes.',
    liveUrl: 'https://wintercabservice.com/',
    image: '/assets/projects/winter-cab.png',
    tags: ['Service UX', 'Booking Flow', 'Responsive Design', 'Conversion Optimization', 'Web Development'],
    skillsHighlighted: [
      'Conversion-oriented lead flow',
      'Trip type tabs (One way, Round trip, Airport, Tour)',
      'Mobile-first tap targets for drivers and travelers',
      'Website performance & optimization',
      'Direct WhatsApp booking webhook integration'
    ],
    features: [
      'Quick Quote interactive inquiry form with date/time pickers',
      'Real-time WhatsApp dispatch integration',
      'Fleet options catalog (Sedans, SUVs, Tempo Travellers, Buses)',
      'Clear fixed-fare transparency and 24/7 service indicator'
    ],
    designHighlights: [
      'High-energy nature photography combined with forest green and mint accents (#10B981 / #8CF0D0)',
      'Conversion-first split screen hero layout with instant quote panel',
      'Prominent floating call & chat widgets for quick on-the-road assistance'
    ],
    themeColor: {
      accent: '#10B981',
      badgeBg: 'rgba(16, 185, 129, 0.12)',
      badgeText: '#10B981'
    }
  },
  {
    id: 'sid-events',
    number: '03',
    title: 'SID Events Management',
    category: 'Business & Services',
    categoryLabel: 'Events / Business Website',
    shortDescription: 'A visually engaging business website showcasing event services, presentation, and opportunities for customers to explore offerings and enquire.',
    fullDescription: 'Crafted for Davanagere’s trusted event management company, SID Events brings celebratory occasions, dream weddings, and grand corporate experiences to life. Features an editorial showcase and custom wedding package builder tailored for couples and event planners.',
    liveUrl: 'https://www.sideventsmanagement.com/',
    image: '/assets/projects/sid-events.png',
    tags: ['Visual Storytelling', 'Editorial Layout', 'Event Catalog', 'Package Builder', 'Responsive UI'],
    skillsHighlighted: [
      'Visual storytelling & luxury aesthetic',
      'Custom event package builder UX',
      'Service presentation & tiered offerings',
      'Customer enquiry & consultation funnel',
      'High-impact cinematic photography curation'
    ],
    features: [
      'Live custom wedding package builder interactive tool',
      'Curated celebration photo galleries and testimonials',
      'Davanagere regional branding with gold serif typography',
      'Dual CTAs: "Plan Your Event" & "Explore Work"'
    ],
    designHighlights: [
      'Editorial serif display typography paired with modern sans-serif body',
      'Soft lavender, warm gold script accents, and deep navy backdrop',
      'Emotional photo-first visual hierarchy'
    ],
    themeColor: {
      accent: '#F59E0B',
      badgeBg: 'rgba(245, 158, 11, 0.12)',
      badgeText: '#D97706'
    }
  },
  {
    id: 'the-property-agent',
    number: '04',
    title: 'The Property Agent',
    category: 'Real Estate',
    categoryLabel: 'Real Estate / Property Website',
    shortDescription: 'A property-focused digital experience designed to present real-estate services and help visitors discover relevant property opportunities.',
    fullDescription: 'The Property Agent is an authoritative Karnataka-wide real estate portal designed to help buyers and investors find plots, farmhouse land, agricultural acreage, rental homes, and commercial spaces with ease and confidence.',
    liveUrl: 'https://thepropertyagent.in/',
    image: '/assets/projects/the-property-agent.png',
    tags: ['Information Architecture', 'Real Estate UX', 'Modern Typography', 'Search UI', 'Accessible Layouts'],
    skillsHighlighted: [
      'Multi-category property hierarchy',
      'Location-based search architecture',
      'Accessible, clean UI components',
      'Business-focused inquiry routing',
      'Cross-device responsive consistency'
    ],
    features: [
      'Direct keyword & location search bar with instant query trigger',
      'Comprehensive listing types: Plots, Farmhouses, Commercial & Lease',
      'Curated architectural imagery with modern facade aesthetics',
      'Direct contact & advisory consultation channels'
    ],
    designHighlights: [
      'Architectural photography with subtle dark gradient vignette',
      'Earthy bronze accent (#B48455) with electric navy and mint details',
      'Clean horizontal navigation with high scannability'
    ],
    themeColor: {
      accent: '#B48455',
      badgeBg: 'rgba(180, 132, 85, 0.12)',
      badgeText: '#9A6B3D'
    }
  },
  {
    id: 'taj-tours',
    number: '05',
    title: 'Taj Tours & Travels',
    category: 'Travel & Hospitality',
    categoryLabel: 'Travel / Tours and Transportation',
    shortDescription: 'A travel-focused website bringing transportation services and trip-related information together in an accessible, customer-friendly experience.',
    fullDescription: 'Taj Luxury Travel & Concierge provides executive transportation across India. Features a clean outstation rate calculator, transparent vehicle choice (Maruti Suzuki Ertiga 6+1 and Maruti Suzuki Dzire), and 24/7 ride booking for airport transfers and hourly city packages.',
    liveUrl: 'https://tours-and-travels-xi-six.vercel.app/',
    image: '/assets/projects/taj-tours.png',
    tags: ['Travel UX', 'Rate Calculator', 'Fleet Showcase', 'Vercel Deployment', 'Fast Performance'],
    skillsHighlighted: [
      'Travel UX & rate calculation interface',
      'Fleet & capacity transparency',
      'Mobile-optimized touch booking',
      'Production deployment on Vercel',
      'Outstation and airport ride enquiry flow'
    ],
    features: [
      'Interactive ride calculator (Vehicle choice, Service type, Starting rate)',
      'Transparent vehicle pricing (e.g., ₹16/KM Outstation)',
      'Dual booking action: "Book Your Ride Now" + Instant Call (+91 90086 30489)',
      'Sunset travel aesthetic and luxury concierge badge'
    ],
    designHighlights: [
      'Golden hour highway photography with amber warmth (#F59E0B / #D97706)',
      'Floating quick fare estimator bar with responsive dropdowns',
      'Luxury badge with star iconography and elegant script subtitle'
    ],
    themeColor: {
      accent: '#5B5CE2',
      badgeBg: 'rgba(91, 92, 226, 0.12)',
      badgeText: '#5B5CE2'
    }
  }
];

export const projectCategories = [
  'All Projects',
  'Real Estate',
  'Business & Services',
  'Travel & Hospitality'
] as const;
