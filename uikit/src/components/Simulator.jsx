'use client';
import PropTypes from 'prop-types';
import { Fragment, useCallback, useId, useState } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import NoSsr from '@mui/material/NoSsr';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import SimulatorControls from './simulator/SimulatorControls';
import useSimulatorResize from '@/hooks/useSimulatorResize';
import { getBackgroundDots } from '@/utils/getBackgroundDots';
import Loader from '@/utils/Loader';
import { viewportData, DEFAULT_SCREEN_SIZE } from './simulator/SimulatorData';

/***************************  SIMULATOR - MAIN COMPONENT  ***************************/

function Simulator({ src, height = 800, ...rest }) {
  const theme = useTheme();
  const uniqueId = useId();
  const [screenSize, setScreenSize] = useState(DEFAULT_SCREEN_SIZE);
  const [isLoading, setIsLoading] = useState(true);

  const { height: dynamicHeight, frameRef, handleIframeLoad, updateHeight } = useSimulatorResize(height);

  const handleScreenChange = useCallback(
    (newScreenSize) => {
      setScreenSize(newScreenSize);
      // Small delay to allow screen resize, then update height
      setTimeout(updateHeight, 300);
    },
    [updateHeight]
  );

  const handleRefresh = useCallback(() => {
    if (frameRef.current) {
      setIsLoading(true);
      frameRef.current.src = frameRef.current.src;
    }
  }, [frameRef]);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
    handleIframeLoad();
  }, [handleIframeLoad]);

  const currentViewport = viewportData[screenSize];
  const iframeWidth = currentViewport.width;

  return (
    <NoSsr>
      <Box
        {...rest}
        sx={{
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 1,
          overflow: 'hidden',
          bgcolor: 'background.paper',
          ...rest.sx
        }}
      >
        {/* Simulator Controls */}
        <SimulatorControls screenSize={screenSize} onScreenChange={handleScreenChange} onRefresh={handleRefresh} />

        {/* Iframe Container */}
        <Box
          sx={{
            position: 'relative',
            height: dynamicHeight,
            overflow: 'hidden',
            background: `radial-gradient(circle at 20% 50%, ${alpha(theme.palette.primary.lighter, 0.2)} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${alpha(theme.palette.secondary.lighter, 0.2)} 0%, transparent 50%), ${getBackgroundDots()}`
          }}
        >
          {/* Loading Overlay */}
          {isLoading && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: alpha(theme.palette.background.default, 0.8),
                zIndex: 2
              }}
            >
              <Loader />
            </Box>
          )}

          {/* Iframe Wrapper */}
          <Stack
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              p: 2
            }}
          >
            <Box
              sx={{
                width: iframeWidth,
                maxWidth: '100%',
                height: '100%',
                border: screenSize !== 'desktop' ? '1px solid' : 'none',
                borderColor: 'grey.300',
                borderRadius: screenSize !== 'desktop' ? 1 : 0,
                overflow: 'hidden',
                bgcolor: 'background.paper',
                boxShadow: screenSize !== 'desktop' ? 2 : 'none'
              }}
            >
              <Box
                key={`${uniqueId}-${screenSize}`}
                component="iframe"
                ref={frameRef}
                src={src}
                onLoad={handleLoadComplete}
                sx={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  display: 'block'
                }}
                title={`Simulator ${screenSize} view`}
                loading="lazy"
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </NoSsr>
  );
}

Simulator.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.number
};

export default Simulator;
