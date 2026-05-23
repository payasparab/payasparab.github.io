export type Engagement = {
  client: string;
  scale?: string;
  title: string;
  description: string;
};

export type Service = {
  category: string;
  title: string;
  description: string;
};

export type ShippedTool = {
  type: 'live' | 'video';
  badge: string;
  title: string;
  description: string;
  url: string;
};

export const consultingPage = {
  label: 'Independent',
  title: 'Consulting',
  subtitle:
    'Senior data, product, and AI help — part-time, without a full-time hire. Around 2–3 companies a month through Handy Point Group, plus 3–8 product-expert calls a month across e-commerce, data/AI, fintech, and PropTech.',
};

export const engagements: Engagement[] = [
  {
    client: 'Pharma / CDMO',
    title: 'AI compliance-document generator',
    description:
      'Built an AI tool that generates FDA/EMA compliance documents, and led a 4-engineer team taking it to production.',
  },
  {
    client: 'F&B merchant',
    scale: '$50M / year',
    title: 'Cross-platform identity-graph analytics',
    description:
      'Measured cannibalization and informed platform strategy across TikTok, Meta, Pinterest, Walmart, and Amazon using sparse cross-channel consumer data.',
  },
  {
    client: 'Sporting-goods merchant',
    scale: '$25M / year',
    title: 'Weather-driven demand forecasting',
    description:
      'Seasonality and demand models that guided shipping optimization and marketing-budget allocation.',
  },
  {
    client: 'Custom-apparel brand',
    scale: '$1M / year',
    title: 'Segment financial models',
    description:
      'Models across B2C, B2B, and B2B2C to inform pricing, staffing, and resource planning.',
  },
  {
    client: 'Ad-creative compliance platform',
    title: 'Technical product strategy',
    description:
      'Owned the technical product roadmap and oversaw the engineering team for a creative-compliance platform used by advertisers and agencies.',
  },
  {
    client: 'Series A creator platform',
    scale: 'Passes.com',
    title: 'Finance, payments & diligence',
    description:
      'Chargeback automation ($50K/year saved), a payment-routing algorithm (+10% gross margin), and diligence-ready books ahead of the round.',
  },
  {
    client: 'Venture fund',
    scale: 'LA-based · $3B',
    title: 'Venture scouting',
    description:
      'Identified e-commerce targets through third-party metrics and marketing-performance evaluation.',
  },
  {
    client: 'Startup fund',
    scale: 'Midwest',
    title: 'Technical due diligence',
    description:
      'Vetted AI and data startups for substance — separating real technology from vaporware before the fund committed.',
  },
  {
    client: 'Pre-seed / Series A',
    scale: 'several companies',
    title: 'Fractional finance & data-driven bookkeeping',
    description:
      'Cleaned up books to close rounds, built user-projection and break-even models from unstructured app data, and produced a defensible identity-graph user count for a seed raise.',
  },
  {
    client: 'Two cities',
    title: 'Foot-traffic economic modeling',
    description:
      'Analyzed foot-traffic data to model the economic impact of city initiatives.',
  },
  {
    client: 'Expert calls',
    scale: '3–8 / month',
    title: 'Product-expert consulting',
    description:
      'Calls across e-commerce, data/AI, fintech, and PropTech — including drafting product and legal documents, contract review, and architecture reviews.',
  },
];

export const services: Service[] = [
  {
    category: 'SYSTEMS',
    title: 'Systems design',
    description:
      'End-to-end architecture for data and AI products — sources, models, services, evaluation, and the operational layer underneath.',
  },
  {
    category: 'PRODUCT',
    title: 'Product consulting & advisory',
    description:
      'Roadmap, prioritization, instrumentation, and post-launch evaluation — embedded with founders and product teams to ship and measure what matters.',
  },
  {
    category: 'STRATEGY',
    title: 'Technical strategist',
    description:
      'Data-product strategy, API development, trading-strategy validation, and AdTech / e-commerce market mapping.',
  },
  {
    category: 'BUILD',
    title: 'End-to-end AI MVPs',
    description:
      'Typically under $8K and around 20 hours — idea to a working tool with a front end.',
  },
  {
    category: 'DATA',
    title: 'Dashboards & pipelines',
    description:
      'Data sourcing, warehousing, and self-serve dashboards your team can actually use.',
  },
  {
    category: 'FINANCE',
    title: 'Fractional finance & bookkeeping',
    description:
      'Financial models, data-driven bookkeeping, and diligence-readiness for rounds.',
  },
  {
    category: 'VENTURE',
    title: 'Scouting & due diligence',
    description:
      'Venture scouting and technical DD for funds evaluating data and AI companies.',
  },
  {
    category: 'EXPERT',
    title: 'Product-expert calls',
    description:
      'E-commerce, data/AI, fintech, and PropTech expertise — including legal-document drafting and contract review.',
  },
];

export const shippedTools: ShippedTool[] = [
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
