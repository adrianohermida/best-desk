'use client';
import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor performance in development
    if (process.env.NODE_ENV === 'development') {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log(`Page load time: ${entry.loadEventEnd - entry.fetchStart}ms`);
          }
          if (entry.entryType === 'largest-contentful-paint') {
            console.log(`LCP: ${entry.startTime}ms`);
          }
        }
      });

      observer.observe({ entryTypes: ['navigation', 'largest-contentful-paint'] });

      return () => observer.disconnect();
    }
  }, []);

  return null;
}
