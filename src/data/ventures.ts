// Companies and sub-brands I run or am building.
// Add new ventures by appending to this array.

export type VentureStatus = 'active' | 'building' | 'exiting' | 'planned';

export type Venture = {
  name: string;
  status: VentureStatus;
  tagline: string;
  description: string;
  focus: string[];
  url?: string;
};

const STATUS_LABEL: Record<VentureStatus, string> = {
  active: 'Active',
  building: 'Building',
  exiting: 'Exiting',
  planned: 'Planned',
};

export function statusLabel(s: VentureStatus): string {
  return STATUS_LABEL[s];
}

export const ventures: Venture[] = [
  {
    name: 'Handy Point Group',
    status: 'exiting',
    tagline: 'Data + AI consultancy',
    description:
      "Senior data, product, and AI help — part-time, without a full-time hire. Took on 2–3 companies a month plus product-expert calls across e-commerce, data/AI, fintech, and PropTech, including drafting product and legal documents. Currently exiting the firm to refocus on full-time and venture work.",
    focus: ['Consulting', 'AI MVPs', 'Fractional finance', 'Expert calls'],
    url: 'https://handypointgroup.com',
  },
  {
    name: '[ Next venture ]',
    status: 'planned',
    tagline: '[ Tagline ]',
    description:
      '[ Placeholder for your next sub-brand. Duplicate this block in src/data/ventures.ts and fill it in. ]',
    focus: [],
  },
];
