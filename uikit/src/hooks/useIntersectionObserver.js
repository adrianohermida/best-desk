'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for Intersection Observer API
 * Useful for lazy loading, infinite scroll, animations on scroll, etc.
 */
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState(null);
  const elementRef = useRef(null);

  const { threshold = 0.1, root = null, rootMargin = '0px', freezeOnceVisible = false, initialIsIntersecting = false } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state
    setIsIntersecting(initialIsIntersecting);

    // Check if IntersectionObserver is supported
    if (!window.IntersectionObserver) {
      console.warn('IntersectionObserver is not supported');
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;

        setEntry(entry);

        if (!freezeOnceVisible || !isIntersecting) {
          setIsIntersecting(isElementIntersecting);
        }
      },
      {
        threshold,
        root,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, root, rootMargin, freezeOnceVisible, initialIsIntersecting, isIntersecting]);

  return {
    elementRef,
    isIntersecting,
    entry
  };
};

/**
 * Hook for lazy loading images
 */
export const useLazyImage = (src, placeholder = '') => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });

  useEffect(() => {
    if (isIntersecting && src && !isLoaded && !isError) {
      const img = new Image();

      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };

      img.onerror = () => {
        setIsError(true);
      };

      img.src = src;
    }
  }, [isIntersecting, src, isLoaded, isError]);

  return {
    elementRef,
    imageSrc,
    isLoaded,
    isError,
    isIntersecting
  };
};

/**
 * Hook for infinite scroll functionality
 */
export const useInfiniteScroll = (callback, options = {}) => {
  const [isFetching, setIsFetching] = useState(false);

  const { threshold = 0.1, rootMargin = '100px', enabled = true } = options;

  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin
  });

  useEffect(() => {
    if (isIntersecting && !isFetching && enabled) {
      setIsFetching(true);
      callback().finally(() => {
        setIsFetching(false);
      });
    }
  }, [isIntersecting, isFetching, enabled, callback]);

  return {
    elementRef,
    isFetching,
    isIntersecting
  };
};

/**
 * Hook for scroll-triggered animations
 */
export const useScrollAnimation = (options = {}) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const { threshold = 0.2, triggerOnce = true, animationClass = 'animate-in' } = options;

  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    freezeOnceVisible: triggerOnce
  });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (isIntersecting && (!hasAnimated || !triggerOnce)) {
      element.classList.add(animationClass);
      setHasAnimated(true);
    } else if (!isIntersecting && !triggerOnce) {
      element.classList.remove(animationClass);
    }
  }, [isIntersecting, hasAnimated, triggerOnce, animationClass]);

  return {
    elementRef,
    isIntersecting,
    hasAnimated
  };
};

/**
 * Hook for tracking element visibility
 */
export const useVisibilityTracker = (callback, options = {}) => {
  const { threshold = 0.5, debounceMs = 100 } = options;

  const { elementRef, isIntersecting, entry } = useIntersectionObserver({
    threshold
  });

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (callback && entry) {
        callback({
          isVisible: isIntersecting,
          entry,
          visibilityRatio: entry.intersectionRatio
        });
      }
    }, debounceMs);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isIntersecting, entry, callback, debounceMs]);

  return {
    elementRef,
    isIntersecting,
    entry
  };
};

export default useIntersectionObserver;
