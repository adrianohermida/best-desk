/**
 * Utilitários para otimização e análise de bundle
 */

// Configuração de importações dinâmicas otimizadas
export const optimizedImports = {
  // MUI components - importação seletiva
  muiCore: {
    Button: () => import('@mui/material/Button'),
    TextField: () => import('@mui/material/TextField'),
    Card: () => import('@mui/material/Card'),
    Typography: () => import('@mui/material/Typography'),
    Box: () => import('@mui/material/Box'),
    Stack: () => import('@mui/material/Stack')
  },

  // Tabler Icons - importação seletiva
  tablerIcons: {
    IconUser: () => import('@tabler/icons-react').then((mod) => ({ default: mod.IconUser })),
    IconSettings: () => import('@tabler/icons-react').then((mod) => ({ default: mod.IconSettings })),
    IconDashboard: () => import('@tabler/icons-react').then((mod) => ({ default: mod.IconLayoutGrid })),
    IconChevronDown: () => import('@tabler/icons-react').then((mod) => ({ default: mod.IconChevronDown })),
    IconMenu: () => import('@tabler/icons-react').then((mod) => ({ default: mod.IconMenu2 }))
  },

  // Third-party libs
  framerMotion: {
    motion: () => import('framer-motion').then((mod) => ({ default: mod.motion })),
    AnimatePresence: () => import('framer-motion').then((mod) => ({ default: mod.AnimatePresence })),
    useScroll: () => import('framer-motion').then((mod) => ({ default: mod.useScroll })),
    useTransform: () => import('framer-motion').then((mod) => ({ default: mod.useTransform }))
  },

  reactSlick: () => import('react-slick'),
  swr: () => import('swr'),
  axios: () => import('axios')
};

/**
 * Tree-shaking helper para importações seletivas
 */
export const selectiveImport = async (library, components) => {
  const imports = {};

  for (const component of components) {
    try {
      if (optimizedImports[library] && optimizedImports[library][component]) {
        imports[component] = await optimizedImports[library][component]();
      }
    } catch (error) {
      console.warn(`Failed to import ${component} from ${library}:`, error);
    }
  }

  return imports;
};

/**
 * Análise de bundle size
 */
export const analyzeBundleSize = () => {
  if (typeof window === 'undefined') return null;

  const analysis = {
    totalScripts: 0,
    totalSize: 0,
    chunks: [],
    recommendations: []
  };

  try {
    // Analisar scripts carregados
    const scripts = document.querySelectorAll('script[src]');

    scripts.forEach((script) => {
      const src = script.src;
      if (src.includes('/_next/static/')) {
        analysis.totalScripts++;

        // Extrair informações do chunk
        const chunkMatch = src.match(/chunks\/(.+?)\.js/);
        if (chunkMatch) {
          analysis.chunks.push({
            name: chunkMatch[1],
            url: src,
            type: src.includes('pages') ? 'page' : 'vendor'
          });
        }
      }
    });

    // Recomendações baseadas na análise
    if (analysis.totalScripts > 20) {
      analysis.recommendations.push('Consider code splitting to reduce script count');
    }

    if (analysis.chunks.filter((c) => c.type === 'vendor').length > 5) {
      analysis.recommendations.push('Consider vendor chunk optimization');
    }
  } catch (error) {
    console.warn('Error analyzing bundle size:', error);
  }

  return analysis;
};

/**
 * Otimizador de recursos
 */
export const optimizeResources = {
  // Lazy loading de imagens
  lazyImages: () => {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  },

  // Preload de recursos críticos
  preloadCritical: () => {
    if (typeof window === 'undefined') return;

    const criticalResources = ['/_next/static/css/app.css', '/_next/static/chunks/main.js', '/_next/static/chunks/polyfills.js'];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  },

  // Remove recursos não utilizados
  removeUnused: () => {
    if (typeof window === 'undefined') return;

    // Remove stylesheets não utilizados após um tempo
    setTimeout(() => {
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
      stylesheets.forEach((sheet) => {
        if (!sheet.sheet || sheet.sheet.cssRules.length === 0) {
          console.warn('Unused stylesheet detected:', sheet.href);
        }
      });
    }, 5000);
  }
};

/**
 * Configuração de Service Worker para cache otimizado
 */
export const serviceWorkerConfig = {
  cacheStrategy: {
    // Cache para recursos estáticos (1 ano)
    static: {
      urlPattern: /\/_next\/static\/.+/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'static-resources',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 365 * 24 * 60 * 60 // 1 ano
        }
      }
    },

    // Cache para páginas (1 semana)
    pages: {
      urlPattern: /^https:\/\/.*\.(?:html)$/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'pages',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 7 * 24 * 60 * 60 // 1 semana
        }
      }
    },

    // Cache para APIs (5 minutos)
    api: {
      urlPattern: /^https:\/\/.*\/api\/.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api-cache',
        expiration: {
          maxEntries: 20,
          maxAgeSeconds: 5 * 60 // 5 minutos
        }
      }
    }
  }
};

/**
 * Métricas de performance do bundle
 */
export const getBundleMetrics = () => {
  if (typeof window === 'undefined') return null;

  return {
    loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
    domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
    firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
    firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    resources: performance.getEntriesByType('resource').length,
    memoryUsage: performance.memory
      ? {
          used: performance.memory.usedJSHeapSize,
          total: performance.memory.totalJSHeapSize,
          limit: performance.memory.jsHeapSizeLimit
        }
      : null
  };
};

/**
 * Inicialização das otimizações
 */
export const initializeBundleOptimization = () => {
  if (typeof window === 'undefined') return;

  // Otimizações imediatas
  optimizeResources.preloadCritical();

  // Otimizações após carregamento
  window.addEventListener('load', () => {
    optimizeResources.lazyImages();
    optimizeResources.removeUnused();

    // Log de métricas em desenvolvimento
    if (process.env.NODE_ENV === 'development') {
      console.table(getBundleMetrics());
      console.log('Bundle Analysis:', analyzeBundleSize());
    }
  });
};

export default {
  optimizedImports,
  selectiveImport,
  analyzeBundleSize,
  optimizeResources,
  serviceWorkerConfig,
  getBundleMetrics,
  initializeBundleOptimization
};
