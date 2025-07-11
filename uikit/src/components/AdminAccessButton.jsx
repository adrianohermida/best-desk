'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// @mui
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

// @project
import SvgIcon from '@/components/SvgIcon';

/***************************  ADMIN ACCESS BUTTON  ***************************/

export default function AdminAccessButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const open = Boolean(anchorEl);

  useEffect(() => {
    // Check if user has admin access (you can implement your auth logic here)
    // For now, we'll show it always in development
    setIsAdmin(process.env.NODE_ENV === 'development' || true);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!isAdmin) return null;

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 1 }}
        aria-controls={open ? 'admin-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        title="Admin Access"
      >
        <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
          <SvgIcon name="tabler-settings" size={18} />
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="admin-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem component={Link} href="/admin/dashboard">
          <SvgIcon name="tabler-dashboard" size={16} sx={{ mr: 1 }} />
          Dashboard
        </MenuItem>
        <MenuItem component={Link} href="/admin/sample-page">
          <SvgIcon name="tabler-file" size={16} sx={{ mr: 1 }} />
          Sample Page
        </MenuItem>
        <MenuItem component={Link} href="/admin/auth/login">
          <SvgIcon name="tabler-login" size={16} sx={{ mr: 1 }} />
          Admin Login
        </MenuItem>
      </Menu>
    </>
  );
}
