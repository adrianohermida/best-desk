import dynamic from 'next/dynamic';

// Dynamic imports for Social Proof components
const Testimonial10 = dynamic(() => import('../../blocks/testimonial/Testimonial10').then((mod) => ({ default: mod.default })));
const Clientele3 = dynamic(() => import('../../blocks/clientele/Clientele3').then((mod) => ({ default: mod.default })));

/***************************  SOCIAL PROOF COMPONENTS REGISTRY  ***************************/

export const socialProofComponents = [
  {
    component: Testimonial10,
    name: 'Testimonial10',
    category: 'social-proof',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'What our customers say'
      },
      {
        name: 'testimonials',
        type: 'list',
        defaultValue: [
          {
            content: 'This platform has completely transformed our business operations.',
            author: 'John Smith',
            position: 'CEO at TechCorp',
            avatar: '/assets/images/avatars/avatar-1.jpg',
            rating: 5
          },
          {
            content: 'Amazing customer support and great features.',
            author: 'Sarah Johnson',
            position: 'Marketing Director',
            avatar: '/assets/images/avatars/avatar-2.jpg',
            rating: 5
          }
        ]
      },
      {
        name: 'showRatings',
        type: 'boolean',
        defaultValue: true
      }
    ],
    canHaveChildren: false
  },
  {
    component: Clientele3,
    name: 'Clientele3',
    category: 'social-proof',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Trusted by leading companies'
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Join thousands of companies that trust our platform'
      },
      {
        name: 'logos',
        type: 'list',
        defaultValue: [
          { name: 'Google', logo: '/assets/images/clients/google.svg' },
          { name: 'Microsoft', logo: '/assets/images/clients/microsoft.svg' },
          { name: 'Apple', logo: '/assets/images/clients/apple.svg' },
          { name: 'Amazon', logo: '/assets/images/clients/amazon.svg' },
          { name: 'Netflix', logo: '/assets/images/clients/netflix.svg' }
        ]
      },
      {
        name: 'grayscale',
        type: 'boolean',
        defaultValue: true
      }
    ],
    canHaveChildren: false
  }
];

export default socialProofComponents;
