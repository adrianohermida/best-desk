import { useEffect, useState, useCallback } from 'react';

/**
 * Hook para otimização de carregamento de página
 */
export function usePageLoadOptimization(options = {}) {
  const { enablePreload = true, enablePrefetch = true, enableResourceHints = true, enablePerformanceMonitoring = true } = options;

  const [loadingState, setLoadingState] = useState({
    isInitialLoad: true,
    loadTime: 0,
    criticalResourcesLoaded: false,
    allResourcesLoaded: false
  });

  // Preload de recursos críticos
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreload || typeof window === 'undefined') return;

    const criticalResources = [
      // CSS crítico
      { href: '/_next/static/css/app.css', as: 'style' },
      // Fonts importantes
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      // Imagens above-the-fold
      { href: '/images/hero-bg.webp', as: 'image' }
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      Object.assign(link, resource);
      document.head.appendChild(link);
    });
  }, [enablePreload]);

  // Prefetch de recursos secundários
  const prefetchSecondaryResources = useCallback(() => {
    if (!enablePrefetch || typeof window === 'undefined') return;

    const secondaryResources = ['/_next/static/chunks/pages/_app.js', '/_next/static/chunks/main.js'];

    secondaryResources.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    });
  }, [enablePrefetch]);

  // Adicionar resource hints
  const addResourceHints = useCallback(() => {
    if (!enableResourceHints || typeof window === 'undefined') return;

    const hints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
    ];

    hints.forEach((hint) => {
      if (!document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`)) {
        const link = document.createElement('link');
        Object.assign(link, hint);
        document.head.appendChild(link);
      }
    });
  }, [enableResourceHints]);

  // Monitorar performance
  const monitorPerformance = useCallback(() => {
    if (!enablePerformanceMonitoring || typeof window === 'undefined') return;

    const startTime = performance.now();

    // Monitorar DOM Content Loaded
    const handleDOMContentLoaded = () => {
      setLoadingState((prev) => ({
        ...prev,
        criticalResourcesLoaded: true,
        loadTime: performance.now() - startTime
      }));
    };

    // Monitorar Load completo
    const handleWindowLoad = () => {
      setLoadingState((prev) => ({
        ...prev,
        allResourcesLoaded: true,
        isInitialLoad: false,
        loadTime: performance.now() - startTime
      }));
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    } else {
      handleDOMContentLoaded();
    }

    if (document.readyState === 'complete') {
      handleWindowLoad();
    } else {
      window.addEventListener('load', handleWindowLoad);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
      window.removeEventListener('load', handleWindowLoad);
    };
  }, [enablePerformanceMonitoring]);

  // Otimizar carregamento de imagens
  const optimizeImageLoading = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Lazy loading para imagens fora da viewport
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          });
        },
        {
          rootMargin: '50px'
        }
      );

      images.forEach((img) => imageObserver.observe(img));
    }
  }, []);

  // Inicialização
  useEffect(() => {
    const cleanup = monitorPerformance();

    // Executar otimizações
    preloadCriticalResources();
    addResourceHints();

    // Prefetch após um delay para não bloquear recursos críticos
    setTimeout(() => {
      prefetchSecondaryResources();
      optimizeImageLoading();
    }, 1000);

    return cleanup;
  }, [monitorPerformance, preloadCriticalResources, addResourceHints, prefetchSecondaryResources, optimizeImageLoading]);

  return {
    loadingState,
    isLoading: loadingState.isInitialLoad,
    loadTime: loadingState.loadTime,
    criticalResourcesLoaded: loadingState.criticalResourcesLoaded,
    allResourcesLoaded: loadingState.allResourcesLoaded
  };
}

/**
 * Hook para otimização de componentes lazy
 */
export function useLazyComponentOptimization() {
  const [visibleComponents, setVisibleComponents] = useState(new Set());

  const registerComponent = useCallback((componentId) => {
    setVisibleComponents((prev) => new Set([...prev, componentId]));
  }, []);

  const isComponentVisible = useCallback(
    (componentId) => {
      return visibleComponents.has(componentId);
    },
    [visibleComponents]
  );

  return {
    registerComponent,
    isComponentVisible,
    visibleComponentCount: visibleComponents.size
  };
}

export default usePageLoadOptimization;
