export const site = {
  name: 'Payas Parab',
  brand: 'PAYAS PARAB',
  email: 'me@payasparab.com',
  location: 'Los Angeles · Data Science & Product',
  socials: [
    { label: 'Email', href: 'mailto:me@payasparab.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/payasparab' },
    { label: 'GitHub', href: 'https://github.com/payasparab' },
    { label: 'X / Twitter', href: 'https://x.com/payasparab' },
    { label: 'Instagram', href: 'https://instagram.com/payasparab' },
  ],
  nav: [
    { to: '/', label: 'Home' },
    { to: '/experience', label: 'Experience' },
    { to: '/consulting', label: 'Consulting' },
    { to: '/service', label: 'Public Service' },
    { to: '/blog', label: 'Writing' },
  ],
  ghUser: 'payasparab',
} as const;

export type NavItem = (typeof site.nav)[number];
