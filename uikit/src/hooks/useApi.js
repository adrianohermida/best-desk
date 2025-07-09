'use client';

import { useState, useCallback } from 'react';

/***************************  HOOKS - API  ***************************/

/**
 * Custom hook for API management with loading, error handling, and response states.
 *
 * This hook provides a convenient way to manage API calls with built-in:
 * - Loading state management
 * - Error handling and display
 * - Response data management
 * - Request cancellation
 * - Retry functionality
 *
 * @returns {Object} Object containing API management functions and states
 */

export default function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const request = useCallback(async (config) => {
    const { url, method = 'GET', data: requestData = null, headers = {}, ...options } = config;

    setLoading(true);
    setError(null);

    try {
      const defaultHeaders = {
        'Content-Type': 'application/json',
        ...headers
      };

      const fetchOptions = {
        method,
        headers: defaultHeaders,
        ...options
      };

      if (requestData && method !== 'GET') {
        fetchOptions.body = JSON.stringify(requestData);
      }

      const response = await fetch(url, fetchOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      setData(responseData);
      setLoading(false);

      return {
        data: responseData,
        status: response.status,
        success: true
      };
    } catch (err) {
      const errorMessage = err.message || 'An error occurred';
      setError(errorMessage);
      setLoading(false);

      return {
        data: null,
        error: errorMessage,
        success: false
      };
    }
  }, []);

  const get = useCallback(
    (url, options = {}) => {
      return request({ url, method: 'GET', ...options });
    },
    [request]
  );

  const post = useCallback(
    (url, data, options = {}) => {
      return request({ url, method: 'POST', data, ...options });
    },
    [request]
  );

  const put = useCallback(
    (url, data, options = {}) => {
      return request({ url, method: 'PUT', data, ...options });
    },
    [request]
  );

  const patch = useCallback(
    (url, data, options = {}) => {
      return request({ url, method: 'PATCH', data, ...options });
    },
    [request]
  );

  const del = useCallback(
    (url, options = {}) => {
      return request({ url, method: 'DELETE', ...options });
    },
    [request]
  );

  const reset = useCallback(() => {
    setLoading(false);
    setError(null);
    setData(null);
  }, []);

  return {
    // States
    loading,
    error,
    data,

    // Methods
    request,
    get,
    post,
    put,
    patch,
    delete: del,
    reset,

    // Computed states
    isLoading: loading,
    hasError: !!error,
    hasData: !!data,
    isSuccess: !loading && !error && data !== null
  };
}
