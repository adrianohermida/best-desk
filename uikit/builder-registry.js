import dynamic from 'next/dynamic';

// Dynamic imports for Builder.io components
const Hero17 = dynamic(() => import('./src/blocks/hero/Hero17').then((mod) => ({ default: mod.default })));

const Feature18 = dynamic(() => import('./src/blocks/feature/Feature18').then((mod) => ({ default: mod.default })));

const Feature20 = dynamic(() => import('./src/blocks/feature/Feature20').then((mod) => ({ default: mod.default })));

const Feature21 = dynamic(() => import('./src/blocks/feature/Feature21').then((mod) => ({ default: mod.default })));

const Navbar10 = dynamic(() => import('./src/blocks/navbar/Navbar10').then((mod) => ({ default: mod.default })));

const Footer7 = dynamic(() => import('./src/blocks/footer/Footer7').then((mod) => ({ default: mod.default })));

const Cta4 = dynamic(() => import('./src/blocks/cta/Cta4').then((mod) => ({ default: mod.default })));

const Cta5 = dynamic(() => import('./src/blocks/cta/Cta5').then((mod) => ({ default: mod.default })));

const Pricing9 = dynamic(() => import('./src/blocks/pricing/Pricing9').then((mod) => ({ default: mod.default })));

const Benefit5 = dynamic(() => import('./src/blocks/benefit/Benefit5').then((mod) => ({ default: mod.default })));

const Testimonial10 = dynamic(() => import('./src/blocks/testimonial/Testimonial10').then((mod) => ({ default: mod.default })));

const ContactUs4 = dynamic(() => import('./src/blocks/contact-us/ContactUs4').then((mod) => ({ default: mod.default })));

const SmallHero3 = dynamic(() => import('./src/blocks/small-hero/SmallHero3').then((mod) => ({ default: mod.default })));

const Integration2 = dynamic(() => import('./src/blocks/integration/Integration2').then((mod) => ({ default: mod.default })));

const Faq6 = dynamic(() => import('./src/blocks/faq/Faq6').then((mod) => ({ default: mod.default })));

const Clientele3 = dynamic(() => import('./src/blocks/clientele/Clientele3').then((mod) => ({ default: mod.default })));

const MegaMenu4 = dynamic(() => import('./src/blocks/mega-menu/MegaMenu4').then((mod) => ({ default: mod.default })));

const MegaMenu5 = dynamic(() => import('./src/blocks/mega-menu/MegaMenu5').then((mod) => ({ default: mod.default })));

const Other1 = dynamic(() => import('./src/blocks/other/Other1').then((mod) => ({ default: mod.default })));

const Other2 = dynamic(() => import('./src/blocks/other/Other2').then((mod) => ({ default: mod.default })));

const ProPage = dynamic(() => import('./src/blocks/pro-page/ProPage').then((mod) => ({ default: mod.default })));

const Error404Block = dynamic(() => import('./src/blocks/maintenance/Error404').then((mod) => ({ default: mod.default })));

const Error500Block = dynamic(() => import('./src/blocks/maintenance/Error500').then((mod) => ({ default: mod.default })));

const NavbarContent10 = dynamic(() =>
  import('./src/blocks/navbar/navbar-content/NavbarContent10').then((mod) => ({ default: mod.default }))
);

const PrivacyPolicy = dynamic(() => import('./src/blocks/PrivacyPolicy').then((mod) => ({ default: mod.default })));

const TermsCondition = dynamic(() => import('./src/blocks/TermsCondition').then((mod) => ({ default: mod.default })));

const Typography = dynamic(() => import('./src/blocks/Typography').then((mod) => ({ default: mod.default })));

