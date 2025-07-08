// Builder.io Component Registry - Modular Version
// This file now imports from the organized registry structure

import { customComponents, registryMetadata, componentsByCategory } from './src/builder-registry';

// Export the main registry for Builder.io integration
export { customComponents };

// Export additional utilities for development and debugging
export { componentsByCategory, registryMetadata, getComponentNames, findComponent, getComponentsByType } from './src/builder-registry';

// Default export for Builder.io
export default customComponents;

// Legacy support - some imports might still use this pattern
export const builderComponents = customComponents;

/***************************  REGISTRY INFORMATION  ***************************/

// Log registry information in development
if (process.env.NODE_ENV === 'development') {
  console.group('🎨 Builder.io Registry Information');
  console.info('Total Components:', registryMetadata.totalComponents);
  console.info('Categories:', registryMetadata.categories);
  console.info('Components by Category:', registryMetadata.categoryCounts);
  console.groupEnd();
}
