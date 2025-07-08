// Builder.io configuration

export const BUILDER_CONFIG = {
  // API Key from environment variables
  apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,

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
} as const;

// Validation function to ensure API key is configured
export function validateBuilderConfig() {
  if (!BUILDER_CONFIG.apiKey) {
    throw new Error('NEXT_PUBLIC_BUILDER_API_KEY is not configured. Please add your Builder.io API key to the .env file.');
  }
  return true;
}
