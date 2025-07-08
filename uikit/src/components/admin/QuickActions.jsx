'use client';

import { Card, CardContent, Typography, Grid, Button, Box, Avatar } from '@mui/material';

export default function QuickActions({ actions = [] }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Quick Actions
        </Typography>

        <Grid container spacing={2}>
          {actions.map((action, index) => (
            <Grid item xs={12} key={index}>
              <Button
                fullWidth
                variant="outlined"
                href={action.href}
                sx={{
                  p: 2,
                  height: 'auto',
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  borderColor: 'divider',
                  '&:hover': {
                    borderColor: `${action.color}.main`,
                    backgroundColor: `${action.color}.lighter`
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                  <Avatar
                    sx={{
                      backgroundColor: `${action.color}.lighter`,
                      color: `${action.color}.main`,
                      width: 40,
                      height: 40
                    }}
                  >
                    <action.icon size={20} />
                  </Avatar>

                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      {action.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {action.description}
                    </Typography>
                  </Box>
                </Box>
              </Button>
            </Grid>
          ))}
        </Grid>

        {actions.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="body2" color="text.secondary">
              No quick actions available
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
