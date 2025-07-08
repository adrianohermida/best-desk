'use client';

import { Card, CardContent, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, Box, Chip } from '@mui/material';
import { IconPlus, IconEdit, IconCheck, IconCalendar, IconTrash } from '@tabler/icons-react';

const activityIcons = {
  create: IconPlus,
  update: IconEdit,
  complete: IconCheck,
  schedule: IconCalendar,
  delete: IconTrash
};

const activityColors = {
  create: 'success.main',
  update: 'info.main',
  complete: 'primary.main',
  schedule: 'warning.main',
  delete: 'error.main'
};

export default function RecentActivity({ activities = [] }) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Recent Activity</Typography>
          <Chip label="Live" color="success" size="small" />
        </Box>

        <List disablePadding>
          {activities.map((activity, index) => {
            const Icon = activityIcons[activity.type] || IconEdit;
            const color = activityColors[activity.type] || 'text.secondary';

            return (
              <ListItem
                key={activity.id}
                sx={{
                  px: 0,
                  py: 1.5,
                  borderBottom: index < activities.length - 1 ? 1 : 0,
                  borderColor: 'divider'
                }}
              >
                <ListItemAvatar>
                  <Avatar src={activity.avatar} sx={{ width: 40, height: 40 }}>
                    {activity.user.charAt(0)}
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="subtitle2" component="span">
                        {activity.user}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" component="span">
                        {activity.action}
                      </Typography>
                      <Typography variant="body2" color="primary" component="span">
                        {activity.target}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                      <Icon size={14} style={{ color }} />
                      <Typography variant="caption" color="text.secondary">
                        {activity.time}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            );
          })}
        </List>

        {activities.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="body2" color="text.secondary">
              No recent activity
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
