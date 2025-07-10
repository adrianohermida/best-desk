// @mui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import branding from '@/branding.json';
import { Themes } from '@/config';
import { MegaMenuType } from '@/enum';
import { ADMIN_PATH, BUY_NOW_URL, DOCS_URL, PAGE_PATH, PRIVIEW_PATH } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

/***************************  MEGAMENU 4 - FOOTER  ***************************/

function footerData() {
  return (
    <Stack direction={{ sm: 'row' }} sx={{ gap: 1.5, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}>
      <Stack sx={{ gap: 1 }}>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
          <Typography variant="h5">New landing demos are coming soon!</Typography>
          <Chip
            label={<Typography variant="caption">Coming Soon</Typography>}
            size="small"
            sx={{
              bgcolor: 'background.default',
              '& .MuiChip-label': { px: 1.5, py: 0.5 },
              display: { xs: 'none', sm: 'inline-flex' }
            }}
            icon={
              <CardMedia
                component="img"
                image="/assets/images/shared/celebration.svg"
                sx={{ width: 16, height: 16 }}
                alt="celebration"
                loading="lazy"
              />
            }
          />
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          SaasAble offers 200+ customizable blocks, empowering you to effortlessly design and build landing pages tailored to your product
          or service needs.
        </Typography>
      </Stack>
      <Button
        variant="contained"
        sx={{ display: { xs: 'none', sm: 'inline-flex' }, minWidth: 100, px: { xs: 2 }, py: 1.25 }}
        href={BUY_NOW_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Buy Now
      </Button>
    </Stack>
  );
}

/***************************  NAVBAR - MEGAMENU LANDINGS  ***************************/

export const landingMegamenu = {
  id: 'landings',
  title: 'Landings',
  megaMenu: {
    type: MegaMenuType.MEGAMENU4,
    popperOffsetX: 195,
    toggleBtn: { children: 'Landings' },
    menuItems: [
      {
        title: 'CRM',
        theme: Themes.THEME_CRM,
        image: '/assets/images/mega-menu/crm-light.svg',
        status: 'Pro'
      },
      {
        title: 'AI',
        theme: Themes.THEME_AI,
        image: '/assets/images/mega-menu/ai-light.svg',
        status: 'Pro'
      },
      {
        title: 'Crypto',
        theme: Themes.THEME_CRYPTO,
        image: '/assets/images/mega-menu/crypto-light.svg',
        status: 'Pro'
      },
      {
        title: 'Hosting',
        theme: Themes.THEME_HOSTING,
        image: '/assets/images/mega-menu/hosting-light.svg',
        status: 'Pro'
      },
      {
        title: 'PMS',
        theme: Themes.THEME_PMS,
        image: '/assets/images/mega-menu/pms-light.svg',
        status: 'Pro'
      },
      {
        title: 'HRM',
        theme: Themes.THEME_HRM,
        image: '/assets/images/mega-menu/hrm-light.svg',
        status: 'Pro'
      },
      {
        title: 'Plugin',
        theme: Themes.THEME_PLUGIN,
        image: '/assets/images/mega-menu/plugin-light.svg',
        status: 'Pro'
      }
    ],
    footerData: footerData()
  }
};

/***************************  MEGAMENU 5 - BANNER  ***************************/

function bannerData() {
  return (
    <Stack sx={{ alignItems: 'flex-start', gap: 3, height: 1, justifyContent: 'center' }}>
      <Stack sx={{ gap: 1 }}>
        <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
          <Chip
            label={<Typography variant="subtitle2">SaasAble Admin Template</Typography>}
            icon={
              <CardMedia
                component="img"
                image="/assets/images/shared/celebration.svg"
                sx={{ width: 16, height: 16 }}
                alt="celebration"
                loading="lazy"
              />
            }
            size="small"
            sx={{ bgcolor: 'background.default', '& .MuiChip-label': { px: 1.5, py: 0.5 }, '& .MuiChip-icon': { ml: 1.25 } }}
          />
          <Typography variant="h5">Exciting Dashboard on the Way!</Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Effortlessly manage your app’s backend with customizable admin dashboards that enhance productivity.
        </Typography>
      </Stack>
      <Button href={ADMIN_PATH} variant="contained" sx={{ minWidth: 92, px: { xs: 2 }, py: 1.25 }}>
        View Dashboard
      </Button>
    </Stack>
  );
}

/***************************  NAVBAR - MEGAMENU PAGES  ***************************/

export const pagesMegamenu = {
  id: 'pages',
  title: 'Pages',
  megaMenu: {
    type: MegaMenuType.MEGAMENU5,
    toggleBtn: { children: 'Pages' },
    popperWidth: 1000,
    menuItems: [
      {
        title: 'Main Pages',
        itemsList: [
          { title: 'Home', link: { href: '/' } },
          { title: 'Contact', link: { href: '/contact' } },
          { title: 'Privacy Policy', link: { href: '/privacy-policy' } },
          { title: 'Terms & Conditions', link: { href: '/terms-condition' } },
          { title: 'Templates', link: { href: '/templates' } },
          { title: 'Error 403', link: { href: '/403' } }
        ]
      },
      {
        title: 'Sections (33)',
        itemsList: [
          { title: 'All Sections', link: { href: '/sections' } },
          { title: 'About', link: { href: '/sections/about' } },
          { title: 'Benefits', link: { href: '/sections/benefit' } },
          { title: 'Blog', link: { href: '/sections/blog' } },
          { title: 'Clientele', link: { href: '/sections/clientele' } },
          { title: 'Contact Us', link: { href: '/sections/contact-us' } },
          { title: 'CTA', link: { href: '/sections/cta' } },
          { title: 'FAQ', link: { href: '/sections/faq' } },
          { title: 'Features', link: { href: '/sections/feature' } },
          { title: 'Hero', link: { href: '/sections/hero' } },
          { title: 'Pricing', link: { href: '/sections/pricing' } },
          { title: 'Testimonials', link: { href: '/sections/testimonial' } }
        ]
      },
      {
        title: 'Blocks (23)',
        itemsList: [
          { title: 'Benefits 5', link: { href: '/blocks/benefit/benefit5' } },
          { title: 'Clientele 3', link: { href: '/blocks/clientele/clientele3' } },
          { title: 'Contact Us 4', link: { href: '/blocks/contact-us/contact-us4' } },
          { title: 'CTA 4', link: { href: '/blocks/cta/cta4' } },
          { title: 'CTA 5', link: { href: '/blocks/cta/cta5' } },
          { title: 'FAQ 6', link: { href: '/blocks/faq/faq6' } },
          { title: 'Features 18', link: { href: '/blocks/feature/feature18' } },
          { title: 'Hero 17', link: { href: '/blocks/hero/hero17' } },
          { title: 'Navbar 10', link: { href: '/blocks/navbar/navbar10' } },
          { title: 'Pricing 9', link: { href: '/blocks/pricing/pricing9' } }
        ]
      },
      {
        title: 'Error & Maintenance',
        itemsList: [
          { title: 'Coming Soon', link: { href: '/sections/coming-soon' } },
          { title: 'Error 404 (Section)', link: { href: '/sections/error404' } },
          { title: 'Error 500 (Section)', link: { href: '/sections/error500' } },
          { title: 'Error 404 (Block)', link: { href: '/blocks/error404' } },
          { title: 'Error 500 (Block)', link: { href: '/blocks/error500' } },
          { title: 'Under Maintenance', link: { href: '/sections/under-maintenance' } },
          { title: 'Early Access', link: { href: '/sections/early-access' } }
        ]
      },
      {
        title: 'Development Tools',
        itemsList: [
          { title: 'Colors', link: { href: '/sections/color' } },
          { title: 'Typography', link: { href: '/sections/typography' } },
          { title: 'Icons', link: { href: '/sections/icon' } },
          { title: 'Gallery', link: { href: '/sections/gallery' } },
          { title: 'Mega Menu Demo', link: { href: '/sections/mega-menu' } },
          { title: 'Navbar Demo', link: { href: '/sections/navbar' } },
          { title: 'Footer Demo', link: { href: '/sections/footer' } },
          { title: 'Builder', link: { href: '/builder' } }
        ]
      }
    ],
    bannerData: bannerData()
  }
};
