// Component style overrides for consistent theming across the application

import { alpha } from '@mui/material/styles';

export const createComponentOverrides = (theme) => ({
  // Button overrides
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius * 1.5,
        textTransform: 'none',
        fontWeight: 500,
        padding: '8px 16px',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-1px)',
          boxShadow: theme.shadows[4]
        }
      },
      contained: {
        boxShadow: theme.shadows[2],
        '&:hover': {
          boxShadow: theme.shadows[6]
        }
      },
      outlined: {
        borderWidth: 2,
        '&:hover': {
          borderWidth: 2,
          backgroundColor: alpha(theme.palette.primary.main, 0.04)
        }
      },
      text: {
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.04)
        }
      }
    }
  },

  // Card overrides
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius * 2,
        boxShadow: theme.shadows[1],
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: theme.shadows[3],
          transform: 'translateY(-2px)'
        }
      }
    }
  },

  // Paper overrides
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius * 1.5
      },
      elevation1: {
        boxShadow: theme.shadows[1]
      },
      elevation2: {
        boxShadow: theme.shadows[2]
      },
      elevation3: {
        boxShadow: theme.shadows[3]
      }
    }
  },

  // TextField overrides
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: theme.shape.borderRadius * 1.5,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main,
              borderWidth: 2
            }
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: 2
            }
          }
        }
      }
    }
  },

  // Chip overrides
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius * 2,
        fontWeight: 500,
        '&:hover': {
          boxShadow: theme.shadows[2]
        }
      },
      filled: {
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.8)
        }
      }
    }
  },

  // AppBar overrides
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: alpha(theme.palette.background.default, 0.8),
        backdropFilter: 'blur(8px)'
      }
    }
  },

  // Drawer overrides
  MuiDrawer: {
    styleOverrides: {
      paper: {
        borderRadius: 0,
        borderRight: `1px solid ${theme.palette.divider}`
      }
    }
  },

  // Alert overrides
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius * 1.5,
        '& .MuiAlert-icon': {
          fontSize: '1.5rem'
        }
      },
      filled: {
        fontWeight: 500
      }
    }
  },

  // Dialog overrides
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: theme.shape.borderRadius * 2,
        boxShadow: theme.shadows[8]
      }
    }
  },

  // Tooltip overrides
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        borderRadius: theme.shape.borderRadius,
        fontSize: '0.75rem',
        fontWeight: 500,
        padding: '8px 12px'
      }
    }
  },

  // Menu overrides
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: theme.shape.borderRadius * 1.5,
        boxShadow: theme.shadows[4],
        border: `1px solid ${theme.palette.divider}`
      }
    }
  },

  // MenuItem overrides
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius,
        margin: '2px 8px',
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.08)
        },
        '&.Mui-selected': {
          backgroundColor: alpha(theme.palette.primary.main, 0.12),
          '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.16)
          }
        }
      }
    }
  },

  // Tab overrides
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
        minHeight: 48,
        borderRadius: theme.shape.borderRadius,
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.04)
        }
      }
    }
  },

  // Skeleton overrides
  MuiSkeleton: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius
      },
      rectangular: {
        borderRadius: theme.shape.borderRadius
      }
    }
  },

  // CircularProgress overrides
  MuiCircularProgress: {
    styleOverrides: {
      root: {
        '&.MuiCircularProgress-indeterminate': {
          animation: 'mui-circular-progress 1.4s linear infinite'
        }
      }
    }
  },

  // Backdrop overrides
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: alpha(theme.palette.grey[900], 0.5),
        backdropFilter: 'blur(4px)'
      }
    }
  },

  // CssBaseline overrides
  MuiCssBaseline: {
    styleOverrides: {
      '*': {
        boxSizing: 'border-box'
      },
      html: {
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        width: '100%'
      },
      body: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        minHeight: '100%',
        width: '100%',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
      },
      '#root': {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        height: '100%',
        width: '100%'
      },
      // Custom scrollbar styles
      '::-webkit-scrollbar': {
        width: '8px',
        height: '8px'
      },
      '::-webkit-scrollbar-track': {
        backgroundColor: theme.palette.background.default
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: alpha(theme.palette.text.secondary, 0.3),
        borderRadius: '4px',
        '&:hover': {
          backgroundColor: alpha(theme.palette.text.secondary, 0.5)
        }
      }
    }
  }
});

export default createComponentOverrides;
