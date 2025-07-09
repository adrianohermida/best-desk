'use client';

import { Box, Typography } from '@mui/material';

export default function AdminLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Admin Dashboard
      </Typography>
      {children}
    </Box>
  );
}
