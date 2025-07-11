// @project
import { landingMegamenu } from '../../common-data';
import { dashboardMegamenu } from '../../dashboard-megamenu';
import { pagesMegamenu } from '../../pages-megamenu';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_PATH, ADMIN_PATH, BUY_NOW_URL, DOCS_URL, FREEBIES_URL } from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
export const navbar = {
  customization: true,
  secondaryBtn: {
    children: 'Login',
    href: FREEBIES_URL,
    variant: 'outlined',
    sx: { minWidth: 80, px: 2, py: 1 }
  },
  primaryBtn: {
    children: 'Register',
    href: BUY_NOW_URL,
    variant: 'contained',
    sx: { minWidth: 90, px: 2, py: 1 }
  },
  navItems: [
    { id: 'home', title: 'Home', link: '/' },
    landingMegamenu,
    { id: 'components', title: 'Blocks', link: SECTION_PATH },
    dashboardMegamenu,
    pagesMegamenu,
    { id: 'docs', title: 'Docs', link: DOCS_URL, ...linkProps, icon: 'tabler-pin-invoke' }
  ]
};
