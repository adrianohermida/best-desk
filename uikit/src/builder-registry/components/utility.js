// Builder.io Utility Components Registry
import { Builder } from '@builder.io/react';

// Lazy load utility components
const Integration2 = () => import('@/blocks/integration/Integration2');
const MegaMenu4 = () => import('@/blocks/mega-menu/MegaMenu4');
const MegaMenu5 = () => import('@/blocks/mega-menu/MegaMenu5');
const Error404 = () => import('@/blocks/maintenance/Error404');
const Error500 = () => import('@/blocks/maintenance/Error500');
const Other1 = () => import('@/blocks/other/Other1');
const Other2 = () => import('@/blocks/other/Other2');
const ProPage = () => import('@/blocks/pro-page/ProPage');
const ComingSoon = () => import('@/views/sections/ComingSoon');
const UnderMaintenance = () => import('@/views/sections/UnderMaintenance');
const Color = () => import('@/views/sections/Color');
const Icon = () => import('@/views/sections/Icon');
const Cookie = () => import('@/views/sections/Cookie');
const EarlyAccess = () => import('@/views/sections/EarlyAccess');

// Utility component definitions for Builder.io
export const utilityComponents = [
  {
    name: 'Integration2',
    component: Integration2,
    category: 'utility',
    inputs: [
      {
        name: 'variant',
        type: 'string',
        defaultValue: 'grid',
        enum: ['grid', 'list', 'carousel'],
        helperText: 'Integration display layout'
      },
      {
        name: 'showLogos',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show integration logos'
      },
      {
        name: 'enableFiltering',
        type: 'boolean',
        defaultValue: false,
        helperText: 'Enable category filtering'
      }
    ],
    image: '/assets/images/presentation/integration-light.svg'
  },
  {
    name: 'MegaMenu4',
    component: MegaMenu4,
    category: 'utility',
    inputs: [
      {
        name: 'columns',
        type: 'number',
        defaultValue: 4,
        helperText: 'Number of menu columns'
      },
      {
        name: 'showImages',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show category images'
      },
      {
        name: 'maxItems',
        type: 'number',
        defaultValue: 8,
        helperText: 'Maximum items per column'
      }
    ],
    image: '/assets/images/presentation/mega-menu-light.svg'
  },
  {
    name: 'MegaMenu5',
    component: MegaMenu5,
    category: 'utility',
    inputs: [
      {
        name: 'layout',
        type: 'string',
        defaultValue: 'tabbed',
        enum: ['tabbed', 'sidebar', 'grid'],
        helperText: 'Mega menu layout style'
      },
      {
        name: 'showPromotions',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show promotional banners'
      },
      {
        name: 'enableSearch',
        type: 'boolean',
        defaultValue: false,
        helperText: 'Include search functionality'
      }
    ],
    image: '/assets/images/presentation/mega-menu-light.svg'
  },
  {
    name: 'Error404',
    component: Error404,
    category: 'utility',
    inputs: [
      {
        name: 'variant',
        type: 'string',
        defaultValue: 'default',
        enum: ['default', 'minimal', 'illustrated', 'animated'],
        helperText: '404 page design variant'
      },
      {
        name: 'showSearchBar',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show search functionality'
      },
      {
        name: 'showSuggestions',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show suggested pages'
      },
      {
        name: 'homeUrl',
        type: 'string',
        defaultValue: '/',
        helperText: 'Home page URL'
      }
    ],
    image: '/assets/images/presentation/404-light.svg'
  },
  {
    name: 'Error500',
    component: Error500,
    category: 'utility',
    inputs: [
      {
        name: 'variant',
        type: 'string',
        defaultValue: 'default',
        enum: ['default', 'minimal', 'technical'],
        helperText: '500 page design variant'
      },
      {
        name: 'showContactInfo',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show contact information'
      },
      {
        name: 'enableReporting',
        type: 'boolean',
        defaultValue: false,
        helperText: 'Enable error reporting'
      }
    ],
    image: '/assets/images/presentation/500-light.svg'
  },
  {
    name: 'Other1',
    component: Other1,
    category: 'utility',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Explore Our Features',
        helperText: 'Main heading text'
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Discover what makes our platform unique',
        helperText: 'Description text below the grid'
      },
      {
        name: 'primaryBtn',
        type: 'object',
        defaultValue: { children: 'Learn More', href: '/features' },
        helperText: 'Primary button configuration'
      },
      {
        name: 'sections',
        type: 'list',
        subFields: [
          {
            name: 'title',
            type: 'string',
            defaultValue: 'Feature Title'
          },
          {
            name: 'subTitle',
            type: 'string',
            defaultValue: 'Feature description'
          },
          {
            name: 'image',
            type: 'string',
            defaultValue: '/assets/images/graphics/default.svg'
          },
          {
            name: 'link',
            type: 'string',
            defaultValue: '/feature'
          },
          {
            name: 'animationDelay',
            type: 'number',
            defaultValue: 0.1
          }
        ],
        defaultValue: [],
        helperText: 'Feature sections grid'
      }
    ],
    image: '/assets/images/presentation/other-light.svg'
  },
  {
    name: 'Other2',
    component: Other2,
    category: 'utility',
    inputs: [],
    image: '/assets/images/presentation/other-light.svg'
  },
  {
    name: 'ProPage',
    component: ProPage,
    category: 'utility',
    inputs: [
      {
        name: 'image',
        type: 'string',
        defaultValue: '/assets/images/pro-page/Lock.svg',
        helperText: 'Lock icon or promotional image'
      }
    ],
    image: '/assets/images/presentation/pro-page-light.svg'
  },
  {
    name: 'ComingSoon',
    component: ComingSoon,
    category: 'utility',
    inputs: [
      {
        name: 'showCountdown',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show countdown timer'
      },
      {
        name: 'enableNotification',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Enable launch notifications'
      },
      {
        name: 'showSocialLinks',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show social media links'
      },
      {
        name: 'launchDate',
        type: 'string',
        defaultValue: '',
        helperText: 'Launch date (YYYY-MM-DD)'
      }
    ],
    image: '/assets/images/presentation/coming-soon-light.svg'
  },
  {
    name: 'UnderMaintenance',
    component: UnderMaintenance,
    category: 'utility',
    inputs: [
      {
        name: 'estimatedTime',
        type: 'string',
        defaultValue: '2 hours',
        helperText: 'Estimated maintenance time'
      },
      {
        name: 'showProgress',
        type: 'boolean',
        defaultValue: false,
        helperText: 'Show maintenance progress'
      },
      {
        name: 'contactEmail',
        type: 'string',
        defaultValue: '',
        helperText: 'Contact email for urgent issues'
      }
    ],
    image: '/assets/images/presentation/under-maintenance-light.svg'
  },
  {
    name: 'Color',
    component: Color,
    category: 'utility',
    inputs: [
      {
        name: 'palette',
        type: 'string',
        defaultValue: 'brand',
        enum: ['brand', 'extended', 'semantic'],
        helperText: 'Color palette type'
      },
      {
        name: 'showHexValues',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show hex color values'
      },
      {
        name: 'enableCopyToClipboard',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Enable copy to clipboard'
      }
    ],
    image: '/assets/images/presentation/color-light.svg'
  },
  {
    name: 'Icon',
    component: Icon,
    category: 'utility',
    inputs: [
      {
        name: 'category',
        type: 'string',
        defaultValue: 'all',
        enum: ['all', 'ui', 'business', 'social', 'arrows'],
        helperText: 'Icon category filter'
      },
      {
        name: 'size',
        type: 'string',
        defaultValue: 'medium',
        enum: ['small', 'medium', 'large'],
        helperText: 'Icon display size'
      },
      {
        name: 'enableSearch',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Enable icon search'
      },
      {
        name: 'showLabels',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show icon labels'
      }
    ],
    image: '/assets/images/presentation/icon-light.svg'
  },
  {
    name: 'Cookie',
    component: Cookie,
    category: 'utility',
    inputs: [
      {
        name: 'position',
        type: 'string',
        defaultValue: 'bottom',
        enum: ['top', 'bottom', 'corner'],
        helperText: 'Cookie banner position'
      },
      {
        name: 'showPreferences',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show cookie preferences'
      },
      {
        name: 'autoHide',
        type: 'boolean',
        defaultValue: false,
        helperText: 'Auto hide after acceptance'
      },
      {
        name: 'theme',
        type: 'string',
        defaultValue: 'light',
        enum: ['light', 'dark', 'auto'],
        helperText: 'Cookie banner theme'
      }
    ],
    image: '/assets/images/presentation/cookie-light.svg'
  },
  {
    name: 'EarlyAccess',
    component: EarlyAccess,
    category: 'utility',
    inputs: [
      {
        name: 'variant',
        type: 'string',
        defaultValue: 'signup',
        enum: ['signup', 'waitlist', 'beta'],
        helperText: 'Early access type'
      },
      {
        name: 'showBenefits',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show access benefits'
      },
      {
        name: 'collectPhone',
        type: 'boolean',
        defaultValue: false,
        helperText: 'Collect phone numbers'
      },
      {
        name: 'showProgress',
        type: 'boolean',
        defaultValue: false,
        helperText: 'Show signup progress'
      }
    ],
    image: '/assets/images/presentation/early-access-light.svg'
  }
];

// Register components with Builder.io
utilityComponents.forEach(({ name, component, inputs, image, category }) => {
  Builder.registerComponent(component, {
    name,
    category,
    inputs,
    image,
    tags: ['utility', 'tools', 'functional'],
    friendlyName: name,
    description: `Utility component: ${name}`
  });
});

export default utilityComponents;
