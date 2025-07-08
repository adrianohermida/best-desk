// @project
import branding from '@/branding.json';

// Import modularized features
import { feature2 } from './features/feature2';
import { feature5 } from './features/feature5';
import { feature20 } from './features/feature20';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const feature21 = {
  heading: `Design Faster, Smarter with ${branding.brandName} Figma`,
  caption: "Unlock Figma's advanced tools for streamlined, scalable, and responsive SaaS UI design.",
  image: '/assets/images/graphics/ai/desktop1-light.svg',
  primaryBtn: { children: 'Free Figma', href: 'https://www.figma.com/community/file/1425095061180549847', ...linkProps },
  secondaryBtn: {
    children: 'Preview Pro Figma',
    href: 'https://www.figma.com/design/mlkXfeqxUKqIo0GQhPBqPb/SaasAble---UI-Kit---Preview-only?node-id=11-1833&t=JBHOIIEuYZpmN6v8-1',
    ...linkProps
  },
  features: [
    {
      animationDelay: 0.1,
      icon: 'tabler-components',
      title: 'Component Architecture'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-devices-code',
      title: 'Auto-Layout System'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-palette',
      title: 'Design Tokens'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-brand-figma',
      title: 'Figma Variables'
    },
    {
      animationDelay: 0.5,
      icon: 'tabler-layers-linked',
      title: 'Component Variants'
    },
    {
      animationDelay: 0.6,
      icon: 'tabler-device-desktop',
      title: 'Responsive Design'
    }
  ]
};

export const feature18 = {
  heading: 'Intelligent Task Scheduling',
  caption: 'Streamline operations with smart automation and real-time insights.',
  image: '/assets/images/graphics/ai/graphics4-light.svg',
  actionBtn: { children: 'Explore all Features' },
  features: [
    {
      icon: 'tabler-chart-histogram',
      title: 'Parallel Processing',
      content: 'Process data in parallel, significantly boosting data processing speed.'
    },
    {
      icon: 'tabler-artboard',
      title: 'Scalable Data Pipelines',
      content: 'Build and manage scalable and efficient data processing pipelines.'
    },
    {
      icon: 'tabler-database',
      title: 'Data Quality Assurance',
      content: 'Tools to ensure and maintain high data quality and integrity.'
    },
    {
      icon: 'tabler-settings-up',
      title: 'Dynamic Task Automation',
      content: 'Automate dynamic tasks to enhance workflow efficiency.'
    },
    {
      icon: 'tabler-devices-code',
      title: 'Cross-Platform ',
      content: 'Compatibility with various platforms for versatile data processing.'
    },
    {
      icon: 'tabler-route',
      title: 'Workflow Optimization',
      content: 'Optimize workflows for increased productivity and efficiency.'
    }
  ]
};

// Re-export modularized features
export { feature2, feature5, feature20 };
