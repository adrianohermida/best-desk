import { Box, Typography } from '@mui/material';

export default function AdminDashboardSimple() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard (Simple Route)
      </Typography>

      <Typography variant="body1">This is a simple admin dashboard accessible at /admin/dashboard</Typography>
    </Box>
  );
}
