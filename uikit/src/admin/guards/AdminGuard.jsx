'use client';
import PropTypes from 'prop-types';
import { redirect } from 'next/navigation';

// Mock auth hook - replace with your actual auth implementation
function useAuth() {
  // This should be replaced with your actual auth implementation
  // For now, returning a mock admin user
  return {
    user: {
      id: '1',
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'ADMIN'
    },
    isAuthenticated: true,
    isLoading: false
  };
}

/***************************  ADMIN GUARD  ***************************/

export default function AdminGuard({ children, fallback = null }) {
  const { user, isAuthenticated, isLoading } = useAuth();

  // Show loading while checking authentication
  if (isLoading) {
    return fallback || <div>Loading...</div>;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    redirect('/auth/login');
    return null;
  }

  // Check if user has admin role
  if (user?.role !== 'ADMIN') {
    redirect('/auth/unauthorized');
    return null;
  }

  return children;
}

AdminGuard.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node
};
