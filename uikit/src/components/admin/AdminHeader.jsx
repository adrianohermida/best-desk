'use client';

import { AppBar, Toolbar, Typography, Box, IconButton, Badge, Avatar, Menu, MenuItem, Divider, InputBase } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { IconBell, IconSearch, IconUser, IconSettings, IconLogout, IconMenu2 } from '@tabler/icons-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useAppState } from '@/hooks/useAppState';

export default function AdminHeader() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchor, setNotificationAnchor] = useState(null);
  const { user, logout } = useAuth();
  const { toggleSidebar } = useAppState();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/admin/auth/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
    handleMenuClose();
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuOpen = (event) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setNotificationAnchor(null);
  };

  const mockNotifications = [
    {
      id: 1,
      title: 'New case assigned',
      message: 'Case #2847 has been assigned to you',
      time: '5 minutes ago',
      unread: true
    },
    {
      id: 2,
      title: 'Hearing scheduled',
      message: 'Court hearing scheduled for tomorrow',
      time: '1 hour ago',
      unread: true
    },
    {
      id: 3,
      title: 'Document uploaded',
      message: 'Client uploaded new documents',
      time: '2 hours ago',
      unread: false
    }
  ];

  const unreadCount = mockNotifications.filter((n) => n.unread).length;

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: 'background.paper',
          borderBottom: 1,
          borderColor: 'divider',
          color: 'text.primary'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Left side */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" onClick={toggleSidebar} sx={{ mr: 2, display: { md: 'none' } }}>
              <IconMenu2 />
            </IconButton>

            {/* Search */}
            <Box
              sx={{
                position: 'relative',
                borderRadius: 1,
                backgroundColor: alpha('#000', 0.05),
                '&:hover': {
                  backgroundColor: alpha('#000', 0.08)
                },
                marginLeft: 0,
                width: '100%',
                maxWidth: 400
              }}
            >
              <Box
                sx={{
                  padding: (theme) => theme.spacing(0, 2),
                  height: '100%',
                  position: 'absolute',
                  pointerEvents: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <IconSearch size={20} />
              </Box>
              <InputBase
                placeholder="Search cases, clients..."
                sx={{
                  color: 'inherit',
                  '& .MuiInputBase-input': {
                    padding: (theme) => theme.spacing(1, 1, 1, 0),
                    paddingLeft: (theme) => `calc(1em + ${theme.spacing(4)})`,
                    width: '100%'
                  }
                }}
              />
            </Box>
          </Box>

          {/* Right side */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Notifications */}
            <IconButton color="inherit" onClick={handleNotificationMenuOpen}>
              <Badge badgeContent={unreadCount} color="error">
                <IconBell size={20} />
              </Badge>
            </IconButton>

            {/* Profile */}
            <IconButton onClick={handleProfileMenuOpen} sx={{ p: 0.5 }}>
              <Avatar src={user?.avatar} sx={{ width: 32, height: 32 }}>
                {user?.name?.charAt(0)}
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            minWidth: 200,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="subtitle2">{user?.name || 'Admin User'}</Typography>
          <Typography variant="caption" color="text.secondary">
            {user?.email || 'admin@lawdesk.com'}
          </Typography>
        </Box>
        <Divider />
        <MenuItem>
          <IconUser size={16} style={{ marginRight: 8 }} />
          Profile
        </MenuItem>
        <MenuItem>
          <IconSettings size={16} style={{ marginRight: 8 }} />
          Account Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
          <IconLogout size={16} style={{ marginRight: 8 }} />
          Logout
        </MenuItem>
      </Menu>

      {/* Notification Menu */}
      <Menu
        anchorEl={notificationAnchor}
        open={Boolean(notificationAnchor)}
        onClose={handleMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            minWidth: 320,
            maxHeight: 400,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 30,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ px: 2, py: 1, borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="subtitle2">Notifications ({unreadCount} unread)</Typography>
        </Box>

        {mockNotifications.map((notification) => (
          <MenuItem
            key={notification.id}
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              whiteSpace: 'normal',
              backgroundColor: notification.unread ? 'action.hover' : 'transparent'
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Typography variant="subtitle2">{notification.title}</Typography>
              {notification.unread && (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: 'primary.main'
                  }}
                />
              )}
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {notification.message}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
              {notification.time}
            </Typography>
          </MenuItem>
        ))}

        <Divider />
        <MenuItem sx={{ justifyContent: 'center' }}>
          <Typography variant="body2" color="primary">
            View all notifications
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
