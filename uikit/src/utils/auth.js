// Auth token management
export const tokenManager = {
  get: () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('auth-token');
  },

  set: (token) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('auth-token', token);
  },

  remove: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('auth-token');
  },

  isValid: (token) => {
    if (!token) return false;

    try {
      // Basic token validation - extend based on your needs
      const parts = token.split('.');
      return parts.length === 3; // JWT format
    } catch {
      return false;
    }
  }
};

// User data management
export const userManager = {
  get: () => {
    if (typeof window === 'undefined') return null;
    try {
      const userData = localStorage.getItem('user-data');
      return userData ? JSON.parse(userData) : null;
    } catch {
      return null;
    }
  },

  set: (user) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('user-data', JSON.stringify(user));
  },

  remove: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('user-data');
  },

  update: (updates) => {
    const current = userManager.get();
    if (current) {
      const updated = { ...current, ...updates };
      userManager.set(updated);
      return updated;
    }
    return null;
  }
};

// Permission utilities
export const permissions = {
  READ: 'read',
  WRITE: 'write',
  DELETE: 'delete',
  ADMIN: 'admin',
  MODERATE: 'moderate'
};

export const roles = {
  GUEST: 'guest',
  USER: 'user',
  MODERATOR: 'moderator',
  ADMIN: 'admin',
  SUPER_ADMIN: 'super_admin'
};

// Permission hierarchy helper
export const hasPermissionLevel = (userPermissions, requiredPermission) => {
  if (!Array.isArray(userPermissions)) return false;

  const permissionLevels = {
    [permissions.READ]: 1,
    [permissions.WRITE]: 2,
    [permissions.DELETE]: 3,
    [permissions.MODERATE]: 4,
    [permissions.ADMIN]: 5
  };

  const userLevel = Math.max(...userPermissions.map((p) => permissionLevels[p] || 0));
  const requiredLevel = permissionLevels[requiredPermission] || 0;

  return userLevel >= requiredLevel;
};

// Role hierarchy helper
export const hasRoleLevel = (userRole, requiredRole) => {
  const roleLevels = {
    [roles.GUEST]: 0,
    [roles.USER]: 1,
    [roles.MODERATOR]: 2,
    [roles.ADMIN]: 3,
    [roles.SUPER_ADMIN]: 4
  };

  const userLevel = roleLevels[userRole] || 0;
  const requiredLevel = roleLevels[requiredRole] || 0;

  return userLevel >= requiredLevel;
};

// Auth validation helpers
export const validators = {
  email: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  password: (password) => {
    // Minimum 8 characters, at least one letter and one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  },

  strongPassword: (password) => {
    // Strong password: 8+ chars, uppercase, lowercase, number, special char
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongRegex.test(password);
  }
};

// Session management
export const sessionManager = {
  isExpired: (timestamp) => {
    if (!timestamp) return true;
    const now = Date.now();
    const sessionTime = new Date(timestamp).getTime();
    const expireTime = 24 * 60 * 60 * 1000; // 24 hours

    return now - sessionTime > expireTime;
  },

  refresh: () => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('session-timestamp', new Date().toISOString());
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('session-timestamp');
  }
};

export default {
  tokenManager,
  userManager,
  permissions,
  roles,
  hasPermissionLevel,
  hasRoleLevel,
  validators,
  sessionManager
};
