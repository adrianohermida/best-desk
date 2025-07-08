import { Box, CircularProgress, Typography } from '@mui/material';
import { IconShield } from '@tabler/icons-react';

export default function AdminLoading() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: 2,
        backgroundColor: 'background.default'
      }}
    >
      <IconShield size={48} color="primary" />
      <CircularProgress size={40} />
      <Typography variant="h6" color="text.secondary">
        Carregando painel administrativo...
      </Typography>
    </Box>
  );
}
