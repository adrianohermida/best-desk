import PropTypes from 'prop-types';
import { Suspense } from 'react';

// @mui
import { Box, Skeleton, Fade } from '@mui/material';

// @project
import { useLazyIntersection } from '@/hooks/useLazyComponent';

/**
 * Skeleton loader que mantém proporções do conteúdo original
 */
function LazySkeletonLoader({ height = 200, variant = 'rectangular', animation = 'wave' }) {
  return (
    <Box sx={{ width: '100%', minHeight: height }}>
      <Skeleton
        variant={variant}
        height={height}
        animation={animation}
        sx={{
          borderRadius: 1,
          bgcolor: 'grey.100',
          '&::after': {
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
          }
        }}
      />
    </Box>
  );
}

LazySkeletonLoader.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.string,
  animation: PropTypes.string
};

/**
 * Wrapper para lazy loading com IntersectionObserver
 */
function LazyWrapper({ children, fallback, height = 200, rootMargin = '100px', threshold = 0.1, fadeTransition = true }) {
  const { ref, isVisible } = useLazyIntersection({
    rootMargin,
    threshold
  });

  const content = isVisible ? children : fallback || <LazySkeletonLoader height={height} />;

  return (
    <div ref={ref} style={{ minHeight: typeof height === 'number' ? `${height}px` : height }}>
      {fadeTransition ? (
        <Fade in={isVisible} timeout={300}>
          <div>{content}</div>
        </Fade>
      ) : (
        content
      )}
    </div>
  );
}

LazyWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rootMargin: PropTypes.string,
  threshold: PropTypes.number,
  fadeTransition: PropTypes.bool
};

/**
 * Wrapper para Suspense com fallback customizado
 */
function LazySuspenseWrapper({ children, fallback, height = 200 }) {
  return <Suspense fallback={fallback || <LazySkeletonLoader height={height} />}>{children}</Suspense>;
}

LazySuspenseWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export { LazyWrapper, LazySuspenseWrapper, LazySkeletonLoader };
export default LazyWrapper;
