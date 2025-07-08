// Theme palette configuration for light and dark modes

// Base color definitions
const baseColors = {
  // Primary brand colors
  primary: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1'
  },

  // Secondary colors
  secondary: {
    50: '#fce4ec',
    100: '#f8bbd9',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f'
  },

  // Success colors
  success: {
    50: '#e8f5e8',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20'
  },

  // Warning colors
  warning: {
    50: '#fff8e1',
    100: '#ffecb3',
    200: '#ffe082',
    300: '#ffd54f',
    400: '#ffca28',
    500: '#ffc107',
    600: '#ffb300',
    700: '#ffa000',
    800: '#ff8f00',
    900: '#ff6f00'
  },

  // Error colors
  error: {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c'
  },

  // Info colors
  info: {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b'
  },

  // Neutral grays
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121'
  }
};

// Light theme palette
export const lightPalette = {
  mode: 'light',

  primary: {
    main: baseColors.primary[500],
    light: baseColors.primary[300],
    dark: baseColors.primary[700],
    contrastText: '#ffffff'
  },

  secondary: {
    main: baseColors.secondary[500],
    light: baseColors.secondary[300],
    dark: baseColors.secondary[700],
    contrastText: '#ffffff'
  },

  success: {
    main: baseColors.success[500],
    light: baseColors.success[300],
    dark: baseColors.success[700],
    contrastText: '#ffffff'
  },

  warning: {
    main: baseColors.warning[500],
    light: baseColors.warning[300],
    dark: baseColors.warning[700],
    contrastText: '#000000'
  },

  error: {
    main: baseColors.error[500],
    light: baseColors.error[300],
    dark: baseColors.error[700],
    contrastText: '#ffffff'
  },

  info: {
    main: baseColors.info[500],
    light: baseColors.info[300],
    dark: baseColors.info[700],
    contrastText: '#ffffff'
  },

  grey: baseColors.grey,

  background: {
    default: '#ffffff',
    paper: '#ffffff',
    neutral: baseColors.grey[50]
  },

  text: {
    primary: baseColors.grey[900],
    secondary: baseColors.grey[600],
    disabled: baseColors.grey[400]
  },

  divider: baseColors.grey[200],

  action: {
    active: baseColors.grey[600],
    hover: baseColors.grey[50],
    selected: baseColors.grey[100],
    disabled: baseColors.grey[300],
    disabledBackground: baseColors.grey[100]
  }
};

// Dark theme palette
export const darkPalette = {
  mode: 'dark',

  primary: {
    main: baseColors.primary[400],
    light: baseColors.primary[200],
    dark: baseColors.primary[600],
    contrastText: '#000000'
  },

  secondary: {
    main: baseColors.secondary[400],
    light: baseColors.secondary[200],
    dark: baseColors.secondary[600],
    contrastText: '#000000'
  },

  success: {
    main: baseColors.success[400],
    light: baseColors.success[200],
    dark: baseColors.success[600],
    contrastText: '#000000'
  },

  warning: {
    main: baseColors.warning[400],
    light: baseColors.warning[200],
    dark: baseColors.warning[600],
    contrastText: '#000000'
  },

  error: {
    main: baseColors.error[400],
    light: baseColors.error[200],
    dark: baseColors.error[600],
    contrastText: '#000000'
  },

  info: {
    main: baseColors.info[400],
    light: baseColors.info[200],
    dark: baseColors.info[600],
    contrastText: '#000000'
  },

  grey: baseColors.grey,

  background: {
    default: '#121212',
    paper: '#1e1e1e',
    neutral: '#2a2a2a'
  },

  text: {
    primary: '#ffffff',
    secondary: baseColors.grey[400],
    disabled: baseColors.grey[600]
  },

  divider: baseColors.grey[800],

  action: {
    active: baseColors.grey[300],
    hover: 'rgba(255, 255, 255, 0.08)',
    selected: 'rgba(255, 255, 255, 0.12)',
    disabled: baseColors.grey[700],
    disabledBackground: baseColors.grey[800]
  }
};

// Custom color extensions
export const customColors = {
  // Gradient definitions
  gradients: {
    primary: `linear-gradient(45deg, ${baseColors.primary[500]} 30%, ${baseColors.primary[300]} 90%)`,
    secondary: `linear-gradient(45deg, ${baseColors.secondary[500]} 30%, ${baseColors.secondary[300]} 90%)`,
    success: `linear-gradient(45deg, ${baseColors.success[500]} 30%, ${baseColors.success[300]} 90%)`,
    warning: `linear-gradient(45deg, ${baseColors.warning[500]} 30%, ${baseColors.warning[300]} 90%)`,
    error: `linear-gradient(45deg, ${baseColors.error[500]} 30%, ${baseColors.error[300]} 90%)`,
    info: `linear-gradient(45deg, ${baseColors.info[500]} 30%, ${baseColors.info[300]} 90%)`
  },

  // Shadow definitions
  shadows: {
    light: {
      1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
    },
    dark: {
      1: '0 1px 3px rgba(0,0,0,0.24), 0 1px 2px rgba(0,0,0,0.36)',
      2: '0 3px 6px rgba(0,0,0,0.32), 0 3px 6px rgba(0,0,0,0.35)',
      3: '0 10px 20px rgba(0,0,0,0.38), 0 6px 6px rgba(0,0,0,0.35)',
      4: '0 14px 28px rgba(0,0,0,0.50), 0 10px 10px rgba(0,0,0,0.34)',
      5: '0 19px 38px rgba(0,0,0,0.60), 0 15px 12px rgba(0,0,0,0.34)'
    }
  }
};

export default {
  baseColors,
  lightPalette,
  darkPalette,
  customColors
};
