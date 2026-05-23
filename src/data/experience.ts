export type Role = {
  company: string;
  sub?: string;
  roleTitle: string;
  dateRange: string;
  bullets: string[];
  tags: string[];
};

export type Result = { metric: string; description: string };
export type Education = { institution: string; details: string };
export type Activity = { organization: string; role: string; details?: string };
export type Publication = {
  year: string;
  authors: string;
  title: string;
  venue: string;
  link?: string;
  status?: string;
};

export const experiencePage = {
  label: 'Career',
  title: 'Experience',
  subtitle:
    'Full-time and embedded roles across data science, product, quant research, and finance — 2019 to present. Independent consulting lives on the consulting page.',
};

export const selectedResults: Result[] = [
  {
    metric: '150,000',
    description:
      'properties scored by an automated tax-appeals system I built at Mainstay — $1.5M+ in projected savings.',
  },
  {
    metric: '$20–30M',
    description:
      'saved at TikTok by negotiating commerce-platform integrations (Shopify, BigCommerce, Ticketmaster, DoorDash, and others).',
  },
  {
    metric: '3–5h → 5m',
    description:
      "model-testing time after I rebuilt a hedge fund's ML library in three months as its first engineering hire.",
  },
  {
    metric: '$400–800K',
    description:
      "in annual slippage savings from re-engineering that fund's trade execution by strategy and asset class.",
  },
  {
    metric: '+10%',
    description:
      'gross-margin improvement at a Series A startup from a payment-routing algorithm I designed.',
  },
];

export const roles: Role[] = [
  {
    company: 'Proper Hospitality',
    roleTitle: 'Analytics Engineering Lead',
    dateRange: 'Present',
    bullets: [
      'Lead analytics engineering for the hotel group — building the data infrastructure, pipelines, and reporting the business runs on.',
      'Authored a data-infrastructure strategy and presented it to company leadership.',
      'Built data culture and engineering practices for the team.',
    ],
    tags: ['Analytics Engineering', 'Hospitality', 'Data Infrastructure', 'dbt'],
  },
  {
    company: 'Mainstay',
    roleTitle: 'Data Science & Analytics Lead',
    dateRange: 'Dec 2024 — Present',
    bullets: [
      'Designed and deployed an end-to-end automated property-tax-appeals system — valuation, comparables, adjustments — across 150,000 enrolled properties, driving $1.5M+ in projected savings. Owned scoping, dbt pipelines, scikit-learn modeling, Django deployment, and the customer-facing presentation.',
      'Built anomaly-detection models for annual tax-bill forecasting and to validate scraper-collected assessment data.',
      'Led an infrastructure migration — Mode to QuickSight, RDS to Snowflake — rebuilding dbt pipelines and overseeing contractor data workflows.',
      'Shipped Mode/QuickSight dashboards and Streamlit apps so Ops, Sales, and BPO teams could clean, append, and explore data themselves.',
      'Established university research partnerships on time-series forecasting (close-price, days-on-market) and offer-acceptance behavioral modeling.',
    ],
    tags: ['dbt', 'Snowflake', 'scikit-learn', 'Django', 'Streamlit'],
  },
  {
    company: 'TikTok / ByteDance',
    roleTitle:
      'Product Strategy & Data Science Lead — Partnerships / Monetization Executive Office',
    dateRange: 'Dec 2021 — May 2024',
    bullets: [
      'Led third-party data strategy and identity-graph analytics, stitching first- and third-party signals into ads delivery and measurement across advertisers, agencies, e-commerce, and CRM platforms.',
      'Negotiated commerce-platform integrations across Shopify, BigCommerce, WooCommerce, Ticketmaster, and DoorDash — saving $20–30M — and built tracking and forecasting to evaluate the partnerships.',
      "Scoped and helped launch TikTok's Messaging API: TAM sizing, partner prioritization, KPI definition, and data-integration requirements.",
      'Ran competitive research (Shopee, Buy with Google, Instagram Shops) and SEA growth strategy for Shopping Ads; revenue analysis for Car and Real-Estate Ads.',
      'Supported preparation for congressional testimony on teen-ad safety, EU advertiser transparency, and data-privacy compliance.',
      'Built financial models, headcount plans, and annual goaling frameworks for a 30+ person global partnerships organization.',
    ],
    tags: ['Identity Graphs', 'AdTech', 'Commerce', 'Revenue Analytics'],
  },
  {
    company: 'Passes.com',
    roleTitle: 'Series A Transition Consultant — Product / Data Science / Finance',
    dateRange: 'May 2024 — Aug 2024',
    bullets: [
      'Built automated finance-operations and chargeback-mitigation workflows, saving $50K/year.',
      'Renegotiated payment-processing rates by 20–30% and designed a payment-routing algorithm that raised annual gross margin by 10%.',
      'Stood up product instrumentation, dashboards, and experimentation foundations across the company.',
      'Rewrote product and operations compliance requirements to strengthen risk and safety controls ahead of Series A.',
      'Finalized the books and implemented new accounting systems for investor diligence, and supported hiring of engineering and data leaders.',
    ],
    tags: ['Payments', 'Experimentation', 'FinOps', 'Diligence'],
  },
  {
    company: 'NinePointTwo Capital',
    sub: '$400M fund',
    roleTitle: 'Machine Learning Engineer / Quantitative Researcher',
    dateRange: 'Aug 2020 — Dec 2021',
    bullets: [
      "First employee outside the founding team — built the firm's alpha-research tooling, data pipelines, and production quant systems from scratch.",
      'Rebuilt the internal ML library in three months, cutting model-testing time from 3–5 hours to 5 minutes and eliminating duplicated research effort.',
      'Evaluated and replaced execution algorithms by strategy and asset class, reducing slippage to save $400–800K/year.',
      "Integrated alternative datasets and expanded the firm's alpha-signal library.",
      'Automated 13-F and CFTC regulatory filings, removing a 20–30 hour quarterly manual process while keeping filings accurate under FINRA penalties.',
    ],
    tags: ['Quant Research', 'Alpha Signals', 'Execution', 'SEC / CFTC'],
  },
  {
    company: 'McColl Partners',
    sub: 'subsidiary of Deloitte',
    roleTitle: 'Investment Banking Analyst — TMT M&A / Capital Raises / IP Valuations',
    dateRange: 'Jun 2019 — Jul 2020',
    bullets: [
      'Supported 8 live mandates, including e-learning, a blockchain IP portfolio, a sports-ticketing merger, an HR-software sale, and a healthcare-IT ESOP restructuring.',
      'Led analytical workstreams for technology, media, telecom, and IP-heavy transactions, plus modeling-intensive ESOP engagements.',
      "Led summer-analyst and analyst recruiting and training for the firm's Los Angeles office.",
    ],
    tags: ['M&A', 'Valuation', 'TMT', 'Financial Modeling'],
  },
];

