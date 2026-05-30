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
