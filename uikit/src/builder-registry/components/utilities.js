// Utility Components for Builder.io Registry

import Typography from '@/blocks/Typography';

/***************************  UTILITY COMPONENTS  ***************************/

export const utilityComponents = [
  {
    component: Typography,
    name: 'Typography',
    category: 'utilities',
    description: 'Typography showcase component with various text styles and formatting options',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Typography Showcase'
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Explore our comprehensive typography system'
      },
      {
        name: 'showHeadings',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'showBodyText',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'showSpecialText',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'customContent',
        type: 'longText',
        defaultValue: 'Add your custom typography content here'
      }
    ],
    image: '/assets/images/builder/typography-preview.jpg'
  }
];

export default utilityComponents;
