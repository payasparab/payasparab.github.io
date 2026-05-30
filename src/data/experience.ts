export type Role = {
  company: string;
  sub?: string;
  roleTitle: string;
  dateRange: string;
  summary: string;
  bullets: string[];
  tags: string[];
  // Domain for a Clearbit logo (https://logo.clearbit.com/<domain>); falls back
  // to a monogram when omitted or the logo fails to load.
  domain?: string;
};

export type Capability = {
  title: string;
  description: string;
  stack: string;
};

export const capabilities: Capability[] = [
  {
    title: '0→1 data stacks',
    description:
      'No formal stack to dbt + warehouse + dashboards in weeks — across multiple companies.',
    stack: 'Python · SQL · dbt · Snowflake · BigQuery · Streamlit',
  },
  {
    title: 'End-to-end AI MVPs',
    description:
      'AI modeling taken the whole way — alpha signals, anomaly detection, identity graphs, and LLM-backed products shipped from notebook to production, pre- and post-LLM era.',
    stack: 'scikit-learn · PyTorch · OpenAI / Anthropic · Vertex AI',
  },
  {
    title: 'Apps, APIs & cloud',
    description:
      'Production back-ends, internal tools, and the API negotiations and integrations that wire everything together.',
    stack: 'React · Django · FastAPI · AWS · GCP · Docker',
  },
  {
    title: 'Cross-functional operating',
    description:
      'Sitting across product, data, and finance simultaneously — interim head of all three at Passes.com — including diligence, payments, and experimentation.',
    stack: 'Product · Data · Finance · Diligence',
  },
];

// Skills grouped by area, each with a rough familiarity level.
// level: 1 = Working · 2 = Proficient · 3 = Advanced · 4 = Expert
export type Skill = { category: string; level: 1 | 2 | 3 | 4; items: string[] };

export const skills: Skill[] = [
  {
    category: 'Data & analytics engineering',
    level: 4,
    items: [
      'dbt',
      'Snowflake',
      'Databricks',
      'SQL (Snowflake / MySQL / Postgres)',
      'Data modeling',
      'Fivetran',
      'Airflow',
      'AWS SageMaker',
    ],
  },
  {
    category: 'Machine learning & modeling',
    level: 4,
    items: [
      'Python (pandas, sklearn, numpy, statsmodels)',
      'Feature engineering',
      'Time-series forecasting',
      'Experimentation',
      'Model deployment (Django / Flask)',
    ],
  },
  {
    category: 'Visualization & BI tools',
    level: 4,
    items: ['Power BI', 'Power Apps', 'QuickSight', 'Mode', 'Streamlit', 'Plotly'],
  },
  {
    category: 'AI & automation',
    level: 3,
    items: [
      'LLM management & optimization',
      'Workflow automation & orchestration',
      'Azure OpenAI',
      'OpenAI API',
      'AWS Bedrock',
      'n8n',
      'Document automation (extend.ai)',
      'LangChain',
      'Browser agents',
    ],
  },
  {
    category: 'Business & quantitative',
    level: 4,
    items: [
      'Optimization',
      'Statistical inference',
      'Financial modeling',
      'Pricing & revenue analytics',
    ],
  },
  {
    category: 'Software engineering',
    level: 3,
    items: [
      'TypeScript',
      'React',
      'Git',
      'API design',
      'Docker',
      'Render',
      'AWS Elastic Beanstalk',
      'Cloud storage (S3 / GCS / Azure)',
    ],
  },
  {
    category: 'Product & design',
    level: 3,
    items: [
      'Figma (UI/UX design)',
      'Prototyping',
      'Design systems',
      'Product strategy',
      'Instrumentation & experimentation',
    ],
  },
];

export const skillLevelLabel: Record<Skill['level'], string> = {
  1: 'Working',
  2: 'Proficient',
  3: 'Advanced',
  4: 'Expert',
};

export type Result = { metric: string; description: string };
export type Education = { institution: string; details: string; domain?: string };
export type Activity = {
  organization: string;
  role: string;
  details?: string;
  url?: string;
  time?: string;
};
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
    'Full-time and embedded roles across data science, product, quant research, and finance. Independent consulting lives on the consulting page.',
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type FunFact = { n: string; t: string };

