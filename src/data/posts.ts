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

export const posts: Post[] = [
  {
    slug: 'joining-proper-hospitality',
    title: 'Why I joined Proper Hospitality',
    date: '2026-03-15',
    read: '4 min read',
    category: 'Career',
    tags: ['career', 'data engineering', 'hospitality'],
    excerpt:
      "I've joined Proper Hospitality as Analytics Engineer. Why I chose to apply my skills to something I'm passionate about over the highest bidder.",
    body: `<p>Travel and hospitality have always fascinated me. It's asset-heavy and operationally complex, yet ultimately shaped by human psychology and experience. Proper's taste, elegance, and rejection of the overly standardized corporate hotel model make it an especially exciting place to work on these challenging problems.</p>
<p>I've decided to take my skills to work on something I am passionate about rather than the highest bidder. I am part of an exciting shift of talented engineers and builders looking to find their life's work outside of quant hedge funds and big tech. It makes me think of my favorite quote of all time — by John Collison, the co-founder of Stripe:</p>
<blockquote>"As you become an adult, you realize that things around you weren't just always there; people made them happen. But only recently have I started to internalize how much tenacity everything requires. That hotel, that park, that railway. The world is a museum of passion projects."</blockquote>
<p>I'm stepping into a position at the core of Proper's data and AI stack: building the unified warehouse, canonical models across core systems, and a brand-level guest identity foundation. The goal is to create an owned, scalable data asset that improves pricing, forecasting, segmentation, and decision-making. This is a critical moment for data and AI in the world and at Proper, and I'm excited to help lead this foundation-setting phase. Good AI is downstream of good data.</p>
<p>The broader ambition is a true operating system for Proper: unified data, clear identity, AI-assisted decisions, and real-time visibility across properties.</p>
<p>In just my first few weeks, I've seen a team of scrappy builders who want to do this the right way. I'm confident this is the team to bring long-needed innovation and product velocity to this vertical. Data and AI has the power to change the hotel experience and the scale and financial efficiency of the business.</p>`,
  },
  {
    slug: 'data-science-degree-trap',
    title: 'The data science degree trap',
    date: '2026-03-01',
    read: '3 min read',
    category: 'Career',
    tags: ['career', 'data science', 'education'],
    excerpt:
      "I've been watching people get Data Science master's degrees and then not get Data Science jobs. The pattern is pretty consistent.",
    body: `<p>I've been watching people get Data Science master's degrees and then not get Data Science jobs.</p>
<p>The pattern is pretty consistent. Someone works in cybersecurity or finance or operations. They do a part-time master's while working. They graduate, apply to DS roles, get nowhere. They stay in their old jobs. The degree just sits there.</p>
<p>The problem isn't the degree itself. It's that you're asking recruiters to take a bet on someone with zero professional DS experience in a market where they don't have to take bets. Your wizardry in Excel doesn't translate — it just looks like unrelated years that need to be explained away.</p>
<p>The advice people give is always the same: do projects, tailor your resume, apply to analytics roles instead. Maybe that works. I don't know. What I do know is that the easiest path into DS is from inside a company where people already know you. Transfer internally. Do DS work in your current role, even if it's just descriptive analytics that nobody asked for. Then those previous years become domain expertise instead of a liability.</p>
<p>But that requires staying in the field you hate while you build the bridge. There's no fast exit. The bootcamp won't fix it. The second master's won't fix it. You just have to do DS work somewhere, anywhere, until it's real experience instead of coursework.</p>`,
  },
  {
    slug: 'cloud-vs-own-storage-paradox',
    title: 'Cloud vs. own: the 24TB storage paradox',
    date: '2025-07-10',
    read: '4 min read',
    category: 'Tech',
    tags: ['infrastructure', 'cloud', 'cost', 'AI'],
    excerpt:
      'A 24TB hard drive costs $439. Renting the same space on AWS S3? $552/month. A small example of a broader truth about what tech infrastructure is really costing us.',
    body: `<img src="/blog/cloud-vs-own.jpg" alt="Cloud vs Own: The 24TB Storage Paradox infographic" style="width:100%;max-width:640px;border-radius:12px;margin:0 auto 28px;display:block;" />
<p>A 24TB hard drive costs $439. Renting the same space on AWS S3? $552/month.</p>
<p>There's something strangely poetic about this fact. It's a small example of a broader truth: much of today's technology infrastructure, once hailed for its elasticity and scalability, has become bloated and expensive. Despite growing competition among providers, pricing hasn't followed a downward trend. In fact, it often feels like the opposite. Features keep piling on, but so do the hidden fees, egress costs, and vendor lock-in traps.</p>
<p>The cloud isn't just about scale anymore — it's becoming a margin problem for compute-heavy businesses. As business models mature, cost efficiency is the next frontier.</p>
<p>The same pattern plays out across the stack. Snowflake bills spike with inefficient queries. Stripe quietly takes nearly 3% of revenue. AI infrastructure adds another layer of cost. Every API call to OpenAI or Claude pushes value upstream. Many "AI wrappers" are simply thin UIs on top of someone else's compute — and eventually subject to the same bloat and passed-on costs.</p>
<p>For startups, this exposes a hard truth: VC dollars often masked structural cost issues. Now, as capital tightens, many companies are realizing their business models don't scale. For enterprises, these costs multiply. What seemed minor in testing turns into a multimillion-dollar line item at scale.</p>
<p>We're entering an era where ownership matters. Controlling more of your infrastructure, optimizing costs, and avoiding dependency on expensive middle layers will define the next generation of winners. AI makes this even more critical. If you don't own the model or the tools to deliver your AI, you don't control the economics.</p>
<p>Efficiency, not just innovation, is becoming the real moat.</p>`,
  },
  {
    slug: 'quant-finance-reading',
    title: 'The one thing early quant candidates get wrong',
    date: '2025-06-01',
    read: '3 min read',
    category: 'Quant',
    tags: ['quant', 'finance', 'career', 'education'],
    excerpt:
      "Here's the biggest mistake I see early-career data professionals make when trying to get into quant finance roles: they don't read enough.",
    body: `<p>Here's the biggest mistake I see early-career data professionals make when trying to get into quant finance roles:</p>
<p>They don't read enough. That's it. It really is that simple.</p>
<p>Quant work is built on years of research, testing, and shared knowledge. Here's what early candidates miss:</p>
<ul>
<li>Key papers that explain why certain methods work (or don't)</li>
<li>The background of how quant finance developed</li>
<li>Ideas from other fields that can give you an edge</li>
</ul>
<p>I once created a test for people who asked me for help getting into quant finance. I'd send them a ZIP file with 10 PDFs — just 10–15 pages each — with some password-protected. The deal was simple: read the materials, then ask for the passwords if you wanted to discuss further.</p>
<p>Out of dozens of people who eagerly wanted "the secret" to break into the industry, only <em>one</em> person ever asked for the passwords.</p>
<p>The irony? After all my reading about the theory and mathematics, I ended up leaving the industry myself — because I hadn't read enough about what the actual day-to-day job entails. There's a difference between weekend quantitative hacking and building a career in the field.</p>
<p>And the best part? A lot of this knowledge is pretty much free and doesn't require a six-figure degree:</p>
<ul>
<li>Research papers that shaped the field</li>
<li>Books that explain tough concepts clearly</li>
<li>Academics and portfolio managers sharing insights on social media</li>
</ul>
<p>It might not feel flashy. But it works.</p>`,
  },
  {
    slug: 'tech-newer-means-better',
    title: "Tech's most dangerous myth: newer means better",
    date: '2025-05-20',
    read: '3 min read',
    category: 'Tech',
    tags: ['engineering', 'AI', 'product', 'tech'],
    excerpt:
      'I strongly disagree with the idea that every solution must include the latest tech. The executives who demand AI-powered everything seldom experience the friction these systems create.',
    body: `<p>I strongly disagree with the idea that every solution must include the latest tech.</p>
<p>A common example: I often see data scientists using random forests on small datasets — just 5,000 rows. But a simple linear model would probably run faster, be easier to understand, handle new data better, and need less upkeep.</p>
<p>At the heart of this problem is a critical disconnect: decision makers rarely use the tools they mandate.</p>
<ul>
<li>The executives who demand AI-powered everything seldom experience the friction these systems create.</li>
<li>The product managers who push for cutting-edge architectures rarely maintain them.</li>
</ul>
<p>This separation creates distorted incentives: decision makers optimize for innovation narratives while users simply need reliable tools that solve real problems.</p>
<p>You see this pattern repeating everywhere:</p>
<ul>
<li>Companies building AI to "fully automate sales calls" — when sales teams really just need a solid note-taking tool</li>
<li>Marketers pushing out thousands of AI-generated ads — even though great ads have always come from real human creativity</li>
<li>Engineers breaking systems into microservices — for apps that would run better as one solid piece</li>
</ul>
<p>Bridging this gap requires bringing decision makers closer to actual users and prioritizing outcomes over technologies.</p>`,
  },
  {
    slug: 'first-employee',
    title: '"First employee" sounds exciting. It\'s not.',
    date: '2025-05-05',
    read: '4 min read',
    category: 'Career',
    tags: ['career', 'startups', 'data science'],
    excerpt:
      '"First employee" sounds exciting. But in reality, it can be one of the loneliest roles you\'ll ever take on.',
    body: `<p>"First employee" sounds exciting.</p>
<p>But in reality, it can be one of the loneliest roles you'll ever take on.</p>
<p>A few years ago, when I joined a $400M quantitative hedge fund as their first outside hire, I expected structure. Instead, I stepped into something closer to a founder role — without the equity or the authority.</p>
<p>The ROI is actually much more limited than most people think. You take on founder-level stress without the corresponding upside.</p>
<p>The challenges hit fast:</p>
<ul>
<li>No clear path or vision to follow</li>
<li>No direct peers to check ideas with</li>
<li>Expected to deliver high-level work with little context</li>
<li>Building systems while still figuring out what was even needed</li>
</ul>
<p>The hardest part is the loneliness. Data work is already quiet by nature. But being the only person responsible for building key systems makes it feel even heavier.</p>
<p>What no one tells you is that being early means you're working in the dark. You're figuring out what matters at the same time you're trying to build it. Startups are notorious for not having training programs.</p>
<p>That's why I recommend having a few years of experience directing projects and teams before diving in. Doing it on your own, without people to train and coach you, is incredibly challenging.</p>
<p>But here's what I gained: I learned how to create clarity out of chaos. I was only 23 at the time. This maturity grows over time, and this experience taught me a lot about self-sufficiency and taking ownership of my work. That skill has helped me again and again in every role since.</p>
<p>If you're thinking about joining a team early, know this: you won't be handed a playbook. You'll be the one writing it.</p>`,
  },
  {
    slug: 'overestimate-day-underestimate-months',
    title: 'You overestimate what you can do in a day',
    date: '2025-01-15',
    read: '2 min read',
    category: 'Life',
    tags: ['learning', 'career', 'productivity'],
    excerpt:
      'You overestimate what you can do in a day and underestimate what you can achieve in a few months. A case in point: learning Mandarin.',
    body: `<p>You overestimate what you can do in a day and underestimate what you can achieve in a few months.</p>
<p>While working at ByteDance, I was significantly exposed to Mandarin in everyday interactions and got the chance to travel to Beijing for work. I became fascinated with Chinese culture and language.</p>
<p>I decided to join the Chinese Language Academy. After months of study and 3–4 hours every Sunday, I am thrilled to share that I have officially completed the Elementary Level of the Practical Chinese Program.</p>
<p>So far, I have built:</p>
<ul>
<li>A reading vocabulary of 500+ characters</li>
<li>A working knowledge of the Chinese phonetic system</li>
<li>Basic conversation skills in Mandarin</li>
</ul>
<p>I truly believe that a lot of great technology is being built in China. Companies like ByteDance, DeepSeek AI, and Alibaba have a strong place on the future world stage. I hope that continuing my study of Chinese will let me be a part of that future.</p>`,
  },
];

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
