'use client';
import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// @next
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// @project
import { DynamicIcon } from '../components/DynamicIcon';

const DRAWER_WIDTH = 250;

// Menu items simplificado
const menuItems = [
  { title: 'Dashboard', icon: 'IconLayoutGrid', path: '/admin/dashboard' },
  { title: 'Analytics', icon: 'IconChartBar', path: '/admin/analytics' },
  { title: 'Users', icon: 'IconUsers', path: '/admin/users' },
  { title: 'Projects', icon: 'IconBrandAsana', path: '/admin/projects' },
  { title: 'Settings', icon: 'IconSettings', path: '/admin/settings' }
];

/**
 * Layout Admin simplificado sem dependências complexas
 */
export default function SimpleAdminLayout({ children }) {
  const pathname = usePathname();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
          bgcolor: 'background.paper',
          color: 'text.primary',
          boxShadow: 1
        }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: 'none' } }}>
            <DynamicIcon name="IconMenu2" />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Box component="nav" sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              bgcolor: 'background.paper',
              borderRight: '1px solid',
              borderColor: 'divider'
            }
          }}
          open
        >
          <Toolbar>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              SaasAble
            </Typography>
          </Toolbar>

          <List>
            {menuItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.path}
                  selected={pathname === item.path}
                  sx={{
                    '&.Mui-selected': {
                      bgcolor: 'primary.lighter',
                      color: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.lighter'
                      }
                    }
                  }}
                >
                  <ListItemIcon>
                    <DynamicIcon
                      name={item.icon}
                      sx={{
                        color: pathname === item.path ? 'primary.main' : 'text.secondary'
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          minHeight: '100vh',
          bgcolor: 'background.default'
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ mt: 2, mb: 4 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}

SimpleAdminLayout.propTypes = {
  children: PropTypes.node.isRequired
};
