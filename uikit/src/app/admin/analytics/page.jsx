'use client';
import { useEffect } from 'react';

// @mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export default function AnalyticsRedirect() {
  useEffect(() => {
    // Redirecionar para o dashboard (analytics usa a mesma página)
    window.location.href = 'http://localhost:3001/dashboard';
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 3,
        textAlign: 'center'
      }}
    >
      <Stack spacing={3} alignItems="center">
        <CircularProgress size={60} />

        <Typography variant="h4" component="h1">
          Carregando Analytics...
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Redirecionando para o painel de analytics do admin original
        </Typography>

        <Button variant="contained" onClick={() => (window.location.href = 'http://localhost:3001/dashboard')}>
          Ir para Analytics
        </Button>
      </Stack>
    </Box>
  );
}
