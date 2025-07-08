'use client';

import { Box, Button, Card, CardContent, Typography, Alert } from '@mui/material';
import { IconRefresh, IconBug } from '@tabler/icons-react';

const ErrorFallback = ({ error, errorInfo, onReset, fallback }) => {
  // If custom fallback provided, use it
  if (fallback) {
    return fallback({ error, onReset });
  }

  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '300px',
        p: 3
      }}
    >
      <Card sx={{ maxWidth: 600, width: '100%' }}>
        <CardContent sx={{ textAlign: 'center', p: 4 }}>
          <IconBug size={48} color="error" style={{ marginBottom: 16 }} />

          <Typography variant="h5" gutterBottom color="error">
            Oops! Algo deu errado
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver.
          </Typography>

          {isDevelopment && error && (
            <Alert severity="error" sx={{ mb: 3, textAlign: 'left' }}>
              <Typography variant="body2" component="strong">
                {error.toString()}
              </Typography>
              {errorInfo?.componentStack && (
                <details style={{ marginTop: 8 }}>
                  <summary>Stack Trace</summary>
                  <pre
                    style={{
                      fontSize: '12px',
                      overflow: 'auto',
                      marginTop: 8,
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    {errorInfo.componentStack}
                  </pre>
                </details>
              )}
            </Alert>
          )}

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button variant="contained" startIcon={<IconRefresh />} onClick={onReset} color="primary">
              Tentar Novamente
            </Button>

            <Button variant="outlined" onClick={() => (window.location.href = '/')} color="primary">
              Voltar ao Início
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ErrorFallback;
