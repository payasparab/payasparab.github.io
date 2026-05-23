// What I've been reading. Add / swap in src/data/bookshelf.ts.

export type BookStatus = 'reading' | 'read' | 'queue';

export type Book = {
  title: string;
  author: string;
  status: BookStatus;
  tag: string;
  note?: string;
};

export const bookshelf: Book[] = [
  {
    title: 'Thinking in Systems',
    author: 'Donella Meadows',
    status: 'read',
    tag: 'Systems',
    note: 'The book that gave me the language for what I actually do.',
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    status: 'read',
    tag: 'Data Eng',
    note: 'Required reading for anyone designing pipelines they\'ll regret later.',
  },
  {
    title: 'The Big Short',
    author: 'Michael Lewis',
    status: 'read',
    tag: 'Finance',
    note: 'Holds up. The best primer on how a market gets numb to its own data.',
  },
  {
    title: 'Weapons of Math Destruction',
    author: 'Cathy O\'Neil',
    status: 'read',
    tag: 'Policy',
    note: 'A clean argument for why model audits belong in policy, not just QA.',
  },
  {
    title: 'The Godfather',
    author: 'Mario Puzo',
    status: 'read',
    tag: 'Fiction',
    note: 'Comfort re-read. Most management lessons are in here, lightly disguised.',
  },
  {
    title: '[ Add a book — title ]',
    author: '[ Author ]',
    status: 'reading',
    tag: '[ Tag ]',
    note: '[ One-line note on why it stuck with you ]',
  },
];
