'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Subscription plans hierarchy (lower number = higher priority)
const PLANS = {
  FREE: { name: 'free', level: 0, displayName: 'Free Plan' },
  BASIC: { name: 'basic', level: 1, displayName: 'Basic Plan' },
  PRO: { name: 'pro', level: 2, displayName: 'Pro Plan' },
  ENTERPRISE: { name: 'enterprise', level: 3, displayName: 'Enterprise Plan' }
};

const PLAN_LIMITS = {
  free: {
    users: 1,
    projects: 3,
    storage: 1024, // MB
    apiCalls: 1000,
    support: 'community'
  },
  basic: {
    users: 5,
    projects: 10,
    storage: 10240, // 10GB
    apiCalls: 10000,
    support: 'email'
  },
  pro: {
    users: 25,
    projects: 50,
    storage: 102400, // 100GB
    apiCalls: 100000,
    support: 'priority'
  },
  enterprise: {
    users: -1, // unlimited
    projects: -1, // unlimited
    storage: -1, // unlimited
    apiCalls: -1, // unlimited
    support: 'dedicated'
  }
};

const SubscriptionGuard = ({
  children,
  requiredPlan,
  minPlan = 'free',
  fallback = null,
  redirectTo = '/pricing',
  showUpgrade = true,
  checkLimit = null,
  currentUsage = null
}) => {
  const router = useRouter();

  // Mock user subscription data - replace with real subscription system
  const subscription = {
    plan: 'basic',
    status: 'active', // active, inactive, cancelled, expired
    expiresAt: new Date('2024-12-31'),
    usage: {
      users: 3,
      projects: 7,
      storage: 5120, // MB
      apiCalls: 5500
    },
    features: ['analytics', 'exports', 'dark_mode']
  };

  const user = {
    id: 1,
    email: 'user@example.com',
    isAuthenticated: true,
    subscription
  };

  const hasMinimumPlan = () => {
    const userPlanLevel = PLANS[user.subscription.plan.toUpperCase()]?.level || 0;
    const requiredPlanLevel = PLANS[minPlan.toUpperCase()]?.level || 0;
    return userPlanLevel >= requiredPlanLevel;
  };

  const hasSpecificPlan = () => {
    if (!requiredPlan) return true;
    return user.subscription.plan === requiredPlan;
  };

  const isSubscriptionActive = () => {
    return user.subscription.status === 'active' && new Date() < new Date(user.subscription.expiresAt);
  };

  const checkUsageLimit = () => {
    if (!checkLimit || !currentUsage) return true;

    const limits = PLAN_LIMITS[user.subscription.plan];
    if (!limits) return false;

    const limit = limits[checkLimit];
    const usage = currentUsage;

    // -1 means unlimited
    if (limit === -1) return true;

    return usage <= limit;
  };

  const canAccess = () => {
    if (!user?.isAuthenticated) return false;
    if (!isSubscriptionActive()) return false;
    if (!hasMinimumPlan()) return false;
    if (!hasSpecificPlan()) return false;
    if (!checkUsageLimit()) return false;

    return true;
  };

  useEffect(() => {
    if (!user?.isAuthenticated) {
      router.push('/sections/auth/login');
      return;
    }

    if (!canAccess() && redirectTo) {
      router.push(redirectTo);
    }
  }, [user, redirectTo, router]);

  // Don't render if not authenticated
  if (!user?.isAuthenticated) {
    return null;
  }

  // Don't render if access requirements not met
  if (!canAccess()) {
    if (fallback) {
      return fallback;
    }

    if (showUpgrade) {
      const userPlan = PLANS[user.subscription.plan.toUpperCase()];
      const requiredPlanObj = PLANS[minPlan.toUpperCase()];

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
          <h3>Subscription Required</h3>
          <p>
            Your current plan: <strong>{userPlan?.displayName}</strong>
          </p>
          <p>
            Required plan: <strong>{requiredPlanObj?.displayName}</strong>
          </p>

          {!isSubscriptionActive() && <p style={{ color: '#d32f2f' }}>Your subscription has expired or is inactive.</p>}

          {checkLimit && !checkUsageLimit() && <p style={{ color: '#d32f2f' }}>You have exceeded your {checkLimit} limit.</p>}

          <button
            onClick={() => router.push('/pricing')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Upgrade Subscription
          </button>
        </div>
      );
    }

    return null;
  }

  return children;
};

// Hook for checking subscription in components
export const useSubscription = () => {
  const subscription = {
    plan: 'basic',
    status: 'active',
    expiresAt: new Date('2024-12-31'),
    usage: {
      users: 3,
      projects: 7,
      storage: 5120,
      apiCalls: 5500
    }
  };

  return {
    subscription,
    hasMinPlan: (planName) => {
      const userPlanLevel = PLANS[subscription.plan.toUpperCase()]?.level || 0;
      const requiredPlanLevel = PLANS[planName.toUpperCase()]?.level || 0;
      return userPlanLevel >= requiredPlanLevel;
    },
    isActive: () => subscription.status === 'active' && new Date() < new Date(subscription.expiresAt),
    getLimit: (limitType) => PLAN_LIMITS[subscription.plan]?.[limitType],
    getUsage: (limitType) => subscription.usage[limitType],
    getRemainingUsage: (limitType) => {
      const limit = PLAN_LIMITS[subscription.plan]?.[limitType];
      const usage = subscription.usage[limitType];
      if (limit === -1) return Infinity;
      return Math.max(0, limit - usage);
    }
  };
};

// Export plans and limits for use in other components
export { PLANS, PLAN_LIMITS };
export default SubscriptionGuard;
