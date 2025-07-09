import { lazy } from 'react';

// Lazy load das páginas administrativas para melhor performance
export const LazyAdminRoutes = {
  // Dashboard principal
  Dashboard: lazy(() => import('./dashboard/page.jsx')),

  // Analytics
  Analytics: lazy(() => import('./analytics/page.jsx')),

  // Usuários
  Users: lazy(() => import('./users/page.jsx')),

  // Projetos
  Projects: lazy(() => import('./projects/page.jsx')),

  // Configurações
  Settings: lazy(() => import('./settings/page.jsx')),

  // Relatórios
  Reports: lazy(() => import('./reports/page.jsx'))
};

// Preload de rotas críticas
export const preloadCriticalRoutes = () => {
  // Preload dashboard e analytics (mais usados)
  if (typeof window !== 'undefined') {
    import('./dashboard/page.jsx');
    import('./analytics/page.jsx');
  }
};

// Preload baseado em hover/focus
export const preloadOnHover = (routeName) => {
  return {
    onMouseEnter: () => {
      switch (routeName) {
        case 'dashboard':
          import('./dashboard/page.jsx');
          break;
        case 'analytics':
          import('./analytics/page.jsx');
          break;
        case 'users':
          import('./users/page.jsx');
          break;
        case 'projects':
          import('./projects/page.jsx');
          break;
        case 'settings':
          import('./settings/page.jsx');
          break;
        case 'reports':
          import('./reports/page.jsx');
          break;
        default:
          break;
      }
    }
  };
};

export default LazyAdminRoutes;
