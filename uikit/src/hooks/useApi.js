'use client';

import { useState, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';

/***************************  HOOK - USE API  ***************************/

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

export function useApi() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (endpoint, options = {}) => {
      setLoading(true);
      setError(null);

      try {
        const url = `${API_BASE_URL}${endpoint}`;
        const config = {
          headers: {
            'Content-Type': 'application/json',
            ...options.headers
          },
          ...options
        };

        // Add auth token if user is logged in
        if (user?.token) {
          config.headers.Authorization = `Bearer ${user.token}`;
        }

        const response = await fetch(url, config);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { data, error: null };
      } catch (err) {
        const errorMessage = err.message || 'An error occurred';
        setError(errorMessage);
        return { data: null, error: errorMessage };
      } finally {
        setLoading(false);
      }
    },
    [user?.token]
  );

  const get = useCallback(
    (endpoint, options = {}) => {
      return request(endpoint, { method: 'GET', ...options });
    },
    [request]
  );

  const post = useCallback(
    (endpoint, data, options = {}) => {
      return request(endpoint, {
        method: 'POST',
        body: JSON.stringify(data),
        ...options
      });
    },
    [request]
  );

  const put = useCallback(
    (endpoint, data, options = {}) => {
      return request(endpoint, {
        method: 'PUT',
        body: JSON.stringify(data),
        ...options
      });
    },
    [request]
  );

  const del = useCallback(
    (endpoint, options = {}) => {
      return request(endpoint, { method: 'DELETE', ...options });
    },
    [request]
  );

  const patch = useCallback(
    (endpoint, data, options = {}) => {
      return request(endpoint, {
        method: 'PATCH',
        body: JSON.stringify(data),
        ...options
      });
    },
    [request]
  );

  return {
    loading,
    error,
    request,
    get,
    post,
    put,
    delete: del,
    patch
  };
}

export default useApi;
