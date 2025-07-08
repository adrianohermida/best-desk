// Store entry point for centralized state management
// This file serves as the main entry point for all state management needs

// Context providers
export { AuthProvider, useAuth } from '@/contexts/AuthContext';
export { AppProvider, useApp } from '@/contexts/AppContext';
export { ConfigProvider } from '@/contexts/ConfigContext';

// Specialized hooks
export {
  useAppState,
  useAppLoading,
  useAppError,
  useAppNotifications,
  useAppTheme,
  useAppLayout,
  useAppPreferences,
  useAppNavigation,
  useAppConfig
} from '@/hooks/useAppState';

export { useAuth, useAuthHelpers } from '@/hooks/useAuth';

// Guards
export { default as AuthGuard } from '@/guards/AuthGuard';
export { default as PermissionGuard } from '@/guards/PermissionGuard';

// Utilities
export { default as authUtils } from '@/utils/auth';

// Store configuration
export const storeConfig = {
  // Persistence settings
  persistence: {
    enabled: true,
    keys: ['user-preferences', 'theme-mode', 'auth-token', 'user-data'],
    storage: typeof window !== 'undefined' ? localStorage : null
  },

  // Debug settings
  debug: {
    enabled: process.env.NODE_ENV === 'development',
    logActions: true,
    logStateChanges: false
  },

  // Feature flags
  features: {
    authentication: true,
    globalState: true,
    theming: true,
    notifications: true,
    persistence: true
  }
};

// Store provider that combines all providers
// Note: Import React if using JSX directly
import React from 'react';

export function StoreProvider({ children }) {
  return React.createElement(
    AppProvider,
    null,
    React.createElement(AuthProvider, null, React.createElement(ConfigProvider, null, children))
  );
}

// Helper function to clear all stored data
export const clearStoredData = () => {
  if (typeof window !== 'undefined') {
    storeConfig.persistence.keys.forEach((key) => {
      localStorage.removeItem(key);
    });
  }
};

// Helper function to export current state (for debugging)
export const exportState = () => {
  if (typeof window === 'undefined') return null;

  const state = {};
  storeConfig.persistence.keys.forEach((key) => {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        state[key] = JSON.parse(value);
      } catch {
        state[key] = value;
      }
    }
  });

  return state;
};

export default {
  StoreProvider,
  storeConfig,
  clearStoredData,
  exportState
};
