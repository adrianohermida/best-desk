'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Mock features configuration - replace with real feature management system
const FEATURES = {
  DARK_MODE: 'dark_mode',
  ANALYTICS: 'analytics',
  EXPORTS: 'exports',
  API_ACCESS: 'api_access',
  TEAM_MANAGEMENT: 'team_management',
  CUSTOM_BRANDING: 'custom_branding',
  ADVANCED_REPORTING: 'advanced_reporting',
  INTEGRATIONS: 'integrations',
  PRIORITY_SUPPORT: 'priority_support'
};

const PLAN_FEATURES = {
  free: [FEATURES.DARK_MODE],
  basic: [FEATURES.DARK_MODE, FEATURES.ANALYTICS, FEATURES.EXPORTS],
  pro: [FEATURES.DARK_MODE, FEATURES.ANALYTICS, FEATURES.EXPORTS, FEATURES.API_ACCESS, FEATURES.TEAM_MANAGEMENT, FEATURES.INTEGRATIONS],
  enterprise: Object.values(FEATURES) // All features
};

const FeatureGuard = ({
  children,
  feature,
  features = [],
  fallback = null,
  redirectTo = '/pricing',
  requireAll = false,
  showUpgrade = true
}) => {
  const router = useRouter();

  // Mock user data - replace with real authentication system
  const user = {
    id: 1,
    email: 'user@example.com',
    plan: 'basic', // free, basic, pro, enterprise
    isAuthenticated: true,
    features: PLAN_FEATURES.basic || []
  };

  // Combine single feature with features array
  const requiredFeatures = feature ? [feature, ...features] : features;

  const hasFeatureAccess = (featureName) => {
    return user.features.includes(featureName);
  };

  const hasAllRequiredFeatures = () => {
    if (requiredFeatures.length === 0) return true;

    if (requireAll) {
      return requiredFeatures.every((feat) => hasFeatureAccess(feat));
    } else {
      return requiredFeatures.some((feat) => hasFeatureAccess(feat));
    }
  };

  useEffect(() => {
    if (!user?.isAuthenticated) {
      router.push('/sections/auth/login');
      return;
    }

    if (requiredFeatures.length > 0 && !hasAllRequiredFeatures()) {
      if (redirectTo) {
        router.push(redirectTo);
      }
    }
  }, [user, requiredFeatures, redirectTo, router]);

  // Don't render if not authenticated
  if (!user?.isAuthenticated) {
    return null;
  }

  // Don't render if feature requirements not met
  if (requiredFeatures.length > 0 && !hasAllRequiredFeatures()) {
    if (fallback) {
      return fallback;
    }

    if (showUpgrade) {
      return (
        <div
          style={{
            padding: '20px',
            textAlign: 'center',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
          }}
        >
          <h3>Feature Not Available</h3>
          <p>This feature requires a higher plan.</p>
          <button
            onClick={() => router.push('/pricing')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Upgrade Plan
          </button>
        </div>
      );
    }

    return null;
  }

  return children;
};

// Hook for checking features in components
export const useFeature = (feature) => {
  const user = {
    plan: 'basic',
    features: PLAN_FEATURES.basic || []
  };

  return {
    hasFeature: (featureName) => user.features.includes(featureName),
    plan: user.plan,
    features: user.features
  };
};

// Export features for use in other components
export { FEATURES, PLAN_FEATURES };
export default FeatureGuard;
