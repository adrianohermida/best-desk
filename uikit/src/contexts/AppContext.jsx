'use client';

import { createContext, useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

// App action types
const APP_ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SET_NOTIFICATION: 'SET_NOTIFICATION',
  CLEAR_NOTIFICATION: 'CLEAR_NOTIFICATION',
  SET_SIDEBAR_OPEN: 'SET_SIDEBAR_OPEN',
  SET_THEME_MODE: 'SET_THEME_MODE',
  SET_LAYOUT_CONFIG: 'SET_LAYOUT_CONFIG',
  SET_USER_PREFERENCES: 'SET_USER_PREFERENCES',
  SET_BREADCRUMBS: 'SET_BREADCRUMBS',
  UPDATE_APP_CONFIG: 'UPDATE_APP_CONFIG'
};

// Initial app state
const initialState = {
  // Loading states
  isLoading: false,
  loadingText: '',

  // Error handling
  error: null,
  errorDetails: null,

  // Notifications
  notification: null,

  // UI State
  sidebar: {
    isOpen: false,
    variant: 'temporary' // 'permanent', 'persistent', 'temporary'
  },

  // Theme and layout
  themeMode: 'light', // 'light', 'dark', 'auto'
  layoutConfig: {
    header: {
      fixed: true,
      height: 64
    },
    sidebar: {
      width: 260,
      miniWidth: 60
    },
    footer: {
      show: true,
      fixed: false
    }
  },

  // User preferences
  userPreferences: {
    language: 'pt-BR',
    timezone: 'America/Sao_Paulo',
    dateFormat: 'DD/MM/YYYY',
    itemsPerPage: 10,
    compactMode: false
  },

  // Navigation
  breadcrumbs: [],

  // App configuration
  appConfig: {
    name: 'UIKit',
    version: '1.2.0',
    environment: process.env.NODE_ENV || 'development',
    features: {
      analytics: true,
      notifications: true,
      darkMode: true
    }
  }
};

// App reducer
function appReducer(state, action) {
  switch (action.type) {
    case APP_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        loadingText: action.payload.text || ''
      };

    case APP_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload.message,
        errorDetails: action.payload.details || null
      };

    case APP_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null,
        errorDetails: null
      };

    case APP_ACTIONS.SET_NOTIFICATION:
      return {
        ...state,
        notification: action.payload
      };

    case APP_ACTIONS.CLEAR_NOTIFICATION:
      return {
        ...state,
        notification: null
      };

    case APP_ACTIONS.SET_SIDEBAR_OPEN:
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          isOpen: action.payload
        }
      };

    case APP_ACTIONS.SET_THEME_MODE:
      return {
        ...state,
        themeMode: action.payload
      };

    case APP_ACTIONS.SET_LAYOUT_CONFIG:
      return {
        ...state,
        layoutConfig: {
          ...state.layoutConfig,
          ...action.payload
        }
      };

    case APP_ACTIONS.SET_USER_PREFERENCES:
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          ...action.payload
        }
      };

    case APP_ACTIONS.SET_BREADCRUMBS:
      return {
        ...state,
        breadcrumbs: action.payload
      };

    case APP_ACTIONS.UPDATE_APP_CONFIG:
      return {
        ...state,
        appConfig: {
          ...state.appConfig,
          ...action.payload
        }
      };

    default:
      return state;
  }
}

// Create App Context
const AppContext = createContext(null);

// App Provider Component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load user preferences from localStorage on mount
  useEffect(() => {
    loadUserPreferences();
    loadThemePreference();
  }, []);

  // Save user preferences to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user-preferences', JSON.stringify(state.userPreferences));
    }
  }, [state.userPreferences]);

  // Save theme preference to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-mode', state.themeMode);
    }
  }, [state.themeMode]);

  const loadUserPreferences = () => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('user-preferences');
        if (saved) {
          const preferences = JSON.parse(saved);
          dispatch({ type: APP_ACTIONS.SET_USER_PREFERENCES, payload: preferences });
        }
      } catch (error) {
        console.error('Failed to load user preferences:', error);
      }
    }
  };

  const loadThemePreference = () => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('theme-mode');
        if (saved) {
          dispatch({ type: APP_ACTIONS.SET_THEME_MODE, payload: saved });
        } else {
          // Auto-detect theme preference
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          dispatch({ type: APP_ACTIONS.SET_THEME_MODE, payload: prefersDark ? 'dark' : 'light' });
        }
      } catch (error) {
        console.error('Failed to load theme preference:', error);
      }
    }
  };

  // Action creators
  const setLoading = (isLoading, text = '') => {
    dispatch({ type: APP_ACTIONS.SET_LOADING, payload: { isLoading, text } });
  };

  const setError = (message, details = null) => {
    dispatch({ type: APP_ACTIONS.SET_ERROR, payload: { message, details } });
  };

  const clearError = () => {
    dispatch({ type: APP_ACTIONS.CLEAR_ERROR });
  };

  const showNotification = (message, type = 'info', autoHide = true, duration = 5000) => {
    const notification = {
      id: Date.now(),
      message,
      type, // 'success', 'error', 'warning', 'info'
      autoHide,
      duration
    };

    dispatch({ type: APP_ACTIONS.SET_NOTIFICATION, payload: notification });

    if (autoHide) {
      setTimeout(() => {
        dispatch({ type: APP_ACTIONS.CLEAR_NOTIFICATION });
      }, duration);
    }
  };

  const clearNotification = () => {
    dispatch({ type: APP_ACTIONS.CLEAR_NOTIFICATION });
  };

  const toggleSidebar = () => {
    dispatch({ type: APP_ACTIONS.SET_SIDEBAR_OPEN, payload: !state.sidebar.isOpen });
  };

  const setSidebarOpen = (isOpen) => {
    dispatch({ type: APP_ACTIONS.SET_SIDEBAR_OPEN, payload: isOpen });
  };

  const setThemeMode = (mode) => {
    dispatch({ type: APP_ACTIONS.SET_THEME_MODE, payload: mode });
  };

  const updateLayoutConfig = (config) => {
    dispatch({ type: APP_ACTIONS.SET_LAYOUT_CONFIG, payload: config });
  };

  const updateUserPreferences = (preferences) => {
    dispatch({ type: APP_ACTIONS.SET_USER_PREFERENCES, payload: preferences });
  };

  const setBreadcrumbs = (breadcrumbs) => {
    dispatch({ type: APP_ACTIONS.SET_BREADCRUMBS, payload: breadcrumbs });
  };

  const updateAppConfig = (config) => {
    dispatch({ type: APP_ACTIONS.UPDATE_APP_CONFIG, payload: config });
  };

  const value = {
    // State
    ...state,

    // Actions
    setLoading,
    setError,
    clearError,
    showNotification,
    clearNotification,
    toggleSidebar,
    setSidebarOpen,
    setThemeMode,
    updateLayoutConfig,
    updateUserPreferences,
    setBreadcrumbs,
    updateAppConfig,

    // Computed values
    isDarkMode: state.themeMode === 'dark',
    isLightMode: state.themeMode === 'light',
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// Custom hook to use app context
export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }

  return context;
}

export default AppContext;
