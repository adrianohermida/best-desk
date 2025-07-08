// Builder.io configuration

export const BUILDER_CONFIG = {
  // API Key from environment variables
  apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY,

  // Available models for Builder.io
  models: {
    page: 'page',
    section: 'section'
  },

  // Default configuration for content fetching
  defaultOptions: {
    includeRefs: true,
    excludeHidden: true
  },

  // Preview configuration
  preview: {
    enabled: true,
    previewPath: '/preview'
  }
};

// Validation function to ensure API key is configured
export function validateBuilderConfig() {
  if (!BUILDER_CONFIG.apiKey || BUILDER_CONFIG.apiKey === 'your-builder-api-key-here') {
    console.warn('⚠️ BUILDER.IO: API key not configured. Add your API key to .env file.');
    return false;
  }
  return true;
}
