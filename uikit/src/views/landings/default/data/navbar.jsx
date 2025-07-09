// @project
import { landingMegamenu, pagesMegamenu, dashboardMegamenu } from '../../common-data';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_PATH, PAGE_PATH, DOCS_URL } from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/

export const navbar = {
  customization: true,
  secondaryBtn: {
    children: <SvgIcon name="tabler-login" color="primary.main" size={18} />,
    href: PAGE_PATH.login,
    sx: { minWidth: 40, width: 40, height: 40, p: 0 }
  },
  primaryBtn: { children: 'Register', href: PAGE_PATH.register },
  navItems: [
    { id: 'home', title: 'Home', link: '/' },
    landingMegamenu,
    { id: 'components', title: 'Blocks', link: SECTION_PATH },
    dashboardMegamenu,
    pagesMegamenu,
    { id: 'docs', title: 'Docs', link: DOCS_URL, target: '_blank', rel: 'noopener noreferrer', icon: 'tabler-pin-invoke' }
  ]
};
