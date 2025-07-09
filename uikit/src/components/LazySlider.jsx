import PropTypes from 'prop-types';
import { Suspense, lazy } from 'react';

// @project
import { LazySkeletonLoader } from './LazyWrapper';
import { useLazyComponent } from '@/hooks/useLazyComponent';

// Lazy load do react-slick
const ReactSlick = lazy(() => import('react-slick'));

/**
 * Wrapper otimizado para React Slick com lazy loading
 */
function LazySlider({ children, settings = {}, fallbackHeight = 300, ...props }) {
  const { Component: Slider, error, retry } = useLazyComponent(() => import('react-slick'), { retryCount: 3, retryDelay: 1000 });

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Failed to load slider component</p>
        <button onClick={retry} style={{ marginTop: '1rem' }}>
          Retry
        </button>
      </div>
    );
  }

  // Configurações padrão otimizadas
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    lazyLoad: 'ondemand',
    adaptiveHeight: true,
    ...settings
  };

  return (
    <Suspense fallback={<LazySkeletonLoader height={fallbackHeight} />}>
      <Slider {...defaultSettings} {...props}>
        {children}
      </Slider>
    </Suspense>
  );
}

LazySlider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object,
  fallbackHeight: PropTypes.number
};

export default LazySlider;
