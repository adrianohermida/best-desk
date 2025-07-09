'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import { IconLock, IconHome, IconArrowLeft } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

/***************************  ERROR 403 VIEW  ***************************/

export default function Error403View() {
  const router = useRouter();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          gap: 3
        }}
      >
        <IconLock size={80} color="error" />

        <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: 'error.main' }}>
          403
        </Typography>

        <Typography variant="h4" gutterBottom>
          Access Forbidden
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
          You don't have permission to access this resource. Please contact your administrator if you believe this is an error.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button variant="contained" startIcon={<IconArrowLeft />} onClick={() => router.back()} color="primary">
            Go Back
          </Button>

          <Button variant="outlined" startIcon={<IconHome />} onClick={() => router.push('/')} color="primary">
            Go Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
