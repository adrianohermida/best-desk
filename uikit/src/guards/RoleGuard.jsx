'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useAuth } from '@/hooks/useAuth';

/***************************  ROLE GUARD  ***************************/

const RoleGuard = ({
  children,
  roles = [],
  requireAuth = true,
  redirectTo = '/auth/login',
  forbiddenRedirect = '/403',
  fallback = null,
  mode = 'any' // 'any' or 'all'
}) => {
  const { isAuthenticated, isLoading, user, isRole } = useAuth();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkRoleAccess = async () => {
      // Wait for auth context to finish loading
      if (isLoading) return;

      setIsChecking(true);

      try {
        // Check authentication if required
        if (requireAuth && !isAuthenticated) {
          router.push(redirectTo);
          return;
        }

        // If no roles specified, just check authentication
        if (roles.length === 0) {
          setIsChecking(false);
          return;
        }

        // Check role requirements
        if (isAuthenticated && user) {
          let hasAccess = false;

          if (mode === 'all') {
            // User must have ALL specified roles
            hasAccess = roles.every((role) => isRole(role));
          } else {
            // User must have ANY of the specified roles (default)
            hasAccess = roles.some((role) => isRole(role));
          }

          if (!hasAccess) {
            router.push(forbiddenRedirect);
            return;
          }
        }

        setIsChecking(false);
      } catch (error) {
        console.error('Role guard error:', error);
        router.push(requireAuth ? redirectTo : forbiddenRedirect);
      }
    };

    checkRoleAccess();
  }, [isAuthenticated, isLoading, user, roles, requireAuth, redirectTo, forbiddenRedirect, mode, router, isRole]);

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
          Verificando permissões de acesso...
        </Typography>
      </Box>
    );
  }

  // Show content if role checks pass
  if (!requireAuth || isAuthenticated) {
    return children;
  }

  // Default fallback
  return null;
};

RoleGuard.propTypes = {
  children: PropTypes.node.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string),
  requireAuth: PropTypes.bool,
  redirectTo: PropTypes.string,
  forbiddenRedirect: PropTypes.string,
  fallback: PropTypes.node,
  mode: PropTypes.oneOf(['any', 'all'])
};

export default RoleGuard;
