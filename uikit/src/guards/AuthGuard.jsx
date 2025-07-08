'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useAuth } from '@/hooks/useAuth';

const AuthGuard = ({ children, requireAuth = true, redirectTo = '/auth/login', fallback = null, roles = [], permissions = [] }) => {
  const { isAuthenticated, isLoading, user, hasPermission, isRole } = useAuth();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // Wait for auth context to finish loading
      if (isLoading) return;

      setIsChecking(true);

      try {
        // If authentication is required but user is not authenticated
        if (requireAuth && !isAuthenticated) {
          router.push(redirectTo);
          return;
        }

        // If authentication is not required but user is authenticated
        // (e.g., login page when already logged in)
        if (!requireAuth && isAuthenticated) {
          router.push('/dashboard');
          return;
        }

        // Check role requirements
        if (roles.length > 0 && isAuthenticated) {
          const hasValidRole = roles.some((role) => isRole(role));
          if (!hasValidRole) {
            router.push('/403'); // Forbidden
            return;
          }
        }

        // Check permission requirements
        if (permissions.length > 0 && isAuthenticated) {
          const hasValidPermission = permissions.some((permission) => hasPermission(permission));
          if (!hasValidPermission) {
            router.push('/403'); // Forbidden
            return;
          }
        }

        setIsChecking(false);
      } catch (error) {
        console.error('Auth guard error:', error);
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [isAuthenticated, isLoading, requireAuth, router, redirectTo, roles, permissions, user, hasPermission, isRole]);

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
          minHeight: '60vh',
          gap: 2
        }}
      >
        <CircularProgress size={40} />
        <Typography variant="body2" color="text.secondary">
          Verificando autenticação...
        </Typography>
      </Box>
    );
  }

  // Show content if auth checks pass
  if (requireAuth && isAuthenticated) {
    return children;
  }

  if (!requireAuth && !isAuthenticated) {
    return children;
  }

  // Default fallback - should not reach here if logic is correct
  return null;
};

AuthGuard.propTypes = {
  children: PropTypes.node.isRequired,
  requireAuth: PropTypes.bool,
  redirectTo: PropTypes.string,
  fallback: PropTypes.node,
  roles: PropTypes.arrayOf(PropTypes.string),
  permissions: PropTypes.arrayOf(PropTypes.string)
};

export default AuthGuard;
