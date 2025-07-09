import { useMemo } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { handlerDrawerOpen, useGetMenuMaster } from '../hooks/useMenuState';
import { DRAWER_WIDTH } from '../config';

// @assets
import { IconLayoutSidebarRightCollapse, IconMenu2 } from '@tabler/icons-react';

/***************************  ADMIN LAYOUT - HEADER  ***************************/

export default function AdminHeader() {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  // Common header content
  const mainHeader = (
    <Toolbar sx={{ minHeight: { xs: 68, md: 76 } }}>
      <IconButton
        aria-label="open drawer"
        onClick={() => handlerDrawerOpen(!drawerOpen)}
        size="small"
        color="secondary"
        variant="outlined"
        sx={{ display: { xs: 'inline-flex', lg: !drawerOpen ? 'inline-flex' : 'none' }, mr: 1 }}
      >
        <>
          {!drawerOpen && !downLG && <IconLayoutSidebarRightCollapse size={20} />}
          {downLG && <IconMenu2 size={20} />}
        </>
      </IconButton>

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Admin Dashboard
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {/* Add user menu, notifications, etc here */}
        <Typography variant="body2" color="text.secondary">
          Welcome, Admin
        </Typography>
      </Box>
    </Toolbar>
  );

  // AppBar props, including styles that vary based on drawer state and screen size
  const appBarProps = {
    color: 'inherit',
    position: 'fixed',
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
      zIndex: 1200,
      width: { xs: '100%', lg: drawerOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : 1 }
    }
  };

  return <AppBar {...appBarProps}>{mainHeader}</AppBar>;
}
