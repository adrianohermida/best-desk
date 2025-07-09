'use client';

import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Divider,
  Grid,
  Avatar,
  IconButton,
  Alert,
  Tabs,
  Tab
} from '@mui/material';
import { IconUpload, IconDeviceFloppy, IconShield, IconBell, IconUser, IconSettings, IconDatabase } from '@tabler/icons-react';
import PageHeader from '@/components/admin/PageHeader';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`settings-tabpanel-${index}`} aria-labelledby={`settings-tab-${index}`} {...other}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function SettingsPage() {
  const [tabValue, setTabValue] = useState(0);
  const [settings, setSettings] = useState({
    // General Settings
    siteName: 'LawDesk Pro',
    siteDescription: 'Professional Legal Case Management System',
    timezone: 'America/Sao_Paulo',
    language: 'pt-BR',

    // Security Settings
    twoFactorAuth: true,
    sessionTimeout: 30,
    passwordExpiry: 90,

    // Notification Settings
    emailNotifications: true,
    pushNotifications: false,
    caseReminders: true,
    hearingAlerts: true,

    // System Settings
    autoBackup: true,
    backupFrequency: 'daily',
    maintenanceMode: false
  });

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    // Save settings logic here
    console.log('Saving settings:', settings);
  };

  const tabs = [
    { label: 'General', icon: IconSettings },
    { label: 'Security', icon: IconShield },
    { label: 'Notifications', icon: IconBell },
    { label: 'System', icon: IconDatabase }
  ];

  return (
    <Box>
      <PageHeader
        title="System Settings"
        subtitle="Configure your application settings"
        action={
          <Button variant="contained" startIcon={<IconSave />} onClick={handleSave}>
            Save Changes
          </Button>
        }
      />

      <Card>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
            {tabs.map((tab, index) => (
              <Tab key={index} icon={<tab.icon size={20} />} label={tab.label} iconPosition="start" />
            ))}
          </Tabs>
        </Box>

        {/* General Settings */}
        <TabPanel value={tabValue} index={0}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              General Configuration
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Site Name"
                  value={settings.siteName}
                  onChange={(e) => handleSettingChange('siteName', e.target.value)}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Language"
                  value={settings.language}
                  onChange={(e) => handleSettingChange('language', e.target.value)}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Site Description"
                  value={settings.siteDescription}
                  onChange={(e) => handleSettingChange('siteDescription', e.target.value)}
                  margin="normal"
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Timezone"
                  value={settings.timezone}
                  onChange={(e) => handleSettingChange('timezone', e.target.value)}
                  margin="normal"
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              Branding
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Avatar sx={{ width: 80, height: 80 }}>L</Avatar>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Company Logo
                </Typography>
                <Button variant="outlined" startIcon={<IconUpload />} size="small">
                  Upload Logo
                </Button>
              </Box>
            </Box>
          </CardContent>
        </TabPanel>

        {/* Security Settings */}
        <TabPanel value={tabValue} index={1}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Security Configuration
            </Typography>

            <Alert severity="info" sx={{ mb: 3 }}>
              These settings affect the security of your application. Changes require administrator privileges.
            </Alert>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControlLabel
                control={
                  <Switch checked={settings.twoFactorAuth} onChange={(e) => handleSettingChange('twoFactorAuth', e.target.checked)} />
                }
                label="Enable Two-Factor Authentication"
              />

              <TextField
                label="Session Timeout (minutes)"
                type="number"
                value={settings.sessionTimeout}
                onChange={(e) => handleSettingChange('sessionTimeout', parseInt(e.target.value))}
                sx={{ maxWidth: 200 }}
                margin="normal"
              />

              <TextField
                label="Password Expiry (days)"
                type="number"
                value={settings.passwordExpiry}
                onChange={(e) => handleSettingChange('passwordExpiry', parseInt(e.target.value))}
                sx={{ maxWidth: 200 }}
                margin="normal"
              />
            </Box>
          </CardContent>
        </TabPanel>

        {/* Notification Settings */}
        <TabPanel value={tabValue} index={2}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Notification Preferences
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.emailNotifications}
                    onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                  />
                }
                label="Email Notifications"
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={settings.pushNotifications}
                    onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
                  />
                }
                label="Push Notifications"
              />

              <FormControlLabel
                control={
                  <Switch checked={settings.caseReminders} onChange={(e) => handleSettingChange('caseReminders', e.target.checked)} />
                }
                label="Case Deadline Reminders"
              />

              <FormControlLabel
                control={
                  <Switch checked={settings.hearingAlerts} onChange={(e) => handleSettingChange('hearingAlerts', e.target.checked)} />
                }
                label="Hearing Date Alerts"
              />
            </Box>
          </CardContent>
        </TabPanel>

        {/* System Settings */}
        <TabPanel value={tabValue} index={3}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              System Configuration
            </Typography>

            <Alert severity="warning" sx={{ mb: 3 }}>
              System settings can affect application performance. Make changes carefully.
            </Alert>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControlLabel
                control={<Switch checked={settings.autoBackup} onChange={(e) => handleSettingChange('autoBackup', e.target.checked)} />}
                label="Enable Automatic Backups"
              />

              <TextField
                label="Backup Frequency"
                value={settings.backupFrequency}
                onChange={(e) => handleSettingChange('backupFrequency', e.target.value)}
                sx={{ maxWidth: 200 }}
                margin="normal"
                select
                SelectProps={{
                  native: true
                }}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </TextField>

              <FormControlLabel
                control={
                  <Switch checked={settings.maintenanceMode} onChange={(e) => handleSettingChange('maintenanceMode', e.target.checked)} />
                }
                label="Maintenance Mode"
              />
            </Box>
          </CardContent>
        </TabPanel>
      </Card>
    </Box>
  );
}
