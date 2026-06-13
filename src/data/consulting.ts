// The categories of work I provide. Every engagement and case study maps to
// one of these so visitors can see which kind of help each project represents.
export type ServiceCategory =
  | 'SYSTEMS'
  | 'PRODUCT'
  | 'STRATEGY'
  | 'BUILD'
  | 'DATA'
  | 'FINANCE'
  | 'VENTURE'
  | 'EXPERT';

export type Engagement = {
  client: string;
  scale?: string;
  title: string;
  description: string;
  category: ServiceCategory;
  // Optional link to a written-up case study for this engagement.
  caseStudyUrl?: string;
  caseStudySource?: string;
};

export type Service = {
  category: ServiceCategory;
  title: string;
  description: string;
  // Longer copy revealed behind a "See more" toggle on the card.
  details: string;
};

export type CaseStudy = {
  title: string;
  description: string;
  category: ServiceCategory;
  url: string;
  source: string;
};

export type ShippedTool = {
  type: 'live' | 'video' | 'project';
  badge: string;
  title: string;
  description: string;
  url: string;
  // Optional thumbnail image (e.g. project screenshots from the portfolio).
  image?: string;
};


export const consultingPage = {
  label: 'Independent',
  title: 'Consulting',
  subtitle: 'A decade of data, product, and AI consulting across tech, finance, media, and civic sectors. I consult within a large range of industries and problem types.',
};

export const engagements: Engagement[] = [
  {
    client: 'Pharma / CDMO',
    title: 'AI compliance-document generator',
    description:
      'Built an AI tool that generates FDA/EMA compliance documents, and led a 4-engineer team taking it to production.',
    category: 'BUILD',
  },
  {
    client: 'F&B merchant',
    scale: '$50M / year',
    title: 'Cross-platform identity-graph analytics',
    description:
      'Measured cannibalization and informed platform strategy across TikTok, Meta, Pinterest, Walmart, and Amazon using sparse cross-channel consumer data.',
    category: 'DATA',
  },
  {
    client: 'Sporting-goods merchant',
    scale: '$25M / year',
    title: 'Weather-driven demand forecasting',
    description:
      'Seasonality and demand models that guided shipping optimization and marketing-budget allocation.',
    category: 'DATA',
  },
  {
    client: 'Real-estate tech company',
    title: 'Automated offer & counter-offer engine',
    description:
      'Automated offer recommendations and counter-offer logic, turning pricing signals and deal data into a system that proposes and negotiates offers without manual analysis each time.',
    category: 'BUILD',
  },
  {
    client: 'Custom-apparel brand',
    scale: '$1M / year',
    title: 'Segment financial models',
    description:
      'Models across B2C, B2B, and B2B2C to inform pricing, staffing, and resource planning.',
    category: 'FINANCE',
  },
  {
    client: 'Ad-creative compliance platform',
    title: 'Technical product strategy',
    description:
      'Owned the technical product roadmap and oversaw the engineering team for a creative-compliance platform used by advertisers and agencies.',
    category: 'PRODUCT',
  },
  {
    client: 'Series A creator platform',
    scale: 'Passes.com',
    title: 'Finance, payments & diligence',
    description:
      'Chargeback automation ($50K/year saved), a payment-routing algorithm (+10% gross margin), and diligence-ready books ahead of the round.',
    category: 'FINANCE',
  },
  {
    client: 'Venture fund',
    scale: 'LA-based · $3B',
    title: 'Venture scouting',
    description:
      'Identified e-commerce targets through third-party metrics and marketing-performance evaluation.',
    category: 'VENTURE',
  },
  {
    client: 'Pre-seed / Series A',
    scale: 'several companies',
    title: 'Fractional finance & data-driven bookkeeping',
    description:
      'Cleaned up books to close rounds, built user-projection and break-even models from unstructured app data, and produced a defensible identity-graph user count for a seed raise.',
    category: 'FINANCE',
  },
  {
    client: 'Los Angeles & Chicago',
    title: 'Foot-traffic economic modeling',
    description:
      'Analyzed foot-traffic data to model the economic impact of city initiatives.',
    category: 'DATA',
  },
  {
    client: 'Expert calls',
    scale: '3–8 / month',
    title: 'Product-expert consulting',
    description:
      'Calls across e-commerce, data/AI, fintech, and PropTech, including drafting product and legal documents, contract review, and architecture reviews.',
    category: 'EXPERT',
  },
  {
    client: 'Telecommunications company',
    title: 'Geomapping & ROI estimation from demand signals',
    description:
      'Built geospatial models to estimate ROI on infrastructure investments using demand signals, population density, and competitive coverage data.',
    category: 'DATA',
  },
  {
    client: 'Electrical utility company',
    title: 'Data center site scoping & pricing',
    description:
      'Used maps and historical load data to scope and price potential data center sites, evaluating grid capacity, land availability, and power cost by location.',
    category: 'DATA',
  },
];

