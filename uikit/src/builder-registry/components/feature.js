import dynamic from 'next/dynamic';

// Dynamic imports for Feature components
const Feature18 = dynamic(() => import('../../blocks/feature/Feature18').then((mod) => ({ default: mod.default })));
const Feature20 = dynamic(() => import('../../blocks/feature/Feature20').then((mod) => ({ default: mod.default })));
const Feature21 = dynamic(() => import('../../blocks/feature/Feature21').then((mod) => ({ default: mod.default })));

/***************************  FEATURE COMPONENTS REGISTRY  ***************************/

export const featureComponents = [
  {
    component: Feature18,
    name: 'Feature18',
    category: 'feature',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Powerful Features'
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Everything you need to build amazing products'
      },
      {
        name: 'features',
        type: 'list',
        defaultValue: [
          {
            title: 'Fast Performance',
            description: 'Lightning-fast load times',
            icon: '/assets/images/icons/speed.svg'
          },
          {
            title: 'Secure',
            description: 'Enterprise-grade security',
            icon: '/assets/images/icons/security.svg'
          }
        ]
      }
    ],
    canHaveChildren: false
  },
  {
    component: Feature20,
    name: 'Feature20',
    category: 'feature',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Advanced Features'
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Discover what makes us different'
      },
      {
        name: 'image',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
        defaultValue: '/assets/images/graphics/feature-image.png'
      },
      {
        name: 'features',
        type: 'list',
        defaultValue: [
          { title: 'Real-time Analytics', description: 'Track your progress in real time' },
          { title: 'Team Collaboration', description: 'Work together seamlessly' }
        ]
      },
      {
        name: 'primaryBtn',
        type: 'object',
        defaultValue: { children: 'Learn More', href: '#features' }
      }
    ],
    canHaveChildren: false
  },
  {
    component: Feature21,
    name: 'Feature21',
    category: 'feature',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Complete Solution'
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Everything in one place'
      },
      {
        name: 'image',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
        defaultValue: '/assets/images/graphics/solution.png'
      },
      {
        name: 'features',
        type: 'list',
        defaultValue: [
          { title: 'All-in-One Platform', description: 'Everything you need' },
          { title: 'Easy Integration', description: 'Connect with your tools' }
        ]
      },
      {
        name: 'stats',
        type: 'list',
        defaultValue: [
          { number: '99.9%', label: 'Uptime' },
          { number: '500K+', label: 'Users' }
        ]
      }
    ],
    canHaveChildren: false
  }
];

export default featureComponents;
