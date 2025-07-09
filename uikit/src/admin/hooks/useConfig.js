import { useContext } from 'react';

// @project
import { ConfigContext } from '../contexts/ConfigContext';

/***************************  HOOKS - CONFIG  ***************************/

/**
 * Custom hook to access the configuration context.
 *
 * This hook provides a convenient way to access the global configuration
 * state managed by the ConfigProvider. It can be used throughout the application
 * to retrieve configuration settings such as theme mode, layout options, etc.
 *
 * @returns {Object} The configuration object from the ConfigContext.
 *
 * @throws {Error} Throws an error if used outside of a ConfigProvider.
 *
 * @example
 * ```jsx
 * function MyComponent() {
 *   const { mode, themeDirection } = useConfig();
 *
 *   return (
 *     <div>
 *       Current mode: {mode}
 *       Direction: {themeDirection}
 *     </div>
 *   );
 * }
 * ```
 */

export default function useConfig() {
  const context = useContext(ConfigContext);

  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }

  return context;
}
