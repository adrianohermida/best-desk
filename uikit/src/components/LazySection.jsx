'use client';
import PropTypes from 'prop-types';

import { useState, useRef, useEffect, createElement, useMemo } from 'react';

// @mui
import Box from '@mui/material/Box';

// @project
import Loader from '@/components/Loader';

export default function LazySection({ sections, fallback = <Loader />, offset = '0px', placeholderHeight = 400 }) {
  const sectionList = useMemo(() => (Array.isArray(sections) ? sections : [sections]), [sections]);
  const [isVisible, setIsVisible] = useState(false);
  const [loadedComponents, setLoadedComponents] = useState(Array(sectionList.length).fill(null));
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible && !isLoading) {
          setIsVisible(true);
          setIsLoading(true);

          // Load components individually to avoid blocking
          sectionList.forEach((section, index) => {
            section
              .importFunc()
              .then((module) => module.default)
              .then((component) => {
                setLoadedComponents((prev) => {
                  const updated = [...prev];
                  updated[index] = component;
                  return updated;
                });
              })
              .catch(console.error)
              .finally(() => {
                if (index === sectionList.length - 1) {
                  setIsLoading(false);
                }
              });
          });
        }
      },
      { rootMargin: offset, threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [sectionList, offset, isVisible, isLoading]);

  return (
    <Box ref={ref} sx={{ minHeight: placeholderHeight }}>
      {isVisible ? (
        <>
          {loadedComponents.map((component, index) =>
            component ? createElement(component, { key: index, ...sectionList[index].props }) : null
          )}
          {isLoading && fallback}
        </>
      ) : null}
    </Box>
  );
}

LazySection.propTypes = {
  sections: PropTypes.oneOfType([PropTypes.any, PropTypes.array]),
  fallback: PropTypes.node,
  Loader: PropTypes.any,
  offset: PropTypes.string,
  placeholderHeight: PropTypes.number
};
