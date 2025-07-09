'use client';
import PropTypes from 'prop-types';
import { useState, useRef, useEffect, createElement, useMemo, useCallback } from 'react';

// @mui
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Fade from '@mui/material/Fade';

// @project
import OptimizedLoader from '@/components/OptimizedLoader';

/**
 * LazySection otimizado com carregamento progressivo e melhor UX
 */
export default function OptimizedLazySection({
  sections,
  fallback,
  offset = '50px',
  placeholderHeight = 300,
  enableSkeleton = true,
  fadeTransition = true,
  loadingStrategy = 'parallel' // 'parallel' ou 'sequential'
}) {
  const sectionList = useMemo(() => (Array.isArray(sections) ? sections : [sections]), [sections]);
  const [isVisible, setIsVisible] = useState(false);
  const [loadedComponents, setLoadedComponents] = useState(Array(sectionList.length).fill(null));
  const [loadingStates, setLoadingStates] = useState(Array(sectionList.length).fill(false));
  const [errors, setErrors] = useState(Array(sectionList.length).fill(null));
  const ref = useRef(null);

  // Função para carregar componente individual
  const loadComponent = useCallback(async (section, index) => {
    try {
      setLoadingStates((prev) => {
        const newStates = [...prev];
        newStates[index] = true;
        return newStates;
      });

      const module = await section.importFunc();
      const component = module.default;

      setLoadedComponents((prev) => {
        const newComponents = [...prev];
        newComponents[index] = component;
        return newComponents;
      });

      setLoadingStates((prev) => {
        const newStates = [...prev];
        newStates[index] = false;
        return newStates;
      });
    } catch (error) {
      setErrors((prev) => {
        const newErrors = [...prev];
        newErrors[index] = error;
        return newErrors;
      });

      setLoadingStates((prev) => {
        const newStates = [...prev];
        newStates[index] = false;
        return newStates;
      });
    }
  }, []);

  // Carregamento estratégico (paralelo ou sequencial)
  const loadComponents = useCallback(async () => {
    if (loadingStrategy === 'sequential') {
      // Carregamento sequencial (um por vez)
      for (let i = 0; i < sectionList.length; i++) {
        await loadComponent(sectionList[i], i);
      }
    } else {
      // Carregamento paralelo (todos ao mesmo tempo)
      await Promise.allSettled(sectionList.map((section, index) => loadComponent(section, index)));
    }
  }, [sectionList, loadComponent, loadingStrategy]);

  // IntersectionObserver para detectar visibilidade
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          loadComponents();
        }
      },
      {
        rootMargin: offset,
        threshold: 0.1
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [offset, isVisible, loadComponents]);

  // Renderizar skeleton ou loader baseado na preferência
  const renderPlaceholder = (index) => {
    if (enableSkeleton) {
      return (
        <Box sx={{ width: '100%', mb: 2 }}>
          <Skeleton variant="rectangular" height={placeholderHeight / sectionList.length} />
          <Skeleton variant="text" sx={{ mt: 1 }} />
          <Skeleton variant="text" width="60%" />
        </Box>
      );
    }
    return fallback || <OptimizedLoader />;
  };

  // Renderizar componente individual
  const renderComponent = (section, index) => {
    const component = loadedComponents[index];
    const isLoading = loadingStates[index];
    const error = errors[index];

    if (error) {
      return (
        <Box
          key={index}
          sx={{
            p: 2,
            textAlign: 'center',
            color: 'error.main',
            border: '1px dashed',
            borderColor: 'error.main',
            borderRadius: 1
          }}
        >
          Failed to load component. Click to retry.
          <Box
            component="button"
            onClick={() => loadComponent(section, index)}
            sx={{
              mt: 1,
              px: 2,
              py: 1,
              border: 1,
              borderColor: 'error.main',
              borderRadius: 1,
              bgcolor: 'transparent',
              color: 'error.main',
              cursor: 'pointer'
            }}
          >
            Retry
          </Box>
        </Box>
      );
    }

    if (isLoading || !component) {
      return renderPlaceholder(index);
    }

    const renderedComponent = createElement(component, {
      key: index,
      ...section.props
    });

    return fadeTransition ? (
      <Fade key={index} in={true} timeout={500}>
        <div>{renderedComponent}</div>
      </Fade>
    ) : (
      renderedComponent
    );
  };

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: isVisible ? 'auto' : placeholderHeight,
        transition: 'min-height 0.3s ease'
      }}
    >
      {isVisible ? (
        sectionList.map((section, index) => renderComponent(section, index))
      ) : enableSkeleton ? (
        <Box sx={{ width: '100%' }}>
          {Array.from({ length: sectionList.length }, (_, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Skeleton variant="rectangular" height={placeholderHeight / sectionList.length} />
              <Skeleton variant="text" sx={{ mt: 1 }} />
              <Skeleton variant="text" width="60%" />
            </Box>
          ))}
        </Box>
      ) : (
        fallback || <OptimizedLoader />
      )}
    </Box>
  );
}

OptimizedLazySection.propTypes = {
  sections: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  fallback: PropTypes.node,
  offset: PropTypes.string,
  placeholderHeight: PropTypes.number,
  enableSkeleton: PropTypes.bool,
  fadeTransition: PropTypes.bool,
  loadingStrategy: PropTypes.oneOf(['parallel', 'sequential'])
};
