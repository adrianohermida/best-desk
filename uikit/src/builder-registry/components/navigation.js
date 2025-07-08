import dynamic from 'next/dynamic';

// Dynamic imports for Navigation components
const Navbar10 = dynamic(() => import('../../blocks/navbar/Navbar10').then((mod) => ({ default: mod.default })));
const Footer7 = dynamic(() => import('../../blocks/footer/Footer7').then((mod) => ({ default: mod.default })));
const NavbarContent10 = dynamic(() =>
  import('../../blocks/navbar/navbar-content/NavbarContent10').then((mod) => ({ default: mod.default }))
);

/***************************  NAVIGATION COMPONENTS REGISTRY  ***************************/

export const navigationComponents = [
  {
    component: Navbar10,
    name: 'Navbar10',
    category: 'navigation',
    inputs: [
      {
        name: 'logo',
        type: 'object',
        defaultValue: { src: '/assets/images/logo/logo-main.svg', alt: 'Logo' }
      },
      {
        name: 'menuItems',
        type: 'list',
        defaultValue: [
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: 'Contact', href: '/contact' }
        ]
      },
      {
        name: 'ctaButton',
        type: 'object',
        defaultValue: { children: 'Get Started', href: '/signup' }
      },
      {
        name: 'transparent',
        type: 'boolean',
        defaultValue: false
      }
    ],
    canHaveChildren: true
  },
  {
    component: Footer7,
    name: 'Footer7',
    category: 'navigation',
    inputs: [
      {
        name: 'logo',
        type: 'object',
        defaultValue: { src: '/assets/images/logo/logo-main.svg', alt: 'Logo' }
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Building the future of digital experiences'
      },
      {
        name: 'links',
        type: 'list',
        defaultValue: [
          {
            title: 'Product',
            items: ['Features', 'Pricing', 'Integrations', 'API']
          },
          {
            title: 'Company',
            items: ['About', 'Blog', 'Careers', 'Contact']
          }
        ]
      },
      {
        name: 'social',
        type: 'list',
        defaultValue: [
          { platform: 'twitter', url: 'https://twitter.com' },
          { platform: 'linkedin', url: 'https://linkedin.com' },
          { platform: 'github', url: 'https://github.com' }
        ]
      }
    ],
    canHaveChildren: false
  },
  {
    component: NavbarContent10,
    name: 'NavbarContent10',
    category: 'navigation',
    inputs: [
      {
        name: 'logoSrc',
        type: 'file',
        allowedFileTypes: ['svg', 'png', 'jpg'],
        defaultValue: '/assets/images/logo/logo-main.svg'
      },
      {
        name: 'menuItems',
        type: 'list',
        defaultValue: [
          { title: 'Home', link: '/' },
          { title: 'Features', link: '/features' },
          { title: 'Pricing', link: '/pricing' }
        ]
      },
      {
        name: 'primaryBtn',
        type: 'object',
        defaultValue: { children: 'Sign Up', href: '/signup' }
      },
      {
        name: 'secondaryBtn',
        type: 'object',
        defaultValue: { children: 'Login', href: '/login' }
      }
    ],
    canHaveChildren: false
  }
];

export default navigationComponents;
