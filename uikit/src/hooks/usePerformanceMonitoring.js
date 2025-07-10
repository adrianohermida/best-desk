import { useEffect, useState, useCallback } from 'react';

/**
 * Hook para monitoramento de performance em tempo real
 */
export function usePerformanceMonitoring(options = {}) {
  const {
    enableWebVitals = true,
    enableResourceTiming = true,
    enableMemoryMonitoring = true,
    reportInterval = 10000 // 10 segundos
  } = options;

  const [metrics, setMetrics] = useState({
    webVitals: {},
    resourceTiming: [],
    memoryUsage: {},
    renderMetrics: {}
  });

  // Coleta Web Vitals
  const collectWebVitals = useCallback(() => {
    if (!enableWebVitals || typeof window === 'undefined') return;

    try {
      // CLS (Cumulative Layout Shift)
      const observer = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }

        setMetrics((prev) => ({
          ...prev,
          webVitals: { ...prev.webVitals, cls: clsValue }
        }));
      });

      observer.observe({ type: 'layout-shift', buffered: true });

      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];

        setMetrics((prev) => ({
          ...prev,
          webVitals: { ...prev.webVitals, lcp: lastEntry.startTime }
        }));
      });

      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0];

        setMetrics((prev) => ({
          ...prev,
          webVitals: { ...prev.webVitals, fid: firstEntry.processingStart - firstEntry.startTime }
        }));
      });

      fidObserver.observe({ type: 'first-input', buffered: true });
    } catch (error) {
      console.warn('Error collecting Web Vitals:', error);
    }
  }, [enableWebVitals]);

  // Coleta Resource Timing
  const collectResourceTiming = useCallback(() => {
    if (!enableResourceTiming || typeof window === 'undefined') return;

    try {
      const resources = performance.getEntriesByType('resource');
      const processedResources = resources.map((resource) => ({
        name: resource.name,
        type: resource.initiatorType,
        duration: resource.duration,
        transferSize: resource.transferSize,
        encodedBodySize: resource.encodedBodySize,
        decodedBodySize: resource.decodedBodySize,
        startTime: resource.startTime
      }));

      setMetrics((prev) => ({
        ...prev,
        resourceTiming: processedResources
      }));
    } catch (error) {
      console.warn('Error collecting Resource Timing:', error);
    }
  }, [enableResourceTiming]);

  // Monitoramento de memória
  const collectMemoryUsage = useCallback(() => {
    if (!enableMemoryMonitoring || typeof window === 'undefined' || !performance.memory) return;

    try {
      const memory = performance.memory;
      setMetrics((prev) => ({
        ...prev,
        memoryUsage: {
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit
        }
      }));
    } catch (error) {
      console.warn('Error collecting Memory Usage:', error);
    }
  }, [enableMemoryMonitoring]);

  // Métricas de renderização
  const collectRenderMetrics = useCallback(() => {
    if (typeof window === 'undefined') return;

    try {
      const navigationTiming = performance.getEntriesByType('navigation')[0];
      if (navigationTiming) {
        setMetrics((prev) => ({
          ...prev,
          renderMetrics: {
            domContentLoaded: navigationTiming.domContentLoadedEventEnd - navigationTiming.domContentLoadedEventStart,
            loadComplete: navigationTiming.loadEventEnd - navigationTiming.loadEventStart,
            domInteractive: navigationTiming.domInteractive - navigationTiming.navigationStart,
            firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
            firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
          }
        }));
      }
    } catch (error) {
      console.warn('Error collecting Render Metrics:', error);
    }
  }, []);

  // Análise de performance
  const analyzePerformance = useCallback(() => {
    const { webVitals, resourceTiming, memoryUsage } = metrics;

    const analysis = {
      overall: 'good',
      issues: [],
      recommendations: []
    };

    // Análise Web Vitals
    if (webVitals.lcp > 2500) {
      analysis.overall = webVitals.lcp > 4000 ? 'poor' : 'needs-improvement';
      analysis.issues.push('Slow Largest Contentful Paint');
      analysis.recommendations.push('Optimize images and reduce server response time');
    }

    if (webVitals.fid > 100) {
      analysis.overall = webVitals.fid > 300 ? 'poor' : 'needs-improvement';
      analysis.issues.push('High First Input Delay');
      analysis.recommendations.push('Reduce JavaScript execution time');
    }

    if (webVitals.cls > 0.1) {
      analysis.overall = webVitals.cls > 0.25 ? 'poor' : 'needs-improvement';
      analysis.issues.push('Cumulative Layout Shift detected');
      analysis.recommendations.push('Set dimensions for images and videos');
    }

    // Análise de recursos
    const slowResources = resourceTiming.filter((resource) => resource.duration > 1000);
    if (slowResources.length > 0) {
      analysis.issues.push(`${slowResources.length} slow resources detected`);
      analysis.recommendations.push('Optimize slow-loading resources');
    }

    // Análise de memória
    if (memoryUsage.usedJSHeapSize && memoryUsage.jsHeapSizeLimit) {
      const memoryUsagePercent = (memoryUsage.usedJSHeapSize / memoryUsage.jsHeapSizeLimit) * 100;
      if (memoryUsagePercent > 90) {
        analysis.overall = 'poor';
        analysis.issues.push('High memory usage detected');
        analysis.recommendations.push('Check for memory leaks and optimize data structures');
      }
    }

    return analysis;
  }, [metrics]);

  // Relatório de performance
  const generateReport = useCallback(() => {
    const analysis = analyzePerformance();

    return {
      timestamp: new Date().toISOString(),
      metrics,
      analysis,
      summary: {
        score: analysis.overall === 'good' ? 90 : analysis.overall === 'needs-improvement' ? 60 : 30,
        issuesCount: analysis.issues.length,
        recommendationsCount: analysis.recommendations.length
      }
    };
  }, [metrics, analyzePerformance]);

  // Inicialização
  useEffect(() => {
    collectWebVitals();
    collectResourceTiming();
    collectMemoryUsage();
    collectRenderMetrics();

    // Interval para coleta contínua
    const interval = setInterval(() => {
      collectResourceTiming();
      collectMemoryUsage();
    }, reportInterval);

    return () => clearInterval(interval);
  }, [collectWebVitals, collectResourceTiming, collectMemoryUsage, collectRenderMetrics, reportInterval]);

  return {
    metrics,
    analysis: analyzePerformance(),
    report: generateReport(),
    refresh: () => {
      collectWebVitals();
      collectResourceTiming();
      collectMemoryUsage();
      collectRenderMetrics();
    }
  };
}

/**
 * Hook específico para Web Vitals
 */
export function useWebVitals() {
  const [vitals, setVitals] = useState({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleWebVital = (metric) => {
      setVitals((prev) => ({
        ...prev,
        [metric.name]: metric.value
      }));
    };

    // Usar web-vitals library se disponível
    if (window.webVitals) {
      window.webVitals.getCLS(handleWebVital);
      window.webVitals.getFID(handleWebVital);
      window.webVitals.getFCP(handleWebVital);
      window.webVitals.getLCP(handleWebVital);
      window.webVitals.getTTFB(handleWebVital);
    }
  }, []);

  return vitals;
}

/**
 * Hook para monitoramento de recursos específicos
 */
export function useResourceMonitoring(resourceType = 'script') {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list
        .getEntries()
        .filter((entry) => entry.initiatorType === resourceType)
        .map((entry) => ({
          name: entry.name,
          duration: entry.duration,
          transferSize: entry.transferSize,
          startTime: entry.startTime
        }));

      setResources((prev) => [...prev, ...entries]);
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => observer.disconnect();
  }, [resourceType]);

  return resources;
}

export default usePerformanceMonitoring;
