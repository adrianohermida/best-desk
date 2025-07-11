import { memo } from 'react';
import { Box } from '@mui/material';

// SimpleBar component - A simplified scrollbar component for admin areas
const SimpleBar = memo(({ children, sx, ...other }) => {
  return (
    <Box
      sx={{
        height: '100%',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: 6,
          height: 6
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: 3,
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
          }
        },
        '&::-webkit-scrollbar-corner': {
          backgroundColor: 'transparent'
        },
        // Firefox scrollbar styling
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(0, 0, 0, 0.2) transparent',
        ...sx
      }}
      {...other}
    >
      {children}
    </Box>
  );
});

SimpleBar.displayName = 'SimpleBar';

export default SimpleBar;
