'use client';
import PropTypes from 'prop-types';

// @project
import ThemeProvider from '@/components/ThemeProvider';
import { ConfigProvider } from '@/contexts/ConfigContext';

/***************************  COMMON - CONFIG, THEME  ***************************/

export default function ProviderWrapper({ children }) {
  return (
    <ConfigProvider>
      <ThemeProvider>
        <main>{children}</main>
      </ThemeProvider>
    </ConfigProvider>
  );
}

ProviderWrapper.propTypes = { children: PropTypes.any };
