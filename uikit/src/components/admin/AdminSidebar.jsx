'use client';

import { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  Divider,
  Collapse,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  IconDashboard,
  IconUsers,
  IconFileText,
  IconCalendar,
  IconMail,
  IconSettings,
  IconChevronDown,
  IconChevronRight,
  IconReport,
  IconDatabase,
  IconShield,
  IconMenu2,
  IconLogout
} from '@tabler/icons-react';
import { useRouter, usePathname } from 'next/navigation';
import { useAppState } from '@/hooks/useAppState';
import { useAuth } from '@/hooks/useAuth';

const drawerWidth = 260;
const miniDrawerWidth = 60;

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { sidebar, toggleSidebar } = useAppState();
  const { user, logout } = useAuth();
  const [expandedItems, setExpandedItems] = useState({});

  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: IconDashboard,
      path: '/admin/dashboard'
    },
    {
      id: 'cases',
      label: 'Cases',
      icon: IconFileText,
      path: '/admin/cases',
      children: [
        { id: 'all-cases', label: 'All Cases', path: '/admin/cases' },
        { id: 'new-case', label: 'New Case', path: '/admin/cases/new' },
        { id: 'case-types', label: 'Case Types', path: '/admin/cases/types' }
      ]
    },
    {
      id: 'clients',
      label: 'Clients',
      icon: IconUsers,
      path: '/admin/clients',
      children: [
        { id: 'all-clients', label: 'All Clients', path: '/admin/clients' },
        { id: 'new-client', label: 'New Client', path: '/admin/clients/new' },
        { id: 'client-types', label: 'Client Types', path: '/admin/clients/types' }
      ]
    },
    {
      id: 'calendar',
      label: 'Calendar',
      icon: IconCalendar,
      path: '/admin/calendar'
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: IconMail,
      path: '/admin/messages',
      badge: 3
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: IconReport,
      path: '/admin/reports',
      children: [
        { id: 'case-reports', label: 'Case Reports', path: '/admin/reports/cases' },
        { id: 'client-reports', label: 'Client Reports', path: '/admin/reports/clients' },
        { id: 'financial-reports', label: 'Financial Reports', path: '/admin/reports/financial' }
      ]
    },
    {
      id: 'system',
      label: 'System',
      icon: IconDatabase,
      path: '/admin/system',
      children: [
        { id: 'users', label: 'Users', path: '/admin/system/users' },
        { id: 'roles', label: 'Roles & Permissions', path: '/admin/system/roles' },
        { id: 'audit', label: 'Audit Log', path: '/admin/system/audit' }
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: IconSettings,
      path: '/admin/settings'
    }
  ];

  const handleToggleExpand = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleNavigate = (path) => {
    router.push(path);
  };

  const isActive = (path) => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  const isOpen = sidebar?.isOpen !== false;

  const renderNavigationItem = (item, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems[item.id];
    const active = isActive(item.path);

    return (
      <Box key={item.id}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              if (hasChildren) {
                handleToggleExpand(item.id);
              } else {
                handleNavigate(item.path);
              }
            }}
            sx={{
              pl: 2 + level * 2,
              backgroundColor: active ? 'primary.lighter' : 'transparent',
              color: active ? 'primary.main' : 'text.primary',
              '&:hover': {
                backgroundColor: active ? 'primary.lighter' : 'action.hover'
              },
              borderRight: active ? 3 : 0,
              borderColor: 'primary.main'
            }}
          >
            <ListItemIcon
              sx={{
                color: active ? 'primary.main' : 'text.secondary',
                minWidth: isOpen ? 40 : 'auto'
              }}
            >
              <item.icon size={20} />
            </ListItemIcon>

            {isOpen && (
              <>
                <ListItemText primary={item.label} sx={{ ml: -1 }} />

                {item.badge && (
                  <Box
                    sx={{
                      backgroundColor: 'error.main',
                      color: 'white',
                      borderRadius: '50%',
                      width: 20,
                      height: 20,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      mr: 1
                    }}
                  >
                    {item.badge}
                  </Box>
                )}

                {hasChildren && (
                  <IconButton size="small">{isExpanded ? <IconChevronDown size={16} /> : <IconChevronRight size={16} />}</IconButton>
                )}
              </>
            )}
          </ListItemButton>
        </ListItem>

        {hasChildren && isOpen && (
          <Collapse in={isExpanded}>
            <List disablePadding>{item.children.map((child) => renderNavigationItem(child, level + 1))}</List>
          </Collapse>
        )}
      </Box>
    );
  };

  const drawer = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: isOpen ? 'space-between' : 'center',
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        {isOpen && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconShield color="primary" size={24} />
            <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
              LawDesk
            </Typography>
          </Box>
        )}

        <IconButton onClick={toggleSidebar} size="small">
          <IconMenu2 size={20} />
        </IconButton>
      </Box>

      {/* User Info */}
      {isOpen && (
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src={user?.avatar} sx={{ width: 40, height: 40 }}>
              {user?.name?.charAt(0)}
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography variant="subtitle2" noWrap>
                {user?.name || 'Admin User'}
              </Typography>
              <Typography variant="caption" color="text.secondary" noWrap>
                {user?.email || 'admin@lawdesk.com'}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {/* Navigation */}
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <List disablePadding sx={{ pt: 1 }}>
          {navigationItems.map((item) => renderNavigationItem(item))}
        </List>
      </Box>

      {/* Footer */}
      <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
        <Tooltip title="Logout" placement="right">
          <ListItemButton
            onClick={logout}
            sx={{
              borderRadius: 1,
              justifyContent: isOpen ? 'flex-start' : 'center'
            }}
          >
            <ListItemIcon sx={{ color: 'error.main', minWidth: isOpen ? 40 : 'auto' }}>
              <IconLogout size={20} />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Logout" sx={{ color: 'error.main', ml: -1 }} />}
          </ListItemButton>
        </Tooltip>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { md: isOpen ? drawerWidth : miniDrawerWidth },
        flexShrink: { md: 0 }
      }}
    >
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={toggleSidebar}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth
          }
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: isOpen ? drawerWidth : miniDrawerWidth,
            transition: 'width 0.3s ease',
            overflowX: 'hidden'
          }
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