export const services: Service[] = [
  {
    category: 'SYSTEMS',
    title: 'Systems design',
    description:
      'End-to-end architecture for data and AI products: sources, models, services, evaluation, and the operational layer underneath.',
    details:
      "This is where the hard part lives: complex modeling and the gnarly technical challenges most teams stall on, like messy multi-source data, identity resolution, evaluation harnesses, and the plumbing that keeps a model honest once it's in production, not just in a notebook.",
  },
  {
    category: 'PRODUCT',
    title: 'Product consulting & advisory',
    description:
      'Roadmap, prioritization, instrumentation, and post-launch evaluation, embedded with founders and product teams to ship and measure what matters.',
    details:
      'Embedded with founders and product teams: defining what to measure, standing up instrumentation and experimentation, and reading the results so the roadmap reflects evidence rather than vibes.',
  },
  {
    category: 'STRATEGY',
    title: 'Technical strategist & fractional CTO',
    description:
      'Fractional CTO services: technical direction, data-product strategy, API development, trading-strategy validation, and AdTech / e-commerce market mapping.',
    details:
      'Acting as a fractional CTO for teams without a senior technical leader: setting technical direction, making build-vs-buy calls, vetting architecture and vendors, sizing technical risk for investors, and translating between the business and the engineers.',
  },
  {
    category: 'BUILD',
    title: 'End-to-end AI MVPs',
    description:
      '$10K, two-week delivery: idea to a working tool with a real front end.',
    details:
      'Fixed scope, fixed price: one end-to-end workflow, deployed, with a real front end and a walkthrough video. Enough to prove or kill the idea before a bigger build. I take on the complex modeling and the unglamorous glue (auth, file handling, deploys) that most MVPs skip.',
  },
  {
    category: 'DATA',
    title: 'Dashboards & pipelines',
    description:
      'Data sourcing, warehousing, and self-serve dashboards your team can actually use.',
    details:
      'Data sourcing (APIs, scraping), warehousing (dbt + Snowflake / BigQuery), and self-serve dashboards your team will actually open, built so the numbers reconcile and people trust them.',
  },
  {
    category: 'FINANCE',
    title: 'Automated finance & bookkeeping',
    description:
      'Automated, data-driven bookkeeping and financial models: wrangling messy app data, payment systems, and disconnected tools into clean books and diligence-readiness.',
    details:
      "From unstructured app and payment data to clean books, projections, and break-even models, automating the reconciliation and reporting so diligence isn't a fire drill when a round comes together.",
  },
  {
    category: 'VENTURE',
    title: 'Scouting & due diligence',
    description:
      'Venture scouting and technical DD for funds evaluating data and AI companies.',
    details:
      'Venture scouting and technical due diligence for funds: separating real technology from vaporware, and pressure-testing data and AI claims before a check goes out.',
  },
  {
    category: 'EXPERT',
    title: 'Product-expert calls',
    description:
      'Calls across e-commerce, AdTech, identity graphs, data/AI, fintech, PropTech, quant, and payments, plus product/legal-doc drafting and contract review.',
    details:
      'Topics I take calls on: ad monetization and measurement, third-party data and identity graphs, commerce-platform integrations (Shopify, Amazon, TikTok, Meta, Ticketmaster, DoorDash), recommendation and demand-forecasting models, quant research tooling and execution, payments and chargeback mitigation, 0→1 data-stack architecture, PropTech, and technical diligence, plus product and legal-document drafting, contract review, and architecture reviews.',
  },
];

