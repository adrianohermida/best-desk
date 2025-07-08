// Landing Templates
export { default as SaasStartupTemplate } from './landing/SaasStartup';

// Business Templates
export { default as CorporateTemplate } from './business/CorporateTemplate';

// Template Categories
export const TEMPLATE_CATEGORIES = {
  LANDING: 'landing',
  BUSINESS: 'business',
  SAAS: 'saas',
  PORTFOLIO: 'portfolio',
  ECOMMERCE: 'ecommerce'
};

// Template Registry
export const TEMPLATE_REGISTRY = [
  {
    id: 'saas-startup',
    name: 'SaaS Startup',
    description: 'Complete landing page for SaaS startups with hero, features, pricing, and more',
    category: TEMPLATE_CATEGORIES.LANDING,
    component: 'SaasStartupTemplate',
    thumbnail: '/assets/images/templates/saas-startup.jpg',
    features: ['Hero Section', 'Features', 'Pricing', 'Testimonials', 'FAQ', 'CTA'],
    useCases: ['SaaS', 'Tech Startup', 'Software', 'App Launch']
  },
  {
    id: 'corporate-business',
    name: 'Corporate Business',
    description: 'Professional corporate template for enterprise businesses',
    category: TEMPLATE_CATEGORIES.BUSINESS,
    component: 'CorporateTemplate',
    thumbnail: '/assets/images/templates/corporate-business.jpg',
    features: ['About Section', 'Services', 'Benefits', 'Client Logos', 'Contact Form'],
    useCases: ['Corporate', 'Consulting', 'Enterprise', 'B2B Services']
  }
];
