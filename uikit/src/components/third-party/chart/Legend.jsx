'use client';
import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

/***************************  CHART - LEGEND  ***************************/

export default function Legend({ items, onToggle }) {
  return (
    <Stack direction="row" sx={{ gap: 2, flexWrap: 'wrap' }}>
      {items.map((item) => (
        <Stack
          key={item.id}
          direction="row"
          sx={{
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
            opacity: item.visible ? 1 : 0.5,
            transition: 'opacity 0.2s'
          }}
          onClick={() => onToggle?.(item.id)}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              backgroundColor: item.color,
              borderRadius: '50%'
            }}
          />
          <Typography variant="body2" sx={{ userSelect: 'none' }}>
            {item.label}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

Legend.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      visible: PropTypes.bool.isRequired
    })
  ).isRequired,
  onToggle: PropTypes.func
};
