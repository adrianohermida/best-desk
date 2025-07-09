import { memo } from 'react';

// @mui
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

/**
 * Loader simples e otimizado
 */
const SimpleOptimizedLoader = memo(function SimpleOptimizedLoader({ size = 40, fullHeight = false, showText = false }) {
  const containerSx = fullHeight
    ? { height: '100vh', width: 1, alignItems: 'center', justifyContent: 'center' }
    : { alignItems: 'center', justifyContent: 'center', p: 2 };

  return (
    <Stack sx={containerSx} spacing={2}>
      <CircularProgress
        size={size}
        thickness={4}
        sx={{
          color: 'primary.main',
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round'
          }
        }}
      />

      {showText && (
        <Typography variant="body2" color="text.secondary">
          Loading...
        </Typography>
      )}
    </Stack>
  );
});

SimpleOptimizedLoader.displayName = 'SimpleOptimizedLoader';

export default SimpleOptimizedLoader;
