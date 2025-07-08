// Performance utilities for optimization and monitoring

// Debounce function to limit function execution frequency
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// Throttle function to limit function execution rate
export const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return (...args) => {
    if (!lastRan) {
      func.apply(null, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        () => {
          if (Date.now() - lastRan >= limit) {
            func.apply(null, args);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - lastRan)
      );
    }
  };
};

// Lazy loading utility for images
export const lazyLoadImage = (src, placeholder = '/assets/images/placeholder.svg') => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => resolve(placeholder);
    img.src = src;
  });
};

// Performance measurement utilities
export const performanceMonitor = {
  // Start timing a process
  startTimer: (label) => {
    if (typeof performance !== 'undefined') {
      performance.mark(`${label}-start`);
    }
  },

  // End timing and get duration
  endTimer: (label) => {
    if (typeof performance !== 'undefined') {
      performance.mark(`${label}-end`);
      performance.measure(label, `${label}-start`, `${label}-end`);

      const measure = performance.getEntriesByName(label)[0];
      return measure ? measure.duration : 0;
    }
    return 0;
  },

  // Clear performance marks
  clearMarks: (label) => {
    if (typeof performance !== 'undefined') {
      performance.clearMarks(`${label}-start`);
      performance.clearMarks(`${label}-end`);
      performance.clearMeasures(label);
    }
  },

  // Get all performance entries
  getEntries: () => {
    if (typeof performance !== 'undefined') {
      return performance.getEntries();
    }
    return [];
  }
};

// Memory usage monitoring
export const memoryMonitor = {
  // Get current memory usage (Chrome only)
  getCurrentUsage: () => {
    if (typeof performance !== 'undefined' && performance.memory) {
      return {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit,
        usedMB: Math.round(performance.memory.usedJSHeapSize / 1048576),
        totalMB: Math.round(performance.memory.totalJSHeapSize / 1048576)
      };
    }
    return null;
  },

  // Check if memory usage is high
  isHighUsage: (threshold = 0.8) => {
    const usage = memoryMonitor.getCurrentUsage();
    return usage ? usage.used / usage.limit > threshold : false;
  }
};

// Viewport utilities
export const viewport = {
  // Get viewport dimensions
  getDimensions: () => ({
    width: window.innerWidth,
    height: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight
  }),

  // Check if element is in viewport
  isInViewport: (element, threshold = 0) => {
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    return (
      rect.top >= -threshold &&
      rect.left >= -threshold &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + threshold &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) + threshold
    );
  },

  // Get element's position relative to viewport
  getElementPosition: (element) => {
    if (!element) return null;

    const rect = element.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      bottom: rect.bottom,
      right: rect.right,
      width: rect.width,
      height: rect.height,
      centerX: rect.left + rect.width / 2,
      centerY: rect.top + rect.height / 2
    };
  }
};

// Animation frame utilities
export const animationUtils = {
  // Request animation frame with fallback
  requestFrame: (callback) => {
    return (
      window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || ((cb) => setTimeout(cb, 16))
    );
  },

  // Cancel animation frame
  cancelFrame: (id) => {
    const cancel = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout;
    return cancel(id);
  },

  // Smooth scroll to element
  scrollToElement: (element, duration = 500, offset = 0) => {
    if (!element) return;

    const startPos = window.pageYOffset;
    const targetPos = element.getBoundingClientRect().top + startPos - offset;
    const distance = targetPos - startPos;
    const startTime = Date.now();

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const animation = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutQuad(progress);

      window.scrollTo(0, startPos + distance * ease);

      if (progress < 1) {
        animationUtils.requestFrame(animation);
      }
    };

    animationUtils.requestFrame(animation);
  }
};

// Device detection utilities
export const deviceDetection = {
  // Check if device is mobile
  isMobile: () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },

  // Check if device is tablet
  isTablet: () => {
    return /iPad|Android(?=.*(?:tablet|pad))/i.test(navigator.userAgent);
  },

  // Check if device is desktop
  isDesktop: () => {
    return !deviceDetection.isMobile() && !deviceDetection.isTablet();
  },

  // Get device type
  getDeviceType: () => {
    if (deviceDetection.isMobile()) return 'mobile';
    if (deviceDetection.isTablet()) return 'tablet';
    return 'desktop';
  },

  // Check if device supports touch
  isTouchDevice: () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  },

  // Get device pixel ratio
  getPixelRatio: () => {
    return window.devicePixelRatio || 1;
  }
};

// Bundle size optimization utilities
export const bundleOptimization = {
  // Dynamic import with error handling
  dynamicImport: async (importFunction) => {
    try {
      const result = await importFunction();
      return result;
    } catch (error) {
      console.error('Dynamic import failed:', error);
      return null;
    }
  },

  // Preload module
  preloadModule: (moduleUrl) => {
    const link = document.createElement('link');
    link.rel = 'modulepreload';
    link.href = moduleUrl;
    document.head.appendChild(link);
  },

  // Preload image
  preloadImage: (src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = 'image';
    document.head.appendChild(link);
  }
};

// Network performance utilities
export const networkMonitor = {
  // Get connection info
  getConnectionInfo: () => {
    if (navigator.connection) {
      return {
        effectiveType: navigator.connection.effectiveType,
        downlink: navigator.connection.downlink,
        rtt: navigator.connection.rtt,
        saveData: navigator.connection.saveData
      };
    }
    return null;
  },

  // Check if connection is slow
  isSlowConnection: () => {
    const connection = networkMonitor.getConnectionInfo();
    return connection ? connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' || connection.saveData : false;
  }
};

const performanceUtils = {
  debounce,
  throttle,
  lazyLoadImage,
  performanceMonitor,
  memoryMonitor,
  viewport,
  animationUtils,
  deviceDetection,
  bundleOptimization,
  networkMonitor
};

export default performanceUtils;
