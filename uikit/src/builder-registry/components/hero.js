import dynamic from 'next/dynamic';

// Dynamic imports for Hero components
const Hero17 = dynamic(() => import('../../blocks/hero/Hero17').then((mod) => ({ default: mod.default })));
const SmallHero3 = dynamic(() => import('../../blocks/small-hero/SmallHero3').then((mod) => ({ default: mod.default })));

/***************************  HERO COMPONENTS REGISTRY  ***************************/

export const heroComponents = [
  {
    component: Hero17,
    name: 'Hero17',
    category: 'hero',
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
          { image: '/assets/images/shared/react.svg', title: 'React' },
          { image: '/assets/images/shared/next-js.svg', title: 'Next.js' }
        ]
      }
    ],
    canHaveChildren: false
  },
  {
    component: SmallHero3,
    name: 'SmallHero3',
    category: 'hero',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Welcome to Our Platform'
      },
      {
        name: 'breadcrumbs',
        type: 'list',
        defaultValue: [
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' }
        ]
      }
    ],
    canHaveChildren: false
  }
];

export default heroComponents;