export const funFacts: FunFact[] = [
  {
    n: 'Roommates',
    t: '<b>Roommates with a future billionaire founder</b> — joined her at Passes.com as interim Head of Product, Finance &amp; Data Science to help with the Series-A transition.',
  },
  {
    n: '4 weeks',
    t: '<b>0→1 data stacks, multiple times.</b> No formal data stack to dbt + warehouse + dashboards in around a month — at Mainstay, Proper, and several consulting clients.',
  },
  {
    n: 'Employee #1',
    t: '<b>First non-founder hire at a $400M hedge fund.</b> Rebuilt the ML library in three months — model-testing dropped from 3–5 hours to 5 minutes.',
  },
  {
    n: '$20–30M',
    t: '<b>Negotiated commerce-platform integrations at TikTok</b> — Shopify, BigCommerce, Ticketmaster, DoorDash — down to the API contracts, schema design, and identity-stitching across platforms.',
  },
  {
    n: '150,000',
    t: '<b>Properties scored</b> by an automated tax-appeals system at Mainstay — $1.5M+ in projected client savings.',
  },
  {
    n: 'Evangelism',
    t: '<b>Traveled internationally to evangelize new developer APIs</b> to commerce partners, agencies, and the broader ads ecosystem.',
  },
  {
    n: 'Triple major',
    t: '<b>UC Berkeley</b> — Business, Applied Math / CS, and Economics.',
  },
  {
    n: '4 languages',
    t: 'English · Marathi · Spanish · Mandarin — and yes, the language toggle in the nav actually works.',
  },
  {
    n: 'Capitol Hill',
    t: "<b>Helped prep TikTok's congressional testimony</b> on teen-ad safety, EU advertiser transparency, and data-privacy compliance.",
  },
  {
    n: 'Homeboy',
    t: '<b>Mentor at Firme Coding / Homeboy Industries</b> — teaching aspiring technologists through the program.',
  },
];

export const technicalSkills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'TypeScript', 'R', 'Bash'],
  },
  {
    category: 'Data & analytics engineering',
    items: ['dbt', 'Snowflake', 'BigQuery', 'PostgreSQL', 'RDS', 'Mode', 'QuickSight', 'Looker'],
  },
  {
    category: 'ML / AI',
    items: [
      'scikit-learn',
      'PyTorch',
      'XGBoost',
      'OpenAI / Anthropic APIs',
      'LangChain',
      'Hugging Face',
      'Vertex AI',
    ],
  },
  {
    category: 'Apps & APIs',
    items: ['React', 'Django', 'FastAPI', 'Streamlit', 'Node', 'REST', 'GraphQL'],
  },
  {
    category: 'Cloud & infra',
    items: ['AWS', 'GCP', 'Docker', 'GitHub Actions', 'Terraform (basics)', 'Linux'],
  },
  {
    category: 'Quant / research',
    items: [
      'Alpha-signal research',
      'Backtesting',
      'Execution algorithms',
      'Time-series forecasting',
      'Anomaly detection',
      'A/B testing',
    ],
  },
  {
    category: 'Product & systems',
    items: [
      'Systems design',
      'Data-product strategy',
      'Identity graphs',
      'Experimentation platforms',
      'Diligence frameworks',
    ],
  },
];

export const selectedResults: Result[] = [
  {
    metric: '150,000',
    description:
      'properties scored by an automated machine-learning system I built for property-tax appeals at Mainstay — valuation, comparables, and adjustments end to end, driving $1.5M+ in projected savings.',
  },
  {
    metric: '+10%',
    description:
      'gross-margin lift at a Series A creator platform from the payment-routing and revenue-share economics I designed.',
  },
  {
    metric: '3–5h → 5m',
    description:
      "model-testing time after I rebuilt and automated a hedge fund's ML library as its first engineering hire — standardizing the research process, restructuring data and ML components, and squeezing out runtime so the fund could turn its portfolio over faster, all while eliminating duplicated research effort.",
  },
  {
    metric: '$400–800K',
    description:
      "in annual slippage savings from re-engineering that fund's trade-execution algorithm by strategy and asset class.",
  },
  {
    metric: '10',
    description:
      'AI / SaaS MVPs shipped for under $10K each — idea to a working product with a real front end.',
  },
  {
    metric: '$20–30M',
    description:
      'saved at TikTok by negotiating commerce-platform integrations (Shopify, BigCommerce, Ticketmaster, DoorDash, and others).',
  },
];

