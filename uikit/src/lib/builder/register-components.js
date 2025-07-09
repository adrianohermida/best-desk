'use client';

import { Builder } from '@builder.io/react';
import { customComponents } from '@/builder-registry';

/***************************  BUILDER.IO COMPONENT REGISTRATION  ***************************/

let registrationPromise = null;
let isRegistered = false;

/**
 * Register all custom components with Builder.io
 * This function ensures components are only registered once
 */
export async function registerBuilderComponents() {
  // Prevent multiple registrations
  if (isRegistered) {
    return;
  }

  // Return existing promise if registration is in progress
  if (registrationPromise) {
    return registrationPromise;
  }

  registrationPromise = performRegistration();
  return registrationPromise;
}

async function performRegistration() {
  try {
    console.info('🎨 Starting Builder.io component registration...');

    let registeredCount = 0;
    let skippedCount = 0;

    // Register each component from the registry
    for (const componentConfig of customComponents) {
      try {
        // Validate component configuration
        if (!componentConfig.component || !componentConfig.name) {
          console.warn(`⚠️ Invalid component config:`, componentConfig);
          skippedCount++;
          continue;
        }

        // Register component with Builder.io
        Builder.registerComponent(componentConfig.component, {
          name: componentConfig.name,
          inputs: componentConfig.inputs || [],
          image: componentConfig.image || '',
          description: componentConfig.description || '',
          defaultStyles: componentConfig.defaultStyles || {},
          canHaveChildren: componentConfig.canHaveChildren || false,
          childRequirements: componentConfig.childRequirements || {},
          ...componentConfig.builderOptions
        });

        registeredCount++;

        // Optional: Log individual registrations in development
        if (process.env.NODE_ENV === 'development') {
          console.debug(`✅ Registered: ${componentConfig.name}`);
        }
      } catch (error) {
        console.error(`❌ Failed to register component ${componentConfig.name}:`, error);
        skippedCount++;
      }
    }

    isRegistered = true;

    console.info('🎉 Builder.io component registration completed:', {
      total: customComponents.length,
      registered: registeredCount,
      skipped: skippedCount,
      success: registeredCount > 0
    });

    return {
      success: true,
      registered: registeredCount,
      skipped: skippedCount,
      total: customComponents.length
    };
  } catch (error) {
    console.error('💥 Builder.io component registration failed:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Check if components are registered
 */
export function areComponentsRegistered() {
  return isRegistered;
}

/**
 * Force re-registration (useful for development)
 */
export function forceReregister() {
  isRegistered = false;
  registrationPromise = null;
  return registerBuilderComponents();
}

/***************************  AUTO-REGISTRATION  ***************************/

// Auto-register components when this module is imported
if (typeof window !== 'undefined') {
  // Only register in browser environment
  registerBuilderComponents().catch((error) => {
    console.error('Failed to auto-register Builder.io components:', error);
  });
}

export default {
  registerBuilderComponents,
  areComponentsRegistered,
  forceReregister
};
