'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RoleGuard = ({ children, requiredRoles = [], redirectTo = '/sections/auth/login' }) => {
  const router = useRouter();

  // Mock user data - replace with real authentication system
  const user = {
    id: 1,
    email: 'admin@example.com',
    roles: ['ADMIN', 'USER'], // User roles
    isAuthenticated: true
  };

  useEffect(() => {
    // Check if user is authenticated
    if (!user?.isAuthenticated) {
      router.push(redirectTo);
      return;
    }

    // Check if user has required roles
    if (requiredRoles.length > 0) {
      const hasRequiredRole = requiredRoles.some((role) => user.roles?.includes(role));

      if (!hasRequiredRole) {
        router.push('/403'); // Unauthorized page
        return;
      }
    }
  }, [user, requiredRoles, redirectTo, router]);

  // Don't render children if not authenticated or no required roles
  if (!user?.isAuthenticated) {
    return null;
  }

  if (requiredRoles.length > 0) {
    const hasRequiredRole = requiredRoles.some((role) => user.roles?.includes(role));

    if (!hasRequiredRole) {
      return null;
    }
  }

  return children;
};

export default RoleGuard;
