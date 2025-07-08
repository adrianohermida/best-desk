import dynamic from 'next/dynamic';

// Dynamic imports for Commerce & Content components
const Pricing9 = dynamic(() => import('../../blocks/pricing/Pricing9').then((mod) => ({ default: mod.default })));
const Benefit5 = dynamic(() => import('../../blocks/benefit/Benefit5').then((mod) => ({ default: mod.default })));
const Faq6 = dynamic(() => import('../../blocks/faq/Faq6').then((mod) => ({ default: mod.default })));
const ContactUs4 = dynamic(() => import('../../blocks/contact-us/ContactUs4').then((mod) => ({ default: mod.default })));

/***************************  COMMERCE & CONTENT COMPONENTS REGISTRY  ***************************/

export const commerceComponents = [
  {
    component: Pricing9,
    name: 'Pricing9',
    category: 'commerce',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Simple, transparent pricing'
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Choose the plan that fits your needs'
      },
      {
        name: 'plans',
        type: 'list',
        defaultValue: [
          {
            name: 'Starter',
            price: '$29',
            period: '/month',
            features: ['10 projects', 'Basic support', '10GB storage'],
            popular: false,
            ctaText: 'Get Started'
          },
          {
            name: 'Professional',
            price: '$99',
            period: '/month',
            features: ['Unlimited projects', 'Priority support', '100GB storage', 'Advanced analytics'],
            popular: true,
            ctaText: 'Start Free Trial'
          }
        ]
      },
      {
        name: 'billingToggle',
        type: 'boolean',
        defaultValue: true
      }
    ],
    canHaveChildren: false
  },
  {
    component: Benefit5,
    name: 'Benefit5',
    category: 'content',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Why choose our platform?'
      },
      {
        name: 'benefits',
        type: 'list',
        defaultValue: [
          {
            icon: '/assets/images/icons/speed.svg',
            title: 'Lightning Fast',
            description: 'Optimized for speed and performance'
          },
          {
            icon: '/assets/images/icons/security.svg',
            title: 'Secure & Reliable',
            description: 'Enterprise-grade security you can trust'
          },
          {
            icon: '/assets/images/icons/support.svg',
            title: '24/7 Support',
            description: 'Round-the-clock customer support'
          }
        ]
      }
    ],
    canHaveChildren: false
  },
  {
    component: Faq6,
    name: 'Faq6',
    category: 'content',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Frequently Asked Questions'
      },
      {
        name: 'faqs',
        type: 'list',
        defaultValue: [
          {
            question: 'How does the free trial work?',
            answer: 'You get full access to all features for 14 days, no credit card required.'
          },
          {
            question: 'Can I cancel anytime?',
            answer: 'Yes, you can cancel your subscription at any time with no penalties.'
          },
          {
            question: 'Do you offer customer support?',
            answer: 'We provide 24/7 customer support via email, chat, and phone.'
          }
        ]
      }
    ],
    canHaveChildren: false
  },
  {
    component: ContactUs4,
    name: 'ContactUs4',
    category: 'content',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Get in touch'
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: "We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      },
      {
        name: 'contactInfo',
        type: 'object',
        defaultValue: {
          address: '123 Business St, City, State 12345',
          phone: '+1 (555) 123-4567',
          email: 'contact@company.com',
          hours: 'Mon-Fri: 9AM-6PM'
        }
      },
      {
        name: 'formFields',
        type: 'list',
        defaultValue: ['name', 'email', 'subject', 'message']
      }
    ],
    canHaveChildren: false
  }
];

export default commerceComponents;
