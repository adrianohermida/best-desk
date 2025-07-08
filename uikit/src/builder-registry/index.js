// Modular Builder.io Component Registry
// Organized by category for better maintainability

// Import component categories
import { heroComponents } from './components/hero';
import { featureComponents } from './components/feature';
import { navigationComponents } from './components/navigation';
import { sectionsNavigationComponents } from './components/sections-navigation';
import { ctaComponents } from './components/cta';
import { socialProofComponents } from './components/social-proof';
import { commerceComponents } from './components/commerce';
import { templateComponents } from './components/templates';

/***************************  REGISTRY UTILITIES  ***************************/

// Group components by category for easy filtering
export const componentsByCategory = {
  hero: heroComponents,
  feature: featureComponents,
  navigation: [...navigationComponents, ...sectionsNavigationComponents],
  cta: ctaComponents,
  'social-proof': socialProofComponents,
  commerce: commerceComponents,
  content: commerceComponents.filter((c) => c.category === 'content'),
  templates: templateComponents,
  tools: templateComponents.filter((c) => c.category === 'tools')
};

// Get all component names by category
export const getComponentNames = (category) => {
  return componentsByCategory[category]?.map((c) => c.name) || [];
};

// Find component by name
export const findComponent = (name) => {
  return customComponents.find((c) => c.name === name);
};

// Get components by type
export const getComponentsByType = (type) => {
  return customComponents.filter((c) => c.category === type);
};

/***************************  MAIN REGISTRY  ***************************/

// Combined registry for Builder.io
export const customComponents = [
  ...heroComponents,
  ...featureComponents,
  ...navigationComponents,
  ...sectionsNavigationComponents,
  ...ctaComponents,
  ...socialProofComponents,
  ...commerceComponents,
  ...templateComponents
];

// Registry metadata
export const registryMetadata = {
  totalComponents: customComponents.length,
  categories: Object.keys(componentsByCategory),
  version: '2.0.0',
  lastUpdated: new Date().toISOString(),
  categoryCounts: Object.fromEntries(Object.entries(componentsByCategory).map(([key, components]) => [key, components.length]))
};

// Default export for Builder.io integration
export default customComponents;

/***************************  REGISTRY STATS  ***************************/

console.info('🎨 Builder.io Registry Loaded:', {
  totalComponents: registryMetadata.totalComponents,
  categories: registryMetadata.categories,
  categoryCounts: registryMetadata.categoryCounts
});
