'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for throttling values
 * Useful for scroll events, resize events, etc.
 */
const useThrottle = (value, limit) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(
      () => {
        if (Date.now() - lastExecuted.current >= limit) {
          setThrottledValue(value);
          lastExecuted.current = Date.now();
        }
      },
      limit - (Date.now() - lastExecuted.current)
    );

    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttledValue;
};

/**
 * Hook for throttling function calls
 */
export const useThrottledCallback = (callback, limit, deps = []) => {
  const lastRun = useRef(Date.now());
  const timeoutRef = useRef(null);

  const throttledCallback = useCallback(
    (...args) => {
      const now = Date.now();

      if (now - lastRun.current >= limit) {
        callback(...args);
        lastRun.current = now;
      } else {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(
          () => {
            callback(...args);
            lastRun.current = Date.now();
          },
          limit - (now - lastRun.current)
        );
      }
    },
    [callback, limit, ...deps]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return throttledCallback;
};

/**
 * Hook for throttling scroll events
 */
export const useThrottledScroll = (callback, limit = 100) => {
  const throttledCallback = useThrottledCallback(callback, limit);

  useEffect(() => {
    const handleScroll = (event) => {
      throttledCallback({
        scrollY: window.scrollY,
        scrollX: window.scrollX,
        scrollTop: document.documentElement.scrollTop,
        scrollHeight: document.documentElement.scrollHeight,
        clientHeight: document.documentElement.clientHeight,
        event
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [throttledCallback]);
};

/**
 * Hook for throttling resize events
 */
export const useThrottledResize = (callback, limit = 250) => {
  const throttledCallback = useThrottledCallback(callback, limit);

  useEffect(() => {
    const handleResize = (event) => {
      throttledCallback({
        width: window.innerWidth,
        height: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
        event
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [throttledCallback]);
};

/**
 * Hook for throttled mouse move tracking
 */
export const useThrottledMouseMove = (callback, limit = 50) => {
  const throttledCallback = useThrottledCallback(callback, limit);

  useEffect(() => {
    const handleMouseMove = (event) => {
      throttledCallback({
        x: event.clientX,
        y: event.clientY,
        pageX: event.pageX,
        pageY: event.pageY,
        event
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [throttledCallback]);
};

/**
 * Hook for tracking scroll direction with throttling
 */
export const useScrollDirection = (threshold = 10, limit = 100) => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  const updateScrollDirection = useThrottledCallback((scrollInfo) => {
    const { scrollY } = scrollInfo;
    const direction = scrollY > lastScrollY.current ? 'down' : 'up';

    if (Math.abs(scrollY - lastScrollY.current) > threshold) {
      setScrollDirection(direction);
      lastScrollY.current = scrollY;
    }

    setIsScrolling(true);

    // Clear previous timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Set scroll as finished after delay
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  }, limit);

  useThrottledScroll(updateScrollDirection, limit);

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return {
    scrollDirection,
    isScrolling,
    isScrollingDown: scrollDirection === 'down',
    isScrollingUp: scrollDirection === 'up'
  };
};

export default useThrottle;
