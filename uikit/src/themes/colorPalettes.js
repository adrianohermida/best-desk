// @project
import { ColorSchemes } from '@/contexts/ThemeContext';

/***************************  COLOR PALETTE GENERATOR  ***************************/

// Base color generation utilities
const generateShades = (baseColor, isDark = false) => {
  const shades = {
    50: isDark ? '#fafafa' : '#f8fafc',
    100: isDark ? '#f5f5f5' : '#f1f5f9',
    200: isDark ? '#eeeeee' : '#e2e8f0',
    300: isDark ? '#e0e0e0' : '#cbd5e1',
    400: isDark ? '#bdbdbd' : '#94a3b8',
    500: baseColor,
    600: isDark ? '#757575' : '#64748b',
    700: isDark ? '#616161' : '#475569',
    800: isDark ? '#424242' : '#334155',
    900: isDark ? '#212121' : '#1e293b',
    A100: isDark ? '#ff8a80' : '#f1f5f9',
    A200: isDark ? '#ff5722' : '#e2e8f0',
    A400: isDark ? '#ff1744' : '#cbd5e1',
    A700: isDark ? '#d50000' : '#94a3b8'
  };
  return shades;
};

/***************************  COLOR SCHEMES  ***************************/

export const colorPalettes = {
  [ColorSchemes.DEFAULT]: {
    light: {
      primary: {
        main: '#2563eb',
        light: '#60a5fa',
        dark: '#1d4ed8',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#64748b',
        light: '#94a3b8',
        dark: '#475569',
        contrastText: '#ffffff'
      },
      background: {
        default: '#ffffff',
        paper: '#f8fafc'
      },
      text: {
        primary: '#1e293b',
        secondary: '#64748b'
      }
    },
    dark: {
      primary: {
        main: '#3b82f6',
        light: '#60a5fa',
        dark: '#2563eb',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#94a3b8',
        light: '#cbd5e1',
        dark: '#64748b',
        contrastText: '#000000'
      },
      background: {
        default: '#0f172a',
        paper: '#1e293b'
      },
      text: {
        primary: '#f8fafc',
        secondary: '#cbd5e1'
      }
    }
  },

  [ColorSchemes.BLUE]: {
    light: {
      primary: {
        main: '#0ea5e9',
        light: '#38bdf8',
        dark: '#0284c7',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#06b6d4',
        light: '#22d3ee',
        dark: '#0891b2',
        contrastText: '#ffffff'
      },
      background: {
        default: '#ffffff',
        paper: '#f0f9ff'
      },
      text: {
        primary: '#0c4a6e',
        secondary: '#0369a1'
      }
    },
    dark: {
      primary: {
        main: '#0ea5e9',
        light: '#38bdf8',
        dark: '#0284c7',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#22d3ee',
        light: '#67e8f9',
        dark: '#06b6d4',
        contrastText: '#000000'
      },
      background: {
        default: '#0c4a6e',
        paper: '#075985'
      },
      text: {
        primary: '#f0f9ff',
        secondary: '#bae6fd'
      }
    }
  },

  [ColorSchemes.GREEN]: {
    light: {
      primary: {
        main: '#10b981',
        light: '#34d399',
        dark: '#059669',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#84cc16',
        light: '#a3e635',
        dark: '#65a30d',
        contrastText: '#ffffff'
      },
      background: {
        default: '#ffffff',
        paper: '#f0fdf4'
      },
      text: {
        primary: '#064e3b',
        secondary: '#059669'
      }
    },
    dark: {
      primary: {
        main: '#10b981',
        light: '#34d399',
        dark: '#059669',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#a3e635',
        light: '#bef264',
        dark: '#84cc16',
        contrastText: '#000000'
      },
      background: {
        default: '#064e3b',
        paper: '#065f46'
      },
      text: {
        primary: '#f0fdf4',
        secondary: '#bbf7d0'
      }
    }
  },

  [ColorSchemes.PURPLE]: {
    light: {
      primary: {
        main: '#8b5cf6',
        light: '#a78bfa',
        dark: '#7c3aed',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#d946ef',
        light: '#e879f9',
        dark: '#c026d3',
        contrastText: '#ffffff'
      },
      background: {
        default: '#ffffff',
        paper: '#faf5ff'
      },
      text: {
        primary: '#581c87',
        secondary: '#7c3aed'
      }
    },
    dark: {
      primary: {
        main: '#8b5cf6',
        light: '#a78bfa',
        dark: '#7c3aed',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#e879f9',
        light: '#f0abfc',
        dark: '#d946ef',
        contrastText: '#000000'
      },
      background: {
        default: '#581c87',
        paper: '#6b21a8'
      },
      text: {
        primary: '#faf5ff',
        secondary: '#e9d5ff'
      }
    }
  },

  [ColorSchemes.ORANGE]: {
    light: {
      primary: {
        main: '#f97316',
        light: '#fb923c',
        dark: '#ea580c',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#eab308',
        light: '#facc15',
        dark: '#ca8a04',
        contrastText: '#000000'
      },
      background: {
        default: '#ffffff',
        paper: '#fffbeb'
      },
      text: {
        primary: '#9a3412',
        secondary: '#ea580c'
      }
    },
    dark: {
      primary: {
        main: '#f97316',
        light: '#fb923c',
        dark: '#ea580c',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#facc15',
        light: '#fde047',
        dark: '#eab308',
        contrastText: '#000000'
      },
      background: {
        default: '#9a3412',
        paper: '#c2410c'
      },
      text: {
        primary: '#fffbeb',
        secondary: '#fed7aa'
      }
    }
  },

  [ColorSchemes.RED]: {
    light: {
      primary: {
        main: '#ef4444',
        light: '#f87171',
        dark: '#dc2626',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#f59e0b',
        light: '#fbbf24',
        dark: '#d97706',
        contrastText: '#000000'
      },
      background: {
        default: '#ffffff',
        paper: '#fef2f2'
      },
      text: {
        primary: '#991b1b',
        secondary: '#dc2626'
      }
    },
    dark: {
      primary: {
        main: '#ef4444',
        light: '#f87171',
        dark: '#dc2626',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#fbbf24',
        light: '#fcd34d',
        dark: '#f59e0b',
        contrastText: '#000000'
      },
      background: {
        default: '#991b1b',
        paper: '#b91c1c'
      },
      text: {
        primary: '#fef2f2',
        secondary: '#fecaca'
      }
    }
  }
};

