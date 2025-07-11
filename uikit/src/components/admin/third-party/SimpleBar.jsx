import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

/***************************  SIMPLE BAR (SIMPLIFIED)  ***************************/

export default function SimpleBar({ children, sx, ...other }) {
  return (
    <Box
      {...other}
      sx={{
        overflow: 'auto',
        ...sx
      }}
    >
      {children}
    </Box>
  );
}

SimpleBar.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object
};
