'use client';

import { createContext, useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

// Auth action types
const AUTH_ACTIONS = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  SET_USER: 'SET_USER',
  SET_LOADING: 'SET_LOADING'
};

// Initial auth state
const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null
};

// Auth reducer
function authReducer(state, action) {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null
      };
    case AUTH_ACTIONS.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload
      };
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null
      };
    case AUTH_ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false
      };
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
}

// Create Auth Context
const AuthContext = createContext(null);

// Auth Provider Component
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check if user is logged in on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });

      // Check localStorage for token
      const token = localStorage.getItem('auth-token');
      const userData = localStorage.getItem('user-data');

      if (token && userData) {
        const user = JSON.parse(userData);
        dispatch({ type: AUTH_ACTIONS.SET_USER, payload: user });
      } else {
        dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
    }
  };

  const login = async (credentials) => {
    try {
      dispatch({ type: AUTH_ACTIONS.LOGIN_START });

      // Mock authentication - replace with real API call
      const mockUser = {
        id: '1',
        name: credentials.name || 'Usuario',
        email: credentials.email,
        avatar: '/assets/images/user/avatar1.png',
        role: 'user',
        permissions: ['read', 'write']
      };

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Store auth data
      localStorage.setItem('auth-token', 'mock-jwt-token');
      localStorage.setItem('user-data', JSON.stringify(mockUser));

      dispatch({ type: AUTH_ACTIONS.LOGIN_SUCCESS, payload: mockUser });

      return { success: true, user: mockUser };
    } catch (error) {
      const errorMessage = error.message || 'Login falhou. Tente novamente.';
      dispatch({ type: AUTH_ACTIONS.LOGIN_FAILURE, payload: errorMessage });
      return { success: false, error: errorMessage };
    }
  };

  const logout = async () => {
    try {
      // Clear storage
      localStorage.removeItem('auth-token');
      localStorage.removeItem('user-data');

      dispatch({ type: AUTH_ACTIONS.LOGOUT });

      return { success: true };
    } catch (error) {
      console.error('Logout failed:', error);
      return { success: false, error: error.message };
    }
  };

  const updateUser = (userData) => {
    try {
      const updatedUser = { ...state.user, ...userData };
      localStorage.setItem('user-data', JSON.stringify(updatedUser));
      dispatch({ type: AUTH_ACTIONS.SET_USER, payload: updatedUser });
      return { success: true };
    } catch (error) {
      console.error('Update user failed:', error);
      return { success: false, error: error.message };
    }
  };

  const value = {
    // State
    ...state,

    // Actions
    login,
    logout,
    updateUser,
    checkAuthStatus,

    // Helpers
    hasPermission: (permission) => state.user?.permissions?.includes(permission) || false,
    isRole: (role) => state.user?.role === role
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export default AuthContext;
