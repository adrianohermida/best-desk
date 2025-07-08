'use client';

import PropTypes from 'prop-types';
import { Alert, Box } from '@mui/material';
import { useAuth } from '@/hooks/useAuth';

const PermissionGuard = ({
  children,
  permission,
  permissions = [],
  role,
  roles = [],
  requireAll = false,
  fallback = null,
  showAlert = false
}) => {
  const { hasPermission, isRole, isAuthenticated } = useAuth();

  // If not authenticated, don't show content
  if (!isAuthenticated) {
    return showAlert ? <Alert severity="warning">Você precisa estar logado para acessar este conteúdo.</Alert> : null;
  }

  // Build permission array
  const allPermissions = [...(permission ? [permission] : []), ...permissions];

  // Build role array
  const allRoles = [...(role ? [role] : []), ...roles];

  // Check permissions
  let hasPermissionAccess = true;
  if (allPermissions.length > 0) {
    hasPermissionAccess = requireAll
      ? allPermissions.every((perm) => hasPermission(perm))
      : allPermissions.some((perm) => hasPermission(perm));
  }

  // Check roles
  let hasRoleAccess = true;
  if (allRoles.length > 0) {
    hasRoleAccess = requireAll ? allRoles.every((r) => isRole(r)) : allRoles.some((r) => isRole(r));
  }

  // Grant access if both permission and role checks pass
  const hasAccess = hasPermissionAccess && hasRoleAccess;

  if (!hasAccess) {
    if (fallback) {
      return fallback;
    }

    if (showAlert) {
      return <Alert severity="error">Você não tem permissão para acessar este conteúdo.</Alert>;
    }

    return null;
  }

  return children;
};

PermissionGuard.propTypes = {
  children: PropTypes.node.isRequired,
  permission: PropTypes.string,
  permissions: PropTypes.arrayOf(PropTypes.string),
  role: PropTypes.string,
  roles: PropTypes.arrayOf(PropTypes.string),
  requireAll: PropTypes.bool,
  fallback: PropTypes.node,
  showAlert: PropTypes.bool
};

export default PermissionGuard;