// Published case studies, currently from Handy Point Group's project page.
// https://www.handypointgroup.com/projects-2
export const caseStudies: CaseStudy[] = [
  {
    title: 'Market sizing & business modeling',
    description:
      'Constructed an end-to-end revenue model for a client in the youth-sports industry.',
    category: 'FINANCE',
    url: 'https://www.handypointgroup.com/_files/ugd/141f27_aa7dc90333c94ec2a57c042e3b92d291.pdf',
    source: 'Handy Point Group',
  },
  {
    title: 'Data analytics & visualization',
    description:
      'Built a dashboard to help a talent-acquisition client visualize the talent market, sourced from APIs and automated web crawling.',
    category: 'DATA',
    url: 'https://www.handypointgroup.com/_files/ugd/141f27_5e87a08bafe343bfa33a82b141b595bc.pdf',
    source: 'Handy Point Group',
  },
  {
    title: 'Web scraping & process automation',
    description:
      'Automated a client’s events-catalog data collection with web scrapers.',
    category: 'DATA',
    url: 'https://www.handypointgroup.com/_files/ugd/141f27_58dddbfd4ffa44d9a9f58f70462dcca5.pdf',
    source: 'Handy Point Group',
  },
  {
    title: 'Database construction & management',
    description:
      'Helped an executive recruiter map a proprietary database schema built for scale.',
    category: 'SYSTEMS',
    url: 'https://www.handypointgroup.com/_files/ugd/141f27_b3c5ea2bb579465bb27cfb25e590d91b.pdf',
    source: 'Handy Point Group',
  },
  {
    title: 'Competitor & pricing analysis',
    description:
      'Analyzed Maryland-winery data to generate a pricing model for a client launching a new vineyard.',
    category: 'STRATEGY',
    url: 'https://www.handypointgroup.com/_files/ugd/141f27_af9f6b25c0b240b1bec9c52d23cd4085.pdf',
    source: 'Handy Point Group',
  },
  {
    title: 'Financial valuation & modeling',
    description:
      'Built a discounted-cash-flow valuation model for a dental clinic weighing a sale.',
    category: 'FINANCE',
    url: 'https://www.handypointgroup.com/_files/ugd/141f27_9c74139e2e3343eda6b81500a102edb1.pdf',
    source: 'Handy Point Group',
  },
  {
    title: 'Investor decks & business presentations',
    description:
      'Helped an early-stage startup craft its pitch deck and fundraising story for venture capital.',
    category: 'STRATEGY',
    url: 'https://www.handypointgroup.com/_files/ugd/141f27_b74d36a57c6b465e821145183e5b7b48.pdf',
    source: 'Handy Point Group',
  },
];

