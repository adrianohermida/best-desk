'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loader from './Loader';

/***************************  OPTIMIZED DYNAMIC COMPONENT  ***************************/

/**
 * Enhanced dynamic wrapper with optimized loading states
 * @param {Function} loader - Dynamic import function
 * @param {Object} options - Dynamic options
 * @param {React.Component} options.loading - Custom loading component
 * @param {boolean} options.ssr - Server-side rendering flag
 * @returns {React.Component} Optimized dynamic component
 */
export function OptimizedDynamic(loader, options = {}) {
  const { loading: LoadingComponent = Loader, ssr = false, ...dynamicOptions } = options;

  const DynamicComponent = dynamic(loader, {
    loading: () => <LoadingComponent />,
    ssr,
    ...dynamicOptions
  });

  // Wrap with Suspense for additional error boundary
  return function OptimizedWrapper(props) {
    return (
      <Suspense fallback={<LoadingComponent />}>
        <DynamicComponent {...props} />
      </Suspense>
    );
  };
}

export default OptimizedDynamic;
