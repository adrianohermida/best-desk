'use client';

import { useState, useCallback } from 'react';
import { useApi } from './useApi';

/***************************  HOOK - USE MUTATION  ***************************/

export function useMutation(mutationFn, options = {}) {
  const { onSuccess, onError, onSettled, retry = 0, retryDelay = 1000 } = options;

  const api = useApi();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setIsError(false);
    setIsSuccess(false);
  }, []);

  const mutate = useCallback(
    async (variables, mutationOptions = {}) => {
      const { onSuccess: localOnSuccess, onError: localOnError, onSettled: localOnSettled } = mutationOptions;

      setIsLoading(true);
      setError(null);
      setIsError(false);
      setIsSuccess(false);

      let attempt = 0;
      const maxAttempts = retry + 1;

      const attemptMutation = async () => {
        try {
          let result;

          if (typeof mutationFn === 'function') {
            result = await mutationFn(variables, api);
          } else {
            throw new Error('MutationFn must be a function');
          }

          if (result.error) {
            throw new Error(result.error);
          }

          setData(result.data || result);
          setIsSuccess(true);

          // Call success callbacks
          if (localOnSuccess) {
            localOnSuccess(result.data || result, variables);
          }
          if (onSuccess) {
            onSuccess(result.data || result, variables);
          }

          return result;
        } catch (err) {
          const errorMessage = err.message || 'Mutation failed';

          // Retry logic
          if (attempt < maxAttempts - 1) {
            attempt += 1;
            await new Promise((resolve) => setTimeout(resolve, retryDelay * attempt));
            return attemptMutation();
          }

          setError(errorMessage);
          setIsError(true);

          // Call error callbacks
          if (localOnError) {
            localOnError(err, variables);
          }
          if (onError) {
            onError(err, variables);
          }

          throw err;
        } finally {
          setIsLoading(false);

          // Call settled callbacks
          if (localOnSettled) {
            localOnSettled(data, error, variables);
          }
          if (onSettled) {
            onSettled(data, error, variables);
          }
        }
      };

      return attemptMutation();
    },
    [mutationFn, api, retry, retryDelay, onSuccess, onError, onSettled, data, error]
  );

  const mutateAsync = useCallback(
    async (variables, mutationOptions = {}) => {
      return mutate(variables, mutationOptions);
    },
    [mutate]
  );

  return {
    mutate,
    mutateAsync,
    data,
    error,
    isLoading,
    isError,
    isSuccess,
    reset
  };
}

// Helper mutations for common HTTP methods
export function usePostMutation(endpoint, options = {}) {
  const api = useApi();

  return useMutation(async (data) => {
    return api.post(endpoint, data);
  }, options);
}

export function usePutMutation(endpoint, options = {}) {
  const api = useApi();

  return useMutation(async (data) => {
    return api.put(endpoint, data);
  }, options);
}

export function useDeleteMutation(endpoint, options = {}) {
  const api = useApi();

  return useMutation(async (id) => {
    const deleteEndpoint = id ? `${endpoint}/${id}` : endpoint;
    return api.delete(deleteEndpoint);
  }, options);
}

export function usePatchMutation(endpoint, options = {}) {
  const api = useApi();

  return useMutation(async (data) => {
    return api.patch(endpoint, data);
  }, options);
}

export default useMutation;
