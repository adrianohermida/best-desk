import PropTypes from 'prop-types';
import { Suspense, lazy } from 'react';

// @project
import { LazySkeletonLoader } from './LazyWrapper';

// Lazy load do react-slick
const ReactSlick = lazy(() => import('react-slick'));

/**
 * Wrapper simplificado para React Slick com lazy loading
 */
function LazySliderSimple({ children, settings = {}, fallbackHeight = 300, ...props }) {
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
      <ReactSlick {...defaultSettings} {...props}>
        {children}
      </ReactSlick>
    </Suspense>
  );
}

LazySliderSimple.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object,
  fallbackHeight: PropTypes.number
};

export default LazySliderSimple;
