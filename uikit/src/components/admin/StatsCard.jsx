'use client';

import { Card, CardContent, Box, Typography, Avatar } from '@mui/material';
import { IconTrendingUp, IconTrendingDown } from '@tabler/icons-react';

export default function StatsCard({ title, value, change, changeType, icon: Icon, color = 'primary' }) {
  const isPositive = changeType === 'positive';
  const changeColor = isPositive ? 'success.main' : 'error.main';
  const ChangeIcon = isPositive ? IconTrendingUp : IconTrendingDown;

  const colorMap = {
    primary: 'primary.main',
    success: 'success.main',
    warning: 'warning.main',
    error: 'error.main',
    info: 'info.main'
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4" component="div" sx={{ mb: 1 }}>
              {value}
            </Typography>
            {change && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <ChangeIcon size={16} color={changeColor} />
                <Typography variant="body2" sx={{ color: changeColor }}>
                  {change}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  from last month
                </Typography>
              </Box>
            )}
          </Box>

          <Avatar
            sx={{
              backgroundColor: `${color}.lighter`,
              color: colorMap[color],
              width: 56,
              height: 56
            }}
          >
            <Icon size={24} />
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  );
}
