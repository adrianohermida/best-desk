'use client';
import { useEffect } from 'react';

// @mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export default function AdminRedirect() {
  useEffect(() => {
    // Tentar redirecionar após 2 segundos
    const timer = setTimeout(() => {
      window.location.href = 'http://localhost:3001';
    }, 2000);

    return () => clearTimeout(timer);
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
          Redirecionando para o Dashboard Admin
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500 }}>
          Você está sendo redirecionado para o dashboard admin original do SaasAble. O admin roda em um servidor separado para preservar
          100% das funcionalidades originais.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => (window.location.href = 'http://localhost:3001')}>
            Ir para Dashboard Admin
          </Button>

          <Button variant="outlined" onClick={() => (window.location.href = '/')}>
            Voltar ao Site
          </Button>
        </Stack>

        <Typography variant="caption" color="text.secondary">
          Se o redirecionamento não funcionar automaticamente, clique no botão acima.
        </Typography>
      </Stack>
    </Box>
  );
}
