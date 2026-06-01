export const servicePage = {
  label: 'Civic',
  title: 'Public service',
  subtitle:
    "I'm an elected board director of the Downtown LA Neighborhood Council and serve on its Business & Innovation Committee. This is the home for the council work, the policy research behind it, constituent resources, and community outreach.",
};

export const councilOverview = {
  organization: 'Downtown Los Angeles Neighborhood Council (DLANC)',
  description:
    'An official advisory body to the City of Los Angeles: a 24-member board of volunteers, elected by the community every two years. It advises the City on housing, homelessness, land use, public safety, transportation, and more, and files formal positions through Community Impact Statements.',
  focus:
    'The translation layer between city systems and the people they\'re meant to serve. Cities sit on enormous amounts of data (311 requests, permits, budgets, foot traffic), and very little of it is shaped into something a volunteer board, or a local business owner, can act on.',
  committees: [
    'Budget & Finance',
    'Business & Innovation',
    'Livability',
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
      'Email payas.parab@dlanc.com with a Downtown issue, idea, or business concern.',
  },
  {
    category: 'SHOW UP',
    title: 'Speak at a meeting',
    description:
      'Public comment is open at every council and committee meeting. Speak up.',
  },
  {
    category: 'OFFICE HOURS',
    title: 'By appointment',
    description: 'Email to schedule, virtual or in-person around Downtown.',
  },
];

export type CommitteeAssignment = {
  role: string;
  body: string;
  description: string;
};

export const committeeAssignments: CommitteeAssignment[] = [
  {
    role: 'CHAIR · TREASURER',
    body: 'Budget & Finance Committee',
    description:
      "Chair the committee and serve as Treasurer of the board, owning the council's budget, funding requests, Neighborhood Purpose Grants pipeline, and financial reporting to the City's Department of Neighborhood Empowerment.",
  },
  {
    role: 'FOUNDER · CHAIR',
    body: 'Business & Innovation Committee',
    description:
      'Founded and chair this committee, convening Downtown business owners and operators, surfacing what local employers need from the City, and turning that input into board action items and Community Impact Statements.',
  },
  {
    role: 'MEMBER',
    body: 'Livability Committee',
    description:
      'Committee member working on the day-to-day quality-of-life issues that decide whether Downtown is somewhere people want to live, work, and visit: cleanliness, public safety, public realm, and street-level experience.',
  },
];

export type MeetingEvent = {
  cadence: string;
  title: string;
  description: string;
  link?: { text: string; url: string };
};

export const upcomingMeetings: MeetingEvent[] = [
  {
    cadence: '2nd Tuesday · 6:30 PM',
    title: 'DLANC full board meeting',
    description:
      'Standing monthly meeting where the board votes on Community Impact Statements, budget items, NPG awards, and other Downtown business. Open to the public; check the calendar for location and agenda.',
    link: { text: 'DLANC calendar & agendas', url: 'https://dlanc.com/calendar/' },
  },
  {
    cadence: 'Monthly',
    title: 'Business & Innovation Committee',
    description:
      'Working session with Downtown business owners and operators. Agenda items move up to the full board when consensus forms.',
    link: { text: 'DLANC calendar & agendas', url: 'https://dlanc.com/calendar/' },
  },
  {
    cadence: 'As-needed',
    title: 'Neighborhood Purpose Grants review',
    description:
      'Application reviews and committee recommendations on NPG awards before they go to the full board for a vote.',
    link: { text: 'NPG info & application', url: 'https://dlanc.com/budget/' },
  },
];

export type Resource = { text: string; url: string };

