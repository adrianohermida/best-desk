// Error Page Components for Builder.io Registry

import { Error404Page, Error500Page } from '@/blocks/maintenance';

/***************************  ERROR PAGE COMPONENTS  ***************************/

export const errorPageComponents = [
  {
    component: Error404Page,
    name: 'Error404',
    category: 'utilities',
    description: '404 Not Found error page with engaging design and navigation options',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Page Not Found'
      },
      {
        name: 'subheading',
        type: 'string',
        defaultValue: "The page you're looking for doesn't exist"
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Sorry, the page you are looking for could not be found.'
      },
      {
        name: 'primaryButton',
        type: 'object',
        subFields: [
          {
            name: 'text',
            type: 'string',
            defaultValue: 'Go Home'
          },
          {
            name: 'href',
            type: 'string',
            defaultValue: '/'
          }
        ]
      },
      {
        name: 'secondaryButton',
        type: 'object',
        subFields: [
          {
            name: 'text',
            type: 'string',
            defaultValue: 'Contact Support'
          },
          {
            name: 'href',
            type: 'string',
            defaultValue: '/contact'
          }
        ]
      },
      {
        name: 'illustration',
        type: 'file',
        defaultValue: '/assets/images/illustrations/404.svg'
      }
    ],
    image: '/assets/images/builder/error404-preview.jpg'
  },
  {
    component: Error500Page,
    name: 'Error500',
    category: 'utilities',
    description: '500 Internal Server Error page with helpful messaging and support options',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Internal Server Error'
      },
      {
        name: 'subheading',
        type: 'string',
        defaultValue: 'Something went wrong on our end'
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'We apologize for the inconvenience. Our team has been notified and is working to resolve the issue.'
      },
      {
        name: 'primaryButton',
        type: 'object',
        subFields: [
          {
            name: 'text',
            type: 'string',
            defaultValue: 'Try Again'
          },
          {
            name: 'href',
            type: 'string',
            defaultValue: '/'
          }
        ]
      },
      {
        name: 'secondaryButton',
        type: 'object',
        subFields: [
          {
            name: 'text',
            type: 'string',
            defaultValue: 'Report Issue'
          },
          {
            name: 'href',
            type: 'string',
            defaultValue: '/support'
          }
        ]
      },
      {
        name: 'illustration',
        type: 'file',
        defaultValue: '/assets/images/illustrations/500.svg'
      }
    ],
    image: '/assets/images/builder/error500-preview.jpg'
  }
];

export default errorPageComponents;
