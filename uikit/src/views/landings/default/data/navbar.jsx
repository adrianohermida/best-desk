// @project
import { landingMegamenu, pagesMegamenu } from '../../common-data';
import SvgIcon from '@/components/SvgIcon';
import AdminAccessButton from '@/components/AdminAccessButton';
import { SECTION_PATH, ADMIN_PATH, BUY_NOW_URL, DOCS_URL, FREEBIES_URL } from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
export const navbar = {
  customization: true,
  secondaryBtn: {
    children: <SvgIcon name="tabler-login" color="primary.main" size={18} />,
    href: FREEBIES_URL,
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
