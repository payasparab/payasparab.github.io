export const site = {
  name: 'Payas Parab',
  brand: 'PAYAS PARAB',
  email: 'me@payasparab.com',
  location: 'Los Angeles | Systems Thinker | Quant | Rambler',
  socials: [
    { label: 'Email', href: 'mailto:me@payasparab.com', icon: '✉' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/payasparab', icon: 'in' },
    { label: 'GitHub', href: 'https://github.com/payasparab', icon: '◉' },
    { label: 'X', href: 'https://x.com/payasparab', icon: '𝕏' },
    { label: 'Instagram', href: 'https://instagram.com/payasparab', icon: '◫' },
  ],
  // i18n key for label is `nav.<key>`
  nav: [
    { to: '/', key: 'home' },
    { to: '/experience', key: 'experience' },
    { to: '/consulting', key: 'consulting' },
    { to: '/dlanc', key: 'dlanc' },
    { to: '/blog', key: 'blog' },
  ],
  ghUser: 'payasparab',
  xHandle: 'payasparab',
  igHandle: 'payasparab',
  linkedinHandle: 'payasparab',
  // Formspree form ID — create a free form at https://formspree.io and paste
  // the ID here (the part after /f/). Until then the contact form won't deliver.
  formspreeId: 'YOUR_FORM_ID',
  resumeUrl: '/resume.pdf', // drop your PDF at public/resume.pdf
} as const;

export type NavItem = (typeof site.nav)[number];
export type Social = (typeof site.socials)[number];
