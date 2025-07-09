/***************************  OVERRIDES - TEXTFIELD  ***************************/

export default function TextField(theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8
          }
        }
      }
    }
  };
}
