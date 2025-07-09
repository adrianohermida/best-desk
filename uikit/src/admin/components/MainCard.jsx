'use client';
import PropTypes from 'prop-types';

// @mui
import Card from '@mui/material/Card';

export default function MainCard({ children, sx = {}, ref, ...others }) {
  const defaultSx = (theme) => ({
    p: { xs: 1.75, sm: 2.25, md: 3 },
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 4,
    boxShadow: theme.customShadows?.section || '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  });

  const combinedSx = (theme) => ({
    ...defaultSx(theme),
    ...(typeof sx === 'function' ? sx(theme) : sx)
  });

  return (
    <Card ref={ref} elevation={0} sx={combinedSx} {...others}>
      {children}
    </Card>
  );
}

MainCard.propTypes = {
  children: PropTypes.any,
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  ref: PropTypes.any,
  others: PropTypes.any
};
