import dynamic from 'next/dynamic';

// Dynamic imports for Builder.io components
const Hero17 = dynamic(() => import('./src/blocks/hero/Hero17').then((mod) => ({ default: mod.default })));

const Feature18 = dynamic(() => import('./src/blocks/feature/Feature18').then((mod) => ({ default: mod.default })));

const Feature20 = dynamic(() => import('./src/blocks/feature/Feature20').then((mod) => ({ default: mod.default })));

const Feature21 = dynamic(() => import('./src/blocks/feature/Feature21').then((mod) => ({ default: mod.default })));

const Navbar10 = dynamic(() => import('./src/blocks/navbar/Navbar10').then((mod) => ({ default: mod.default })));

const Footer7 = dynamic(() => import('./src/blocks/footer/Footer7').then((mod) => ({ default: mod.default })));

const Cta4 = dynamic(() => import('./src/blocks/cta/Cta4').then((mod) => ({ default: mod.default })));

const Cta5 = dynamic(() => import('./src/blocks/cta/Cta5').then((mod) => ({ default: mod.default })));

const Pricing9 = dynamic(() => import('./src/blocks/pricing/Pricing9').then((mod) => ({ default: mod.default })));

// Base registry for Builder.io components
export const customComponents = [
  {
    component: Hero17,
    name: 'Hero17',
    inputs: [
      {
        name: 'chip',
        type: 'object',
        defaultValue: { children: 'New', color: 'primary' }
      },
      {
        name: 'headLine',
        type: 'string',
        defaultValue: 'Build Better Digital Products'
      },
      {
        name: 'captionLine',
        type: 'string',
        defaultValue: 'Create amazing digital experiences with our platform'
      },
      {
        name: 'primaryBtn',
        type: 'object',
        defaultValue: { children: 'Get Started', href: '#' }
      },
      {
        name: 'videoSrc',
        type: 'file',
        allowedFileTypes: ['mp4', 'webm', 'ogg'],
        defaultValue: '/assets/videos/test.mp4'
      },
      {
        name: 'videoThumbnail',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
        defaultValue: '/assets/images/graphics/hero-thumbnail.jpg'
      },
      {
        name: 'listData',
        type: 'list',
        defaultValue: [
          { icon: 'tabler-check', text: 'Easy to use' },
          { icon: 'tabler-check', text: 'Fast performance' },
          { icon: 'tabler-check', text: 'Modern design' }
        ]
      }
    ],
    canHaveChildren: false
  },
  {
    component: Feature18,
    name: 'Feature18',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Powerful Features'
      },
      {
        name: 'caption',
        type: 'string',
        defaultValue: 'Discover what makes our platform special'
      },
      {
        name: 'topics',
        type: 'list',
        defaultValue: [
          {
            id: '1',
            title: 'Easy Integration',
            description: 'Quick and simple setup process',
            image: '/assets/images/graphics/feature1.svg'
          }
        ]
      }
    ],
    canHaveChildren: false
  },
  {
    component: Feature20,
    name: 'Feature20',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Advanced Features'
      },
      {
        name: 'caption',
        type: 'string',
        defaultValue: 'Everything you need to build amazing products'
      },
      {
        name: 'image',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
        defaultValue: '/assets/images/graphics/feature-main.svg'
      },
      {
        name: 'features',
        type: 'list',
        defaultValue: [{ icon: 'tabler-check', title: 'Fast Performance', description: 'Optimized for speed' }]
      },
      {
        name: 'actionBtn',
        type: 'object',
        defaultValue: { children: 'Learn More', href: '#' }
      },
      {
        name: 'secondaryBtn',
        type: 'object',
        defaultValue: { children: 'Get Started', href: '#' }
      }
    ],
    canHaveChildren: false
  },
  {
    component: Feature21,
    name: 'Feature21',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Feature Showcase'
      },
      {
        name: 'caption',
        type: 'string',
        defaultValue: 'See how our features work together'
      },
      {
        name: 'image',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
        defaultValue: '/assets/images/graphics/feature-showcase.svg'
      },
      {
        name: 'features',
        type: 'list',
        defaultValue: [{ icon: 'tabler-star', title: 'Premium Quality', description: 'Best in class solutions' }]
      },
      {
        name: 'primaryBtn',
        type: 'object',
        defaultValue: { children: 'Start Free Trial', href: '#' }
      },
      {
        name: 'secondaryBtn',
        type: 'object',
        defaultValue: { children: 'View Demo', href: '#' }
      }
    ],
    canHaveChildren: false
  },
  {
    component: Navbar10,
    name: 'Navbar10',
    inputs: [],
    canHaveChildren: true
  },
  {
    component: Footer7,
    name: 'Footer7',
    inputs: [],
    canHaveChildren: false
  }
];
