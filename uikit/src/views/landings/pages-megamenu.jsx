// @mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

// @project
import { MegaMenuType } from '@/enum';
import { PAGE_PATH } from '@/path';

/***************************  PAGES MEGAMENU - BANNER  ***************************/

function pagesBannerData() {
  return (
    <Stack sx={{ alignItems: 'flex-start', gap: 3, height: 1, justifyContent: 'center' }}>
      <Stack sx={{ gap: 1 }}>
        <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
          <Chip
            label={<Typography variant="subtitle2">67+ Páginas</Typography>}
            size="small"
            sx={{ bgcolor: 'success.lighter', color: 'success.main', '& .MuiChip-label': { px: 1.5, py: 0.5 } }}
          />
          <Typography variant="h5">Componentes & Seções</Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Explore nossa coleção completa de componentes, blocos e seções reutilizáveis.
        </Typography>
      </Stack>
      <Button href="/sections" variant="contained" sx={{ minWidth: 120, px: { xs: 2 }, py: 1.25 }}>
        Ver Todas
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
    popperWidth: 860,
    menuItems: [
      {
        title: 'Navegação',
        itemsList: [
          { title: 'Hero Sections', link: { href: PAGE_PATH.hero } },
          { title: 'Navbar', link: { href: PAGE_PATH.navbar } },
          { title: 'Footer', link: { href: PAGE_PATH.footer } },
          { title: 'Mega Menu', link: { href: PAGE_PATH.megaMenu } }
        ]
      },
      {
        title: 'Conteúdo',
        itemsList: [
          { title: 'Features', link: { href: PAGE_PATH.feature } },
          { title: 'Benefits', link: { href: PAGE_PATH.benefit } },
          { title: 'Testimonials', link: { href: PAGE_PATH.testimonial } },
          { title: 'Pricing', link: { href: PAGE_PATH.pricing } },
          { title: 'FAQ', link: { href: PAGE_PATH.faq } }
        ]
      },
      {
        title: 'Formulários',
        itemsList: [
          { title: 'Contact Us', link: { href: PAGE_PATH.contactUs } },
          { title: 'Login', link: { href: PAGE_PATH.login } },
          { title: 'Register', link: { href: PAGE_PATH.register } },
          { title: 'Forgot Password', link: { href: PAGE_PATH.forgotPassword } }
        ]
      },
      {
        title: 'Páginas Especiais',
        itemsList: [
          { title: 'About', link: { href: PAGE_PATH.about } },
          { title: 'Blog', link: { href: PAGE_PATH.blog } },
          { title: 'Coming Soon', link: { href: PAGE_PATH.comingSoon } },
          { title: 'Error 404', link: { href: PAGE_PATH.error404 } },
          { title: 'Under Maintenance', link: { href: PAGE_PATH.underMaintenance } }
        ]
      },
      {
        title: 'Design System',
        itemsList: [
          { title: 'Typography', link: { href: PAGE_PATH.typography } },
          { title: 'Colors', link: { href: PAGE_PATH.color } },
          { title: 'Icons', link: { href: PAGE_PATH.icon } }
        ]
      }
    ],
    bannerData: pagesBannerData()
  }
};
