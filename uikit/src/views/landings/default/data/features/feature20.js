// @project
import { BUY_NOW_URL, SECTION_PATH } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const feature20 = {
  heading: 'Comprehensive UI Kit Tailored to your Need',
  caption: 'Ready to transform your SaaS designs with one powerful UI Kit?',
  actionBtn: { children: 'Buy Now', href: BUY_NOW_URL, ...linkProps },
  secondaryBtn: { children: 'Explore Blocks', href: SECTION_PATH },
  features: [
    {
      icon: 'tabler-accessible',
      title: 'WCAG Compliant',
      content: 'Ensure accessibility with WCAG compliant design for browsing.'
    },
    {
      icon: 'tabler-brand-google',
      title: 'SEO Friendly',
      content: 'Boost visibility with SEO-friendly features for better search rankings.'
    },
    {
      icon: 'tabler-stack-2',
      title: 'MUI Components',
      content: 'Customize Material 3 design MUI components for enhanced aesthetics.'
    },
    {
      icon: 'tabler-rocket',
      title: 'High Performance UI',
      content: 'Adjust content layout for visual coherence on various screen sizes.'
    },
    {
      icon: 'tabler-help',
      title: 'Detailed Documentation',
      content: 'Access comprehensive documentation for easy guidance on platform usage.'
    },
    {
      icon: 'tabler-refresh',
      title: 'Regular Updates',
      content: 'Receive consistent updates to keep the platform secure and up-to-date with the latest features.'
    }
  ]
};
