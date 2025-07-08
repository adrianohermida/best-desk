// Simple in-memory rate limiter for development
// In production, use Redis-based rate limiting
class RateLimiter {
  constructor() {
    this.clients = new Map();
    this.cleanupInterval = 60000; // Clean up every minute
    this.startCleanup();
  }

  startCleanup() {
    setInterval(() => {
      const now = Date.now();
      for (const [clientId, data] of this.clients.entries()) {
        if (now - data.lastReset > data.windowMs) {
          this.clients.delete(clientId);
        }
      }
    }, this.cleanupInterval);
  }

  check(clientId, options = {}) {
    const {
      windowMs = 60000, // 1 minute
      maxRequests = 10
    } = options;

    const now = Date.now();
    const clientData = this.clients.get(clientId);

    if (!clientData) {
      this.clients.set(clientId, {
        count: 1,
        lastReset: now,
        windowMs,
        maxRequests
      });
      return { allowed: true, remaining: maxRequests - 1, resetTime: now + windowMs };
    }

    // Reset window if expired
    if (now - clientData.lastReset >= windowMs) {
      clientData.count = 1;
      clientData.lastReset = now;
      this.clients.set(clientId, clientData);
      return { allowed: true, remaining: maxRequests - 1, resetTime: now + windowMs };
    }

    // Check if limit exceeded
    if (clientData.count >= maxRequests) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: clientData.lastReset + windowMs,
        retryAfter: Math.ceil((clientData.lastReset + windowMs - now) / 1000)
      };
    }

    // Increment count
    clientData.count++;
    this.clients.set(clientId, clientData);

    return {
      allowed: true,
      remaining: maxRequests - clientData.count,
      resetTime: clientData.lastReset + windowMs
    };
  }

  reset(clientId) {
    this.clients.delete(clientId);
  }
}

// Create singleton instance
const rateLimiter = new RateLimiter();

// Rate limiting middleware for API routes
export function createRateLimiter(options = {}) {
  return async (request) => {
    const clientId = getClientId(request);
    const result = rateLimiter.check(clientId, options);

    return result;
  };
}

// Get client identifier from request
function getClientId(request) {
  // Try to get IP from various headers (for production with proxies)
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');

  // Extract first IP if there are multiple
  const ip = forwardedFor?.split(',')[0]?.trim() || realIp || cfConnectingIp || 'unknown';

  return ip;
}

// Rate limiter configurations for different endpoints
export const RATE_LIMITS = {
  // Subscription endpoint - stricter limits
  SUBSCRIPTION: {
    windowMs: 60000, // 1 minute
    maxRequests: 5, // 5 requests per minute
    message: 'Too many subscription attempts. Please try again later.'
  },

  // Contact form - moderate limits
  CONTACT: {
    windowMs: 300000, // 5 minutes
    maxRequests: 3, // 3 requests per 5 minutes
    message: 'Too many contact form submissions. Please try again later.'
  },

  // General API - lenient limits
  GENERAL: {
    windowMs: 60000, // 1 minute
    maxRequests: 30, // 30 requests per minute
    message: 'Too many requests. Please try again later.'
  },

  // Authentication - strict limits
  AUTH: {
    windowMs: 900000, // 15 minutes
    maxRequests: 5, // 5 attempts per 15 minutes
    message: 'Too many authentication attempts. Please try again later.'
  }
};

// Apply rate limiting to an API route
export async function withRateLimit(request, config, handler) {
  const limiter = createRateLimiter(config);
  const result = await limiter(request);

  if (!result.allowed) {
    return new Response(
      JSON.stringify({
        error: 'Rate limit exceeded',
        message: config.message || 'Too many requests',
        retryAfter: result.retryAfter
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': result.retryAfter?.toString() || '60',
          'X-RateLimit-Limit': config.maxRequests.toString(),
          'X-RateLimit-Remaining': result.remaining.toString(),
          'X-RateLimit-Reset': new Date(result.resetTime).toISOString()
        }
      }
    );
  }

  // Add rate limit headers to successful responses
  const response = await handler();

  // Clone response to add headers
  const headers = new Headers(response.headers);
  headers.set('X-RateLimit-Limit', config.maxRequests.toString());
  headers.set('X-RateLimit-Remaining', result.remaining.toString());
  headers.set('X-RateLimit-Reset', new Date(result.resetTime).toISOString());

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

export default rateLimiter;