/***************************  UTILITY FUNCTIONS  ***************************/

export const getColorPalette = (colorScheme, variant = 'light') => {
  const palette = colorPalettes[colorScheme] || colorPalettes[ColorSchemes.DEFAULT];
  return palette[variant] || palette.light;
};

export const generateCustomPalette = (primaryColor, secondaryColor, variant = 'light') => {
  const isDark = variant === 'dark';

  return {
    primary: {
      main: primaryColor,
      light: adjustColorBrightness(primaryColor, isDark ? -20 : 20),
      dark: adjustColorBrightness(primaryColor, isDark ? 20 : -20),
      contrastText: getContrastColor(primaryColor)
    },
    secondary: {
      main: secondaryColor,
      light: adjustColorBrightness(secondaryColor, isDark ? -20 : 20),
      dark: adjustColorBrightness(secondaryColor, isDark ? 20 : -20),
      contrastText: getContrastColor(secondaryColor)
    },
    background: {
      default: isDark ? '#0f172a' : '#ffffff',
      paper: isDark ? '#1e293b' : '#f8fafc'
    },
    text: {
      primary: isDark ? '#f8fafc' : '#1e293b',
      secondary: isDark ? '#cbd5e1' : '#64748b'
    }
  };
};

// Color utility functions
function adjustColorBrightness(color, percent) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;

  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

function getContrastColor(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? '#000000' : '#ffffff';
}

export default colorPalettes;
