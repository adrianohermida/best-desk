'use client';

import { useState, useCallback, useRef } from 'react';

/***************************  HOOKS - MUTATION  ***************************/

/**
 * Custom hook for data mutations with state management and callbacks.
 *
 * This hook provides a powerful mutation solution with:
 * - Loading and error state management
 * - Success and error callbacks
 * - Optimistic updates support
 * - Request deduplication
 * - Retry functionality
 *
 * @param {Function} mutationFn - Function that performs the mutation
 * @param {Object} options - Configuration options
 * @returns {Object} Mutation state and methods
 */

export default function useMutation(mutationFn, options = {}) {
  const { onSuccess, onError, onMutate, onSettled, retry = 0, retryDelay = 1000 } = options;

  const [state, setState] = useState({
    data: null,
    error: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    isIdle: true
  });

  const retryCountRef = useRef(0);
  const mountedRef = useRef(true);

  // Reset function
  const reset = useCallback(() => {
    setState({
      data: null,
      error: null,
      isLoading: false,
      isError: false,
      isSuccess: false,
      isIdle: true
    });
    retryCountRef.current = 0;
  }, []);

  // Mutate function
  const mutate = useCallback(
    async (variables, mutateOptions = {}) => {
      const { onSuccess: localOnSuccess, onError: localOnError, onMutate: localOnMutate, onSettled: localOnSettled } = mutateOptions;

      // Reset retry count for new mutation
      retryCountRef.current = 0;

      const executeMutation = async () => {
        try {
          // Set loading state
          setState((prev) => ({
            ...prev,
            isLoading: true,
            isError: false,
            isSuccess: false,
            isIdle: false,
            error: null
          }));

          // Call onMutate callbacks
          let optimisticData;
          if (onMutate) {
            optimisticData = await onMutate(variables);
          }
          if (localOnMutate) {
            optimisticData = await localOnMutate(variables);
          }

          // Execute the mutation
          const result = await mutationFn(variables);

          if (!mountedRef.current) return result;

          // Set success state
          setState({
            data: result,
            error: null,
            isLoading: false,
            isError: false,
            isSuccess: true,
            isIdle: false
          });

          // Call success callbacks
          if (onSuccess) {
            await onSuccess(result, variables, optimisticData);
          }
          if (localOnSuccess) {
            await localOnSuccess(result, variables, optimisticData);
          }

          return result;
        } catch (error) {
          if (!mountedRef.current) throw error;

          retryCountRef.current += 1;

          // Retry logic
          if (retryCountRef.current <= retry) {
            setTimeout(() => {
              if (mountedRef.current) {
                executeMutation();
              }
            }, retryDelay * retryCountRef.current);
            return;
          }

          // Set error state
          setState((prev) => ({
            ...prev,
            error,
            isLoading: false,
            isError: true,
            isSuccess: false,
            isIdle: false
          }));

          // Call error callbacks
          if (onError) {
            await onError(error, variables);
          }
          if (localOnError) {
            await localOnError(error, variables);
          }

          throw error;
        } finally {
          // Call settled callbacks
          if (onSettled) {
            await onSettled(state.data, state.error, variables);
          }
          if (localOnSettled) {
            await localOnSettled(state.data, state.error, variables);
          }
        }
      };

      return executeMutation();
    },
    [mutationFn, onSuccess, onError, onMutate, onSettled, retry, retryDelay, state.data, state.error]
  );

  // Async version of mutate that returns a promise
  const mutateAsync = useCallback(
    async (variables, options) => {
      return mutate(variables, options);
    },
    [mutate]
  );

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return {
    ...state,
    mutate,
    mutateAsync,
    reset,

    // Computed properties
    isIdle: state.isIdle,
    isPending: state.isLoading
  };
}

// Higher-order function to create a mutation with predefined function
export const createMutation = (mutationFn, defaultOptions = {}) => {
  return (options = {}) => {
    const mergedOptions = { ...defaultOptions, ...options };
    return useMutation(mutationFn, mergedOptions);
  };
};

// Utility hook for common CRUD mutations
export const useCrudMutations = (baseUrl, options = {}) => {
  const { onSuccess, onError, ...restOptions } = options;

  const createMutation = useMutation(
    async (data) => {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to create');
      return response.json();
    },
    { onSuccess, onError, ...restOptions }
  );

  const updateMutation = useMutation(
    async ({ id, data }) => {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to update');
      return response.json();
    },
    { onSuccess, onError, ...restOptions }
  );

  const deleteMutation = useMutation(
    async (id) => {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete');
      return response.json();
    },
    { onSuccess, onError, ...restOptions }
  );

  return {
    create: createMutation,
    update: updateMutation,
    delete: deleteMutation
  };
};
