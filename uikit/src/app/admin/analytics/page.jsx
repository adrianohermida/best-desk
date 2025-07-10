'use client';

// @mui
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import {
  IconEye,
  IconUsers,
  IconClick,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconBrandChrome,
  IconBrandFirefox,
  IconBrandSafari
} from '@tabler/icons-react';

const analyticsData = {
  overview: [
    { title: 'Page Views', value: '45,234', change: '+12.5%', icon: IconEye },
    { title: 'Unique Visitors', value: '12,845', change: '+8.2%', icon: IconUsers },
    { title: 'Click Rate', value: '3.4%', change: '+2.1%', icon: IconClick },
    { title: 'Bounce Rate', value: '24.5%', change: '-1.8%', icon: IconDeviceDesktop }
  ],
  topPages: [
    { page: '/dashboard', views: '8,234', percentage: '18.2%' },
    { page: '/products', views: '6,543', percentage: '14.5%' },
    { page: '/analytics', views: '4,321', percentage: '9.6%' },
    { page: '/users', views: '3,876', percentage: '8.6%' },
    { page: '/settings', views: '2,145', percentage: '4.7%' }
  ],
  devices: [
    { device: 'Desktop', count: '28,456', percentage: '62.9%', icon: IconDeviceDesktop },
    { device: 'Mobile', count: '16,778', percentage: '37.1%', icon: IconDeviceMobile }
  ],
  browsers: [
    { browser: 'Chrome', count: '25,234', percentage: '55.8%', icon: IconBrandChrome },
    { browser: 'Safari', count: '12,456', percentage: '27.5%', icon: IconBrandSafari },
    { browser: 'Firefox', count: '7,544', percentage: '16.7%', icon: IconBrandFirefox }
  ]
};

export default function AnalyticsPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Analytics
      </Typography>

      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ mb: 4 }}>
        Track your website performance and user engagement metrics.
      </Typography>

      {/* Overview Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {analyticsData.overview.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography color="text.secondary" variant="body2">
                      {metric.title}
                    </Typography>
                    <Typography variant="h4" component="div" sx={{ mt: 1 }}>
                      {metric.value}
                    </Typography>
                    <Chip label={metric.change} size="small" color={metric.change.startsWith('+') ? 'success' : 'error'} sx={{ mt: 1 }} />
                  </Box>
                  <metric.icon size={40} color="#666" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Top Pages */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Top Pages" />
            <CardContent>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Page</TableCell>
                      <TableCell align="right">Views</TableCell>
                      <TableCell align="right">Percentage</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {analyticsData.topPages.map((page, index) => (
                      <TableRow key={index}>
                        <TableCell>{page.page}</TableCell>
                        <TableCell align="right">{page.views}</TableCell>
                        <TableCell align="right">{page.percentage}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Device Analytics */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Device Types" />
                <CardContent>
                  <Stack spacing={2}>
                    {analyticsData.devices.map((device, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <device.icon size={24} />
                          <Typography variant="body1">{device.device}</Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography variant="body1">{device.count}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {device.percentage}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardHeader title="Browser Usage" />
                <CardContent>
                  <Stack spacing={2}>
                    {analyticsData.browsers.map((browser, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <browser.icon size={24} />
                          <Typography variant="body1">{browser.browser}</Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography variant="body1">{browser.count}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {browser.percentage}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
