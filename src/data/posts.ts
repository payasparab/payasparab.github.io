export type Post = {
  slug: string;
  title: string;
  date: string;
  read: string;
  category: string;
  tags: string[];
  excerpt: string;
  body: string;
};

export const allCategories = ['All'] as const;

// No posts published yet. Real writing goes here — for each entry copy the
// Post shape above (slug, title, date, read, category, tags, excerpt, body).
export const posts: Post[] = [];

export const allTags: string[] = Array.from(
  new Set(posts.flatMap((p) => p.tags))
).sort();

// Talks / decks embedded on the blog. Google Drive files embed via the
// /preview URL form (the file must be shared "anyone with the link").
export type Talk = {
  title: string;
  description: string;
  embedUrl: string;
  sourceUrl: string;
};

export const talks: Talk[] = [
  {
    title: 'Hotel loyalty programs',
    description: 'Hotel loyalty programs and the data and economics behind them.',
    embedUrl: 'https://drive.google.com/file/d/1PBXR6c1Gr9jbTvWZpWtoCADumUqiMwNW/preview',
    sourceUrl:
      'https://drive.google.com/file/d/1PBXR6c1Gr9jbTvWZpWtoCADumUqiMwNW/view?usp=sharing',
  },
  {
    title: 'Harvard Kennedy School — project update',
    description: 'A project update from my Technology & Human Rights fellowship work at HKS.',
    embedUrl: 'https://drive.google.com/file/d/1jYVNFHdC4VudP5GjzupJq0QzPAp1bAJp/preview',
    sourceUrl:
      'https://drive.google.com/file/d/1jYVNFHdC4VudP5GjzupJq0QzPAp1bAJp/view?usp=sharing',
  },
  {
    // Title from the portfolio deck list — confirm/reorder if the mapping is off.
    title: 'Harnessing business & media insights with LLMs',
    description: 'Using large language models to pull business and media insights from messy text.',
    embedUrl: 'https://gamma.app/embed/gxlahcldw500wwf',
    sourceUrl: 'https://gamma.app/docs/gxlahcldw500wwf',
  },
  {
    title: 'E-commerce product recommendation',
    description: 'A semantic, ML-driven approach to product recommendation for e-commerce.',
    embedUrl: 'https://gamma.app/embed/ev4sxt4qc9ygzcy',
    sourceUrl: 'https://gamma.app/docs/ev4sxt4qc9ygzcy',
  },
  {
    title: 'Data in LA — quant',
    description: 'A talk on data and quantitative work in Los Angeles.',
    embedUrl: 'https://gamma.app/embed/nymwqkf21x4bibd',
    sourceUrl: 'https://gamma.app/docs/nymwqkf21x4bibd',
  },
];

// Published / external writing.
export type Writing = {
  title: string;
  venue: string;
  description: string;
  url: string;
};

export const externalWriting: Writing[] = [
  {
    title: 'A Meaningful Drop in a Messy Bucket',
    venue: 'Harvard Kennedy School · Carr-Ryan Center commentary',
    description:
      'Commentary on data brokerage — what a single meaningful intervention can and can\'t do against the larger, messy market for personal data.',
    url: 'https://www.hks.harvard.edu/centers/carr-ryan/our-work/carr-ryan-commentary/meaningful-drop-messy-bucket-data-brokerage',
  },
];
