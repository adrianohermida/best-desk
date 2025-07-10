'use client';
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

// @project
import Loader from '@/components/Loader';
import ThemeProvider from '@/components/ThemeProvider';
import { ConfigProvider } from '@/contexts/ConfigContext';

/***************************  COMMON - CONFIG, THEME  ***************************/

export default function ProviderWrapper({ children }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // Timeout mais curto para debug
    const timer = setTimeout(() => {
      setLoader(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (loader) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px'
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <ConfigProvider>
      <ThemeProvider>
        <main>{children}</main>
      </ThemeProvider>
    </ConfigProvider>
  );
}

ProviderWrapper.propTypes = { children: PropTypes.any };
