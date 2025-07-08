'use client';

import { useContext } from 'react';
import AuthContext from '@/contexts/AuthContext';

// Re-export the useAuth hook from context for convenience
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

// Additional auth utilities
export const useAuthHelpers = () => {
  const auth = useAuth();

  return {
    // Quick status checks
    isLoggedIn: auth.isAuthenticated && !!auth.user,
    isGuest: !auth.isAuthenticated,
    isLoading: auth.isLoading,

    // User info
    userName: auth.user?.name || 'Usuário',
    userEmail: auth.user?.email || '',
    userAvatar: auth.user?.avatar || '/assets/images/user/default-avatar.png',
    userRole: auth.user?.role || 'guest',

    // Permission checks
    canRead: auth.hasPermission('read'),
    canWrite: auth.hasPermission('write'),
    canDelete: auth.hasPermission('delete'),
    canAdmin: auth.isRole('admin'),

    // Auth actions with error handling
    loginSafe: async (credentials) => {
      try {
        return await auth.login(credentials);
      } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: 'Erro no login. Tente novamente.' };
      }
    },

    logoutSafe: async () => {
      try {
        return await auth.logout();
      } catch (error) {
        console.error('Logout error:', error);
        return { success: false, error: 'Erro no logout.' };
      }
    }
  };
};

export default useAuth;
