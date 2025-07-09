'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Alert } from '@mui/material';
import { useAppConfig } from '@/hooks/useAppState';

/***************************  FEATURE GUARD  ***************************/

const FeatureGuard = ({
  children,
  feature,
  features = [],
  fallback = null,
  showFallback = true,
  mode = 'any' // 'any' or 'all'
}) => {
  const { hasFeature } = useAppConfig();
  const [hasAccess, setHasAccess] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  // Normalize features array
  const featuresToCheck = feature ? [feature] : features;

  useEffect(() => {
    const checkFeatureAccess = () => {
      setIsChecking(true);

      try {
        if (featuresToCheck.length === 0) {
          // No features to check, allow access
          setHasAccess(true);
          setIsChecking(false);
          return;
        }

        let access = false;

        if (mode === 'all') {
          // All features must be enabled
          access = featuresToCheck.every((feat) => hasFeature(feat));
        } else {
          // Any feature must be enabled (default)
          access = featuresToCheck.some((feat) => hasFeature(feat));
        }

        setHasAccess(access);
      } catch (error) {
        console.error('Feature guard error:', error);
        setHasAccess(false);
      } finally {
        setIsChecking(false);
      }
    };

    checkFeatureAccess();
  }, [featuresToCheck, mode, hasFeature]);

  // Still checking
  if (isChecking) {
    return null; // Or a loading state if needed
  }

  // Has access, show content
  if (hasAccess) {
    return children;
  }

  // No access, show fallback or nothing
  if (!showFallback) {
    return null;
  }

  if (fallback) {
    return fallback;
  }

  // Default fallback
  return (
    <Box sx={{ p: 2 }}>
      <Alert severity="info">
        <Typography variant="body2">This feature is currently not available.</Typography>
        {process.env.NODE_ENV === 'development' && (
          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            Required feature(s): {featuresToCheck.join(', ')}
          </Typography>
        )}
      </Alert>
    </Box>
  );
};

FeatureGuard.propTypes = {
  children: PropTypes.node.isRequired,
  feature: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  fallback: PropTypes.node,
  showFallback: PropTypes.bool,
  mode: PropTypes.oneOf(['any', 'all'])
};

// Feature Flag Hook for conditional rendering
export function useFeatureFlag(feature) {
  const { hasFeature } = useAppConfig();
  return hasFeature(feature);
}

// Multiple Feature Flags Hook
export function useFeatureFlags(features, mode = 'any') {
  const { hasFeature } = useAppConfig();

  if (mode === 'all') {
    return features.every((feature) => hasFeature(feature));
  }

  return features.some((feature) => hasFeature(feature));
}

// Feature Component Wrapper
export function Feature({ feature, children, fallback = null }) {
  const isEnabled = useFeatureFlag(feature);

  if (!isEnabled) {
    return fallback;
  }

  return children;
}

Feature.propTypes = {
  feature: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node
};

export default FeatureGuard;
