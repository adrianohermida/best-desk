// Mega Menu Components for Builder.io Registry

import { MegaMenu4, MegaMenu5 } from '@/blocks/mega-menu';

/***************************  MEGA MENU COMPONENTS  ***************************/

export const megaMenuComponents = [
  {
    component: MegaMenu4,
    name: 'MegaMenu4',
    category: 'navigation',
    description: 'Advanced mega menu with featured content and multi-column layout',
    inputs: [
      {
        name: 'menuItems',
        type: 'list',
        subFields: [
          {
            name: 'title',
            type: 'string'
          },
          {
            name: 'href',
            type: 'string'
          },
          {
            name: 'subItems',
            type: 'list',
            subFields: [
              {
                name: 'title',
                type: 'string'
              },
              {
                name: 'href',
                type: 'string'
              },
              {
                name: 'description',
                type: 'string'
              }
            ]
          }
        ]
      },
      {
        name: 'featuredContent',
        type: 'object',
        subFields: [
          {
            name: 'title',
            type: 'string'
          },
          {
            name: 'description',
            type: 'string'
          },
          {
            name: 'image',
            type: 'file'
          },
          {
            name: 'href',
            type: 'string'
          }
        ]
      }
    ],
    image: '/assets/images/builder/megamenu4-preview.jpg'
  },
  {
    component: MegaMenu5,
    name: 'MegaMenu5',
    category: 'navigation',
    description: 'Compact mega menu with icon-based navigation and quick links',
    inputs: [
      {
        name: 'menuSections',
        type: 'list',
        subFields: [
          {
            name: 'title',
            type: 'string'
          },
          {
            name: 'icon',
            type: 'string'
          },
          {
            name: 'items',
            type: 'list',
            subFields: [
              {
                name: 'title',
                type: 'string'
              },
              {
                name: 'href',
                type: 'string'
              },
              {
                name: 'badge',
                type: 'string'
              }
            ]
          }
        ]
      },
      {
        name: 'quickLinks',
        type: 'list',
        subFields: [
          {
            name: 'title',
            type: 'string'
          },
          {
            name: 'href',
            type: 'string'
          },
          {
            name: 'icon',
            type: 'string'
          }
        ]
      }
    ],
    image: '/assets/images/builder/megamenu5-preview.jpg'
  }
];

export default megaMenuComponents;
