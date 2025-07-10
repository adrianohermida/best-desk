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
    popperWidth: 700,
    menuItems: [
      {
        title: 'Admin Dashboard',
        itemsList: [
          { title: 'Admin Home', link: { href: '/admin' } },
          { title: 'Dashboard', link: { href: '/admin/dashboard' } },
          { title: 'Analytics', link: { href: '/admin/analytics' } },
          { title: 'Users Management', link: { href: '/admin/users' } }
        ]
      },
      {
        title: 'User Account',
        itemsList: [
          { title: 'Profile', link: { href: '/profile' } },
          { title: 'Settings', link: { href: '/settings' } },
          { title: 'Security', link: { href: '/settings/security' } }
        ]
      },
      {
        title: 'Auth Pages',
        itemsList: [
          { title: 'Login', link: { href: '/sections/auth/login' } },
          { title: 'Register', link: { href: '/sections/auth/register' } },
          { title: 'Forgot Password', link: { href: '/sections/auth/forgot-password' } },
          { title: 'OTP Verification', link: { href: '/sections/auth/otp-verification' } },
          { title: 'New Password', link: { href: '/sections/auth/new-password' } }
        ]
      },
      {
        title: 'Future Development',
        itemsList: [
          { title: 'Content Management', status: 'Priority' },
          { title: 'Reports & Analytics', status: 'Priority' },
          { title: 'Team Management', status: 'Planned' },
          { title: 'API Documentation', status: 'Planned' }
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
    dashboardMegamenu,
    pagesMegamenu,
    { id: 'docs', title: 'Docs', link: DOCS_URL, ...linkProps, icon: 'tabler-pin-invoke' }
  ]
};
