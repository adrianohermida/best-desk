import dynamic from 'next/dynamic';

// Dynamic imports for Builder.io components
const Hero17 = dynamic(() => import('./src/blocks/hero/Hero17').then((mod) => ({ default: mod.default })));

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
  }
];
