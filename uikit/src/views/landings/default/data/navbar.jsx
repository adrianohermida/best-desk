// @project
import { landingMegamenu, pagesMegamenu } from '../../common-data';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_PATH, ADMIN_PATH, BUY_NOW_URL, DOCS_URL, FREEBIES_URL, LOGIN_URL } from '@/path';
import { MegaMenuType } from '@/enum';

/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

/***************************  DASHBOARD MEGAMENU  ***************************/

const dashboardMegamenu = {
  id: 'dashboard',
  title: 'Dashboard',
  megaMenu: {
    type: MegaMenuType.MEGAMENU5,
    toggleBtn: { children: 'Dashboard' },
    popperWidth: 600,
    menuItems: [
      {
        title: 'Main',
        itemsList: [
          { title: 'Dashboard', link: { href: '/admin/dashboard', ...linkProps } },
          { title: 'Analytics', link: { href: '/admin/analytics', ...linkProps } }
        ]
      },
      {
        title: 'Management',
        itemsList: [
          { title: 'Users', link: { href: '/admin/users', ...linkProps } },
          { title: 'Content', status: 'Coming Soon' },
          { title: 'Settings', status: 'Coming Soon' }
        ]
      },
      {
        title: 'Account',
        itemsList: [
          { title: 'Profile', link: { href: '/profile' } },
          { title: 'Settings', link: { href: '/settings' } },
          { title: 'Security', link: { href: '/settings/security' } }
        ]
      }
    ]
  }
};
export const navbar = {
  customization: true,
  secondaryBtn: {
    children: <SvgIcon name="tabler-user" color="primary.main" size={18} />,
    href: LOGIN_URL,
    ...linkProps,
    sx: { minWidth: 40, width: 40, height: 40, p: 0 }
  },
  primaryBtn: { children: 'Buy Now', href: BUY_NOW_URL, ...linkProps },
  navItems: [
    { id: 'home', title: 'Home', link: '/' },
    landingMegamenu,
    { id: 'components', title: 'Blocks', link: SECTION_PATH },
    { id: 'dashboard', title: 'Dashboard', link: ADMIN_PATH, ...linkProps },
    pagesMegamenu,
    { id: 'docs', title: 'Docs', link: DOCS_URL, ...linkProps, icon: 'tabler-pin-invoke' }
  ]
};
