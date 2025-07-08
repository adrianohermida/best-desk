'use client';
import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// @project
import { Hero17 } from '@/blocks/hero';
import { Feature18, Feature20 } from '@/blocks/feature';
import { Cta4, Cta5 } from '@/blocks/cta';
import { Pricing9 } from '@/blocks/pricing';
import { Testimonial10 } from '@/blocks/testimonial';
import { Faq6 } from '@/blocks/faq';
import { Footer7 } from '@/blocks/footer';
import { Navbar10 } from '@/blocks/navbar';

/***************************  SAAS STARTUP TEMPLATE - DATA  ***************************/

const defaultData = {
  navbar: {
    logo: { src: '/assets/images/logo/logo-main.svg', alt: 'SaaSable' },
    menuItems: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' }
    ],
    ctaButton: { children: 'Get Started', href: '#pricing' }
  },
  hero: {
    chip: { children: 'New Feature Released', color: 'primary' },
    headLine: 'Scale Your SaaS Business with Powerful Analytics',
    captionLine:
      'Transform your data into actionable insights. Monitor performance, track growth, and make data-driven decisions with our comprehensive analytics platform.',
    primaryBtn: { children: 'Start Free Trial', href: '#pricing' },
    secondaryBtn: { children: 'Watch Demo', href: '#demo' },
    videoSrc: '/assets/videos/saas-demo.mp4',
    videoThumbnail: '/assets/images/thumbnails/saas-hero.jpg',
    listData: [
      { image: '/assets/images/icons/react.svg', title: 'React Based' },
      { image: '/assets/images/icons/security.svg', title: 'Enterprise Security' },
      { image: '/assets/images/icons/analytics.svg', title: 'Advanced Analytics' },
      { image: '/assets/images/icons/cloud.svg', title: 'Cloud Native' }
    ]
  },
  features: {
    heading: 'Powerful Features for Modern SaaS',
    description: 'Everything you need to build, scale, and optimize your SaaS business.',
    features: [
      {
        icon: '/assets/images/icons/dashboard.svg',
        title: 'Real-time Dashboard',
        description: 'Monitor all your key metrics in one beautiful, responsive dashboard.'
      },
      {
        icon: '/assets/images/icons/automation.svg',
        title: 'Automated Workflows',
        description: 'Set up automated processes to save time and reduce manual work.'
      },
      {
        icon: '/assets/images/icons/integration.svg',
        title: 'Easy Integrations',
        description: 'Connect with 100+ popular tools and services through our API.'
      }
    ]
  },
  pricing: {
    heading: 'Simple, Transparent Pricing',
    description: 'Choose the plan that fits your needs. Scale up or down anytime.',
    plans: [
      {
        name: 'Starter',
        price: '$29',
        period: '/month',
        features: ['Up to 10,000 events/month', 'Basic analytics', 'Email support', '5 team members'],
        ctaText: 'Start Free Trial',
        popular: false
      },
      {
        name: 'Professional',
        price: '$99',
        period: '/month',
        features: ['Up to 100,000 events/month', 'Advanced analytics', 'Priority support', '25 team members', 'Custom integrations'],
        ctaText: 'Start Free Trial',
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        features: ['Unlimited events', 'Custom analytics', '24/7 phone support', 'Unlimited team members', 'On-premise deployment'],
        ctaText: 'Contact Sales',
        popular: false
      }
    ]
  },
  testimonials: {
    heading: 'Loved by thousands of customers',
    testimonials: [
      {
        content: 'This platform has completely transformed how we track and analyze our business metrics. The insights are incredible.',
        author: 'Sarah Johnson',
        position: 'CEO at TechStart',
        avatar: '/assets/images/avatars/avatar-1.jpg'
      },
      {
        content: 'The automation features saved us 20 hours per week. Our team can now focus on what really matters.',
        author: 'Mike Chen',
        position: 'CTO at GrowthCorp',
        avatar: '/assets/images/avatars/avatar-2.jpg'
      }
    ]
  },
  faq: {
    heading: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How does the free trial work?',
        answer: 'You get full access to all Professional features for 14 days. No credit card required.'
      },
      {
        question: 'Can I change plans anytime?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
      },
      {
        question: 'What kind of support do you offer?',
        answer: 'We offer email support for all plans, with priority support for Professional and 24/7 phone support for Enterprise.'
      }
    ]
  },
  cta: {
    heading: 'Ready to get started?',
    description: 'Join thousands of companies already using our platform to scale their business.',
    primaryBtn: { children: 'Start Free Trial', href: '#pricing' },
    secondaryBtn: { children: 'Contact Sales', href: '#contact' }
  },
  footer: {
    logo: { src: '/assets/images/logo/logo-main.svg', alt: 'SaaSable' },
    description: 'Building the future of SaaS analytics.',
    links: [
      { title: 'Product', items: ['Features', 'Pricing', 'Integrations', 'API'] },
      { title: 'Company', items: ['About', 'Blog', 'Careers', 'Contact'] },
      { title: 'Support', items: ['Help Center', 'Documentation', 'Status', 'Security'] }
    ],
    social: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'github', url: 'https://github.com' }
    ]
  }
};

/***************************  SAAS STARTUP TEMPLATE  ***************************/

export default function SaasStartupTemplate({
  navbar = defaultData.navbar,
  hero = defaultData.hero,
  features = defaultData.features,
  pricing = defaultData.pricing,
  testimonials = defaultData.testimonials,
  faq = defaultData.faq,
  cta = defaultData.cta,
  footer = defaultData.footer,
  showNavbar = true,
  showHero = true,
  showFeatures = true,
  showPricing = true,
  showTestimonials = true,
  showFaq = true,
  showCta = true,
  showFooter = true
}) {
  return (
    <Box>
      {/* Navigation */}
      {showNavbar && <Navbar10 {...navbar} />}

      {/* Main Content */}
      <Stack component="main">
        {/* Hero Section */}
        {showHero && <Hero17 {...hero} />}

        {/* Features Section */}
        {showFeatures && (
          <Box id="features">
            <Feature18 {...features} />
            <Feature20 {...features} />
          </Box>
        )}

        {/* Pricing Section */}
        {showPricing && (
          <Box id="pricing">
            <Pricing9 {...pricing} />
          </Box>
        )}

        {/* Testimonials Section */}
        {showTestimonials && <Testimonial10 {...testimonials} />}

        {/* FAQ Section */}
        {showFaq && <Faq6 {...faq} />}

        {/* CTA Section */}
        {showCta && <Cta4 {...cta} />}
      </Stack>

      {/* Footer */}
      {showFooter && <Footer7 {...footer} />}
    </Box>
  );
}

SaasStartupTemplate.propTypes = {
  navbar: PropTypes.object,
  hero: PropTypes.object,
  features: PropTypes.object,
  pricing: PropTypes.object,
  testimonials: PropTypes.object,
  faq: PropTypes.object,
  cta: PropTypes.object,
  footer: PropTypes.object,
  showNavbar: PropTypes.bool,
  showHero: PropTypes.bool,
  showFeatures: PropTypes.bool,
  showPricing: PropTypes.bool,
  showTestimonials: PropTypes.bool,
  showFaq: PropTypes.bool,
  showCta: PropTypes.bool,
  showFooter: PropTypes.bool
};