// Base registry for Builder.io components
export const customComponents = [
  {
    component: Hero17,
    name: 'Hero17',
    inputs: [
      {
        name: 'chip',
        type: 'object',
        defaultValue: { children: 'New', color: 'primary' }
      },
      {
        name: 'headLine',
        type: 'string',
        defaultValue: 'Build Better Digital Products'
      },
      {
        name: 'captionLine',
        type: 'string',
        defaultValue: 'Create amazing digital experiences with our platform'
      },
      {
        name: 'primaryBtn',
        type: 'object',
        defaultValue: { children: 'Get Started', href: '#' }
      },
      {
        name: 'videoSrc',
        type: 'file',
        allowedFileTypes: ['mp4', 'webm', 'ogg'],
        defaultValue: '/assets/videos/test.mp4'
      },
      {
        name: 'videoThumbnail',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
        defaultValue: '/assets/images/graphics/hero-thumbnail.jpg'
      },
      {
        name: 'listData',
        type: 'list',
        defaultValue: [
          { icon: 'tabler-check', text: 'Easy to use' },
          { icon: 'tabler-check', text: 'Fast performance' },
          { icon: 'tabler-check', text: 'Modern design' }
        ]
      }
    ],
    canHaveChildren: false
  },
  {
    component: Feature18,
    name: 'Feature18',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Powerful Features'
      },
      {
        name: 'caption',
        type: 'string',
        defaultValue: 'Discover what makes our platform special'
      },
      {
        name: 'topics',
        type: 'list',
        defaultValue: [
          {
            id: '1',
            title: 'Easy Integration',
            description: 'Quick and simple setup process',
            image: '/assets/images/graphics/feature1.svg'
          }
        ]
      }
    ],
    canHaveChildren: false
  },
  {
    component: Feature20,
    name: 'Feature20',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Advanced Features'
      },
      {
        name: 'caption',
        type: 'string',
        defaultValue: 'Everything you need to build amazing products'
      },
      {
        name: 'image',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
        defaultValue: '/assets/images/graphics/feature-main.svg'
      },
      {
        name: 'features',
        type: 'list',
        defaultValue: [{ icon: 'tabler-check', title: 'Fast Performance', description: 'Optimized for speed' }]
      },
      {
        name: 'actionBtn',
        type: 'object',
        defaultValue: { children: 'Learn More', href: '#' }
      },
      {
        name: 'secondaryBtn',
        type: 'object',
        defaultValue: { children: 'Get Started', href: '#' }
      }
    ],
    canHaveChildren: false
  },
  {
    component: Feature21,
    name: 'Feature21',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Feature Showcase'
      },
      {
        name: 'caption',
        type: 'string',
        defaultValue: 'See how our features work together'
      },
      {
        name: 'image',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
        defaultValue: '/assets/images/graphics/feature-showcase.svg'
      },
      {
        name: 'features',
        type: 'list',
        defaultValue: [{ icon: 'tabler-star', title: 'Premium Quality', description: 'Best in class solutions' }]
      },
      {
        name: 'primaryBtn',
        type: 'object',
        defaultValue: { children: 'Start Free Trial', href: '#' }
      },
      {
        name: 'secondaryBtn',
        type: 'object',
        defaultValue: { children: 'View Demo', href: '#' }
      }
    ],
    canHaveChildren: false
  },
  {
    component: Navbar10,
    name: 'Navbar10',
    inputs: [],
    canHaveChildren: true
  },
  {
    component: Footer7,
    name: 'Footer7',
    inputs: [],
    canHaveChildren: false
  },
  {
    component: Cta4,
    name: 'Cta4',
    inputs: [
      {
        name: 'headLine',
        type: 'string',
        defaultValue: 'Ready to get started?'
      },
      {
        name: 'primaryBtn',
        type: 'object',
        defaultValue: { children: 'Get Started', href: '#' }
      },
      {
        name: 'profileGroups',
        type: 'object',
        defaultValue: { avatars: [], max: 4 }
      },
      {
        name: 'list',
        type: 'list',
        defaultValue: [
          { icon: 'tabler-check', text: 'No setup fees' },
          { icon: 'tabler-check', text: 'Cancel anytime' }
        ]
      },
      {
        name: 'clientContent',
        type: 'string',
        defaultValue: 'Trusted by 10,000+ customers'
      }
    ],
    canHaveChildren: false
  },
  {
    component: Cta5,
    name: 'Cta5',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Subscribe to our newsletter'
      },
      {
        name: 'caption',
        type: 'string',
        defaultValue: 'Get the latest updates and news'
      },
      {
        name: 'label',
        type: 'string',
        defaultValue: 'Email address'
      },
      {
        name: 'input',
        type: 'boolean',
        defaultValue: true
      },
      {
        name: 'primaryBtn',
        type: 'object',
        defaultValue: { children: 'Subscribe', href: '#' }
      }
    ],
    canHaveChildren: false
  },
  {
    component: Pricing9,
    name: 'Pricing9',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Choose your plan'
      },
      {
        name: 'caption',
        type: 'string',
        defaultValue: 'Simple, transparent pricing'
      },
      {
        name: 'features',
        type: 'list',
        defaultValue: [
          { feature: 'Basic features', free: true, pro: true },
          { feature: 'Advanced features', free: false, pro: true }
        ]
      },
      {
        name: 'plans',
        type: 'list',
        defaultValue: [
          {
            title: 'Free',
            price: '$0',
            description: 'For individuals',
            features: ['Basic features', '5 projects'],
            button: { children: 'Get Started', href: '#' }
          }
        ]
      }
    ],
    canHaveChildren: false
  },
  {
    component: Benefit5,
    name: 'Benefit5',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Why choose us?'
      },
      {
        name: 'caption',
        type: 'string',
        defaultValue: 'Discover the benefits of our platform'
      },
      {
        name: 'blockDetail',
        type: 'object',
        defaultValue: {
          benefits: [{ icon: 'tabler-rocket', title: 'Fast Performance', description: 'Lightning fast speeds' }]
        }
      }
    ],
    canHaveChildren: false
  },
  {
    component: Testimonial10,
    name: 'Testimonial10',
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
            quote: 'Amazing product and great support!',
            author: 'John Doe',
            role: 'CEO at Company',
            avatar: '/assets/images/avatar/avatar1.png'
          }
        ]
      }
    ],
    canHaveChildren: false
  },
  {
    component: ContactUs4,
    name: 'ContactUs4',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Get in touch'
      },
      {
        name: 'caption',
        type: 'string',
        defaultValue: 'We would love to hear from you'
      },
      {
        name: 'contactInfo',
        type: 'object',
        defaultValue: {
          address: '123 Main St, City, Country',
          phone: '+1 234 567 8900',
          email: 'contact@example.com'
        }
      }
    ],
    canHaveChildren: false
  },
  {
    component: SmallHero3,
    name: 'SmallHero3',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Welcome to our platform'
      },
      {
        name: 'breadcrumbs',
        type: 'list',
        defaultValue: [{ title: 'Home', href: '/' }, { title: 'About' }]
      }
    ],
    canHaveChildren: false
  },
  {
    component: Integration2,
    name: 'Integration2',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Seamless Integrations'
      },
      {
        name: 'caption',
        type: 'string',
        defaultValue: 'Connect with your favorite tools'
      },
      {
        name: 'integrations',
        type: 'list',
        defaultValue: [
          { name: 'Slack', logo: '/assets/images/integrations/slack.png' },
          { name: 'Google', logo: '/assets/images/integrations/google.png' }
        ]
      }
    ],
    canHaveChildren: false
  },
  {
    component: Faq6,
    name: 'Faq6',
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
            question: 'How do I get started?',
            answer: 'Simply sign up and follow our onboarding process.'
          }
        ]
      }
    ],
    canHaveChildren: false
  },
  {
    component: Clientele3,
    name: 'Clientele3',
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Our Clients'
      },
      {
        name: 'clienteleList',
        type: 'list',
        defaultValue: [
          { name: 'Client 1', logo: '/assets/images/clientele/client1.png' },
          { name: 'Client 2', logo: '/assets/images/clientele/client2.png' }
        ]
      }
    ],
    canHaveChildren: false
  },
  {
    component: MegaMenu4,
    name: 'MegaMenu4',
    inputs: [
      {
        name: 'menuItems',
        type: 'list',
        defaultValue: [{ title: 'Products', items: ['Product 1', 'Product 2'] }]
      }
    ],
    canHaveChildren: true
  },
  {
    component: MegaMenu5,
    name: 'MegaMenu5',
    inputs: [
      {
        name: 'menuItems',
        type: 'list',
        defaultValue: [{ title: 'Services', items: ['Service 1', 'Service 2'] }]
      }
    ],
    canHaveChildren: true
  },
  {
    component: Other1,
    name: 'Other1',
    inputs: [
      {
        name: 'content',
        type: 'string',
        defaultValue: 'Custom content area 1'
      }
    ],
    canHaveChildren: true
  },
  {
    component: Other2,
    name: 'Other2',
    inputs: [
      {
        name: 'content',
        type: 'string',
        defaultValue: 'Custom content area 2'
      }
    ],
    canHaveChildren: true
  },
  {
    component: ProPage,
    name: 'ProPage',
    inputs: [
      {
        name: 'heading',
        type: 'string',
        defaultValue: 'Upgrade to Pro'
      },
      {
        name: 'features',
        type: 'list',
        defaultValue: [{ feature: 'Advanced Features', available: true }]
      }
    ],
    canHaveChildren: false
  },
  {
    component: Error404Block,
    name: 'Error404Block',
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Page Not Found'
      },
      {
        name: 'message',
        type: 'string',
        defaultValue: 'The page you are looking for does not exist.'
      }
    ],
    canHaveChildren: false
  },
  {
    component: Error500Block,
    name: 'Error500Block',
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Server Error'
      },
      {
        name: 'message',
        type: 'string',
        defaultValue: 'Something went wrong on our end.'
      }
    ],
    canHaveChildren: false
  },
  {
    component: NavbarContent10,
    name: 'NavbarContent10',
    inputs: [
      {
        name: 'landingBaseUrl',
        type: 'string',
        defaultValue: '/'
      },
      {
        name: 'navItems',
        type: 'list',
        defaultValue: [
          { title: 'Home', link: '/' },
          { title: 'About', link: '/about' }
        ]
      },
      {
        name: 'primaryBtn',
        type: 'object',
        defaultValue: { children: 'Get Started', href: '#' }
      },
      {
        name: 'secondaryBtn',
        type: 'object',
        defaultValue: { children: 'Login', href: '/login' }
      }
    ],
    canHaveChildren: false
  },
  {
    component: PrivacyPolicy,
    name: 'PrivacyPolicy',
    inputs: [],
    canHaveChildren: false
  },
  {
    component: TermsCondition,
    name: 'TermsCondition',
    inputs: [],
    canHaveChildren: false
  },
  {
    component: Typography,
    name: 'Typography',
    inputs: [],
    canHaveChildren: false
  }
];
