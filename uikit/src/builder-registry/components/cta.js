import dynamic from 'next/dynamic';

// Dynamic imports for CTA components
const Cta4 = dynamic(() => import('../../blocks/cta/Cta4').then((mod) => ({ default: mod.default })));
const Cta5 = dynamic(() => import('../../blocks/cta/Cta5').then((mod) => ({ default: mod.default })));

/***************************  CTA COMPONENTS REGISTRY  ***************************/

export const ctaComponents = [
  {
    component: Cta4,
    name: 'Cta4',
    category: 'cta',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Ready to get started?'
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Join thousands of companies already using our platform'
      },
      {
        name: 'primaryBtn',
        type: 'object',
        defaultValue: { children: 'Get Started', href: '/signup' }
      },
      {
        name: 'secondaryBtn',
        type: 'object',
        defaultValue: { children: 'Learn More', href: '/about' }
      },
      {
        name: 'userProfiles',
        type: 'list',
        defaultValue: [
          { avatar: '/assets/images/avatars/avatar-1.jpg', name: 'John Doe' },
          { avatar: '/assets/images/avatars/avatar-2.jpg', name: 'Jane Smith' }
        ]
      }
    ],
    canHaveChildren: false
  },
  {
    component: Cta5,
    name: 'Cta5',
    category: 'cta',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Subscribe to our newsletter'
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Get the latest updates and insights delivered to your inbox'
      },
      {
        name: 'placeholder',
        type: 'string',
        defaultValue: 'Enter your email address'
      },
      {
        name: 'buttonText',
        type: 'string',
        defaultValue: 'Subscribe'
      },
      {
        name: 'privacyText',
        type: 'string',
        defaultValue: 'We respect your privacy. Unsubscribe at any time.'
      },
      {
        name: 'backgroundImage',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png'],
        defaultValue: '/assets/images/backgrounds/cta-bg.jpg'
      }
    ],
    canHaveChildren: false
  }
];

export default ctaComponents;
