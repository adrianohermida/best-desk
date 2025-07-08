// @project
import SvgIcon from '@/components/SvgIcon';
import { DOCS_URL, FREEBIES_URL } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
const iconProps = { color: 'text.secondary' };

export const footerMenuData = [
  {
    id: 'company',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Company',
    menu: [
      {
        label: 'Why Phoenixcoded?',
        link: {
          href: 'https://blog.saasable.io/a-decade-of-expertise-the-phoenixcoded-story-and-why-you-should-trust-us',
          ...linkProps
        }
      },
      {
        label: 'About',
        link: { href: 'https://saasable.io/about', ...linkProps }
      },
      {
        label: 'Contact Us',
        link: { href: '/contact', ...linkProps }
      }
    ]
  },
  {
    id: 'help',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Help',
    menu: [
      {
        label: 'Blog',
        link: { href: 'https://blog.saasable.io/', ...linkProps }
      },
      {
        label: 'Changelog',
        link: { href: 'https://saasable.io/changelog', ...linkProps }
      },
      {
        label: 'Support',
        link: { href: 'https://phoenixcoded.gitbook.io/saasable/help-and-support', ...linkProps }
      }
    ]
  },
  {
    id: 'pages',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Pages',
    menu: [
      {
        label: 'FreeBies',
        link: { href: FREEBIES_URL, ...linkProps }
      },
      {
        label: 'Privacy Policy',
        link: { href: '/privacy-policy' }
      },
      {
        label: 'Terms & Conditions',
        link: { href: '/terms-condition' }
      }
    ]
  },
  {
    id: 'store',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Store',
    menu: [
      {
        label: 'License',
        link: { href: 'https://mui.com/store/license/', ...linkProps }
      },
      {
        label: 'Refund Policy',
        link: { href: 'https://mui.com/store/customer-refund-policy/', ...linkProps }
      }
    ]
  }
];

export const usefulLinksData = [
  {
    icon: <SvgIcon name="tabler-brand-figma" {...iconProps} />,
    title: 'Figma Version 1.1.0',
    href: 'https://www.figma.com/community/file/1425095061180549847'
  },
  {
    icon: <SvgIcon name="tabler-route" {...iconProps} />,
    title: 'React Material UI v7',
    href: 'https://mui.com/material-ui/getting-started'
  },
  {
    icon: <SvgIcon name="tabler-sparkles" {...iconProps} />,
    title: 'Documentation',
    href: DOCS_URL
  }
];

export const footerLinkProps = linkProps;
export const footerIconProps = iconProps;

export default {
  menuData: footerMenuData,
  usefulLinks: usefulLinksData,
  linkProps: footerLinkProps,
  iconProps: footerIconProps
};
