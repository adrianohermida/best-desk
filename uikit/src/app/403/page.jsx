'use client';

import { useSearchParams } from 'next/navigation';
import { Box, Typography, Button, Card, CardContent, Alert, Divider } from '@mui/material';
import { IconShield, IconHome, IconArrowLeft, IconMail } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function ForbiddenPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, logout } = useAuth();

  const message = searchParams.get('message') || 'Access denied to this resource';
  const requiredRoles = searchParams.get('required_roles') || 'Admin';
  const userRole = searchParams.get('user_role') || user?.role || 'Unknown';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
        backgroundColor: 'background.default'
      }}
    >
      <Card sx={{ maxWidth: 500, width: '100%', textAlign: 'center' }}>
        <CardContent sx={{ p: 4 }}>
          {/* Icon */}
          <Box sx={{ mb: 3 }}>
            <IconShield size={80} style={{ color: '#f44336' }} />
          </Box>

          {/* Title */}
          <Typography variant="h3" component="h1" gutterBottom color="error">
            403
          </Typography>

          <Typography variant="h5" gutterBottom>
            Acesso Negado
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Você não tem permissão para acessar esta área do sistema.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Error Details */}
          <Alert severity="warning" sx={{ mb: 3, textAlign: 'left' }}>
            <Typography variant="subtitle2" gutterBottom>
              Detalhes do Acesso:
            </Typography>
            <Typography variant="body2">
              <strong>Usuário:</strong> {user?.name || 'N/A'} ({user?.email || 'N/A'})<br />
              <strong>Seu nível:</strong> {userRole}
              <br />
              <strong>Nível necessário:</strong> {requiredRoles}
              <br />
              <strong>Recurso:</strong> {message}
            </Typography>
          </Alert>

          {/* Help Text */}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Se você acredita que deveria ter acesso a esta área, entre em contato com o administrador do sistema.
          </Typography>

          {/* Actions */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="contained" startIcon={<IconArrowLeft />} onClick={() => router.back()}>
              Voltar
            </Button>

            <Button variant="outlined" startIcon={<IconHome />} onClick={() => router.push('/')}>
              Página Inicial
            </Button>

            <Button
              variant="outlined"
              startIcon={<IconMail />}
              onClick={() => (window.location.href = 'mailto:admin@lawdesk.com?subject=Solicitação de Acesso Admin')}
              color="info"
            >
              Contatar Admin
            </Button>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Logout Option */}
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Fazendo login como outro usuário?
            </Typography>
            <Button variant="text" size="small" onClick={logout} color="error">
              Fazer Logout
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
