import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';

/***************************  LAYOUT - ADMIN AUTH  ***************************/

export default function AdminAuthLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default'
      }}
    >
      {children}
    </Box>
  );
}

AdminAuthLayout.propTypes = { children: PropTypes.any };
