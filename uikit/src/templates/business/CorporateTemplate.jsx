'use client';
import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// @project
import { SmallHero3 } from '@/blocks/small-hero';
import { Feature21, Feature18 } from '@/blocks/feature';
import { Benefit5 } from '@/blocks/benefit';
import { Clientele3 } from '@/blocks/clientele';
import { ContactUs4 } from '@/blocks/contact-us';
import { Footer7 } from '@/blocks/footer';
import { Navbar10 } from '@/blocks/navbar';

/***************************  CORPORATE TEMPLATE - DATA  ***************************/

const defaultData = {
  navbar: {
    logo: { src: '/assets/images/logo/logo-corporate.svg', alt: 'Corporate' },
    menuItems: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Solutions', href: '#solutions' },
      { label: 'Contact', href: '#contact' }
    ],
    ctaButton: { children: 'Get Quote', href: '#contact' }
  },
  hero: {
    heading: 'Leading Enterprise Solutions',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' }
    ],
    backgroundImage: '/assets/images/backgrounds/corporate-bg.jpg'
  },
  about: {
    heading: 'Trusted by Industry Leaders',
    description: 'With over 20 years of experience, we deliver innovative solutions that drive business growth and operational excellence.',
    image: '/assets/images/about/corporate-team.jpg',
    stats: [
      { number: '500+', label: 'Enterprise Clients' },
      { number: '20+', label: 'Years Experience' },
      { number: '99.9%', label: 'Uptime SLA' },
      { number: '24/7', label: 'Support Available' }
    ]
  },
  services: {
    heading: 'Comprehensive Business Solutions',
    description: 'End-to-end services designed to optimize your operations and accelerate growth.',
    services: [
      {
        icon: '/assets/images/icons/consulting.svg',
        title: 'Strategic Consulting',
        description: 'Expert guidance to transform your business strategy and operations.',
        features: ['Business Analysis', 'Process Optimization', 'Change Management', 'ROI Analysis']
      },
      {
        icon: '/assets/images/icons/technology.svg',
        title: 'Technology Solutions',
        description: 'Cutting-edge technology implementations tailored to your needs.',
        features: ['Cloud Migration', 'System Integration', 'Custom Development', 'Security Solutions']
      },
      {
        icon: '/assets/images/icons/support.svg',
        title: 'Managed Services',
        description: '24/7 monitoring and management of your critical business systems.',
        features: ['Infrastructure Management', 'Application Support', 'Security Monitoring', 'Performance Optimization']
      }
    ]
  },
  benefits: {
    heading: 'Why Choose Our Solutions',
    benefits: [
      {
        icon: '/assets/images/icons/scale.svg',
        title: 'Scalable Architecture',
        description: 'Solutions that grow with your business requirements.'
      },
      {
        icon: '/assets/images/icons/security.svg',
        title: 'Enterprise Security',
        description: 'Bank-level security with compliance certifications.'
      },
      {
        icon: '/assets/images/icons/support-24.svg',
        title: '24/7 Expert Support',
        description: 'Round-the-clock support from certified professionals.'
      },
      {
        icon: '/assets/images/icons/analytics.svg',
        title: 'Advanced Analytics',
        description: 'Data-driven insights for informed decision making.'
      }
    ]
  },
  clients: {
    heading: 'Trusted by Global Enterprises',
    description: 'Leading companies worldwide rely on our solutions for their critical operations.',
    logos: [
      { name: 'Microsoft', logo: '/assets/images/clients/microsoft.svg' },
      { name: 'Amazon', logo: '/assets/images/clients/amazon.svg' },
      { name: 'Google', logo: '/assets/images/clients/google.svg' },
      { name: 'IBM', logo: '/assets/images/clients/ibm.svg' },
      { name: 'Oracle', logo: '/assets/images/clients/oracle.svg' },
      { name: 'Salesforce', logo: '/assets/images/clients/salesforce.svg' }
    ]
  },
  contact: {
    heading: 'Ready to Transform Your Business?',
    description: 'Contact our experts to discuss how we can help accelerate your digital transformation.',
    form: {
      fields: ['name', 'email', 'company', 'phone', 'message'],
      submitText: 'Get Started'
    },
    info: {
      address: '123 Business Ave, Corporate City, CC 12345',
      phone: '+1 (555) 123-4567',
      email: 'info@corporate.com',
      hours: 'Mon-Fri: 9AM-6PM EST'
    }
  },
  footer: {
    logo: { src: '/assets/images/logo/logo-corporate.svg', alt: 'Corporate' },
    description: 'Delivering enterprise solutions that drive business success.',
    links: [
      { title: 'Services', items: ['Consulting', 'Technology', 'Managed Services', 'Support'] },
      { title: 'Solutions', items: ['Cloud', 'Security', 'Analytics', 'Integration'] },
      { title: 'Company', items: ['About', 'Careers', 'Partners', 'News'] },
      { title: 'Resources', items: ['Documentation', 'Case Studies', 'Whitepapers', 'Blog'] }
    ],
    social: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'youtube', url: 'https://youtube.com' }
    ]
  }
};

/***************************  CORPORATE TEMPLATE  ***************************/

export default function CorporateTemplate({
  navbar = defaultData.navbar,
  hero = defaultData.hero,
  about = defaultData.about,
  services = defaultData.services,
  benefits = defaultData.benefits,
  clients = defaultData.clients,
  contact = defaultData.contact,
  footer = defaultData.footer,
  showNavbar = true,
  showHero = true,
  showAbout = true,
  showServices = true,
  showBenefits = true,
  showClients = true,
  showContact = true,
  showFooter = true
}) {
  return (
    <Box>
      {/* Navigation */}
      {showNavbar && <Navbar10 {...navbar} />}

      {/* Main Content */}
      <Stack component="main">
        {/* Hero Section */}
        {showHero && <SmallHero3 {...hero} />}

        {/* About Section */}
        {showAbout && (
          <Box id="about">
            <Feature21 {...about} />
          </Box>
        )}

        {/* Services Section */}
        {showServices && (
          <Box id="services">
            <Feature18 {...services} />
          </Box>
        )}

        {/* Benefits Section */}
        {showBenefits && <Benefit5 {...benefits} />}

        {/* Clients Section */}
        {showClients && <Clientele3 {...clients} />}

        {/* Contact Section */}
        {showContact && (
          <Box id="contact">
            <ContactUs4 {...contact} />
          </Box>
        )}
      </Stack>

      {/* Footer */}
      {showFooter && <Footer7 {...footer} />}
    </Box>
  );
}

CorporateTemplate.propTypes = {
  navbar: PropTypes.object,
  hero: PropTypes.object,
  about: PropTypes.object,
  services: PropTypes.object,
  benefits: PropTypes.object,
  clients: PropTypes.object,
  contact: PropTypes.object,
  footer: PropTypes.object,
  showNavbar: PropTypes.bool,
  showHero: PropTypes.bool,
  showAbout: PropTypes.bool,
  showServices: PropTypes.bool,
  showBenefits: PropTypes.bool,
  showClients: PropTypes.bool,
  showContact: PropTypes.bool,
  showFooter: PropTypes.bool
};
