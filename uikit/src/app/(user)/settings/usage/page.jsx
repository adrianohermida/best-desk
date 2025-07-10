'use client';

import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Alert
} from '@mui/material';
import { IconDatabase, IconApi, IconUsers, IconClock, IconTrendingUp, IconDownload } from '@tabler/icons-react';

const usageData = {
  current: {
    storage: { used: 45, total: 100, unit: 'GB' },
    apiCalls: { used: 125430, total: 1000000, unit: 'calls' },
    projects: { used: 12, total: 'unlimited', unit: 'projects' },
    teamMembers: { used: 5, total: 25, unit: 'members' }
  },
  usage: [
    { date: '2024-01-15', storage: 45, apiCalls: 8543, projects: 12 },
    { date: '2024-01-14', storage: 44, apiCalls: 7892, projects: 12 },
    { date: '2024-01-13', storage: 43, apiCalls: 9156, projects: 11 },
    { date: '2024-01-12', storage: 42, apiCalls: 6734, projects: 11 },
    { date: '2024-01-11', storage: 41, apiCalls: 8921, projects: 10 }
  ]
};

export default function UsagePage() {
  const getUsagePercentage = (used, total) => {
    if (total === 'unlimited') return 0;
    return (used / total) * 100;
  };

  const getUsageColor = (percentage) => {
    if (percentage < 50) return 'success';
    if (percentage < 80) return 'warning';
    return 'error';
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Usage & Limits
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Monitor your current usage and plan limits
          </Typography>
        </Box>

        {/* Current Usage Overview */}
        <Grid container spacing={3}>
          {Object.entries(usageData.current).map(([key, data]) => {
            const percentage = getUsagePercentage(data.used, data.total);
            const color = getUsageColor(percentage);
            const Icon = {
              storage: IconDatabase,
              apiCalls: IconApi,
              projects: IconUsers,
              teamMembers: IconUsers
            }[key];

            return (
              <Grid item xs={12} sm={6} md={3} key={key}>
                <Card>
                  <CardContent>
                    <Stack spacing={2}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Icon size={24} />
                        <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
                          {key.replace(/([A-Z])/g, ' $1')}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography variant="h4">{typeof data.used === 'number' ? data.used.toLocaleString() : data.used}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          of {data.total === 'unlimited' ? 'unlimited' : data.total.toLocaleString()} {data.unit}
                        </Typography>
                      </Box>

                      {data.total !== 'unlimited' && (
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                              Usage
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {percentage.toFixed(1)}%
                            </Typography>
                          </Box>
                          <LinearProgress variant="determinate" value={percentage} color={color} sx={{ height: 8, borderRadius: 4 }} />
                        </Box>
                      )}

                      {data.total === 'unlimited' && <Chip label="Unlimited" color="success" variant="outlined" size="small" />}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Usage Alerts */}
        <Box>
          {usageData.current.storage.used / 100 > 0.8 && (
            <Alert severity="warning" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>Storage Warning:</strong> You're using {((usageData.current.storage.used / 100) * 100).toFixed(1)}% of your storage
                limit. Consider upgrading your plan or cleaning up old files.
              </Typography>
            </Alert>
          )}

          {usageData.current.apiCalls.used / usageData.current.apiCalls.total > 0.9 && (
            <Alert severity="error">
              <Typography variant="body2">
                <strong>API Limit Alert:</strong> You're approaching your monthly API call limit. Consider upgrading your plan to avoid
                service interruption.
              </Typography>
            </Alert>
          )}
        </Box>

        {/* Usage History */}
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconTrendingUp size={24} />
              Usage History (Last 5 Days)
            </Typography>
            <Button variant="outlined" startIcon={<IconDownload />} size="small">
              Export Data
            </Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Storage (GB)</TableCell>
                  <TableCell align="right">API Calls</TableCell>
                  <TableCell align="right">Projects</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usageData.usage.map((day) => (
                  <TableRow key={day.date}>
                    <TableCell>{new Date(day.date).toLocaleDateString()}</TableCell>
                    <TableCell align="right">{day.storage}</TableCell>
                    <TableCell align="right">{day.apiCalls.toLocaleString()}</TableCell>
                    <TableCell align="right">{day.projects}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Plan Recommendations */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Plan Recommendations
          </Typography>

          {usageData.current.storage.used / 100 > 0.7 ? (
            <Alert severity="info">
              <Typography variant="body2">
                Based on your current usage patterns, you might benefit from upgrading to our Enterprise plan which includes 1TB of storage
                and unlimited API calls.
              </Typography>
              <Button variant="contained" size="small" sx={{ mt: 1 }}>
                View Plans
              </Button>
            </Alert>
          ) : (
            <Alert severity="success">
              <Typography variant="body2">
                Your current Pro plan seems to be a good fit for your usage patterns. You have plenty of room to grow with your current
                limits.
              </Typography>
            </Alert>
          )}
        </Paper>

        {/* Usage Tips */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Tips to Optimize Usage
          </Typography>

          <Stack spacing={2}>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Storage Optimization
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Delete unused files and old project versions • Compress images and assets before uploading • Use external CDNs for large
                media files
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" gutterBottom>
                API Efficiency
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Implement caching to reduce redundant API calls • Use batch requests when possible • Optimize polling intervals for
                real-time data
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Project Management
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Archive completed projects to free up active slots • Combine related features into single projects • Use templates to
                speed up project creation
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}
