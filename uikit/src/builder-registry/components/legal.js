// Builder.io Legal Components Registry
import { Builder } from '@builder.io/react';

// Lazy load legal components
const PrivacyPolicy = () => import('@/blocks/PrivacyPolicy');
const TermsCondition = () => import('@/blocks/TermsCondition');
const Typography = () => import('@/blocks/Typography');

// Legal component definitions for Builder.io
export const legalComponents = [
  {
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    category: 'legal',
    inputs: [
      {
        name: 'lastUpdated',
        type: 'string',
        defaultValue: '',
        helperText: 'Last updated date'
      },
      {
        name: 'contactEmail',
        type: 'string',
        defaultValue: 'privacy@company.com',
        helperText: 'Privacy contact email'
      },
      {
        name: 'showTableOfContents',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show table of contents'
      },
      {
        name: 'enableSearch',
        type: 'boolean',
        defaultValue: false,
        helperText: 'Enable content search'
      }
    ],
    image: '/assets/images/presentation/privacy-policy-light.svg'
  },
  {
    name: 'TermsCondition',
    component: TermsCondition,
    category: 'legal',
    inputs: [
      {
        name: 'lastUpdated',
        type: 'string',
        defaultValue: '',
        helperText: 'Last updated date'
      },
      {
        name: 'effectiveDate',
        type: 'string',
        defaultValue: '',
        helperText: 'Terms effective date'
      },
      {
        name: 'showTableOfContents',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show table of contents'
      },
      {
        name: 'jurisdiction',
        type: 'string',
        defaultValue: '',
        helperText: 'Legal jurisdiction'
      }
    ],
    image: '/assets/images/presentation/terms-condition-light.svg'
  },
  {
    name: 'Typography',
    component: Typography,
    category: 'legal',
    inputs: [
      {
        name: 'variant',
        type: 'string',
        defaultValue: 'showcase',
        enum: ['showcase', 'guide', 'samples'],
        helperText: 'Typography display variant'
      },
      {
        name: 'showCodeSamples',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show code examples'
      },
      {
        name: 'enableCopyCode',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Enable copy code functionality'
      },
      {
        name: 'theme',
        type: 'string',
        defaultValue: 'light',
        enum: ['light', 'dark', 'auto'],
        helperText: 'Typography theme'
      }
    ],
    image: '/assets/images/presentation/typography-light.svg'
  }
];

// Register components with Builder.io
legalComponents.forEach(({ name, component, inputs, image, category }) => {
  Builder.registerComponent(component, {
    name,
    category,
    inputs,
    image,
    tags: ['legal', 'documentation', 'compliance'],
    friendlyName: name,
    description: `Legal component: ${name}`
  });
});

export default legalComponents;
