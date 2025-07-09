'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useApi } from './useApi';

/***************************  HOOK - USE QUERY  ***************************/

export function useQuery(key, queryFn, options = {}) {
  const {
    enabled = true,
    staleTime = 5 * 60 * 1000, // 5 minutes
    cacheTime = 10 * 60 * 1000, // 10 minutes
    retry = 3,
    retryDelay = 1000,
    refetchOnWindowFocus = true,
    onSuccess,
    onError
  } = options;

  const { get } = useApi();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(enabled);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [lastFetch, setLastFetch] = useState(null);
  const retryCount = useRef(0);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const fetchData = useCallback(
    async (isRefetch = false) => {
      if (!enabled) return;

      // Check if data is still fresh
      if (!isRefetch && data && lastFetch && Date.now() - lastFetch < staleTime) {
        return;
      }

      setIsFetching(true);
      if (!isRefetch) setIsLoading(true);
      setIsError(false);
      setError(null);

      try {
        let result;
        if (typeof queryFn === 'function') {
          result = await queryFn();
        } else if (typeof queryFn === 'string') {
          result = await get(queryFn);
        } else {
          throw new Error('QueryFn must be a function or string endpoint');
        }

        if (!mounted.current) return;

        if (result.error) {
          throw new Error(result.error);
        }

        setData(result.data);
        setLastFetch(Date.now());
        retryCount.current = 0;

        if (onSuccess) {
          onSuccess(result.data);
        }
      } catch (err) {
        if (!mounted.current) return;

        const errorMessage = err.message || 'Query failed';
        setError(errorMessage);
        setIsError(true);

        if (onError) {
          onError(err);
        }

        // Retry logic
        if (retryCount.current < retry) {
          retryCount.current += 1;
          setTimeout(() => {
            if (mounted.current) {
              fetchData(isRefetch);
            }
          }, retryDelay * retryCount.current);
        }
      } finally {
        if (mounted.current) {
          setIsLoading(false);
          setIsFetching(false);
        }
      }
    },
    [enabled, queryFn, get, data, lastFetch, staleTime, retry, retryDelay, onSuccess, onError]
  );

  const refetch = useCallback(() => {
    return fetchData(true);
  }, [fetchData]);

  // Initial fetch
  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [fetchData, enabled]);

  // Refetch on window focus
  useEffect(() => {
    if (!refetchOnWindowFocus) return;

    const handleFocus = () => {
      if (enabled && data) {
        fetchData(true);
      }
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [refetchOnWindowFocus, enabled, data, fetchData]);

  return {
    data,
    isLoading,
    error,
    isError,
    isFetching,
    refetch,
    isStale: lastFetch ? Date.now() - lastFetch > staleTime : true
  };
}

export default useQuery;
