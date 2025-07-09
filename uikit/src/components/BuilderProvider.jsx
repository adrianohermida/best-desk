'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Builder } from '@builder.io/react';
import { BUILDER_CONFIG } from '@/lib/builder/config';
import { registerBuilderComponents } from '@/lib/builder/register-components';

/***************************  BUILDER.IO PROVIDER  ***************************/

export default function BuilderProvider({ children }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState({
    loading: true,
    success: false,
    error: null,
    componentCount: 0
  });

  useEffect(() => {
    let isMounted = true;

    async function initializeBuilder() {
      try {
        // Set Builder.io API key
        if (BUILDER_CONFIG.apiKey && BUILDER_CONFIG.apiKey !== 'your-builder-api-key-here') {
          Builder.init(BUILDER_CONFIG.apiKey);

          // Register custom components
          const result = await registerBuilderComponents();

          if (isMounted) {
            setRegistrationStatus({
              loading: false,
              success: result.success,
              error: result.error || null,
              componentCount: result.registered || 0
            });

            setIsInitialized(true);

            // Log success in development
            if (process.env.NODE_ENV === 'development') {
              console.info('🎨 Builder.io Provider initialized:', {
                apiKey: BUILDER_CONFIG.apiKey.substring(0, 8) + '...',
                components: result.registered,
                success: result.success
              });
            }
          }
        } else {
          if (isMounted) {
            setRegistrationStatus({
              loading: false,
              success: false,
              error: 'Builder.io API key not configured',
              componentCount: 0
            });
          }
        }
      } catch (error) {
        if (isMounted) {
          setRegistrationStatus({
            loading: false,
            success: false,
            error: error.message,
            componentCount: 0
          });
        }
        console.error('Builder.io Provider initialization failed:', error);
      }
    }

    initializeBuilder();

    return () => {
      isMounted = false;
    };
  }, []);

  // In development, show registration status
  if (process.env.NODE_ENV === 'development' && !registrationStatus.loading) {
    if (!registrationStatus.success) {
      console.warn('⚠️ Builder.io components not registered:', registrationStatus.error);
    }
  }

  return (
    <>
      {children}
      {/* Development helper - shows registration status */}
      {process.env.NODE_ENV === 'development' && isInitialized && (
        <div
          style={{
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            padding: '8px 12px',
            backgroundColor: registrationStatus.success ? '#22c55e' : '#ef4444',
            color: 'white',
            borderRadius: '6px',
            fontSize: '12px',
            zIndex: 9999,
            fontFamily: 'monospace'
          }}
        >
          Builder.io: {registrationStatus.success ? `${registrationStatus.componentCount} components` : 'Failed'}
        </div>
      )}
    </>
  );
}

BuilderProvider.propTypes = {
  children: PropTypes.node.isRequired
};