export const resources: Resource[] = [
  { text: 'MyLA311: report an issue', url: 'http://myla311.lacity.org/' },
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
// happen. Keep most-recent first.
export const news: NewsItem[] = [
  {
    date: 'Ongoing',
    title: 'Chair, Budget & Finance · Treasurer',
    body: 'Chairing the Budget & Finance Committee and serving as board Treasurer: managing the council budget, signing off on funding requests, running the Neighborhood Purpose Grants pipeline, and keeping the books reconciled with the City of LA Department of Neighborhood Empowerment.',
    link: { text: 'NPG info & budget', url: 'https://dlanc.com/budget/' },
  },
  {
    date: 'Ongoing',
    title: 'Founder & Chair, Business & Innovation Committee',
    body: 'Stood up the Business & Innovation Committee and chair its standing meetings, convening Downtown business owners, identifying recurring pain points (permitting, public safety, cleanliness, foot-traffic recovery), and converting them into Community Impact Statements and board action items.',
  },
  {
    date: 'Ongoing',
    title: 'Member, Livability Committee',
    body: 'Working through the Livability Committee on the day-to-day quality-of-life issues that decide whether Downtown is somewhere people want to live, work, and visit.',
  },
  {
    date: 'Ongoing',
    title: 'Community Impact Statements (CIS)',
    body: "Drafting and shepherding CIS filings, the council's formal mechanism to put a position on the record with the City on housing, homelessness, land use, public safety, transportation, and the issues Downtown stakeholders surface in committee.",
    link: { text: 'DLANC calendar & agendas', url: 'https://dlanc.com/calendar/' },
  },
  {
    date: 'Upcoming',
    title: 'Next board meeting: 2nd Tuesday, 6:30 PM',
    body: 'Full board meets monthly to vote on Community Impact Statements, NPG awards, budget items, and motions out of committee. Open to the public; check the DLANC calendar for the exact date, location, and agenda.',
    link: { text: 'DLANC calendar & agendas', url: 'https://dlanc.com/calendar/' },
  },
  {
    date: '2024',
    title: 'Elected Board Director',
    body: 'Elected to the Downtown LA Neighborhood Council board by the community to represent Downtown stakeholders.',
  },
];

export type PolicyPosition = {
  area: string;
  title: string;
  position: string;
  status?: string;
};

export const policyPositions: PolicyPosition[] = [
  {
    area: 'BUSINESS',
    title: 'Lower the friction of opening & operating in Downtown',
    position:
      'Streamlined permitting, predictable inspections, and a single point of contact at the City for new and existing businesses. Most "anti-business" outcomes Downtown are bureaucratic, not ideological. They\'re fixable with process design.',
    status: 'Active',
  },
  {
    area: 'PUBLIC SAFETY',
    title: 'Evidence-based, block-level public safety',
    position:
      'Pair visible enforcement on persistent hotspots with mental-health and outreach response where it actually works. Push the City for transparent, block-level data so the council can see whether interventions are moving the numbers.',
    status: 'Active',
  },
  {
    area: 'HOUSING',
    title: 'Build more housing, faster, at every income level',
    position:
      'Support by-right approvals for compliant projects, adaptive reuse of empty office stock, and removing local barriers to housing the City has already approved. Downtown\'s recovery requires residents.',
    status: 'Active',
  },
  {
    area: 'HOMELESSNESS',
    title: 'Service-led response, paired with accountability',
    position:
      'Back proven interventions (interim housing, behavioral-health beds, outreach teams) and demand performance metrics from the providers and agencies the City funds. Compassion and accountability are not in tension.',
    status: 'Active',
  },
  {
    area: 'PUBLIC REALM',
    title: 'A Downtown that\'s clean, walkable, and worth showing up to',
    position:
      'Faster response on cleanliness and basic services, real investment in the pedestrian experience, and activation of parks, plazas, and Broadway. The street-level experience is the recovery strategy.',
    status: 'Active',
  },
  {
    area: 'DATA & TECH',
    title: 'Use the data the City already has',
    position:
      'Cities sit on 311, permits, foot traffic, and budget data. Push for open, usable formats so the board, residents, and businesses can hold the City to its own numbers, and so committee work runs on evidence rather than anecdote.',
    status: 'Active',
  },
];

export type Initiative = {
  category: string;
  title: string;
  description: string;
};

export const initiatives: Initiative[] = [
  {
    category: 'BUSINESS & INNOVATION',
    title: 'Downtown Business Operator Roundtables',
    description:
      'Recurring committee sessions with restaurant, retail, hospitality, and creative-industry operators, building a running list of what the City needs to fix and tracking how the council can move each item.',
  },
  {
    category: 'BUDGET & FINANCE',
    title: 'Neighborhood Purpose Grants pipeline',
    description:
      'Refining the NPG intake, scoring, and disbursement process so Downtown nonprofits and schools can actually get the council\'s dollars to the ground without months of paperwork.',
  },
  {
    category: 'LIVABILITY',
    title: 'Street-level conditions tracking',
    description:
      'Working with the Livability Committee to surface cleanliness, public-safety, and public-realm issues block by block, and turn them into CIS filings and follow-up with City departments.',
  },
  {
    category: 'CIS',
    title: 'Community Impact Statements on active City files',
    description:
      'Drafting and shepherding CIS filings on housing, land-use, public-safety, and budget items moving through City Hall, the council\'s formal mechanism for going on the record.',
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
