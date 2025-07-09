import { Box, Typography, Paper, List, ListItem, ListItemText, Switch, Divider } from '@mui/material';

export default function AdminSettings() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>

      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          System Configuration
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="User Registration" secondary="Allow new users to register" />
            <Switch defaultChecked />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemText primary="Email Notifications" secondary="Send system notifications via email" />
            <Switch defaultChecked />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemText primary="Maintenance Mode" secondary="Enable maintenance mode for system updates" />
            <Switch />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemText primary="Analytics Tracking" secondary="Enable user analytics and tracking" />
            <Switch defaultChecked />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}
