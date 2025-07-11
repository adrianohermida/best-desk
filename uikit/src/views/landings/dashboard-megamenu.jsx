// @mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

// @project
import { MegaMenuType } from '@/enum';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

/***************************  DASHBOARD MEGAMENU - BANNER  ***************************/

function dashboardBannerData() {
  return (
    <Stack sx={{ alignItems: 'flex-start', gap: 3, height: 1, justifyContent: 'center' }}>
      <Stack sx={{ gap: 1 }}>
        <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
          <Chip
            label={<Typography variant="subtitle2">Admin Dashboard</Typography>}
            size="small"
            sx={{ bgcolor: 'primary.lighter', color: 'primary.main', '& .MuiChip-label': { px: 1.5, py: 0.5 } }}
          />
          <Typography variant="h5">Painel Administrativo Completo</Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Acesse o dashboard com ferramentas de administração, analytics e gestão de conteúdo.
        </Typography>
      </Stack>
      <Button href="/admin/dashboard" variant="contained" sx={{ minWidth: 120, px: { xs: 2 }, py: 1.25 }}>
        Abrir Dashboard
      </Button>
    </Stack>
  );
}

/***************************  NAVBAR - MEGAMENU DASHBOARD  ***************************/

export const dashboardMegamenu = {
  id: 'dashboard',
  title: 'Dashboard',
  megaMenu: {
    type: MegaMenuType.MEGAMENU5,
    toggleBtn: { children: 'Dashboard' },
    popperWidth: 860,
    menuItems: [
      {
        title: 'Core Admin',
        itemsList: [
          {
            title: 'Dashboard Principal',
            link: { href: '/admin/dashboard' }
          },
          {
            title: 'Página de Exemplo',
            link: { href: '/admin/sample-page' }
          }
        ]
      },
      {
        title: 'Design System',
        itemsList: [
          {
            title: 'Cores',
            link: { href: '/admin/utils/color' }
          },
          {
            title: 'Sombras',
            link: { href: '/admin/utils/shadow' }
          },
          {
            title: 'Tipografia',
            link: { href: '/admin/utils/typography' }
          }
        ]
      },
      {
        title: 'Autenticação',
        itemsList: [
          {
            title: 'Login',
            link: { href: '/admin/auth/login' }
          },
          {
            title: 'Registro',
            link: { href: '/admin/auth/register' }
          }
        ]
      }
    ],
    bannerData: dashboardBannerData()
  }
};
