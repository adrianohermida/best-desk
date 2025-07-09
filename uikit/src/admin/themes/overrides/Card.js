/***************************  OVERRIDES - CARD  ***************************/

export default function Card(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: theme.shadows[1],
          '&:hover': {
            boxShadow: theme.shadows[3]
          }
        }
      }
    }
  };
}
