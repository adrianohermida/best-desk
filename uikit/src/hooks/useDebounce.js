'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for debouncing values
 * Useful for search inputs, API calls, etc.
 */
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

/**
 * Hook for debouncing function calls
 */
export const useDebouncedCallback = (callback, delay, deps = []) => {
  const timeoutRef = useRef(null);

  const debouncedCallback = useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay, ...deps]
  );

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Cancel pending debounced calls
  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  // Immediately execute the callback
  const flush = useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      callback(...args);
    },
    [callback]
  );

  return {
    debouncedCallback,
    cancel,
    flush
  };
};

/**
 * Hook for debouncing async operations
 */
export const useDebouncedAsync = (asyncFunction, delay, deps = []) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const timeoutRef = useRef(null);
  const cancelTokenRef = useRef(null);

  const execute = useCallback(
    async (...args) => {
      // Cancel previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Cancel previous request
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancelled = true;
      }

      // Create new cancel token
      const cancelToken = { cancelled: false };
      cancelTokenRef.current = cancelToken;

      timeoutRef.current = setTimeout(async () => {
        if (cancelToken.cancelled) return;

        setIsLoading(true);
        setError(null);

        try {
          const result = await asyncFunction(...args);

          if (!cancelToken.cancelled) {
            setData(result);
          }
        } catch (err) {
          if (!cancelToken.cancelled) {
            setError(err);
          }
        } finally {
          if (!cancelToken.cancelled) {
            setIsLoading(false);
          }
        }
      }, delay);
    },
    [asyncFunction, delay, ...deps]
  );

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (cancelTokenRef.current) {
      cancelTokenRef.current.cancelled = true;
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    return () => {
      cancel();
    };
  }, [cancel]);

  return {
    execute,
    cancel,
    isLoading,
    data,
    error
  };
};

/**
 * Hook for debouncing search functionality
 */
export const useDebouncedSearch = (searchFunction, delay = 300) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);

  const debouncedQuery = useDebounce(query, delay);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    const performSearch = async () => {
      setIsSearching(true);
      setError(null);

      try {
        const searchResults = await searchFunction(debouncedQuery);
        setResults(searchResults);
      } catch (err) {
        setError(err);
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    performSearch();
  }, [debouncedQuery, searchFunction]);

  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
    setError(null);
  }, []);

  return {
    query,
    setQuery,
    results,
    isSearching,
    error,
    clearSearch
  };
};

export default useDebounce;
