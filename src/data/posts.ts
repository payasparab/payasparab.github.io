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

export const allCategories = [
  'All',
  'AI & Building',
  'Career',
  'Consulting',
  'Data & Engineering',
  'Finance & Quant',
  'Hospitality',
  'Public Policy',
] as const;

export const posts: Post[] = [
  {
    slug: 'analytics-engineering-in-hospitality',
    title: 'Analytics engineering for a hotel group',
    date: '2026-05-15',
    read: '4 min',
    category: 'Hospitality',
    tags: ['Analytics Engineering', 'Data Engineering'],
    excerpt:
      'I lead analytics engineering at Proper Hospitality. Hotels are a strange, wonderful data problem — and an underrated place to bring real quantitative rigor.',
    body: `<p>I lead analytics engineering at Proper Hospitality. Hotels are a strange, wonderful data problem: every property throws off a constant stream of bookings, rates, occupancy, labor, food-and-beverage, and guest behavior — and almost none of it arrives clean or connected.</p>
<h3>The job, in one line</h3>
<p>Take that scattered operational data and turn it into something the business can run on — reliable pipelines, a clear semantic layer, and reporting a general manager can trust at a glance.</p>
<h3>Why hospitality is underrated</h3>
<p>It's an industry that runs on instinct and relationships, which is part of its charm — and which leaves a lot of room for quiet, data-based improvement. Pricing, staffing, demand, and guest experience all get sharper with the right numbers behind them.</p>
<p>This is the work I find most satisfying: bringing real analytical rigor somewhere it hasn't been the default, without losing what makes the place work.</p>`,
  },
  {
    slug: 'employee-one-quant-fund',
    title: 'Employee #1 at a $400M fund: notes on building quant infra from zero',
    date: '2026-05-02',
    read: '6 min',
    category: 'Finance & Quant',
    tags: ['Data Engineering', 'Career'],
    excerpt:
      'Being the first engineering hire at a hedge fund means there is no platform team and no one to escalate to. A few things that situation taught me.',
    body: `<p>When I joined NinePointTwo as the first hire outside the founding team, there was no data platform and no model-testing framework. There was a strategy, a pile of data vendors, and an expensive clock running every trading day.</p>
<h3>Iteration speed is the product</h3>
<p>The highest-leverage thing I shipped was a rebuild of the internal ML library. It took three months and cut model-testing from three-to-five hours down to about five minutes. The point wasn't the efficiency — it was that when testing is nearly free, researchers try far more ideas, and trying more ideas is most of the job in alpha research.</p>
<h3>The boring code is where a lot of the money is</h3>
<p>Re-engineering trade execution — picking the right algorithm by strategy and asset class — quietly saved $400–800K a year in slippage. No model involved. Just careful plumbing and a willingness to read documentation other people skipped.</p>
<h3>Treat compliance as part of the system</h3>
<p>I automated the 13-F and CFTC filings, removing a 20–30 hour quarterly task. Under FINRA penalties, "we did it by hand and made a mistake" isn't acceptable, so automating the unglamorous, high-stakes work is exactly what a first engineer should grab.</p>
<p>The throughline: as employee #1, the job isn't to be the smartest person about markets. It's to make everyone else faster and safer.</p>`,
  },
  {
    slug: 'sub-8k-ai-mvps',
    title: 'How I ship sub-$8K AI MVPs in about 20 hours',
    date: '2026-04-18',
    read: '5 min',
    category: 'AI & Building',
    tags: ['AI / MVPs', 'Consulting', 'Building in Public'],
    excerpt:
      'Most AI project budgets die in scoping. Here\'s the constraint-first approach I use to get a working tool into someone\'s hands fast and cheap.',
    body: `<p>A lot of my consulting work is the same shape: a founder has an idea that feels like it needs an AI product, and wants to know if it's real before spending real money. The answer is usually a sub-$8K, roughly 20-hour MVP.</p>
<h3>The budget is the spec</h3>
<p>When the budget is small and fixed, scope stops being a negotiation. You're forced to find the single workflow that proves or kills the idea — which is the whole point of an MVP, and the step most teams skip.</p>
<h3>What actually gets built</h3>
<ul>
  <li>One end-to-end path, input to output, with a real front end — not a notebook.</li>
  <li>The unglamorous glue: file handling, an API key, a deploy, a link you can send someone.</li>
  <li>A short walkthrough video, because a demo that explains itself is easier to act on.</li>
</ul>
<p>I've shipped this pattern as a compliance-document generator, a podcast-summarization pipeline, an interview-synthesis tool, and a lunch-ordering Slackbot. The Slackbot mattered as much as the rest: a small tool that quietly saves a team time builds trust faster than a deck.</p>
<h3>Cheap is a strategy</h3>
<p>Going fast and cheap isn't underpricing yourself. It's de-risking the client's decision enough that a bigger, better-scoped engagement becomes the obvious next step.</p>`,
  },
  {
    slug: 'expert-network-calls',
    title: 'What expert-network calls taught me about what clients want',
    date: '2026-04-03',
    read: '4 min',
    category: 'Consulting',
    tags: ['Career', 'AdTech'],
    excerpt:
      'After a lot of product-expert calls across AdTech, fintech, and data, the pattern is clear: nobody is paying for a résumé. They\'re paying for one specific thing.',
    body: `<p>I take a handful of product-expert calls every month through the usual networks. Investors and operators book time to ask about things I've actually done — ad monetization, identity graphs, commerce integrations, quant tooling.</p>
<h3>Specificity is the whole thing</h3>
<p>Clients aren't booking "a data scientist." They're booking the person who worked on third-party data and identity graphs inside a large platform's ads org. The narrower and more concrete your real experience, the more useful you are, because the questions are narrow and concrete too.</p>
<h3>Speed wins the work</h3>
<p>Networks route projects to whoever responds first and screens cleanest. Treating the inbound like a desk — fast, precise, low-friction — raises your call volume without any extra marketing.</p>
<h3>It doubles as market research</h3>
<p>Every call tells you what sophisticated buyers are confused about right now. That's a content calendar and an early read on where a market is heading — handed to you, while you get paid.</p>`,
  },
  {
    slug: 'identity-graphs-explained',
    title: 'Identity graphs, explained without the buzzwords',
    date: '2026-03-20',
    read: '4 min',
    category: 'Data & Engineering',
    tags: ['AdTech', 'Machine Learning'],
    excerpt:
      'An identity graph is really just an answer to one question: are these two records the same person? Everything else is engineering around the uncertainty.',
    body: `<p>"Identity graph" sounds like a product you buy. It's closer to a posture toward messy data. The core question never changes: are these two records the same person, and how sure are we?</p>
<h3>Why it's hard</h3>
<p>Real consumer data is sparse and contradictory. The same person is an email here, a hashed phone there, a device ID somewhere else, a loyalty number on a receipt. You rarely get a clean key, so you build probabilistic links and carry the uncertainty forward instead of pretending it away.</p>
<h3>Where it pays off</h3>
<ul>
  <li>Advertising: stitching first- and third-party signals so measurement reflects one person, not five fragments.</li>
  <li>Loyalty: recognizing a returning customer across channels without forcing a login.</li>
  <li>Diligence: giving a startup a defensible, de-duplicated user count for a raise.</li>
</ul>
<p>The trap is treating the graph as ground truth. It's a model with error bars, and the real work is deciding how much confidence each downstream decision needs.</p>`,
  },
  {
    slug: 'tech-on-the-council-floor',
    title: 'Tech belongs on the council floor',
    date: '2026-03-05',
    read: '4 min',
    category: 'Public Policy',
    tags: ['Leadership', 'Governance'],
    excerpt:
      'A neighborhood council is the closest form of government to the people — and a place where modern data and old civic process meet.',
    body: `<p>I serve on the Downtown LA Neighborhood Council, an advisory body to the City of Los Angeles, run by volunteers elected by the community. We weigh in on housing, homelessness, land use, public safety, and transportation.</p>
<p>It's also a place where decisions get made with surprisingly little data infrastructure behind them — which is where someone who ships systems can help.</p>
<h3>The gap</h3>
<p>Cities hold enormous amounts of data — 311 requests, permits, foot traffic, budgets — and very little of it is shaped into something a volunteer board can use at 6:30 on a Tuesday. The problem is rarely the math; it's the translation.</p>
<h3>Why it matters to me</h3>
<p>One version of public service treats technologists as vendors to be managed. I think the more useful version puts people who actually build inside the room, helping a community ask better questions of its own data.</p>`,
  },
  {
    slug: 'why-i-didnt-specialize',
    title: 'Why I didn\'t specialize',
    date: '2026-02-19',
    read: '3 min',
    category: 'Career',
    tags: ['Building in Public'],
    excerpt:
      'Specialization is the safe advice. I\'ve taken a different bet — and here\'s the honest version of the tradeoff.',
    body: `<p>The standard advice is to specialize: pick a lane, go deep, become the expert in a narrow thing. It's good advice for most people. I've gone the other way on purpose.</p>
<h3>The bet</h3>
<p>My background is a triple major, a hedge fund, a global ads org, a creator-economy startup, a couple dozen consulting engagements, and an elected council seat. On paper that reads as unfocused. In practice it means I can move between the math, the business case, and the build without handing off — and the hardest problems usually live between those, not inside any one of them.</p>
<h3>The cost, honestly</h3>
<p>Range has a real price. You're never the single deepest person on any one axis, and you have to be at peace with that. The bet is that the connective tissue gets rarer and more valuable as everything else gets more specialized. So far it's held up.</p>`,
  },
];

export const allTags: string[] = Array.from(
  new Set(posts.flatMap((p) => p.tags))
).sort();
