'use client';

import { useContext } from 'react';
import AppContext from '@/contexts/AppContext';

// Re-export the useApp hook from context
export function useAppState() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppState must be used within an AppProvider');
  }

  return context;
}

// Specialized hooks for specific app state slices
export const useAppLoading = () => {
  const { isLoading, loadingText, setLoading } = useAppState();

  return {
    isLoading,
    loadingText,
    setLoading,
    startLoading: (text) => setLoading(true, text),
    stopLoading: () => setLoading(false)
  };
};

export const useAppError = () => {
  const { error, errorDetails, setError, clearError } = useAppState();

  return {
    error,
    errorDetails,
    hasError: !!error,
    setError,
    clearError,
    showError: (message, details) => setError(message, details)
  };
};

export const useAppNotifications = () => {
  const { notification, showNotification, clearNotification } = useAppState();

  return {
    notification,
    hasNotification: !!notification,
    showNotification,
    clearNotification,

    // Convenience methods
    showSuccess: (message, autoHide = true, duration = 5000) => showNotification(message, 'success', autoHide, duration),

    showError: (message, autoHide = true, duration = 8000) => showNotification(message, 'error', autoHide, duration),

    showWarning: (message, autoHide = true, duration = 6000) => showNotification(message, 'warning', autoHide, duration),

    showInfo: (message, autoHide = true, duration = 5000) => showNotification(message, 'info', autoHide, duration)
  };
};

export const useAppTheme = () => {
  const { themeMode, setThemeMode, isDarkMode, isLightMode } = useAppState();

  return {
    themeMode,
    isDarkMode,
    isLightMode,
    setThemeMode,

    // Convenience methods
    toggleTheme: () => setThemeMode(isDarkMode ? 'light' : 'dark'),
    setDarkMode: () => setThemeMode('dark'),
    setLightMode: () => setThemeMode('light'),
    setAutoMode: () => setThemeMode('auto')
  };
};

export const useAppLayout = () => {
  const { sidebar, layoutConfig, toggleSidebar, setSidebarOpen, updateLayoutConfig } = useAppState();

  return {
    sidebar,
    layoutConfig,
    toggleSidebar,
    setSidebarOpen,
    updateLayoutConfig,

    // Sidebar convenience methods
    openSidebar: () => setSidebarOpen(true),
    closeSidebar: () => setSidebarOpen(false),
    isSidebarOpen: sidebar.isOpen
  };
};

export const useAppPreferences = () => {
  const { userPreferences, updateUserPreferences } = useAppState();

  return {
    preferences: userPreferences,
    updatePreferences: updateUserPreferences,

    // Individual preference getters/setters
    language: userPreferences.language,
    setLanguage: (language) => updateUserPreferences({ language }),

    timezone: userPreferences.timezone,
    setTimezone: (timezone) => updateUserPreferences({ timezone }),

    dateFormat: userPreferences.dateFormat,
    setDateFormat: (dateFormat) => updateUserPreferences({ dateFormat }),

    itemsPerPage: userPreferences.itemsPerPage,
    setItemsPerPage: (itemsPerPage) => updateUserPreferences({ itemsPerPage }),

    compactMode: userPreferences.compactMode,
    setCompactMode: (compactMode) => updateUserPreferences({ compactMode }),
    toggleCompactMode: () => updateUserPreferences({ compactMode: !userPreferences.compactMode })
  };
};

export const useAppNavigation = () => {
  const { breadcrumbs, setBreadcrumbs } = useAppState();

  return {
    breadcrumbs,
    setBreadcrumbs,

    // Convenience methods
    addBreadcrumb: (item) => setBreadcrumbs([...breadcrumbs, item]),
    clearBreadcrumbs: () => setBreadcrumbs([]),

    // Breadcrumb item structure: { label, href?, icon? }
    updateBreadcrumbs: (items) => setBreadcrumbs(items)
  };
};

export const useAppConfig = () => {
  const { appConfig, updateAppConfig } = useAppState();

  return {
    config: appConfig,
    updateConfig: updateAppConfig,

    // App info
    appName: appConfig.name,
    appVersion: appConfig.version,
    environment: appConfig.environment,

    // Feature flags
    features: appConfig.features,
    hasFeature: (feature) => appConfig.features[feature] === true,

    // Environment checks
    isDevelopment: appConfig.environment === 'development',
    isProduction: appConfig.environment === 'production',
    isTest: appConfig.environment === 'test'
  };
};

export default useAppState;
