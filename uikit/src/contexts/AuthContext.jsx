'use client';

import { createContext, useContext, useReducer, useEffect } from 'react';

// Auth states
const AUTH_STATES = {
  LOADING: 'loading',
  AUTHENTICATED: 'authenticated',
  UNAUTHENTICATED: 'unauthenticated',
  ERROR: 'error'
};

// Initial state
const initialState = {
  user: null,
  status: AUTH_STATES.LOADING,
  error: null,
  subscription: null,
  features: [],
  permissions: []
};

// Action types
const ACTION_TYPES = {
  AUTH_LOADING: 'AUTH_LOADING',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_ERROR: 'AUTH_ERROR',
  AUTH_LOGOUT: 'AUTH_LOGOUT',
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_SUBSCRIPTION: 'UPDATE_SUBSCRIPTION'
};

// Reducer
function authReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.AUTH_LOADING:
      return {
        ...state,
        status: AUTH_STATES.LOADING,
        error: null
      };

    case ACTION_TYPES.AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        subscription: action.payload.subscription,
        features: action.payload.features || [],
        permissions: action.payload.permissions || [],
        status: AUTH_STATES.AUTHENTICATED,
        error: null
      };

    case ACTION_TYPES.AUTH_ERROR:
      return {
        ...state,
        user: null,
        subscription: null,
        features: [],
        permissions: [],
        status: AUTH_STATES.ERROR,
        error: action.payload
      };

    case ACTION_TYPES.AUTH_LOGOUT:
      return {
        ...initialState,
        status: AUTH_STATES.UNAUTHENTICATED
      };

    case ACTION_TYPES.UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };

    case ACTION_TYPES.UPDATE_SUBSCRIPTION:
      return {
        ...state,
        subscription: { ...state.subscription, ...action.payload }
      };

    default:
      return state;
  }
}

// Create contexts
const AuthContext = createContext();
const AuthDispatchContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Mock authentication - replace with real authentication
  useEffect(() => {
    const initAuth = async () => {
      try {
        dispatch({ type: ACTION_TYPES.AUTH_LOADING });

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock user data - replace with real API call
        const mockUser = {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
          avatar: '/assets/images/users/avatar-1.png',
          roles: ['USER', 'ADMIN'],
          emailVerified: true,
          createdAt: '2023-01-15T10:00:00Z'
        };

        const mockSubscription = {
          plan: 'pro',
          status: 'active',
          expiresAt: '2024-12-31T23:59:59Z',
          features: ['analytics', 'exports', 'api_access', 'team_management'],
          limits: {
            users: 25,
            projects: 50,
            storage: 102400,
            apiCalls: 100000
          },
          usage: {
            users: 5,
            projects: 12,
            storage: 25600,
            apiCalls: 15000
          }
        };

        dispatch({
          type: ACTION_TYPES.AUTH_SUCCESS,
          payload: {
            user: mockUser,
            subscription: mockSubscription,
            features: mockSubscription.features,
            permissions: mockUser.roles
          }
        });
      } catch (error) {
        dispatch({
          type: ACTION_TYPES.AUTH_ERROR,
          payload: error.message || 'Authentication failed'
        });
      }
    };

    initAuth();
  }, []);

  // Auth actions
  const login = async (credentials) => {
    try {
      dispatch({ type: ACTION_TYPES.AUTH_LOADING });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful login
      const user = {
        id: 1,
        name: 'John Doe',
        email: credentials.email,
        avatar: '/assets/images/users/avatar-1.png',
        roles: ['USER']
      };

      const subscription = {
        plan: 'basic',
        status: 'active',
        features: ['analytics', 'exports']
      };

      dispatch({
        type: ACTION_TYPES.AUTH_SUCCESS,
        payload: { user, subscription, features: subscription.features }
      });

      return { success: true };
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.AUTH_ERROR,
        payload: error.message
      });
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      dispatch({ type: ACTION_TYPES.AUTH_LOGOUT });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const updateUser = (userData) => {
    dispatch({
      type: ACTION_TYPES.UPDATE_USER,
      payload: userData
    });
  };

  const updateSubscription = (subscriptionData) => {
    dispatch({
      type: ACTION_TYPES.UPDATE_SUBSCRIPTION,
      payload: subscriptionData
    });
  };

  const value = {
    ...state,
    login,
    logout,
    updateUser,
    updateSubscription,
    isLoading: state.status === AUTH_STATES.LOADING,
    isAuthenticated: state.status === AUTH_STATES.AUTHENTICATED,
    isError: state.status === AUTH_STATES.ERROR
  };

  return (
    <AuthContext.Provider value={value}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}

// Hooks
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (!context) {
    throw new Error('useAuthDispatch must be used within an AuthProvider');
  }
  return context;
}

// Helper hooks
export function useUser() {
  const { user, isAuthenticated, isLoading } = useAuth();
  return { user, isAuthenticated, isLoading };
}

export function useSubscription() {
  const { subscription, isAuthenticated } = useAuth();
  return { subscription, isAuthenticated };
}

export function usePermissions() {
  const { permissions, isAuthenticated } = useAuth();

  const hasPermission = (permission) => {
    return isAuthenticated && permissions.includes(permission);
  };

  const hasAnyPermission = (permissionList) => {
    return isAuthenticated && permissionList.some((permission) => permissions.includes(permission));
  };

  const hasAllPermissions = (permissionList) => {
    return isAuthenticated && permissionList.every((permission) => permissions.includes(permission));
  };

  return {
    permissions,
    hasPermission,
    hasAnyPermission,
    hasAllPermissions
  };
}

export function useFeatures() {
  const { features, subscription, isAuthenticated } = useAuth();

  const hasFeature = (feature) => {
    return isAuthenticated && features.includes(feature);
  };

  const hasAnyFeature = (featureList) => {
    return isAuthenticated && featureList.some((feature) => features.includes(feature));
  };

  const hasAllFeatures = (featureList) => {
    return isAuthenticated && featureList.every((feature) => features.includes(feature));
  };

  return {
    features,
    subscription,
    hasFeature,
    hasAnyFeature,
    hasAllFeatures
  };
}

export { AUTH_STATES, ACTION_TYPES };
