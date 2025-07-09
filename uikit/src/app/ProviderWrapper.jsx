'use client';
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

// @project
import SimpleOptimizedLoader from '@/components/SimpleOptimizedLoader';
import ThemeProvider from '@/components/ThemeProvider';
import { ConfigProvider } from '@/contexts/ConfigContext';
import { AuthProvider } from '@/contexts/AuthContext';

/***************************  COMMON - CONFIG, THEME  ***************************/

export default function ProviderWrapper({ children }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // Loader mais rápido para melhor UX
    const timer = setTimeout(() => {
      setLoader(false);
    }, 300); // Otimizado para 300ms

    return () => clearTimeout(timer);
  }, []);

  /**
   * A loader is needed here to initialize the configuration from localStorage and set the default theme.
   * Without a loader,
   * the theme palette and fontFamily don't match, resulting in an error like:
   * "Warning: Prop className did not match".
   */

  return (
    <ConfigProvider>
      <ThemeProvider>
        <AuthProvider>
          <main>{shouldShowLoader ? <OptimizedLoader fullHeight showLogo /> : children}</main>
        </AuthProvider>
      </ThemeProvider>
    </ConfigProvider>
  );
}

ProviderWrapper.propTypes = { children: PropTypes.any };
