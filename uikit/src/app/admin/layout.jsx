'use client';

import { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
  Divider
} from '@mui/material';
import {
  IconMenu2,
  IconDashboard,
  IconChartBar,
  IconUsers,
  IconUser,
  IconSettings,
  IconShield,
  IconHome,
  IconX
} from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const drawerWidth = 280;

const menuItems = [
  { title: 'Back to Site', href: '/', icon: IconHome, divider: true },
  { title: 'Admin Overview', href: '/admin', icon: IconDashboard },
  { title: 'Dashboard', href: '/admin/dashboard', icon: IconDashboard },
  { title: 'Analytics', href: '/admin/analytics', icon: IconChartBar },
  { title: 'User Management', href: '/admin/users', icon: IconUsers },
  { title: 'Profile', href: '/profile', icon: IconUser, divider: true },
  { title: 'Settings', href: '/settings', icon: IconSettings },
  { title: 'Security', href: '/settings/security', icon: IconShield }
];

export default function AdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Admin Panel
        </Typography>
        {isMobile && (
          <IconButton onClick={handleDrawerToggle} sx={{ ml: 'auto' }}>
            <IconX />
          </IconButton>
        )}
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <Box key={index}>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                selected={pathname === item.href}
                onClick={isMobile ? handleDrawerToggle : undefined}
              >
                <ListItemIcon>
                  <item.icon size={20} />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
            {item.divider && <Divider sx={{ my: 1 }} />}
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <IconMenu2 />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            SaasAble Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Navigation Drawer */}
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: 8
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
