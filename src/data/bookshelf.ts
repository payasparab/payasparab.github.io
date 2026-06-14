export type BookStatus = 'reading' | 'read' | 'queue';

export type Book = {
  title: string;
  author: string;
  status: BookStatus;
  rating?: number; // 1–5
  rank?: number;   // 1–10 for top-10 list
};

export const books: Book[] = [
  // ── Currently reading ───────────────────────────────────────────────────
  { title: 'This Time Is Different: Eight Centuries of Financial Folly', author: 'Carmen Reinhart & Kenneth Rogoff', status: 'reading' },
  { title: 'Viking Economics', author: 'George Lakey', status: 'reading' },
  { title: 'Singapore Story', author: 'Lee Kuan Yew', status: 'reading' },
  { title: 'Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days', author: 'Jake Knapp, John Zeratsky & Braden Kowitz', status: 'reading' },
  { title: 'Extreme Ownership', author: 'Jocko Willink & Leif Babin', status: 'reading' },

  // ── Top 10 of all time ──────────────────────────────────────────────────
  { title: 'Unreasonable Hospitality', author: 'Will Guidara', status: 'read', rating: 5, rank: 1 },
  { title: 'Algorithms to Live By', author: 'Brian Christian & Tom Griffiths', status: 'read', rating: 5, rank: 2 },
  { title: 'Range: Why Generalists Triumph in a Specialized World', author: 'David Epstein', status: 'read', rating: 5, rank: 3 },
  { title: 'Slow Productivity', author: 'Cal Newport', status: 'read', rating: 5, rank: 4 },
  { title: 'Chaos Monkeys', author: 'Antonio García Martínez', status: 'read', rating: 5, rank: 5 },
  { title: 'The Outsiders', author: 'William N. Thorndike Jr.', status: 'read', rating: 5, rank: 6 },
  { title: 'Four Thousand Weeks: Time Management for Mortals', author: 'Oliver Burkeman', status: 'read', rating: 5, rank: 7 },
  { title: 'The Nvidia Way', author: 'Tae Kim', status: 'read', rating: 5, rank: 8 },
  { title: 'The Technological Republic', author: 'Alex Karp', status: 'read', rating: 5, rank: 9 },
  { title: 'On Writing Well', author: 'William Zinsser', status: 'read', rating: 5, rank: 10 },

  // ── Read · ★★★★★ ────────────────────────────────────────────────────────
  { title: 'Bullshit Jobs', author: 'David Graeber', status: 'read', rating: 5 },
  { title: 'Mindset', author: 'Carol Dweck', status: 'read', rating: 5 },
  { title: 'Crucial Conversations', author: 'Kerry Patterson et al.', status: 'read', rating: 5 },
  { title: 'Excellent Sheep', author: 'William Deresiewicz', status: 'read', rating: 5 },
  { title: 'The Science of Scaling', author: 'Mark Roberge', status: 'read', rating: 5 },
  { title: 'The First 90 Days', author: 'Michael Watkins', status: 'read', rating: 5 },
  { title: 'The Defining Decade', author: 'Meg Jay', status: 'read', rating: 5 },
  { title: 'The Mom Test', author: 'Rob Fitzpatrick', status: 'read', rating: 5 },
  { title: 'Catch and Kill', author: 'Ronan Farrow', status: 'read', rating: 5 },
  { title: 'Models', author: 'Mark Manson', status: 'read', rating: 5 },
  { title: 'Activate Your Greatness', author: 'Scott Miller', status: 'read', rating: 5 },
  { title: 'The Everything Store', author: 'Brad Stone', status: 'read', rating: 5 },
  { title: 'Promised Land', author: 'Barack Obama', status: 'read', rating: 5 },

  // ── Read · ★★★★ ─────────────────────────────────────────────────────────
  { title: 'Skin in the Game', author: 'Nassim Nicholas Taleb', status: 'read', rating: 4 },
  { title: 'Smart People Should Build Things', author: 'Andrew Yang', status: 'read', rating: 4 },
  { title: 'Storyworth', author: 'Nick Bauta', status: 'read', rating: 4 },
  { title: 'Read Write Own', author: 'Chris Dixon', status: 'read', rating: 4 },
  { title: 'The Fountainhead', author: 'Ayn Rand', status: 'read', rating: 4 },
  { title: 'Bowling Alone', author: 'Robert D. Putnam', status: 'read', rating: 4 },
  { title: 'Burn the Boats', author: 'Matt Higgins', status: 'read', rating: 4 },
  { title: 'The Organized Mind', author: 'Daniel J. Levitin', status: 'read', rating: 4 },
  { title: 'The Deadline Effect', author: 'Christopher Cox', status: 'read', rating: 4 },
  { title: 'The 5 AM Club', author: 'Robin Sharma', status: 'read', rating: 4 },
  { title: 'Not Nice', author: 'Aziz Gazipura', status: 'read', rating: 4 },
  { title: "Man's Search for Meaning", author: 'Viktor Frankl', status: 'read', rating: 4 },
  { title: 'The Minimalist Founder', author: 'Sahil Lavingia', status: 'read', rating: 4 },
  { title: 'Careless People', author: 'Sarah Wynn-Williams', status: 'read', rating: 4 },
  { title: 'Laws of Human Nature', author: 'Robert Greene', status: 'read', rating: 4 },
  { title: 'Has China Won', author: 'Kishore Mahbubani', status: 'read', rating: 4 },
  { title: 'The Signal and the Noise', author: 'Nate Silver', status: 'read', rating: 4 },
  { title: 'The Ten Equations that Rule the World', author: 'David Sumpter', status: 'read', rating: 4 },
  { title: 'Zero to One', author: 'Peter Thiel', status: 'read', rating: 4 },

  // ── Read · ★★★ ──────────────────────────────────────────────────────────
  { title: 'Antifragile', author: 'Nassim Nicholas Taleb', status: 'read', rating: 3 },
  { title: 'How to Win Friends and Influence People', author: 'Dale Carnegie', status: 'read', rating: 3 },
  { title: 'The Time Paradox', author: 'Philip Zimbardo', status: 'read', rating: 3 },
  { title: 'Win Every Argument', author: 'Mehdi Hasan', status: 'read', rating: 3 },
  { title: 'On Grand Strategy', author: 'John Lewis Gaddis', status: 'read', rating: 3 },
  { title: 'The Score Takes Care of Itself', author: 'Bill Walsh', status: 'read', rating: 3 },
  { title: 'Hillbilly Elegy', author: 'J.D. Vance', status: 'read', rating: 3 },
  { title: 'The Inner Game of Tennis', author: 'Timothy Gallwey', status: 'read', rating: 3 },
  { title: 'Atomic Habits', author: 'James Clear', status: 'read', rating: 3 },
  { title: '48 Laws of Power', author: 'Robert Greene', status: 'read', rating: 3 },
  { title: 'Recall Newsom', author: 'Orrin Heatlie', status: 'read', rating: 3 },
  { title: 'How to Lie with Statistics', author: 'Darrell Huff', status: 'read', rating: 3 },
  { title: 'Different: Escaping the Competitive Herd', author: 'Youngme Moon', status: 'read', rating: 3 },
  { title: 'Principles', author: 'Ray Dalio', status: 'read', rating: 3 },

  // ── Read · ★★ ───────────────────────────────────────────────────────────
  { title: 'Fear and Loathing in Las Vegas', author: 'Hunter S. Thompson', status: 'read', rating: 2 },
  { title: 'The Cold Start Problem', author: 'Andrew Chen', status: 'read', rating: 2 },
  { title: 'The Hating Game', author: 'Sally Thorne', status: 'read', rating: 2 },

  // ── To read ─────────────────────────────────────────────────────────────
  { title: 'Converted: The Data-Driven Way to Win Customers\' Hearts', author: 'Neil Hoyne', status: 'queue' },
  { title: 'How to Get Rich', author: 'Felix Dennis', status: 'queue' },
  { title: 'Becoming Trader Joe', author: 'Joe Coulombe', status: 'queue' },
  { title: 'Crossing the Chasm', author: 'Geoffrey Moore', status: 'queue' },
  { title: 'Narrative Economics', author: 'Robert J. Shiller', status: 'queue' },
  { title: 'Awaken the Giant Within', author: 'Tony Robbins', status: 'queue' },
  { title: 'Steve Jobs', author: 'Walter Isaacson', status: 'queue' },
  { title: "The Innovator's Dilemma", author: 'Clayton M. Christensen', status: 'queue' },
  { title: 'The Lean Startup', author: 'Eric Ries', status: 'queue' },
  { title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', status: 'queue' },
  { title: 'Woke, Inc.', author: 'Vivek Ramaswamy', status: 'queue' },
  { title: 'Dopamine Nation', author: 'Anna Lembke', status: 'queue' },
  { title: 'The Goal: A Process of Ongoing Improvement', author: 'Eliyahu M. Goldratt', status: 'queue' },
  { title: 'The Lessons of History', author: 'Will & Ariel Durant', status: 'queue' },
  { title: 'Ecosystem-Led Growth', author: 'Bob Moore', status: 'queue' },
  { title: 'Who Is Michael Ovitz?', author: 'Michael Ovitz', status: 'queue' },
  { title: 'Born a Crime', author: 'Trevor Noah', status: 'queue' },
  { title: 'Prototype Nation: China and the Contested Promise of Innovation', author: 'Silvia Lindtner', status: 'queue' },
  { title: 'Statistical Consequences of Fat Tails', author: 'Nassim Nicholas Taleb', status: 'queue' },
  { title: 'The 5 Types of Wealth', author: 'Sahil Bloom', status: 'queue' },
  { title: 'Effective Data Analysis', author: 'Mona Khalil', status: 'queue' },
  { title: 'The Book on Rental Property Investing', author: 'Brandon Turner', status: 'queue' },
  { title: 'Competing on Analytics', author: 'Thomas H. Davenport', status: 'queue' },
  { title: 'Addiction by Design', author: 'Natasha Dow Schüll', status: 'queue' },
  { title: 'How to Solve It', author: 'G. Pólya', status: 'queue' },
  { title: 'How to Build a Car', author: 'Adrian Newey', status: 'queue' },
  { title: 'The Rebirth of Urban Democracy', author: 'Jeffrey M. Berry et al.', status: 'queue' },
  { title: 'In-N-Out Burger', author: 'Stacy Perman', status: 'queue' },
  { title: 'Titan', author: 'Ron Chernow', status: 'queue' },
  { title: 'The Bell Curve', author: 'Richard J. Herrnstein & Charles Murray', status: 'queue' },
  { title: 'Hate the Game', author: 'Jesse Washington', status: 'queue' },
  { title: 'The Illusion of Control', author: 'Gregory Michaux', status: 'queue' },
  { title: 'Being Wrong: Adventures in the Margin of Error', author: 'Kathryn Schulz', status: 'queue' },
  { title: 'The Statistical Strategist', author: 'Jeff Sauro & James Lewis', status: 'queue' },
];

export const currentlyReading = books.filter((b) => b.status === 'reading');
export const topBooks = books.filter((b) => b.rank != null).sort((a, b) => a.rank! - b.rank!);
export const readBooks = books.filter((b) => b.status === 'read' && b.rank == null).sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
export const toReadBooks = books.filter((b) => b.status === 'queue');

export function goodreadsUrl(title: string, author: string): string {
  return `https://www.goodreads.com/search?q=${encodeURIComponent(title + ' ' + author)}`;
}