export const shippedTools: ShippedTool[] = [
  {
    type: 'project',
    badge: '⟨⟩ Open source',
    title: 'Business Automation Tools',
    description: 'Reusable scripts and tools that automate common business and ops workflows.',
    url: 'https://github.com/payasparab/business_automation_tools',
    image:
      'https://static.wixstatic.com/media/16f3ff_a8d086203f394ae6b34b91cd9b19dbcf~mv2.png/v1/fill/w_279,h_202,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png',
  },
  {
    type: 'project',
    badge: '⟨⟩ Open source',
    title: 'Streamlit CRM',
    description: 'The HPG CRM analytics dashboard, open-sourced: a self-serve BI surface in Streamlit.',
    url: 'https://github.com/payasparab/hpgstreamlitcrm',
    image:
      'https://static.wixstatic.com/media/16f3ff_ec8004df1e024974b476ef6e396fadca~mv2.png/v1/fill/w_279,h_202,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3.png',
  },
  {
    type: 'project',
    badge: '⟨⟩ Open source',
    title: 'Analytics Dashboard Sample',
    description: 'A sample self-serve analytics dashboard built in Streamlit.',
    url: 'https://github.com/payasparab/analyticsdashsample',
    image:
      'https://static.wixstatic.com/media/16f3ff_faad8039cf884eba97e9eb8e31ac19ee~mv2.png/v1/fill/w_279,h_202,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png',
  },
  {
    type: 'project',
    badge: '⟨⟩ Open source',
    title: 'FB Marketplace Scraper',
    description: 'A scraper for collecting Facebook Marketplace listings data.',
    url: 'https://github.com/payasparab/fbmpscraper',
    image:
      'https://static.wixstatic.com/media/16f3ff_adcb7f28dae04573b1a9502265da03ef~mv2.png/v1/fill/w_279,h_202,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4.png',
  },
  {
    type: 'video',
    badge: '▶ Demo',
    title: 'RA on Duty',
    description:
      'An all-in-one custom mobile app for residence-hall (RA) professionals: duty logs, scheduling, and real-time incident reporting.',
    url: 'https://drive.google.com/file/d/1QW3CbWq7qGlC_1COdBMrzH3nwz4fIK7P/view?usp=sharing',
  },
  {
    type: 'live',
    badge: '● Live app',
    title: 'Customer Ranking Engine',
    description: 'Scores and segments a customer base on configurable signals.',
    url: 'https://customerrankersample.streamlit.app/',
  },
  {
    type: 'live',
    badge: '● Live app',
    title: 'Real-Estate Time Series',
    description: 'Forecasts close-price and days-on-market with interactive charts.',
    url: 'https://realestatetimeseries.streamlit.app/',
  },
  {
    type: 'live',
    badge: '● Live app',
    title: 'CRM Analytics Dashboard',
    description: 'A self-serve BI surface for exploring CRM data.',
    url: 'https://hpgcrmdashboarddemo.streamlit.app/',
  },
  {
    type: 'live',
    badge: '● Live app',
    title: 'AI Doc-Gen (Compliance)',
    description: 'Generates structured compliance documents from inputs.',
    url: 'https://aaitdocgendemo.streamlit.app/',
  },
  {
    type: 'video',
    badge: '▶ Video',
    title: 'Compliance Document Generator',
    description: 'The pharma tool, end to end, with a front end.',
    url: 'https://www.loom.com/share/cd6cbdfe9c20470f914318a4c1f56925',
  },
  {
    type: 'video',
    badge: '▶ Video',
    title: 'Financial Wellness AI',
    description: 'An AI product concept with architecture design.',
    url: 'https://www.loom.com/share/3005973a4dbc44b49c0b80be86bb998c',
  },
  {
    type: 'video',
    badge: '▶ Video',
    title: 'User Interview & Feedback Tool',
    description: 'Logs interviews and synthesizes them into product insight.',
    url: 'https://www.loom.com/share/672e10bc92d84dfeb21ad8446c8f80b6',
  },
  {
    type: 'video',
    badge: '▶ Video',
    title: 'Sports Podcast Summarizer',
    description: 'Clipping, transcription, and summarization on GCP + OpenAI.',
    url: 'https://www.loom.com/share/d20de77d61a04c6daff0195cec66d3d8',
  },
  {
    type: 'video',
    badge: '▶ Video',
    title: 'Lunch-Ordering Slackbot',
    description: 'A small automation that saves a team time every day.',
    url: 'https://www.loom.com/share/b83631f5bd08442c827419df76808cfe',
  },
];
