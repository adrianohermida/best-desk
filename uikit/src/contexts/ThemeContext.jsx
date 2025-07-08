'use client';
import PropTypes from 'prop-types';
import { createContext, useContext, useState, useEffect } from 'react';

// @project
import { Themes } from '@/config';
import useLocalStorage from '@/hooks/useLocalStorage';

/***************************  THEME VARIANTS  ***************************/

export const ThemeVariants = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto'
};

export const ThemeStyles = {
  MINIMAL: 'minimal',
  BOLD: 'bold',
  ELEGANT: 'elegant',
  MODERN: 'modern',
  CLASSIC: 'classic'
};

export const ColorSchemes = {
  DEFAULT: 'default',
  BLUE: 'blue',
  GREEN: 'green',
  PURPLE: 'purple',
  ORANGE: 'orange',
  RED: 'red'
};

/***************************  THEME CONTEXT  ***************************/

const initialState = {
  currentTheme: Themes.THEME_DEFAULT,
  themeVariant: ThemeVariants.LIGHT,
  themeStyle: ThemeStyles.MODERN,
  colorScheme: ColorSchemes.DEFAULT,
  customColors: null,
  animations: true,
  onChangeTheme: () => {},
  onChangeVariant: () => {},
  onChangeStyle: () => {},
  onChangeColorScheme: () => {},
  onToggleAnimations: () => {},
  resetTheme: () => {}
};

const ThemeContext = createContext(initialState);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

/***************************  THEME PROVIDER  ***************************/

export function AdvancedThemeProvider({ children }) {
  const [themeConfig, setThemeConfig] = useLocalStorage('saasable-theme-config', {
    currentTheme: Themes.THEME_DEFAULT,
    themeVariant: ThemeVariants.LIGHT,
    themeStyle: ThemeStyles.MODERN,
    colorScheme: ColorSchemes.DEFAULT,
    animations: true
  });

  const [customColors, setCustomColors] = useState(null);

  // Auto theme detection
  useEffect(() => {
    if (themeConfig.themeVariant === ThemeVariants.AUTO) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        setThemeConfig((prev) => ({
          ...prev,
          themeVariant: mediaQuery.matches ? ThemeVariants.DARK : ThemeVariants.LIGHT
        }));
      };

      mediaQuery.addEventListener('change', handleChange);
      handleChange(); // Set initial value

      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [themeConfig.themeVariant, setThemeConfig]);

  // Theme change handlers
  const onChangeTheme = (currentTheme) => {
    setThemeConfig((prev) => ({ ...prev, currentTheme }));
  };

  const onChangeVariant = (themeVariant) => {
    setThemeConfig((prev) => ({ ...prev, themeVariant }));
  };

  const onChangeStyle = (themeStyle) => {
    setThemeConfig((prev) => ({ ...prev, themeStyle }));
  };

  const onChangeColorScheme = (colorScheme) => {
    setThemeConfig((prev) => ({ ...prev, colorScheme }));
  };

  const onToggleAnimations = () => {
    setThemeConfig((prev) => ({ ...prev, animations: !prev.animations }));
  };

  const resetTheme = () => {
    setThemeConfig({
      currentTheme: Themes.THEME_DEFAULT,
      themeVariant: ThemeVariants.LIGHT,
      themeStyle: ThemeStyles.MODERN,
      colorScheme: ColorSchemes.DEFAULT,
      animations: true
    });
    setCustomColors(null);
  };

  const contextValue = {
    ...themeConfig,
    customColors,
    onChangeTheme,
    onChangeVariant,
    onChangeStyle,
    onChangeColorScheme,
    onToggleAnimations,
    resetTheme
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

AdvancedThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ThemeContext;
