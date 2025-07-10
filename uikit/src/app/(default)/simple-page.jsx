'use client';

// @mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function SimplePage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Simple Test Page</Typography>
      <Typography variant="body1">Testing basic MUI imports</Typography>
    </Box>
  );
}
