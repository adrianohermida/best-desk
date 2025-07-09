// @mui
import { alpha } from '@mui/material/styles';

/***************************  OVERRIDES - BUTTON  ***************************/

export default function Button(theme) {
  const { palette } = theme;

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: `0 2px 8px ${alpha(palette.primary.main, 0.25)}`
          }
        },
        outlined: {
          '&:hover': {
            backgroundColor: alpha(palette.primary.main, 0.04)
          }
        }
      }
    }
  };
}
