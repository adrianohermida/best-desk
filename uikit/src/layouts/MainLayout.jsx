'use client';

import { Box, Container } from '@mui/material';
import PropTypes from 'prop-types';
import { useApp } from '@/hooks/useAppState';
import ErrorBoundary from '@/components/ErrorBoundary';

const MainLayout = ({ children, maxWidth = 'xl', disableGutters = false, sx = {}, containerSx = {}, errorBoundary = true }) => {
  const { layoutConfig } = useApp();

  const layoutStyles = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'background.default',
    ...sx
  };

  const containerStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    py: 3,
    ...containerSx
  };

  const content = (
    <Box sx={layoutStyles}>
      <Container maxWidth={maxWidth} disableGutters={disableGutters} sx={containerStyles}>
        {children}
      </Container>
    </Box>
  );

  if (errorBoundary) {
    return <ErrorBoundary>{content}</ErrorBoundary>;
  }

  return content;
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),
  disableGutters: PropTypes.bool,
  sx: PropTypes.object,
  containerSx: PropTypes.object,
  errorBoundary: PropTypes.bool
};

export default MainLayout;
