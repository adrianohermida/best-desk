'use client';
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

// @project
import OptimizedLoader from '@/components/OptimizedLoader';
import ThemeProvider from '@/components/ThemeProvider';
import { ConfigProvider } from '@/contexts/ConfigContext';
import { AuthProvider } from '@/contexts/AuthContext';
import usePageLoadOptimization from '@/hooks/usePageLoadOptimization';

/***************************  COMMON - CONFIG, THEME  ***************************/

export default function ProviderWrapper({ children }) {
  const [loader, setLoader] = useState(true);
  const { isLoading, criticalResourcesLoaded } = usePageLoadOptimization({
    enablePreload: true,
    enablePrefetch: true,
    enableResourceHints: true,
    enablePerformanceMonitoring: true
  });

  useEffect(() => {
    // Reduzir tempo de loader inicial
    const timer = setTimeout(() => {
      setLoader(false);
    }, 500); // Reduzido de padrão para 500ms

    return () => clearTimeout(timer);
  }, []);

  // Mostrar loader enquanto recursos críticos não carregaram
  const shouldShowLoader = loader || (isLoading && !criticalResourcesLoaded);

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