export const education: Education[] = [
  {
    institution: 'UC Berkeley — B.S.',
    details: 'Business, Economics / Applied Math, Computer Science · 2019',
  },
  {
    institution: 'M.S. Statistics',
    details: 'Cal State Fullerton · in progress · PhD applicant, Fall 2026',
  },
  {
    institution: 'Harvard Kennedy School',
    details: 'Technology & Human Rights Fellowship · in progress',
  },
  {
    institution: 'Languages',
    details: 'English · Marathi · Spanish · Mandarin',
  },
];

export const activities: Activity[] = [
  {
    organization: 'Downtown LA Neighborhood Council',
    role: 'Elected Board Director',
    details: 'see public service',
  },
  { organization: 'Firme Coding / Homeboy Industries', role: 'Mentor' },
  {
    organization: 'UC Berkeley, Haas School of Business',
    role: 'Assistant Lecturer',
    details: '2022',
  },
  {
    organization: 'National Security Innovation Network',
    role: 'Volunteer Engineer',
    details: '2022',
  },
  {
    organization: 'Microsoft TEALS',
    role: 'Volunteer CS Instructor',
    details: '2020–2022',
  },
];

export const publications: Publication[] = [
  {
    year: 'In prog.',
    authors: 'Harvard Kennedy School — Technology & Human Rights Fellowship',
    title: 'Research on data brokers & consumer privacy',
    venue: 'Applied policy research',
    status: 'in progress',
  },
  {
    year: 'Ongoing',
    authors: 'University research partnerships (via Mainstay)',
    title: 'Time-series forecasting & offer-acceptance behavioral modeling',
    venue: 'Close-price and days-on-market prediction · applied collaboration',
  },
];
