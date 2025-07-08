'use client';

import { useCallback } from 'react';

const useErrorHandler = () => {
  const handleError = useCallback((error, context = {}) => {
    // Log error details
    console.error('Error handled:', {
      message: error.message,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString()
    });

    // In production, send to error tracking service
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry, LogRocket, etc.
      // errorTrackingService.captureException(error, { extra: context });
    }

    // Show user-friendly error message
    return {
      message: getUserFriendlyMessage(error),
      shouldRetry: shouldAllowRetry(error)
    };
  }, []);

  const handleAsyncError = useCallback(
    async (asyncFn, context = {}) => {
      try {
        return await asyncFn();
      } catch (error) {
        const errorInfo = handleError(error, context);
        throw new Error(errorInfo.message);
      }
    },
    [handleError]
  );

  return {
    handleError,
    handleAsyncError
  };
};

// Helper functions
const getUserFriendlyMessage = (error) => {
  if (error.message?.includes('Network Error')) {
    return 'Problema de conexão. Verifique sua internet e tente novamente.';
  }

  if (error.message?.includes('404')) {
    return 'Conteúdo não encontrado.';
  }

  if (error.message?.includes('403') || error.message?.includes('401')) {
    return 'Você não tem permissão para acessar este conteúdo.';
  }

  if (error.message?.includes('500')) {
    return 'Erro interno do servidor. Tente novamente em alguns minutos.';
  }

  return 'Ocorreu um erro inesperado. Tente novamente.';
};

const shouldAllowRetry = (error) => {
  // Don't retry on client errors (4xx), but do retry on server errors (5xx) and network errors
  return (
    !error.message?.includes('400') && !error.message?.includes('401') && !error.message?.includes('403') && !error.message?.includes('404')
  );
};

export default useErrorHandler;
