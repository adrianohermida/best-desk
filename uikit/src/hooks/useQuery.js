'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

/***************************  HOOKS - QUERY  ***************************/

/**
 * Custom hook for data fetching with caching, refetching, and state management.
 *
 * This hook provides a powerful data fetching solution with:
 * - Automatic caching by query key
 * - Loading and error state management
 * - Manual and automatic refetching
 * - Stale data handling
 * - Request deduplication
 *
 * @param {string|Array} queryKey - Unique identifier for the query
 * @param {Function} queryFn - Function that returns a Promise with the data
 * @param {Object} options - Configuration options
 * @returns {Object} Query state and methods
 */

const queryCache = new Map();
const activeQueries = new Map();

export default function useQuery(queryKey, queryFn, options = {}) {
  const {
    enabled = true,
    staleTime = 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus = true,
    refetchOnMount = true,
    retry = 3,
    retryDelay = 1000,
    onSuccess,
    onError
  } = options;

  const [state, setState] = useState({
    data: null,
    error: null,
    isLoading: true,
    isFetching: false,
    isError: false,
    isSuccess: false,
    isStale: false
  });

  const retryCountRef = useRef(0);
  const mountedRef = useRef(true);

  // Convert queryKey to string if it's an array
  const key = Array.isArray(queryKey) ? JSON.stringify(queryKey) : queryKey;

  // Check if data exists in cache and is not stale
  const getCachedData = useCallback(() => {
    const cached = queryCache.get(key);
    if (!cached) return null;

    const isStale = Date.now() - cached.timestamp > staleTime;
    return { ...cached, isStale };
  }, [key, staleTime]);

  // Execute the query function
  const executeQuery = useCallback(
    async (isRefetch = false) => {
      if (!enabled || !queryFn) return;

      // Check if there's already an active query for this key
      if (activeQueries.has(key) && !isRefetch) {
        return activeQueries.get(key);
      }

      const cached = getCachedData();

      // If we have fresh cached data and this is not a refetch, use it
      if (cached && !cached.isStale && !isRefetch) {
        setState((prev) => ({
          ...prev,
          data: cached.data,
          isLoading: false,
          isFetching: false,
          isSuccess: true,
          isError: false,
          error: null,
          isStale: false
        }));
        return;
      }

      // Set loading/fetching state
      setState((prev) => ({
        ...prev,
        isFetching: true,
        isLoading: !cached?.data,
        isStale: !!cached?.isStale
      }));

      const queryPromise = (async () => {
        try {
          const result = await queryFn();

          if (!mountedRef.current) return;

          // Cache the result
          queryCache.set(key, {
            data: result,
            timestamp: Date.now()
          });

          // Update state
          setState({
            data: result,
            error: null,
            isLoading: false,
            isFetching: false,
            isError: false,
            isSuccess: true,
            isStale: false
          });

          // Reset retry count on success
          retryCountRef.current = 0;

          // Call success callback
          if (onSuccess) {
            onSuccess(result);
          }

          return result;
        } catch (error) {
          if (!mountedRef.current) return;

          retryCountRef.current += 1;

          // Retry logic
          if (retryCountRef.current <= retry) {
            setTimeout(() => {
              if (mountedRef.current) {
                executeQuery(isRefetch);
              }
            }, retryDelay * retryCountRef.current);
            return;
          }

          // Update error state
          setState((prev) => ({
            ...prev,
            error,
            isLoading: false,
            isFetching: false,
            isError: true,
            isSuccess: false
          }));

          // Call error callback
          if (onError) {
            onError(error);
          }

          throw error;
        } finally {
          activeQueries.delete(key);
        }
      })();

      activeQueries.set(key, queryPromise);
      return queryPromise;
    },
    [enabled, queryFn, key, getCachedData, retry, retryDelay, onSuccess, onError]
  );

  // Refetch function
  const refetch = useCallback(() => {
    retryCountRef.current = 0;
    return executeQuery(true);
  }, [executeQuery]);

  // Invalidate cache
  const invalidate = useCallback(() => {
    queryCache.delete(key);
    refetch();
  }, [key, refetch]);

  // Initial fetch on mount
  useEffect(() => {
    if (refetchOnMount) {
      executeQuery();
    }
  }, [executeQuery, refetchOnMount]);

  // Refetch on window focus
  useEffect(() => {
    if (!refetchOnWindowFocus) return;

    const handleFocus = () => {
      const cached = getCachedData();
      if (cached?.isStale) {
        executeQuery(true);
      }
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [refetchOnWindowFocus, executeQuery, getCachedData]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return {
    ...state,
    refetch,
    invalidate,

    // Computed properties
    isIdle: !state.isLoading && !state.isFetching && !state.data && !state.error,
    isInitialLoading: state.isLoading && !state.data
  };
}

// Utility function to clear all cache
export const clearQueryCache = () => {
  queryCache.clear();
};

// Utility function to invalidate specific query
export const invalidateQuery = (queryKey) => {
  const key = Array.isArray(queryKey) ? JSON.stringify(queryKey) : queryKey;
  queryCache.delete(key);
};
