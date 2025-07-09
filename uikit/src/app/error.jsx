'use client';

import { useEffect } from 'react';
import { Button, Box, Typography, Container } from '@mui/material';
import { IconRefresh, IconHome } from '@tabler/icons-react';

/***************************  ERROR - 500  ***************************/

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error for debugging
    console.error('Application error:', error);
  }, [error]);

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
        <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: 'error.main' }}>
          500
        </Typography>

        <Typography variant="h4" gutterBottom>
          Something went wrong!
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
          We apologize for the inconvenience. An unexpected error occurred while processing your request.
        </Typography>

        {process.env.NODE_ENV === 'development' && error && (
          <Box
            sx={{
              mt: 2,
              p: 2,
              bgcolor: 'grey.100',
              borderRadius: 1,
              maxWidth: 800,
              overflow: 'auto'
            }}
          >
            <Typography variant="caption" component="pre" sx={{ fontSize: '0.75rem' }}>
              {error.message}
            </Typography>
          </Box>
        )}

        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button variant="contained" startIcon={<IconRefresh />} onClick={reset} color="primary">
            Try Again
          </Button>

          <Button variant="outlined" startIcon={<IconHome />} onClick={() => (window.location.href = '/')} color="primary">
            Go Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
