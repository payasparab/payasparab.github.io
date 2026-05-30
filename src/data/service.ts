export const servicePage = {
  label: 'Civic',
  title: 'Public service',
  subtitle:
    "I'm an elected board director of the Downtown LA Neighborhood Council and serve on its Business & Innovation Committee. This is the home for the council work, the policy research behind it, constituent resources, and community outreach.",
};

export const councilOverview = {
  organization: 'Downtown Los Angeles Neighborhood Council (DLANC)',
  description:
    'An official advisory body to the City of Los Angeles — a 24-member board of volunteers, elected by the community every two years. It advises the City on housing, homelessness, land use, public safety, transportation, and more, and files formal positions through Community Impact Statements.',
  focus:
    'The translation layer between city systems and the people they\'re meant to serve. Cities sit on enormous amounts of data — 311 requests, permits, budgets, foot traffic — and very little of it is shaped into something a volunteer board, or a local business owner, can act on.',
  committees: [
    'Business & Innovation',
    'Housing',
    'Land use',
    'Public safety',
    'Transportation',
    'Homelessness',
  ],
};

export type ConstituentService = {
  category: string;
  title: string;
  description: string;
};

export const constituentServices: ConstituentService[] = [
  {
    category: 'REACH ME',
    title: 'Get in touch',
    description:
      'Email me@payasparab.com with a Downtown issue, idea, or business concern.',
  },
  {
    category: 'SHOW UP',
    title: 'Speak at a meeting',
    description:
      'Public comment is open at every council and committee meeting — Speak Up.',
  },
  {
    category: 'OFFICE HOURS',
    title: 'By appointment',
    description: 'Email to schedule — virtual or in-person around Downtown.',
  },
];

export type Resource = { text: string; url: string };

export const resources: Resource[] = [
  { text: 'MyLA311 — report an issue', url: 'http://myla311.lacity.org/' },
  {
    text: 'Neighborhood Info LA',
    url: 'https://neighborhoodinfo.lacity.gov/',
  },
  {
    text: 'Social Services & Resource Map',
    url: 'https://dlanc.com/resource-map/',
  },
  {
    text: 'Neighborhood Purpose Grants',
    url: 'https://dlanc.com/budget/',
  },
  { text: 'DLANC calendar & agendas', url: 'https://dlanc.com/calendar/' },
  { text: 'Contact DLANC', url: 'https://dlanc.com/contact/' },
];

export type NewsItem = {
  // A date (e.g. "May 2026") or a status like "Ongoing".
  date: string;
  title: string;
  body: string;
  link?: { text: string; url: string };
};

// Council news and updates. Replace/extend with real dated updates as they
// happen — keep most-recent first.
export const news: NewsItem[] = [
  {
    date: 'Ongoing',
    title: 'Business & Innovation Committee',
    body: 'Engaging Downtown businesses through the committee — surfacing what local owners need from the City and turning it into action items the board can act on.',
  },
  {
    date: 'Ongoing',
    title: 'Community Impact Statements',
    body: 'Helping the council file formal positions with the City on housing, homelessness, land use, public safety, and transportation.',
    link: { text: 'DLANC calendar & agendas', url: 'https://dlanc.com/calendar/' },
  },
  {
    date: '2024',
    title: 'Elected Board Director',
    body: 'Elected to the Downtown LA Neighborhood Council board by the community to represent Downtown stakeholders.',
  },
];

export type Outreach = {
  category: string;
  title: string;
  description: string;
};

export const outreach: Outreach[] = [
  {
    category: 'MENTORSHIP',
    title: 'Homeboy Industries · Firme Coding',
    description:
      "Mentoring aspiring technologists through Homeboy's coding program.",
  },
  {
    category: 'TEACHING',
    title: 'Microsoft TEALS',
    description: 'Volunteer computer-science instructor, 2020–2022.',
  },
  {
    category: 'LECTURING',
    title: 'UC Berkeley · Haas',
    description: 'Assistant lecturer at the Haas School of Business, 2022.',
  },
  {
    category: 'PRO BONO',
    title: 'Develop for Good',
    description: 'Industry mentor on a World Bank data project.',
  },
  {
    category: 'SERVICE',
    title: 'National Security Innovation Network',
    description: 'Volunteer engineer with US Army Futures, 2022.',
  },
  {
    category: 'CIVIC',
    title: 'DLANC business outreach',
    description:
      'Engaging Downtown businesses through the Business & Innovation Committee.',
  },
];
