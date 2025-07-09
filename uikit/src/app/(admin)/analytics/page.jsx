import { Box, Typography, Grid, Paper } from '@mui/material';
import OverviewCard from '@/admin/components/cards/OverviewCard';

export default function AdminAnalytics() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Analytics
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Page Views
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Analytics chart would go here
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: 300 }}>
            <Typography variant="h6" gutterBottom>
              User Activity
            </Typography>
            <Typography variant="body2" color="text.secondary">
              User activity chart would go here
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <OverviewCard title="Page Views" value="45,123" color="primary" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OverviewCard title="Unique Visitors" value="12,456" color="success" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OverviewCard title="Bounce Rate" value="34.5%" color="warning" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OverviewCard title="Avg. Session" value="2m 45s" color="info" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
