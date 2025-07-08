import { NextResponse } from 'next/server';

// Admin role hierarchy
const ADMIN_ROLES = ['admin', 'super_admin'];
const SUPER_ADMIN_ROLES = ['super_admin'];

// Protected admin routes configuration
const ADMIN_ROUTES = {
  '/admin': {
    requiredRoles: ADMIN_ROLES,
    description: 'Admin dashboard access'
  },
  '/admin/dashboard': {
    requiredRoles: ADMIN_ROLES,
    description: 'Dashboard overview'
  },
  '/admin/cases': {
    requiredRoles: ADMIN_ROLES,
    description: 'Cases management'
  },
  '/admin/clients': {
    requiredRoles: ADMIN_ROLES,
    description: 'Clients management'
  },
  '/admin/calendar': {
    requiredRoles: ADMIN_ROLES,
    description: 'Calendar management'
  },
  '/admin/messages': {
    requiredRoles: ADMIN_ROLES,
    description: 'Messages and communications'
  },
  '/admin/reports': {
    requiredRoles: ADMIN_ROLES,
    description: 'Reports and analytics'
  },
  '/admin/system': {
    requiredRoles: SUPER_ADMIN_ROLES,
    description: 'System administration'
  },
  '/admin/settings': {
    requiredRoles: ADMIN_ROLES,
    description: 'System settings'
  }
};

/**
 * Check if user has required role for admin access
 */
function hasRequiredRole(userRole, requiredRoles) {
  if (!userRole || !requiredRoles) return false;
  return requiredRoles.includes(userRole);
}

/**
 * Get user session from request (mock implementation)
 * In real implementation, decode JWT token or check session
 */
function getUserSession(request) {
  // Mock session - replace with real session/JWT verification
  const authHeader = request.headers.get('authorization');
  const sessionCookie = request.cookies.get('admin-session');

  if (!authHeader && !sessionCookie) {
    return null;
  }

  // Mock user data - replace with real session decoding
  return {
    id: 'user-1',
    email: 'admin@lawdesk.com',
    name: 'Admin User',
    role: 'admin', // This should come from real session
    permissions: ['read', 'write', 'admin']
  };
}

/**
 * Admin middleware for protecting admin routes
 */
export function adminMiddleware(request) {
  const { pathname } = request.nextUrl;

  // Check if this is an admin route
  const isAdminRoute = pathname.startsWith('/admin');
  if (!isAdminRoute) {
    return NextResponse.next();
  }

  // Get user session
  const user = getUserSession(request);

  // If no session, redirect to login
  if (!user) {
    const loginUrl = new URL('/auth/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    loginUrl.searchParams.set('message', 'Admin access required');

    return NextResponse.redirect(loginUrl);
  }

  // Find matching route configuration
  const routeConfig = Object.entries(ADMIN_ROUTES).find(([route]) => pathname === route || pathname.startsWith(route + '/'));

  if (routeConfig) {
    const [route, config] = routeConfig;

    // Check if user has required role
    if (!hasRequiredRole(user.role, config.requiredRoles)) {
      const forbiddenUrl = new URL('/403', request.url);
      forbiddenUrl.searchParams.set('message', `Access denied: ${config.description}`);
      forbiddenUrl.searchParams.set('required_roles', config.requiredRoles.join(', '));
      forbiddenUrl.searchParams.set('user_role', user.role);

      return NextResponse.redirect(forbiddenUrl);
    }
  }

  // Add user info to request headers for use in components
  const response = NextResponse.next();
  response.headers.set('x-user-id', user.id);
  response.headers.set('x-user-role', user.role);
  response.headers.set('x-user-email', user.email);

  return response;
}

/**
 * Check if route requires admin middleware
 */
export function shouldApplyAdminMiddleware(pathname) {
  return pathname.startsWith('/admin');
}

export default adminMiddleware;
