// Builder.io Content Components Registry
import { Builder } from '@builder.io/react';

// Lazy load content components
const About = () => import('@/views/sections/About');
const Blog = () => import('@/views/sections/Blog');
const Gallery = () => import('@/views/sections/Gallery');
const Team = () => import('@/views/sections/Team');
const Process = () => import('@/views/sections/Process');
const TopOffer = () => import('@/views/sections/TopOffer');
const OnBoard = () => import('@/views/sections/OnBoard');

// Content component definitions for Builder.io
export const contentComponents = [
  {
    name: 'About',
    component: About,
    category: 'content',
    inputs: [
      {
        name: 'variant',
        type: 'string',
        defaultValue: 'default',
        enum: ['default', 'centered', 'split', 'full-width'],
        helperText: 'About section layout variant'
      },
      {
        name: 'showStats',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show company statistics'
      },
      {
        name: 'showTeamPreview',
        type: 'boolean',
        defaultValue: false,
        helperText: 'Show team preview section'
      }
    ],
    image: '/assets/images/presentation/about-light.svg'
  },
  {
    name: 'Blog',
    component: Blog,
    category: 'content',
    inputs: [
      {
        name: 'layout',
        type: 'string',
        defaultValue: 'grid',
        enum: ['grid', 'list', 'masonry', 'carousel'],
        helperText: 'Blog posts layout'
      },
      {
        name: 'postsPerPage',
        type: 'number',
        defaultValue: 6,
        helperText: 'Number of posts to display'
      },
      {
        name: 'showCategories',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show category filters'
      },
      {
        name: 'showSearchBar',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show search functionality'
      }
    ],
    image: '/assets/images/presentation/blog-light.svg'
  },
  {
    name: 'Gallery',
    component: Gallery,
    category: 'content',
    inputs: [
      {
        name: 'layout',
        type: 'string',
        defaultValue: 'masonry',
        enum: ['grid', 'masonry', 'carousel', 'lightbox'],
        helperText: 'Gallery layout type'
      },
      {
        name: 'columns',
        type: 'number',
        defaultValue: 3,
        helperText: 'Number of columns'
      },
      {
        name: 'enableLightbox',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Enable lightbox on click'
      },
      {
        name: 'showCaptions',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show image captions'
      }
    ],
    image: '/assets/images/presentation/gallery-light.svg'
  },
  {
    name: 'Team',
    component: Team,
    category: 'content',
    inputs: [
      {
        name: 'layout',
        type: 'string',
        defaultValue: 'grid',
        enum: ['grid', 'carousel', 'list'],
        helperText: 'Team members layout'
      },
      {
        name: 'showSocialLinks',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show social media links'
      },
      {
        name: 'showBio',
        type: 'boolean',
        defaultValue: false,
        helperText: 'Show member bio/description'
      },
      {
        name: 'membersPerRow',
        type: 'number',
        defaultValue: 4,
        helperText: 'Members per row in grid layout'
      }
    ],
    image: '/assets/images/presentation/team-light.svg'
  },
  {
    name: 'Process',
    component: Process,
    category: 'content',
    inputs: [
      {
        name: 'variant',
        type: 'string',
        defaultValue: 'steps',
        enum: ['steps', 'timeline', 'circular', 'accordion'],
        helperText: 'Process visualization type'
      },
      {
        name: 'showNumbers',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show step numbers'
      },
      {
        name: 'direction',
        type: 'string',
        defaultValue: 'horizontal',
        enum: ['horizontal', 'vertical'],
        helperText: 'Process flow direction'
      }
    ],
    image: '/assets/images/presentation/process-light.svg'
  },
  {
    name: 'TopOffer',
    component: TopOffer,
    category: 'content',
    inputs: [
      {
        name: 'variant',
        type: 'string',
        defaultValue: 'banner',
        enum: ['banner', 'popup', 'inline', 'sticky'],
        helperText: 'Offer display type'
      },
      {
        name: 'showCountdown',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show countdown timer'
      },
      {
        name: 'dismissible',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Allow users to dismiss'
      },
      {
        name: 'priority',
        type: 'string',
        defaultValue: 'high',
        enum: ['low', 'medium', 'high', 'critical'],
        helperText: 'Offer priority level'
      }
    ],
    image: '/assets/images/presentation/top-offer-light.svg'
  },
  {
    name: 'OnBoard',
    component: OnBoard,
    category: 'content',
    inputs: [
      {
        name: 'steps',
        type: 'number',
        defaultValue: 3,
        helperText: 'Number of onboarding steps'
      },
      {
        name: 'showProgress',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show progress indicator'
      },
      {
        name: 'allowSkip',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Allow users to skip onboarding'
      },
      {
        name: 'style',
        type: 'string',
        defaultValue: 'modal',
        enum: ['modal', 'overlay', 'inline'],
        helperText: 'Onboarding presentation style'
      }
    ],
    image: '/assets/images/presentation/onboard-light.svg'
  }
];

// Register components with Builder.io
contentComponents.forEach(({ name, component, inputs, image, category }) => {
  Builder.registerComponent(component, {
    name,
    category,
    inputs,
    image,
    tags: ['content', 'information', 'display'],
    friendlyName: name,
    description: `Content component for ${name.toLowerCase()}`
  });
});

export default contentComponents;
