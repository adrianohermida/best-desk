// Integration Components for Builder.io Registry

import { Integration2 } from '@/blocks/integration';

/***************************  INTEGRATION COMPONENTS  ***************************/

export const integrationComponents = [
  {
    component: Integration2,
    name: 'Integration2',
    category: 'integration',
    description: 'Integration showcase component with partner logos and descriptions',
    inputs: [
      {
        name: 'chipLabel',
        type: 'string',
        defaultValue: 'Our Partners'
      },
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Seamless Integrations'
      },
      {
        name: 'caption',
        type: 'string',
        defaultValue: 'Connect with your favorite tools and services'
      },
      {
        name: 'integrations',
        type: 'list',
        subFields: [
          {
            name: 'name',
            type: 'string'
          },
          {
            name: 'description',
            type: 'string'
          },
          {
            name: 'logo',
            type: 'file'
          },
          {
            name: 'href',
            type: 'string'
          }
        ]
      }
    ],
    image: '/assets/images/builder/integration2-preview.jpg'
  }
];

export default integrationComponents;
