import dynamic from 'next/dynamic';

// Dynamic import for the sections navigation component
const SectionsNavigation = dynamic(() => import('../../components/SectionsNavigation').then((mod) => ({ default: mod.default })));

/***************************  SECTIONS NAVIGATION REGISTRY  ***************************/

export const sectionsNavigationComponents = [
  {
    component: SectionsNavigation,
    name: 'SectionsNavigation',
    category: 'navigation',
    inputs: [
      {
        name: 'showSearch',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show search functionality'
      },
      {
        name: 'showFilters',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show category filters'
      },
      {
        name: 'itemsPerPage',
        type: 'number',
        defaultValue: 12,
        helperText: 'Number of sections per page'
      },
      {
        name: 'defaultCategory',
        type: 'string',
        enum: ['', 'marketing', 'feature', 'essential'],
        defaultValue: '',
        helperText: 'Default category filter'
      },
      {
        name: 'enableLoadMore',
        type: 'boolean',
        defaultValue: false,
        helperText: 'Enable load more mode instead of pagination'
      }
    ],
    canHaveChildren: false
  }
];

export default sectionsNavigationComponents;
