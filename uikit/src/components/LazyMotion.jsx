import PropTypes from 'prop-types';
import { Suspense, lazy, forwardRef } from 'react';

// @project
import { useLazyComponent } from '@/hooks/useLazyComponent';

// Lazy load do framer-motion
const FramerMotion = {
  motion: lazy(() => import('framer-motion').then((mod) => ({ default: mod.motion }))),
  AnimatePresence: lazy(() => import('framer-motion').then((mod) => ({ default: mod.AnimatePresence }))),
  useScroll: lazy(() => import('framer-motion').then((mod) => ({ default: mod.useScroll }))),
  useTransform: lazy(() => import('framer-motion').then((mod) => ({ default: mod.useTransform })))
};

/**
 * Wrapper para motion.div com lazy loading
 */
const LazyMotionDiv = forwardRef(({ children, fallback = null, ...motionProps }, ref) => {
  const {
    Component: Motion,
    error,
    retry
  } = useLazyComponent(() => import('framer-motion').then((mod) => ({ default: mod.motion.div })), { retryCount: 3 });

  if (error) {
    return (
      <div ref={ref} {...(motionProps.style && { style: motionProps.style })}>
        {children}
      </div>
    );
  }

  return (
    <Suspense fallback={fallback || <div ref={ref}>{children}</div>}>
      <Motion ref={ref} {...motionProps}>
        {children}
      </Motion>
    </Suspense>
  );
});

LazyMotionDiv.displayName = 'LazyMotionDiv';

LazyMotionDiv.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node
};

/**
 * Wrapper para motion.section com lazy loading
 */
const LazyMotionSection = forwardRef(({ children, fallback = null, ...motionProps }, ref) => {
  const { Component: Motion, error } = useLazyComponent(() => import('framer-motion').then((mod) => ({ default: mod.motion.section })), {
    retryCount: 3
  });

  if (error) {
    return (
      <section ref={ref} {...(motionProps.style && { style: motionProps.style })}>
        {children}
      </section>
    );
  }

  return (
    <Suspense fallback={fallback || <section ref={ref}>{children}</section>}>
      <Motion ref={ref} {...motionProps}>
        {children}
      </Motion>
    </Suspense>
  );
});

LazyMotionSection.displayName = 'LazyMotionSection';

LazyMotionSection.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node
};

/**
 * Hook para lazy loading de animações Framer Motion
 */
function useLazyMotion() {
  const { Component: useScroll, error: scrollError } = useLazyComponent(() =>
    import('framer-motion').then((mod) => ({ default: mod.useScroll }))
  );

  const { Component: useTransform, error: transformError } = useLazyComponent(() =>
    import('framer-motion').then((mod) => ({ default: mod.useTransform }))
  );

  return {
    useScroll: scrollError ? () => ({ scrollY: { get: () => 0 } }) : useScroll,
    useTransform: transformError ? (value, input, output) => ({ get: () => output[0] }) : useTransform,
    hasError: scrollError || transformError
  };
}

/**
 * Wrapper para AnimatePresence
 */
function LazyAnimatePresence({ children, fallback = null, ...props }) {
  const { Component: AnimatePresence, error } = useLazyComponent(
    () => import('framer-motion').then((mod) => ({ default: mod.AnimatePresence })),
    { retryCount: 3 }
  );

  if (error) {
    return children;
  }

  return (
    <Suspense fallback={fallback}>
      <AnimatePresence {...props}>{children}</AnimatePresence>
    </Suspense>
  );
}

LazyAnimatePresence.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node
};

export { LazyMotionDiv, LazyMotionSection, LazyAnimatePresence, useLazyMotion };

export default LazyMotionDiv;
