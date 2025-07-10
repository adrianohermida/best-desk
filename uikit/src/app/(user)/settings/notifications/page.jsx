'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch,
  FormControlLabel,
  Divider,
  Stack,
  Button,
  Alert
} from '@mui/material';
import { IconBell, IconMail, IconDevices, IconShield, IconBrandSlack, IconBrandDiscord } from '@tabler/icons-react';

const notificationCategories = [
  {
    title: 'Email Notifications',
    icon: <IconMail size={24} />,
    description: 'Get updates via email',
    settings: [
      { key: 'emailDigest', label: 'Daily digest', description: 'Receive a daily summary of important updates', enabled: true },
      { key: 'emailSecurity', label: 'Security alerts', description: 'Important security notifications and login alerts', enabled: true },
      { key: 'emailMarketing', label: 'Marketing emails', description: 'Product updates, tips, and promotional content', enabled: false },
      { key: 'emailBilling', label: 'Billing updates', description: 'Invoice and payment notifications', enabled: true }
    ]
  },
  {
    title: 'Push Notifications',
    icon: <IconDevices size={24} />,
    description: 'Browser and mobile notifications',
    settings: [
      { key: 'pushRealtime', label: 'Real-time alerts', description: 'Instant notifications for critical updates', enabled: false },
      { key: 'pushComments', label: 'Comments and replies', description: 'When someone responds to your content', enabled: true },
      { key: 'pushMentions', label: 'Mentions', description: 'When you are mentioned in discussions', enabled: true },
      { key: 'pushSystem', label: 'System notifications', description: 'Maintenance, updates, and system status', enabled: true }
    ]
  },
  {
    title: 'Team Notifications',
    icon: <IconBell size={24} />,
    description: 'Collaboration and team updates',
    settings: [
      { key: 'teamInvites', label: 'Team invitations', description: 'When you are invited to join a team', enabled: true },
      { key: 'teamUpdates', label: 'Team activity', description: 'Updates from teams you are part of', enabled: true },
      { key: 'projectChanges', label: 'Project changes', description: 'Important changes to shared projects', enabled: true }
    ]
  },
  {
    title: 'Integration Notifications',
    icon: <IconBrandSlack size={24} />,
    description: 'Third-party app notifications',
    settings: [
      { key: 'slackNotifications', label: 'Slack integration', description: 'Receive notifications in Slack', enabled: false },
      { key: 'discordNotifications', label: 'Discord integration', description: 'Receive notifications in Discord', enabled: false },
      { key: 'webhookNotifications', label: 'Webhook notifications', description: 'Custom webhook integrations', enabled: false }
    ]
  }
];

export default function NotificationsPage() {
  const [settings, setSettings] = useState(() => {
    const initialSettings = {};
    notificationCategories.forEach((category) => {
      category.settings.forEach((setting) => {
        initialSettings[setting.key] = setting.enabled;
      });
    });
    return initialSettings;
  });
  const [saved, setSaved] = useState(false);

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
    setSaved(false);
  };

  const handleSave = () => {
    // Here you would save to backend
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleDisableAll = () => {
    const newSettings = {};
    Object.keys(settings).forEach((key) => {
      newSettings[key] = false;
    });
    setSettings(newSettings);
    setSaved(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Notification Settings
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage how and when you receive notifications from the platform
          </Typography>
        </Box>

        {saved && <Alert severity="success">Notification settings saved successfully!</Alert>}

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Button variant="contained" onClick={handleSave}>
            Save Changes
          </Button>
          <Button variant="outlined" color="error" onClick={handleDisableAll}>
            Disable All Notifications
          </Button>
        </Box>

        <Stack spacing={3}>
          {notificationCategories.map((category, categoryIndex) => (
            <Paper key={categoryIndex} sx={{ p: 3 }}>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {category.icon}
                  <Box>
                    <Typography variant="h6">{category.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {category.description}
                    </Typography>
                  </Box>
                </Box>

                <List disablePadding>
                  {category.settings.map((setting, settingIndex) => (
                    <Box key={setting.key}>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemText primary={setting.label} secondary={setting.description} />
                        <FormControlLabel
                          control={<Switch checked={settings[setting.key] || false} onChange={() => handleToggle(setting.key)} />}
                          label=""
                        />
                      </ListItem>
                      {settingIndex < category.settings.length - 1 && <Divider />}
                    </Box>
                  ))}
                </List>
              </Stack>
            </Paper>
          ))}
        </Stack>

        <Alert severity="info">
          <Typography variant="body2">
            <strong>Privacy Note:</strong> We respect your privacy and will only send notifications based on your preferences. You can
            change these settings at any time.
          </Typography>
        </Alert>
      </Stack>
    </Container>
  );
}
