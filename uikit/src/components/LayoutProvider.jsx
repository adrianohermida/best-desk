'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';

// Layout context
const LayoutContext = createContext(null);

// Layout configuration constants
export const LAYOUT_TYPES = {
  MAIN: 'main',
  SECTION: 'section',
  DASHBOARD: 'dashboard',
  AUTH: 'auth'
};

export const SIDEBAR_VARIANTS = {
  PERMANENT: 'permanent',
  PERSISTENT: 'persistent',
  TEMPORARY: 'temporary'
};

// Layout provider component
export function LayoutProvider({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Layout state
  const [layoutState, setLayoutState] = useState({
    // Current layout type
    currentLayout: LAYOUT_TYPES.MAIN,

    // Sidebar configuration
    sidebar: {
      isOpen: !isMobile,
      variant: isMobile ? SIDEBAR_VARIANTS.TEMPORARY : SIDEBAR_VARIANTS.PERMANENT,
      width: 260,
      miniWidth: 60,
      isMini: false
    },

    // Header configuration
    header: {
      isVisible: true,
      isFixed: true,
      height: 64,
      isCompact: false
    },

    // Footer configuration
    footer: {
      isVisible: true,
      isFixed: false,
      height: 60
    },

    // Content configuration
    content: {
      maxWidth: 'xl',
      padding: theme.spacing(3),
      hasContainer: true
    },

    // Responsive state
    breakpoint: {
      isMobile,
      isTablet,
      isDesktop,
      current: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
    }
  });

  // Update responsive state when breakpoints change
  useEffect(() => {
    setLayoutState((prev) => ({
      ...prev,
      breakpoint: {
        isMobile,
        isTablet,
        isDesktop,
        current: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
      },
      sidebar: {
        ...prev.sidebar,
        isOpen: isMobile ? false : prev.sidebar.isOpen,
        variant: isMobile ? SIDEBAR_VARIANTS.TEMPORARY : SIDEBAR_VARIANTS.PERMANENT
      }
    }));
  }, [isMobile, isTablet, isDesktop]);

  // Layout actions
  const setCurrentLayout = (layoutType) => {
    setLayoutState((prev) => ({
      ...prev,
      currentLayout: layoutType
    }));
  };

  const toggleSidebar = () => {
    setLayoutState((prev) => ({
      ...prev,
      sidebar: {
        ...prev.sidebar,
        isOpen: !prev.sidebar.isOpen
      }
    }));
  };

  const setSidebarOpen = (isOpen) => {
    setLayoutState((prev) => ({
      ...prev,
      sidebar: {
        ...prev.sidebar,
        isOpen
      }
    }));
  };

  const setSidebarVariant = (variant) => {
    setLayoutState((prev) => ({
      ...prev,
      sidebar: {
        ...prev.sidebar,
        variant
      }
    }));
  };

  const toggleSidebarMini = () => {
    setLayoutState((prev) => ({
      ...prev,
      sidebar: {
        ...prev.sidebar,
        isMini: !prev.sidebar.isMini
      }
    }));
  };

  const updateHeaderConfig = (config) => {
    setLayoutState((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        ...config
      }
    }));
  };

  const updateFooterConfig = (config) => {
    setLayoutState((prev) => ({
      ...prev,
      footer: {
        ...prev.footer,
        ...config
      }
    }));
  };

  const updateContentConfig = (config) => {
    setLayoutState((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        ...config
      }
    }));
  };

  // Layout utilities
  const getLayoutStyles = () => {
    const { sidebar, header, footer } = layoutState;

    return {
      marginLeft:
        sidebar.variant === SIDEBAR_VARIANTS.PERMANENT && sidebar.isOpen && !isMobile
          ? `${sidebar.isMini ? sidebar.miniWidth : sidebar.width}px`
          : 0,
      marginTop: header.isFixed ? `${header.height}px` : 0,
      marginBottom: footer.isFixed ? `${footer.height}px` : 0,
      minHeight: `calc(100vh - ${header.isFixed ? header.height : 0}px - ${footer.isFixed ? footer.height : 0}px)`
    };
  };

  const getSidebarStyles = () => {
    const { sidebar } = layoutState;

    return {
      width: sidebar.isMini ? sidebar.miniWidth : sidebar.width,
      variant: sidebar.variant,
      anchor: 'left',
      open: sidebar.isOpen,
      onClose: isMobile ? () => setSidebarOpen(false) : undefined
    };
  };

  // Context value
  const value = {
    // State
    ...layoutState,

    // Actions
    setCurrentLayout,
    toggleSidebar,
    setSidebarOpen,
    setSidebarVariant,
    toggleSidebarMini,
    updateHeaderConfig,
    updateFooterConfig,
    updateContentConfig,

    // Utilities
    getLayoutStyles,
    getSidebarStyles,

    // Constants
    LAYOUT_TYPES,
    SIDEBAR_VARIANTS
  };

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
}

LayoutProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// Custom hook to use layout context
export function useLayout() {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }

  return context;
}

export default LayoutProvider;
