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

// No posts published yet. Real writing goes here. For each entry copy the
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
    title: 'Harvard Kennedy School: project update',
    description: 'A project update from my Technology & Human Rights fellowship work at HKS.',
    embedUrl: 'https://drive.google.com/file/d/1jYVNFHdC4VudP5GjzupJq0QzPAp1bAJp/preview',
    sourceUrl:
      'https://drive.google.com/file/d/1jYVNFHdC4VudP5GjzupJq0QzPAp1bAJp/view?usp=sharing',
  },
  // The three below: two are AI papers/updates, one is a quant career talk.
  // Mapping of URL → topic is a best guess; reorder/relabel if needed.
  {
    title: 'So you want to be quant?',
    description: 'A review of recent papers and developments in AI.',
    embedUrl: 'https://drive.google.com/file/d/19AT8zmnOh45Dei97uel3DLIUk1_v9-p7/preview',
    sourceUrl:
      'https://drive.google.com/file/d/19AT8zmnOh45Dei97uel3DLIUk1_v9-p7/view?usp=sharing',
  },
  {
    title: 'AI and E-Commerce',
    description: 'Notes and updates on recent AI research and papers.',
    embedUrl: 'https://drive.google.com/file/d/1GgfE0j-Se5PWBhREaoG9QedOa4faOuUE/preview',
    sourceUrl:
      'https://drive.google.com/file/d/1GgfE0j-Se5PWBhREaoG9QedOa4faOuUE/view?usp=sharing',
  },
  {
    title: 'AI Robustness in Media',
    description: 'A career presentation on quantitative research and finance.',
    embedUrl: 'https://drive.google.com/file/d/1chlBZvmRbsqcwCAgVJehab3mKbfo2f0s/preview',
    sourceUrl:
      'https://drive.google.com/file/d/1chlBZvmRbsqcwCAgVJehab3mKbfo2f0s/view?usp=sharing',
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
      'Commentary on data brokerage: what a single meaningful intervention can and can\'t do against the larger, messy market for personal data.',
    url: 'https://www.hks.harvard.edu/centers/carr-ryan/our-work/carr-ryan-commentary/meaningful-drop-messy-bucket-data-brokerage',
  },
];
