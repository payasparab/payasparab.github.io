// Things people can grab or look at: resume formats, publications, presentations.
// Open-source is rendered from the live GitHub feed.

export type ResumeFormat = {
  label: string;
  description: string;
  url: string;
  external?: boolean;
};

export const resumeFormats: ResumeFormat[] = [
  {
    label: 'Full résumé (PDF)',
    description: 'Roles, results, and education. Long form.',
    url: '/resume.pdf',
  },
  {
    label: 'One-page summary (PDF)',
    description: 'For recruiters and quick share-outs.',
    url: '/resume-1page.pdf',
  },
  {
    label: 'Web version',
    description: 'Browse on the Experience page.',
    url: '/experience',
  },
  {
    label: 'LinkedIn',
    description: 'Live version with endorsements.',
    url: 'https://www.linkedin.com/in/payasparab',
    external: true,
  },
];

export type Publication = {
  year: string;
  title: string;
  authors: string;
  venue: string;
  status?: string;
  url?: string;
};

export const publicationsList: Publication[] = [
  {
    year: 'In prog.',
    title: 'Data brokers and consumer privacy: applied policy research',
    authors: 'Parab, P.',
    venue: 'Harvard Kennedy School, Technology & Human Rights Fellowship',
    status: 'in progress',
  },
  {
    year: 'Ongoing',
    title: 'Time-series forecasting & offer-acceptance behavioral modeling',
    authors: 'Mainstay × university research partnerships',
    venue: 'Close-price and days-on-market prediction · applied collaboration',
  },
  {
    year: 'In prog.',
    title: '[ Working paper title, fill in ]',
    authors: 'Parab, P. · CSU Fullerton M.S. Statistics',
    venue: '[ Venue / working paper ]',
  },
];

export type Presentation = {
  year: string;
  title: string;
  venue: string;
  audience?: string;
  url?: string;
};

export const presentations: Presentation[] = [
  {
    year: '2025',
    title: 'Data infrastructure strategy for hospitality at scale',
    venue: 'Proper Hospitality, company leadership',
    audience: 'Executive team',
  },
  {
    year: '2024',
    title: 'Identity graphs and cross-platform measurement',
    venue: 'TikTok / ByteDance, internal partnerships forums',
    audience: 'Monetization Executive Office',
  },
  {
    year: '2022',
    title: 'Applied data science for product strategy',
    venue: 'UC Berkeley · Haas School of Business',
    audience: 'Graduate course (assistant lecturer)',
  },
  {
    year: '[ year ]',
    title: '[ Add a talk, panel, podcast, or workshop ]',
    venue: '[ venue ]',
  },
];
