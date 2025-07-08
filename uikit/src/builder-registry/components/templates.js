import dynamic from 'next/dynamic';

// Dynamic imports for Template components
const SaasStartupTemplate = dynamic(() => import('../../templates/landing/SaasStartup').then((mod) => ({ default: mod.default })));
const CorporateTemplate = dynamic(() => import('../../templates/business/CorporateTemplate').then((mod) => ({ default: mod.default })));
const ThemePicker = dynamic(() => import('../../components/ThemePicker').then((mod) => ({ default: mod.BuilderThemePicker })));

/***************************  TEMPLATE COMPONENTS REGISTRY  ***************************/

export const templateComponents = [
  {
    component: SaasStartupTemplate,
    name: 'SaasStartupTemplate',
    category: 'templates',
    inputs: [
      {
        name: 'showNavbar',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'showHero',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'showFeatures',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'showPricing',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'showTestimonials',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'showFaq',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'showCta',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'showFooter',
        type: 'boolean',
        defaultValue: true
      }
    ],
    canHaveChildren: false
  },
  {
    component: CorporateTemplate,
    name: 'CorporateTemplate',
    category: 'templates',
    inputs: [
      {
        name: 'showNavbar',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'showHero',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'showAbout',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'showServices',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'showBenefits',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'showClients',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'showContact',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'showFooter',
        type: 'boolean',
        defaultValue: true
      }
    ],
    canHaveChildren: false
  },
  {
    component: ThemePicker,
    name: 'ThemePicker',
    category: 'tools',
    inputs: [
      {
        name: 'variant',
        type: 'string',
        enum: ['full', 'compact'],
        defaultValue: 'full'
      },
      {
        name: 'themeVariant',
        type: 'string',
        enum: ['light', 'dark', 'auto'],
        defaultValue: 'light'
      },
      {
        name: 'themeStyle',
        type: 'string',
        enum: ['minimal', 'bold', 'elegant', 'modern', 'classic'],
        defaultValue: 'modern'
      },
      {
        name: 'colorScheme',
        type: 'string',
        enum: ['default', 'blue', 'green', 'purple', 'orange', 'red'],
        defaultValue: 'default'
      },
      {
        name: 'animations',
        type: 'boolean',
        defaultValue: true
      }
    ],
    canHaveChildren: false
  }
];

export default templateComponents;
