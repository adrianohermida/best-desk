import { useState, useEffect, useMemo, lazy } from 'react';

/**
 * Hook para lazy loading dinâmico de componentes
 * @param {Function} importFn - Função de import dinâmico
 * @param {Object} options - Opções de configuração
 * @returns {Object} - Componente lazy e estado de loading
 */
export function useLazyComponent(importFn, options = {}) {
  const { fallback = null, retryCount = 3, retryDelay = 1000, preload = false } = options;

  const [error, setError] = useState(null);
  const [retries, setRetries] = useState(0);

  // Cria componente lazy com retry logic
  const LazyComponent = useMemo(() => {
    return lazy(async () => {
      try {
        const module = await importFn();
        setError(null);
        setRetries(0);
        return module;
      } catch (err) {
        if (retries < retryCount) {
          setRetries((prev) => prev + 1);
          await new Promise((resolve) => setTimeout(resolve, retryDelay * (retries + 1)));
          throw err; // Retry será feito pelo React.lazy
        }
        setError(err);
        throw err;
      }
    });
  }, [importFn, retries, retryCount, retryDelay]);

  // Preload se necessário
  useEffect(() => {
    if (preload) {
      importFn().catch(() => {}); // Silent preload
    }
  }, [preload, importFn]);

  return {
    Component: LazyComponent,
    error,
    retries,
    retry: () => setRetries(0)
  };
}

/**
 * Hook para lazy loading baseado em intersecção (viewport)
 * @param {Object} options - Opções do IntersectionObserver
 * @returns {Object} - Ref e estado de visibilidade
 */
export function useLazyIntersection(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.1,
        ...options
      }
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, options]);

  return { ref: setRef, isVisible };
}

/**
 * Hook para lazy loading de imagens
 * @param {string} src - URL da imagem
 * @param {Object} options - Opções de lazy loading
 * @returns {Object} - Estado da imagem e funções de controle
 */
export function useLazyImage(src, options = {}) {
  const { placeholder = '', threshold = 0.1 } = options;
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const { ref, isVisible } = useLazyIntersection({ threshold });

  useEffect(() => {
    if (!isVisible || !src) return;

    const img = new Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setError(true);
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [isVisible, src]);

  return {
    ref,
    src: loaded ? src : placeholder,
    loaded,
    error,
    isVisible
  };
}

export default useLazyComponent;
