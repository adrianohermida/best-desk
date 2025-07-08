import { createTheme } from '@mui/material/styles';
import { lightPalette, darkPalette } from './palette';
import { typography } from './typography';

// Component overrides for consistent styling
const componentOverrides = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: 'none',
        fontWeight: 500,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }
      },
      contained: {
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
        }
      }
    }
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        '&:hover': {
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
        }
      }
    }
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 8
      }
    }
  },

  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 8
        }
      }
    }
  },

  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 16
      }
    }
  },

  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: '0 1px 3px rgba(0,0,0,0.12)'
      }
    }
  }
};

// Base theme configuration
const baseTheme = {
  typography,
  shape: {
    borderRadius: 8
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  components: componentOverrides
};

// Light theme
export const lightTheme = createTheme({
  ...baseTheme,
  palette: lightPalette,
  components: {
    ...componentOverrides,
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: lightPalette.background.default,
          color: lightPalette.text.primary
        }
      }
    }
  }
});

// Dark theme
export const darkTheme = createTheme({
  ...baseTheme,
  palette: darkPalette,
  components: {
    ...componentOverrides,
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: darkPalette.background.default,
          color: darkPalette.text.primary
        }
      }
    }
  }
});

// Theme variants
export const themes = {
  light: lightTheme,
  dark: darkTheme
};

// Theme utilities
export const getTheme = (mode = 'light') => {
  return themes[mode] || themes.light;
};

export const createCustomTheme = (customizations = {}) => {
  const { mode = 'light', palette: customPalette = {}, ...otherCustomizations } = customizations;

  const basePalette = mode === 'dark' ? darkPalette : lightPalette;

  return createTheme({
    ...baseTheme,
    palette: {
      ...basePalette,
      ...customPalette
    },
    ...otherCustomizations
  });
};

// Theme constants
export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto'
};

export const THEME_STORAGE_KEY = 'theme-mode';

// Theme helper functions
export const getSystemTheme = () => {
  if (typeof window === 'undefined') return THEME_MODES.LIGHT;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME_MODES.DARK : THEME_MODES.LIGHT;
};

export const getStoredTheme = () => {
  if (typeof window === 'undefined') return null;

  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
};

export const setStoredTheme = (mode) => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  } catch (error) {
    console.error('Failed to store theme mode:', error);
  }
};

export const resolveThemeMode = (mode) => {
  if (mode === THEME_MODES.AUTO) {
    return getSystemTheme();
  }

  return mode || THEME_MODES.LIGHT;
};

// Export all theme components
export { lightPalette, darkPalette, customColors } from './palette';
export { typography } from './typography';

export default {
  lightTheme,
  darkTheme,
  themes,
  getTheme,
  createCustomTheme,
  THEME_MODES,
  getSystemTheme,
  getStoredTheme,
  setStoredTheme,
  resolveThemeMode
};
