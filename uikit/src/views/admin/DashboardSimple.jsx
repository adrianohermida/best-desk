// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

/***************************  ADMIN DASHBOARD SIMPLE  ***************************/

export default function DashboardSimple() {
  return (
    <Stack sx={{ gap: 3 }}>
      {/* Header */}
      <Stack>
        <Typography variant="h4" component="h1">
          Admin Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome to SaasAble Admin Panel - Integrated successfully!
        </Typography>
      </Stack>

      {/* Stats Cards */}
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary">
                Total Users
              </Typography>
              <Typography variant="h3">1,234</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary">
                Active Sessions
              </Typography>
              <Typography variant="h3">567</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary">
                Page Views
              </Typography>
              <Typography variant="h3">89.2K</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary">
                Revenue
              </Typography>
              <Typography variant="h3">$12.4K</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Actions */}
      <Card>
        <CardContent>
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <Button variant="contained">Manage Users</Button>
            <Button variant="outlined">View Analytics</Button>
            <Button variant="outlined">Settings</Button>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            Integration Status: ✅ Admin dashboard successfully integrated into UIKit!
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
