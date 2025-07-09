import PropTypes from 'prop-types';
import { useMemo } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// @project
import { handlerDrawerOpen, useGetMenuMaster } from '../hooks/useMenuState';
import { DRAWER_WIDTH } from '../config';
import menuItems from '../data/menu';

// @assets
import { IconLayoutGrid, IconUsers, IconFileText, IconChartBar, IconSettings, IconBrandAsana } from '@tabler/icons-react';

const iconMap = {
  IconLayoutGrid,
  IconUsers,
  IconFileText,
  IconChartBar,
  IconSettings,
  IconBrandAsana
};

/***************************  ADMIN LAYOUT - DRAWER  ***************************/

function DrawerHeader({ open }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
      <Typography variant="h6" noWrap component="div">
        {open ? 'Admin Panel' : 'AP'}
      </Typography>
    </Box>
  );
}

function DrawerContent() {
  const pathname = usePathname();

  const renderMenuItem = (item) => {
    const IconComponent = iconMap[item.icon] || IconLayoutGrid;
    const isActive = pathname === item.url;

    return (
      <ListItem key={item.id} disablePadding>
        <ListItemButton
          component={Link}
          href={item.url}
          sx={{
            minHeight: 48,
            justifyContent: 'initial',
            px: 2.5,
            backgroundColor: isActive ? 'primary.lighter' : 'transparent',
            color: isActive ? 'primary.main' : 'inherit',
            '&:hover': {
              backgroundColor: 'primary.lighter'
            }
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 3,
              justifyContent: 'center',
              color: isActive ? 'primary.main' : 'inherit'
            }}
          >
            <IconComponent size={20} />
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <Box sx={{ overflow: 'auto' }}>
      {menuItems.items.map((group) => (
        <Box key={group.id}>
          <Typography variant="overline" sx={{ px: 2.5, py: 1, display: 'block' }}>
            {group.title}
          </Typography>
          <List>{group.children?.map(renderMenuItem)}</List>
        </Box>
      ))}
    </Box>
  );
}

export default function AdminDrawer({ window }) {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  // Define container for drawer when window is specified
  const container = window !== undefined ? () => window().document.body : undefined;

  // Memoize drawer content and header to prevent unnecessary re-renders
  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={drawerOpen} />, [drawerOpen]);

  const drawerSx = {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: DRAWER_WIDTH,
      boxSizing: 'border-box',
      borderRight: '1px solid',
      borderRightColor: 'divider',
      backgroundImage: 'none',
      boxShadow: 'inherit'
    }
  };

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1200 }} aria-label="admin navigation">
      {/* Temporary drawer for small media */}
      <Drawer
        container={container}
        variant="temporary"
        open={drawerOpen && downLG}
        onClose={() => handlerDrawerOpen(!drawerOpen)}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          ...drawerSx
        }}
      >
        {drawerHeader}
        <Divider />
        {drawerContent}
      </Drawer>

      {/* Permanent drawer for large media */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', lg: 'block' },
          ...drawerSx
        }}
        open
      >
        {drawerHeader}
        <Divider />
        {drawerContent}
      </Drawer>
    </Box>
  );
}

AdminDrawer.propTypes = { window: PropTypes.func };
DrawerHeader.propTypes = { open: PropTypes.bool };
