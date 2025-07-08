'use client';

import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function AnalyticsChart() {
  const theme = useTheme();

  // Mock chart data - in real implementation, use a chart library like Chart.js or Recharts
  const mockData = [
    { month: 'Jan', cases: 65, resolved: 45 },
    { month: 'Feb', cases: 78, resolved: 52 },
    { month: 'Mar', cases: 90, resolved: 67 },
    { month: 'Apr', cases: 81, resolved: 58 },
    { month: 'May', cases: 95, resolved: 72 },
    { month: 'Jun', cases: 87, resolved: 63 }
  ];

  return (
    <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Placeholder for chart */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Analytics Chart Placeholder
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Integrate with Chart.js, Recharts, or similar library
        </Typography>

        {/* Simple mock visualization */}
        <Box sx={{ mt: 3, display: 'flex', gap: 1, justifyContent: 'center' }}>
          {mockData.map((item, index) => (
            <Box key={index} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  width: 20,
                  height: item.cases,
                  backgroundColor: theme.palette.primary.main,
                  mb: 1,
                  borderRadius: 1
                }}
              />
              <Typography variant="caption" color="text.secondary">
                {item.month}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 12, height: 12, backgroundColor: 'primary.main', borderRadius: 1 }} />
            <Typography variant="caption">New Cases</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 12, height: 12, backgroundColor: 'success.main', borderRadius: 1 }} />
            <Typography variant="caption">Resolved Cases</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
