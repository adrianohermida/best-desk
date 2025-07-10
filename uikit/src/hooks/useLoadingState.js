'use client';
import { useState, useEffect, useCallback } from 'react';

/***************************  LOADING STATE HOOK  ***************************/

/**
 * Enhanced loading state management with performance tracking
 * @param {string} key - Unique identifier for the loading state
 * @param {number} timeout - Timeout in milliseconds
 * @returns {Object} Loading state and control functions
 */
export function useLoadingState(key = 'default', timeout = 30000) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [loadTime, setLoadTime] = useState(null);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setError(null);
    setStartTime(Date.now());
    setLoadTime(null);
  }, []);

  const stopLoading = useCallback(() => {
    if (startTime) {
      setLoadTime(Date.now() - startTime);
    }
    setIsLoading(false);
  }, [startTime]);

  const setLoadingError = useCallback(
    (err) => {
      setError(err);
      setIsLoading(false);
      console.error(`Loading error for ${key}:`, err);
    },
    [key]
  );

  // Timeout handling
  useEffect(() => {
    if (!isLoading) return;

    const timeoutId = setTimeout(() => {
      setLoadingError(new Error(`Loading timeout after ${timeout}ms`));
    }, timeout);

    return () => clearTimeout(timeoutId);
  }, [isLoading, timeout, setLoadingError]);

  // Performance logging in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && loadTime) {
      console.log(`Loading completed for ${key}: ${loadTime}ms`);
    }
  }, [key, loadTime]);

  return {
    isLoading,
    error,
    loadTime,
    startLoading,
    stopLoading,
    setError: setLoadingError,
    retry: () => {
      setError(null);
      startLoading();
    }
  };
}

export default useLoadingState;
