'use client';

// @mui
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Stack, Chip, LinearProgress } from '@mui/material';
import { IconTrendingUp, IconUsers, IconShoppingCart, IconCurrencyDollar, IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';

const statsData = [
  {
    title: 'Total Users',
    value: '1,234',
    change: '+12.5%',
    trend: 'up',
    icon: IconUsers,
    color: 'primary'
  },
  {
    title: 'Revenue',
    value: '$45,678',
    change: '+8.2%',
    trend: 'up',
    icon: IconCurrencyDollar,
    color: 'success'
  },
  {
    title: 'Orders',
    value: '892',
    change: '-3.1%',
    trend: 'down',
    icon: IconShoppingCart,
    color: 'warning'
  },
  {
    title: 'Growth',
    value: '23.5%',
    change: '+5.4%',
    trend: 'up',
    icon: IconTrendingUp,
    color: 'info'
  }
];

export default function DashboardPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>

      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ mb: 4 }}>
        Welcome back! Here's what's happening with your business today.
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statsData.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography color="text.secondary" variant="body2">
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" component="div" sx={{ mt: 1 }}>
                      {stat.value}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                      {stat.trend === 'up' ? <IconArrowUpRight size={16} color="green" /> : <IconArrowDownRight size={16} color="red" />}
                      <Typography
                        variant="body2"
                        sx={{
                          color: stat.trend === 'up' ? 'success.main' : 'error.main'
                        }}
                      >
                        {stat.change}
                      </Typography>
                    </Stack>
                  </Box>
                  <Avatar
                    sx={{
                      bgcolor: `${stat.color}.main`,
                      width: 56,
                      height: 56
                    }}
                  >
                    <stat.icon size={24} />
                  </Avatar>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recent Activity */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activity
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="body2">New user registration</Typography>
                  <Chip label="2 min ago" size="small" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="body2">Order #1234 completed</Typography>
                  <Chip label="5 min ago" size="small" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="body2">System backup completed</Typography>
                  <Chip label="1 hour ago" size="small" />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                System Status
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">CPU Usage</Typography>
                    <Typography variant="body2">45%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={45} />
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Memory</Typography>
                    <Typography variant="body2">78%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={78} color="warning" />
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Storage</Typography>
                    <Typography variant="body2">23%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={23} color="success" />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
