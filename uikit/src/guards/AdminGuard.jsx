'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Box, CircularProgress, Typography, Alert, Button } from '@mui/material';
import { IconShield, IconHome } from '@tabler/icons-react';
import { useAuth } from '@/hooks/useAuth';

const AdminGuard = ({ children, requiredRoles = ['admin', 'super_admin'], requiredPermissions = [], fallback = null }) => {
  const { isAuthenticated, isLoading, user, hasPermission, isRole } = useAuth();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [accessDenied, setAccessDenied] = useState(false);

  useEffect(() => {
    const checkAdminAccess = async () => {
      // Wait for auth context to finish loading
      if (isLoading) return;

      setIsChecking(true);

      try {
        // If user is not authenticated, redirect to login
        if (!isAuthenticated) {
          router.push('/auth/login?redirect=/admin');
          return;
        }

        // Check if user has required roles
        const hasValidRole = requiredRoles.some((role) => isRole(role));
        if (!hasValidRole) {
          setAccessDenied(true);
          setIsChecking(false);
          return;
        }

        // Check if user has required permissions
        if (requiredPermissions.length > 0) {
          const hasValidPermission = requiredPermissions.some((permission) => hasPermission(permission));
          if (!hasValidPermission) {
            setAccessDenied(true);
            setIsChecking(false);
            return;
          }
        }

        // Access granted
        setAccessDenied(false);
        setIsChecking(false);
      } catch (error) {
        console.error('Admin guard error:', error);
        setAccessDenied(true);
        setIsChecking(false);
      }
    };

    checkAdminAccess();
  }, [isAuthenticated, isLoading, user, requiredRoles, requiredPermissions, router, hasPermission, isRole]);

  // Show loading state
  if (isLoading || isChecking) {
    if (fallback) {
      return fallback;
    }

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          gap: 2,
          p: 3
        }}
      >
        <IconShield size={48} color="primary" />
        <CircularProgress size={40} />
        <Typography variant="h6" color="text.secondary">
          Verificando permissões de admin...
        </Typography>
      </Box>
    );
  }

  // Show access denied
  if (accessDenied) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          gap: 3,
          p: 3,
          textAlign: 'center'
        }}
      >
        <IconShield size={64} color="error" />

        <Box>
          <Typography variant="h4" gutterBottom color="error">
            Acesso Negado
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Você não tem permissões de administrador para acessar esta área.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Entre em contato com o administrador do sistema se acredita que isso é um erro.
          </Typography>
        </Box>

        <Alert severity="warning" sx={{ maxWidth: 400 }}>
          <Typography variant="body2">
            <strong>Usuário atual:</strong> {user?.name || 'N/A'}
            <br />
            <strong>Role:</strong> {user?.role || 'N/A'}
            <br />
            <strong>Roles necessárias:</strong> {requiredRoles.join(', ')}
          </Typography>
        </Alert>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" startIcon={<IconHome />} onClick={() => router.push('/')}>
            Voltar ao Início
          </Button>

          <Button variant="outlined" onClick={() => router.push('/auth/logout')}>
            Fazer Logout
          </Button>
        </Box>
      </Box>
    );
  }

  // Grant access
  return children;
};

AdminGuard.propTypes = {
  children: PropTypes.node.isRequired,
  requiredRoles: PropTypes.arrayOf(PropTypes.string),
  requiredPermissions: PropTypes.arrayOf(PropTypes.string),
  fallback: PropTypes.node
};

export default AdminGuard;