export const roles: Role[] = [
  {
    company: 'Proper Hospitality',
    sub: 'luxury hotel group',
    domain: 'properhotel.com',
    roleTitle: 'Head of Analytics Engineering',
    dateRange: 'Present',
    summary:
      'Building the data stack and analytics culture for the hotel group from a near-blank slate.',
    bullets: [
      'Lead analytics engineering for the hotel group — building the data infrastructure, pipelines, and reporting the business runs on, from a near-blank slate.',
      'Authored and presented a data-infrastructure strategy to company leadership; scaling the org and engineering practices alongside the stack.',
      'Built data culture for a team going from zero structured analytics to a working modern data platform across properties.',
    ],
    tags: ['Analytics Engineering', 'Hospitality', '0→1 Stack', 'dbt'],
  },
  {
    company: 'Mainstay',
    sub: 'proptech',
    domain: 'mainstay.com',
    roleTitle: 'Data Science & Analytics Lead',
    dateRange: 'Dec 2024 — Jan 2026',
    summary:
      '0→1 data stack and an end-to-end automated property-tax-appeals system across 150,000 enrolled properties.',
    bullets: [
      'Picked up a young company with no formal data stack — had dbt pipelines, Snowflake warehousing, and self-serve dashboards live within weeks.',
      'Designed and deployed an end-to-end automated property-tax-appeals system — valuation, comparables, adjustments — across 150,000 enrolled properties, driving $1.5M+ in projected savings. Owned scoping, dbt pipelines, scikit-learn modeling, Django deployment, and the customer-facing presentation.',
      'Built anomaly-detection models for annual tax-bill forecasting and to validate scraper-collected assessment data.',
      'Led an infrastructure migration — Mode to QuickSight, RDS to Snowflake — rebuilding dbt pipelines and overseeing contractor data workflows.',
      'Shipped Mode/QuickSight dashboards and Streamlit apps so Ops, Sales, and BPO teams could clean, append, and explore data themselves.',
      'Established university research partnerships on time-series forecasting (close-price, days-on-market) and offer-acceptance behavioral modeling.',
    ],
    tags: ['0→1 Stack', 'dbt', 'Snowflake', 'scikit-learn', 'Django', 'Streamlit'],
  },
  {
    company: 'TikTok / ByteDance',
    domain: 'tiktok.com',
    roleTitle:
      'Product Strategy & Data Science Lead — Partnerships / Monetization Executive Office',
    dateRange: 'Dec 2021 — May 2024',
    summary:
      'Identity-graph analytics, commerce-platform API integrations, Messaging API launch, and congressional-testimony prep.',
    bullets: [
      'Led third-party data strategy and identity-graph analytics, stitching first- and third-party signals into ads delivery and measurement across advertisers, agencies, e-commerce, and CRM platforms.',
      'Negotiated and architected commerce-platform integrations across Shopify, BigCommerce, WooCommerce, Ticketmaster, and DoorDash — including the underlying API contracts, schema design, OAuth and webhook flows, and identity-stitching across platforms — saving $20–30M, with the tracking and forecasting needed to evaluate the partnerships.',
      'Traveled internationally to present and evangelize the developer platform and new APIs to commerce partners, agencies, and the broader ads ecosystem.',
      "Scoped and helped launch TikTok's Messaging API: TAM sizing, partner prioritization, KPI definition, and data-integration requirements.",
      'Ran competitive research (Shopee, Buy with Google, Instagram Shops) and SEA growth strategy for Shopping Ads; revenue analysis for Car and Real-Estate Ads.',
      'Supported preparation for congressional testimony on teen-ad safety, EU advertiser transparency, and data-privacy compliance.',
      'Built financial models, headcount plans, and annual goaling frameworks for a 30+ person global partnerships organization.',
    ],
    tags: ['Identity Graphs', 'AdTech', 'Commerce APIs', 'Evangelism', 'Revenue Analytics'],
  },
  {
    company: 'Passes.com',
    sub: 'Bond Capital-backed creator platform',
    domain: 'passes.com',
    roleTitle: 'Interim Head of Product, Finance, and Data Science',
    dateRange: 'May 2024 — Aug 2024',
    summary:
      'Three interim hats — product, finance, and data science — for a college roommate through the Series-A transition.',
    bullets: [
      'Joined the founder — a college roommate of mine — to wear three interim hats through the Series-A transition: Product, Finance, and Data Science.',
      'Built automated finance-operations and chargeback-mitigation workflows, saving $50K/year.',
      'Renegotiated payment-processing rates by 20–30% and designed a payment-routing algorithm that raised annual gross margin by 10%.',
      'Stood up product instrumentation, dashboards, and experimentation foundations across the company.',
      'Rewrote product and operations compliance requirements to strengthen risk and safety controls ahead of Series A.',
      'Finalized the books and implemented new accounting systems for investor diligence, and supported hiring of engineering and data leaders.',
    ],
    tags: ['Interim Head', 'Payments', 'Experimentation', 'FinOps', 'Diligence'],
  },
  {
    company: 'NinePointTwo Capital',
    sub: '$400M fund',
    domain: 'ninepointtwocapital.com',
    roleTitle: 'Machine Learning Engineer / Quantitative Researcher',
    dateRange: 'Aug 2020 — Dec 2021',
    summary:
      'First employee outside the founders — built the alpha-research, execution, and regulatory automation infrastructure from scratch, pre-LLM.',
    bullets: [
      "First employee outside the founding team — built the firm's alpha-research tooling, data pipelines, and production quant systems from scratch, all pre-LLM (long before today's AI tools existed).",
      'Rebuilt the internal ML library in three months, cutting model-testing time from 3–5 hours to 5 minutes and eliminating duplicated research effort.',
      'Evaluated and replaced execution algorithms by strategy and asset class, reducing slippage to save $400–800K/year.',
      'Built foundational automations across investor relations, fund updates, and research summarization — the workflows AI tools handle today, built by hand at the time.',
      "Integrated alternative datasets and expanded the firm's alpha-signal library.",
      'Automated 13-F and CFTC regulatory filings, removing a 20–30 hour quarterly manual process while keeping filings accurate under FINRA penalties.',
    ],
    tags: ['0→1 Stack', 'Quant Research', 'Alpha Signals', 'Investor Relations', 'Pre-LLM'],
  },
  {
    company: 'McColl Partners',
    sub: 'now Deloitte Corporate Finance',
    domain: 'deloitte.com',
    roleTitle: 'Investment Banking Analyst — TMT M&A / Capital Raises / IP Valuations',
    dateRange: 'Jun 2019 — Jul 2020',
    summary:
      'Eight live mandates across TMT M&A, blockchain IP, sports-ticketing, HR-software, and healthcare-IT ESOP transactions.',
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
    institution: 'UC Berkeley',
    details:
      'B.S. — triple major in Business (Haas), Computer Science, and Economics over four years · 2019. GPA: 3.6 Business · 3.4 Computer Science · 3.2 Economics.',
    domain: 'berkeley.edu',
  },
  {
    institution: 'Cal State Fullerton',
    details:
      'M.S. Statistics — in progress · PhD applicant, Fall 2026. Formalizing the modeling I already do in the wild.',
    domain: 'fullerton.edu',
  },
  {
    institution: 'Harvard Kennedy School',
    details:
      'Technology & Human Rights Fellow at the Carr-Ryan Center — researching data brokers and consumer privacy; published commentary on data brokerage.',
    domain: 'harvard.edu',
  },
  {
    institution: 'Beijing Language and Culture University',
    details: 'Scholarship Fellow · 2025 — Mandarin language and culture study.',
    domain: 'blcu.edu.cn',
  },
  {
    institution: 'Languages',
    details: 'English · Marathi · Spanish · Mandarin — and the nav toggle actually works.',
  },
];

export const activities: Activity[] = [
  {
    organization: 'Downtown LA Neighborhood Council',
    role: 'Elected Board Director',
    time: '~10–15 hrs/month, ongoing',
    url: 'https://dlanc.com/',
  },
  {
    organization: 'Firme Coding / Homeboy Industries',
    role: 'Mentor',
    time: 'weekly mentoring',
    url: 'https://homeboyindustries.org/',
  },
  {
    organization: 'UC Berkeley, Haas School of Business',
    role: 'Assistant Lecturer',
    time: 'one semester, 2022',
    url: 'https://haas.berkeley.edu/',
  },
  {
    organization: 'National Security Innovation Network',
    role: 'Volunteer Engineer',
    time: 'project-based, 2022',
    url: 'https://www.nsin.mil/',
  },
  {
    organization: 'Microsoft TEALS',
    role: 'Volunteer CS Instructor',
    time: 'weekly, 2 school years (2020–2022)',
    url: 'https://www.microsoft.com/en-us/teals',
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
