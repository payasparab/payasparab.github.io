// Lectures, videos, and lesson plans. Add to src/data/teaching.ts.

export type TeachingFormat =
  | 'Lecture'
  | 'Course'
  | 'Workshop'
  | 'Mentorship'
  | 'Lesson plan'
  | 'Video';

export type Teaching = {
  year: string;
  title: string;
  venue: string;
  format: TeachingFormat;
  description?: string;
  url?: string;
};

export const teaching: Teaching[] = [
  {
    year: '2022',
    title: 'Applied data science for product strategy',
    venue: 'UC Berkeley · Haas School of Business',
    format: 'Lecture',
    description: 'Assistant lecturer for a graduate course.',
  },
  {
    year: '2020–2022',
    title: 'High-school computer science curriculum',
    venue: 'Microsoft TEALS',
    format: 'Course',
    description: 'Volunteer CS instructor across multiple school terms.',
  },
  {
    year: 'Ongoing',
    title: 'Firme Coding',
    venue: 'Homeboy Industries',
    format: 'Mentorship',
    description:
      "Mentoring aspiring technologists through Homeboy's coding program.",
  },
  {
    year: '[ year ]',
    title: '[ Add a video, lecture recording, or lesson plan ]',
    venue: '[ Where it was given ]',
    format: 'Video',
    description: '[ One-line description and what is covered ]',
    url: '#',
  },
  {
    year: '[ year ]',
    title: '[ Lesson plan: e.g. SQL for non-engineers ]',
    venue: '[ Internal team or community group ]',
    format: 'Lesson plan',
    description: '[ Outline / handout / link to the materials ]',
  },
];
