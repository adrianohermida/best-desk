/**
 * Sistema inteligente de preload de rotas para otimização de performance
 */

// Mapa de prioridades de rotas
const ROUTE_PRIORITIES = {
  critical: ['/', '/sections', '/admin/dashboard'],
  high: ['/admin/analytics', '/admin/users', '/profile'],
  medium: ['/admin/projects', '/admin/settings', '/settings'],
  low: ['/admin/reports', '/templates', '/builder']
};

// Cache de componentes carregados
const loadedComponents = new Set();
const preloadingComponents = new Set();

/**
 * Preload de rota específica
 */
export const preloadRoute = async (route) => {
  if (typeof window === 'undefined') return;

  try {
    const routeMap = {
      '/': () => import('../app/page.jsx'),
      '/sections': () => import('../views/sections/index.jsx'),
      '/admin/dashboard': () => import('../app/(admin)/admin/dashboard/page.jsx'),
      '/admin/analytics': () => import('../app/(admin)/admin/analytics/page.jsx'),
      '/admin/users': () => import('../app/(admin)/admin/users/page.jsx'),
      '/admin/projects': () => import('../app/(admin)/admin/projects/page.jsx'),
      '/admin/settings': () => import('../app/(admin)/admin/settings/page.jsx'),
      '/admin/reports': () => import('../app/(admin)/admin/reports/page.jsx'),
      '/profile': () => import('../app/(user)/profile/page.jsx'),
      '/settings': () => import('../app/(user)/settings/page.jsx'),
      '/templates': () => import('../app/templates/page.jsx'),
      '/builder': () => import('../app/builder/[[...slug]]/page.jsx')
    };

    if (routeMap[route] && !loadedComponents.has(route) && !preloadingComponents.has(route)) {
      preloadingComponents.add(route);
      await routeMap[route]();
      loadedComponents.add(route);
      preloadingComponents.delete(route);
    }
  } catch (error) {
    console.warn(`Failed to preload route ${route}:`, error);
    preloadingComponents.delete(route);
  }
};

/**
 * Preload de múltiplas rotas por prioridade
 */
export const preloadRoutesByPriority = async (priority = 'critical') => {
  const routes = ROUTE_PRIORITIES[priority] || [];

  // Preload em paralelo com throttling
  const chunks = [];
  for (let i = 0; i < routes.length; i += 2) {
    chunks.push(routes.slice(i, i + 2));
  }

  for (const chunk of chunks) {
    await Promise.allSettled(chunk.map(preloadRoute));
    // Pequeno delay entre chunks para não sobrecarregar
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
};

/**
 * Preload baseado em idle time
 */
export const preloadOnIdle = (priority = 'high') => {
  if (typeof window === 'undefined') return;

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      preloadRoutesByPriority(priority);
    });
  } else {
    // Fallback para navegadores sem requestIdleCallback
    setTimeout(() => {
      preloadRoutesByPriority(priority);
    }, 2000);
  }
};

/**
 * Preload baseado em ações do usuário
 */
export const createPreloadHandlers = (route) => ({
  onMouseEnter: () => preloadRoute(route),
  onFocus: () => preloadRoute(route),
  onTouchStart: () => preloadRoute(route)
});

/**
 * Preload inteligente baseado em conexão
 */
export const intelligentPreload = () => {
  if (typeof window === 'undefined') return;

  // Verificar tipo de conexão
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  let priority = 'critical';

  if (connection) {
    // Ajustar preload baseado na velocidade da conexão
    if (connection.effectiveType === '4g' && !connection.saveData) {
      priority = 'high';
    } else if (connection.effectiveType === '3g' || connection.saveData) {
      priority = 'critical';
    } else if (connection.effectiveType === '2g' || connection.saveData) {
      return; // Não fazer preload em conexões muito lentas
    }
  }

  preloadOnIdle(priority);
};

/**
 * Preload de componentes específicos
 */
export const preloadComponents = {
  // Componentes pesados
  framerMotion: () => import('framer-motion'),
  reactSlick: () => import('react-slick'),

  // Lazy blocks
  hero17: () => import('../blocks/hero/LazyHero17.jsx'),
  clientele3: () => import('../blocks/clientele/LazyClientele3.jsx'),
  faq6: () => import('../blocks/faq/LazyFaq6.jsx'),

  // Admin components
  adminLayout: () => import('../admin/layouts/AdminLayout.jsx'),
  adminDashboard: () => import('../admin/components/dashboard')
};

/**
 * Preload de componentes por categoria
 */
export const preloadComponentCategory = async (category) => {
  const categories = {
    animations: ['framerMotion'],
    sliders: ['reactSlick'],
    heroes: ['hero17'],
    faqs: ['faq6'],
    admin: ['adminLayout', 'adminDashboard']
  };

  const components = categories[category] || [];

  for (const component of components) {
    if (preloadComponents[component]) {
      try {
        await preloadComponents[component]();
      } catch (error) {
        console.warn(`Failed to preload component ${component}:`, error);
      }
    }
  }
};

/**
 * Sistema de preload automático
 */
export const initializePreloading = () => {
  if (typeof window === 'undefined') return;

  // Preload crítico imediato
  preloadRoutesByPriority('critical');

  // Preload inteligente baseado em conexão
  setTimeout(() => {
    intelligentPreload();
  }, 1000);

  // Preload de componentes essenciais
  setTimeout(() => {
    preloadComponentCategory('animations');
  }, 2000);
};

/**
 * Hook para componentes React
 */
export const useRoutePreloader = (routes = []) => {
  if (typeof window !== 'undefined') {
    routes.forEach((route) => {
      if (!loadedComponents.has(route)) {
        preloadRoute(route);
      }
    });
  }
};

const routePreloader = {
  preloadRoute,
  preloadRoutesByPriority,
  preloadOnIdle,
  createPreloadHandlers,
  intelligentPreload,
  preloadComponents,
  preloadComponentCategory,
  initializePreloading,
  useRoutePreloader
};

export default routePreloader;
