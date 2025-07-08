'use client';

import { Box } from '@mui/material';
import AuthGuard from '@/guards/AuthGuard';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import { useAppState } from '@/hooks/useAppState';

export default function AdminLayout({ children }) {
  const { sidebar } = useAppState();

  return (
    <AuthGuard requireAuth={true} roles={['admin', 'super_admin']}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            marginLeft: sidebar?.isOpen ? '260px' : '60px',
            transition: 'margin-left 0.3s ease',
            '@media (max-width: 768px)': {
              marginLeft: 0
            }
          }}
        >
          {/* Header */}
          <AdminHeader />

          {/* Page Content */}
          <Box
            sx={{
              flex: 1,
              p: 3,
              backgroundColor: 'background.default',
              minHeight: 'calc(100vh - 64px)'
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </AuthGuard>
  );
}
