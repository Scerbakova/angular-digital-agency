export interface Navigation {
  link: string;
  label: string;
}

export const header: Navigation[] = [
  { link: '/home', label: 'Home' },
  { link: '/services', label: 'Services' },
  { link: '/project', label: 'Our Project' },
  { link: '/about', label: 'About us' },
];

export const footer: Navigation[] = [
  { link: '/support', label: 'Support' },
  { link: '/privacy-policy', label: 'Privacy Policy' },
  { link: '/terms-and-conditions', label: 'Terms and Conditions' },
];
