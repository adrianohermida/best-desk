'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useAuth } from '@/hooks/useAuth';

/***************************  ADMIN GUARD  ***************************/

const AdminGuard = ({
  children,
  redirectTo = '/admin/auth/login',
  fallback = null,
  requiredRoles = ['admin', 'super_admin'],
  requiredPermissions = ['admin_access']
}) => {
  const { isAuthenticated, isLoading, user, hasPermission, isRole } = useAuth();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAccess = async () => {
      // Wait for auth context to finish loading
      if (isLoading) return;

      setIsChecking(true);

      try {
        // Check if user is authenticated
        if (!isAuthenticated) {
          router.push(redirectTo);
          return;
        }

        // Check role requirements
        if (requiredRoles.length > 0) {
          const hasValidRole = requiredRoles.some((role) => isRole(role));
          if (!hasValidRole) {
            router.push('/403'); // Access forbidden
            return;
          }
        }

        // Check permission requirements
        if (requiredPermissions.length > 0) {
          const hasValidPermission = requiredPermissions.some((permission) => hasPermission(permission));
          if (!hasValidPermission) {
            router.push('/403'); // Access forbidden
            return;
          }
        }

        setIsChecking(false);
      } catch (error) {
        console.error('Admin guard error:', error);
        router.push(redirectTo);
      }
    };

    checkAccess();
  }, [isAuthenticated, isLoading, user, router, redirectTo, requiredRoles, requiredPermissions, hasPermission, isRole]);

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
          Verificando permissões de administrador...
        </Typography>
      </Box>
    );
  }

  // Show content if admin checks pass
  if (isAuthenticated && user) {
    return children;
  }

  // Default fallback - should not reach here if logic is correct
  return null;
};

AdminGuard.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
  fallback: PropTypes.node,
  requiredRoles: PropTypes.arrayOf(PropTypes.string),
  requiredPermissions: PropTypes.arrayOf(PropTypes.string)
};

export default AdminGuard;
