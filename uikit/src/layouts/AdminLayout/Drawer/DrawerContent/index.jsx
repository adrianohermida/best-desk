// @mui
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

// @project
import { useGetMenuMaster } from '@/states/menu';

// @assets
import { IconDashboard, IconChartBar, IconUsers, IconUser, IconSettings, IconShield, IconHome } from '@tabler/icons-react';

// @next
import { useRouter, usePathname } from 'next/navigation';

/***************************  DRAWER CONTENT  ***************************/

const menuItems = [
  { title: 'Back to Site', href: '/', icon: IconHome },
  { title: 'Dashboard', href: '/admin/dashboard', icon: IconDashboard },
  { title: 'Analytics', href: '/admin/analytics', icon: IconChartBar },
  { title: 'Users', href: '/admin/users', icon: IconUsers },
  { title: 'Profile', href: '/profile', icon: IconUser },
  { title: 'Settings', href: '/settings', icon: IconSettings },
  { title: 'Security', href: '/settings/security', icon: IconShield }
];

export default function DrawerContent() {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href) => {
    router.push(href);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => handleNavigation(item.href)}
              selected={pathname === item.href}
              sx={{
                minHeight: 48,
                justifyContent: drawerOpen ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: drawerOpen ? 3 : 'auto',
                  justifyContent: 'center'
                }}
              >
                <item.icon size={20} />
              </ListItemIcon>
              <ListItemText primary={item.title} sx={{ opacity: drawerOpen ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
