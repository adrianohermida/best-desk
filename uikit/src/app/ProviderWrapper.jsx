'use client';
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

// @project
import Loader from '@/components/Loader';
import ThemeProvider from '@/components/ThemeProvider';
import BuilderProvider from '@/components/BuilderProvider';
import { ConfigProvider } from '@/contexts/ConfigContext';
import { AppProvider } from '@/contexts/AppContext';
import { AuthProvider } from '@/contexts/AuthContext';

/***************************  COMMON - CONFIG, THEME  ***************************/

export default function ProviderWrapper({ children }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);
  }, []);

  /**
   * A loader is needed here to initialize the configuration from localStorage and set the default theme.
   * Without a loader,
   * the theme palette and fontFamily don't match, resulting in an error like:
   * "Warning: Prop className did not match".
   */

  return (
    <ConfigProvider>
      <AppProvider>
        <ThemeProvider>
          <BuilderProvider>
            <main>{loader ? <Loader /> : children}</main>
          </BuilderProvider>
        </ThemeProvider>
      </AppProvider>
    </ConfigProvider>
  );
}

ProviderWrapper.propTypes = { children: PropTypes.any };
