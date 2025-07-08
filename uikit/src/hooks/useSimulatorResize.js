import { useCallback, useEffect, useRef, useState } from 'react';
import { DEFAULT_HEIGHT } from '@/components/simulator/SimulatorData';

export default function useSimulatorResize(initialHeight = DEFAULT_HEIGHT) {
  const [height, setHeight] = useState(initialHeight);
  const frameRef = useRef(null);
  const resizeObserverRef = useRef(null);

  const updateHeight = useCallback(() => {
    if (frameRef.current?.contentWindow?.document?.body) {
      const contentHeight = frameRef.current.contentWindow.document.body.scrollHeight;
      const newHeight = Math.max(contentHeight + 50, initialHeight);
      setHeight(newHeight);
    }
  }, [initialHeight]);

  const handleIframeLoad = useCallback(() => {
    if (!frameRef.current?.contentWindow) return;

    const iframeDocument = frameRef.current.contentWindow.document;

    // Update height after content loads
    setTimeout(updateHeight, 100);
    setTimeout(updateHeight, 500);
    setTimeout(updateHeight, 1000);

    // Set up resize observer for dynamic content changes
    if (window.ResizeObserver && iframeDocument.body) {
      resizeObserverRef.current = new ResizeObserver(() => {
        updateHeight();
      });
      resizeObserverRef.current.observe(iframeDocument.body);
    }

    // Listen for window resize in iframe
    frameRef.current.contentWindow.addEventListener('resize', updateHeight);
  }, [updateHeight]);

  useEffect(() => {
    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, []);

  return {
    height,
    frameRef,
    handleIframeLoad,
    updateHeight
  };
}
