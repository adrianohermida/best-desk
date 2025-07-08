'use client';

import { useEffect } from 'react';
import { Box, Typography, Button, Alert, Card, CardContent } from '@mui/material';
import { IconAlertTriangle, IconRefresh, IconHome } from '@tabler/icons-react';

export default function AdminError({ error, reset }) {
  useEffect(() => {
    // Log error to monitoring service
    console.error('Admin error:', error);
  }, [error]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        p: 3,
        backgroundColor: 'background.default'
      }}
    >
      <Card sx={{ maxWidth: 500, width: '100%', textAlign: 'center' }}>
        <CardContent sx={{ p: 4 }}>
          <IconAlertTriangle size={64} style={{ color: '#f44336', marginBottom: 16 }} />

          <Typography variant="h4" gutterBottom color="error">
            Erro no Admin
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Ocorreu um erro inesperado no painel administrativo.
          </Typography>

          <Alert severity="error" sx={{ mb: 3, textAlign: 'left' }}>
            <Typography variant="body2">
              <strong>Erro:</strong> {error?.message || 'Erro desconhecido'}
            </Typography>
          </Alert>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button variant="contained" startIcon={<IconRefresh />} onClick={reset}>
              Tentar Novamente
            </Button>

            <Button variant="outlined" startIcon={<IconHome />} onClick={() => (window.location.href = '/')}>
              Voltar ao Início
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
