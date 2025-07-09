'use client';
import { memo } from 'react';

// @mui
import { keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

// Animações otimizadas
const pulseAnimation = keyframes`
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

/**
 * Loader otimizado com melhor performance
 */
const OptimizedLoader = memo(function OptimizedLoader({ size = 40, variant = 'indeterminate', fullHeight = false, showLogo = false }) {
  const containerSx = fullHeight
    ? { height: '100vh', width: 1, alignItems: 'center', justifyContent: 'center' }
    : { alignItems: 'center', justifyContent: 'center', p: 2 };

  return (
    <Stack sx={containerSx}>
      {showLogo && (
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            mb: 2,
            animation: `${pulseAnimation} 2s ease-in-out infinite`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
        >
          S
        </Box>
      )}

      <CircularProgress
        size={size}
        variant={variant}
        thickness={4}
        sx={{
          color: 'primary.main',
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round'
          },
          animation: variant === 'indeterminate' ? `${spinAnimation} 1.4s linear infinite` : 'none'
        }}
      />
    </Stack>
  );
});

OptimizedLoader.displayName = 'OptimizedLoader';

export default OptimizedLoader;
