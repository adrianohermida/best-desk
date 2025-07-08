'use client';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

// @mui
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// @project
import { AdvancedThemeProvider, useTheme } from '@/contexts/ThemeContext';
import { getColorPalette } from '@/themes/colorPalettes';
import { FONT_ROBOTO, FONT_ARCHIVO, FONT_FIGTREE } from '@/config';

/***************************  THEME BUILDER  ***************************/

function ThemeBuilder({ children }) {
  const { currentTheme, themeVariant, themeStyle, colorScheme, animations } = useTheme();

  const muiTheme = useMemo(() => {
    // Get color palette based on current settings
    const colorPalette = getColorPalette(colorScheme, themeVariant);

    // Base typography configuration
    const typography = {
      fontFamily: themeStyle === 'elegant' ? FONT_ARCHIVO : themeStyle === 'classic' ? FONT_FIGTREE : FONT_ROBOTO,
      h1: {
        fontSize: themeStyle === 'bold' ? '3.5rem' : themeStyle === 'minimal' ? '2.5rem' : '3rem',
        fontWeight: themeStyle === 'bold' ? 800 : themeStyle === 'minimal' ? 300 : 600,
        lineHeight: 1.2
      },
      h2: {
        fontSize: themeStyle === 'bold' ? '2.75rem' : themeStyle === 'minimal' ? '2rem' : '2.25rem',
        fontWeight: themeStyle === 'bold' ? 700 : themeStyle === 'minimal' ? 300 : 500,
        lineHeight: 1.3
      },
      h3: {
        fontSize: themeStyle === 'bold' ? '2.25rem' : themeStyle === 'minimal' ? '1.5rem' : '1.875rem',
        fontWeight: themeStyle === 'bold' ? 700 : themeStyle === 'minimal' ? 400 : 500,
        lineHeight: 1.4
      },
      body1: {
        fontSize: '1rem',
        lineHeight: themeStyle === 'minimal' ? 1.8 : 1.6,
        fontWeight: themeStyle === 'bold' ? 500 : 400
      }
    };

    // Component style overrides based on theme style
    const getComponentOverrides = () => {
      const baseOverrides = {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: themeStyle === 'minimal' ? 2 : themeStyle === 'bold' ? 8 : 6,
              textTransform: themeStyle === 'bold' ? 'uppercase' : 'none',
              fontWeight: themeStyle === 'bold' ? 700 : 500,
              transition: animations ? 'all 0.3s ease-in-out' : 'none'
            }
          }
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: themeStyle === 'minimal' ? 4 : themeStyle === 'bold' ? 16 : 12,
              boxShadow:
                themeStyle === 'minimal' ? 'none' : themeStyle === 'bold' ? '0 8px 32px rgba(0,0,0,0.12)' : '0 4px 16px rgba(0,0,0,0.08)',
              border: themeStyle === 'minimal' ? `1px solid ${colorPalette.text.secondary}20` : 'none',
              transition: animations ? 'all 0.3s ease-in-out' : 'none'
            }
          }
        },
        MuiChip: {
          styleOverrides: {
            root: {
              borderRadius: themeStyle === 'minimal' ? 4 : themeStyle === 'bold' ? 20 : 16,
              fontWeight: themeStyle === 'bold' ? 600 : 500
            }
          }
        },
        MuiTypography: {
          styleOverrides: {
            root: {
              transition: animations ? 'color 0.3s ease-in-out' : 'none'
            }
          }
        }
      };

      return baseOverrides;
    };

    // Create the theme
    const theme = createTheme({
      palette: {
        mode: themeVariant === 'dark' ? 'dark' : 'light',
        ...colorPalette,
        // Add success, warning, info, error colors
        success: {
          main: '#10b981',
          light: '#34d399',
          dark: '#059669'
        },
        warning: {
          main: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706'
        },
        info: {
          main: '#3b82f6',
          light: '#60a5fa',
          dark: '#2563eb'
        },
        error: {
          main: '#ef4444',
          light: '#f87171',
          dark: '#dc2626'
        }
      },
      typography,
      components: getComponentOverrides(),
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536
        }
      },
      shape: {
        borderRadius: themeStyle === 'minimal' ? 4 : themeStyle === 'bold' ? 12 : 8
      },
      transitions: {
        duration: {
          shortest: animations ? 150 : 0,
          shorter: animations ? 200 : 0,
          short: animations ? 250 : 0,
          standard: animations ? 300 : 0,
          complex: animations ? 375 : 0,
          enteringScreen: animations ? 225 : 0,
          leavingScreen: animations ? 195 : 0
        }
      },
      // Custom theme properties
      custom: {
        themeStyle,
        animations,
        colorScheme,
        currentTheme
      }
    });

    return theme;
  }, [currentTheme, themeVariant, themeStyle, colorScheme, animations]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

ThemeBuilder.propTypes = {
  children: PropTypes.node.isRequired
};

/***************************  ENHANCED THEME PROVIDER  ***************************/

export default function EnhancedThemeProvider({ children }) {
  return (
    <AdvancedThemeProvider>
      <ThemeBuilder>{children}</ThemeBuilder>
    </AdvancedThemeProvider>
  );
}

EnhancedThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

/***************************  THEME UTILITIES  ***************************/

// Hook to access theme values in components
export function useEnhancedTheme() {
  const themeContext = useTheme();

  return {
    ...themeContext,
    // Additional utilities
    isDark: themeContext.themeVariant === 'dark',
    isLight: themeContext.themeVariant === 'light',
    isMinimal: themeContext.themeStyle === 'minimal',
    isBold: themeContext.themeStyle === 'bold',
    isElegant: themeContext.themeStyle === 'elegant',
    isModern: themeContext.themeStyle === 'modern',
    isClassic: themeContext.themeStyle === 'classic'
  };
}
