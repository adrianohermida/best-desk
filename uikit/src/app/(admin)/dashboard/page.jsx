import { Box, Typography, Grid } from '@mui/material';
import OverviewCard from '@/admin/components/cards/OverviewCard';

export default function AdminDashboard() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <OverviewCard title="Total Users" value="1,234" color="primary" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <OverviewCard title="Active Sessions" value="987" color="success" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <OverviewCard title="Revenue" value="$12,345" color="warning" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <OverviewCard title="Growth" value="+23%" color="info" />
        </Grid>
      </Grid>
    </Box>
  );
}
