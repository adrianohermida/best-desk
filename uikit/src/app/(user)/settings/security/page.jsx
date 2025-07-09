'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch,
  FormControlLabel,
  Chip,
  Divider,
  Alert
} from '@mui/material';
import { IconShield, IconKey, IconSmartphone, IconDevices, IconLock, IconEye, IconTrash, IconPlus } from '@tabler/icons-react';

const mockSecurityData = {
  lastPasswordChange: '2023-12-15',
  twoFactorEnabled: true,
  sessions: [
    {
      id: 1,
      device: 'Chrome on Windows',
      location: 'New York, USA',
      lastActive: '2024-01-15 14:30:00',
      current: true
    },
    {
      id: 2,
      device: 'Safari on iPhone',
      location: 'New York, USA',
      lastActive: '2024-01-14 09:15:00',
      current: false
    },
    {
      id: 3,
      device: 'Chrome on MacBook',
      location: 'Boston, USA',
      lastActive: '2024-01-13 16:45:00',
      current: false
    }
  ],
  loginHistory: [
    { date: '2024-01-15 14:30:00', location: 'New York, USA', success: true },
    { date: '2024-01-14 09:15:00', location: 'New York, USA', success: true },
    { date: '2024-01-13 16:45:00', location: 'Boston, USA', success: true },
    { date: '2024-01-12 10:20:00', location: 'Unknown', success: false }
  ]
};

export default function SecuritySettingsPage() {
  const [securityData, setSecurityData] = useState(mockSecurityData);
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const handlePasswordChange = (field) => (event) => {
    setPasswords((prev) => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleChangePassword = () => {
    // Validate passwords match
    if (passwords.new !== passwords.confirm) {
      alert('New passwords do not match');
      return;
    }

    // Here you would typically call API to change password
    alert('Password changed successfully');
    setPasswords({ current: '', new: '', confirm: '' });
    setShowPasswordForm(false);
    setSecurityData((prev) => ({
      ...prev,
      lastPasswordChange: new Date().toISOString().split('T')[0]
    }));
  };

  const toggleTwoFactor = () => {
    setSecurityData((prev) => ({
      ...prev,
      twoFactorEnabled: !prev.twoFactorEnabled
    }));
  };

  const terminateSession = (sessionId) => {
    setSecurityData((prev) => ({
      ...prev,
      sessions: prev.sessions.filter((session) => session.id !== sessionId)
    }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Security Settings
      </Typography>

      <Grid container spacing={3}>
        {/* Password Settings */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconKey size={24} />
              Password
            </Typography>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              Last changed: {new Date(securityData.lastPasswordChange).toLocaleDateString()}
            </Typography>

            {!showPasswordForm ? (
              <Button variant="outlined" onClick={() => setShowPasswordForm(true)} sx={{ mt: 2 }}>
                Change Password
              </Button>
            ) : (
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  type="password"
                  label="Current Password"
                  value={passwords.current}
                  onChange={handlePasswordChange('current')}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  type="password"
                  label="New Password"
                  value={passwords.new}
                  onChange={handlePasswordChange('new')}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  type="password"
                  label="Confirm New Password"
                  value={passwords.confirm}
                  onChange={handlePasswordChange('confirm')}
                  sx={{ mb: 2 }}
                />
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button variant="contained" onClick={handleChangePassword}>
                    Update Password
                  </Button>
                  <Button variant="outlined" onClick={() => setShowPasswordForm(false)}>
                    Cancel
                  </Button>
                </Box>
              </Box>
            )}
          </Paper>
        </Grid>

        {/* Two-Factor Authentication */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconSmartphone size={24} />
              Two-Factor Authentication
            </Typography>

            <FormControlLabel
              control={<Switch checked={securityData.twoFactorEnabled} onChange={toggleTwoFactor} />}
              label={securityData.twoFactorEnabled ? 'Enabled' : 'Disabled'}
            />

            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Add an extra layer of security to your account
            </Typography>

            {securityData.twoFactorEnabled && (
              <Alert severity="success" sx={{ mt: 2 }}>
                Two-factor authentication is active and protecting your account.
              </Alert>
            )}
          </Paper>
        </Grid>

        {/* Active Sessions */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconDevices size={24} />
              Active Sessions
            </Typography>

            <List>
              {securityData.sessions.map((session, index) => (
                <Box key={session.id}>
                  <ListItem
                    secondaryAction={
                      !session.current && (
                        <Button size="small" color="error" startIcon={<IconTrash size={16} />} onClick={() => terminateSession(session.id)}>
                          Terminate
                        </Button>
                      )
                    }
                  >
                    <ListItemIcon>
                      <IconDevices />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          {session.device}
                          {session.current && <Chip label="Current" size="small" color="primary" />}
                        </Box>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body2" color="text.secondary">
                            {session.location}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Last active: {new Date(session.lastActive).toLocaleString()}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                  {index < securityData.sessions.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Login History */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconEye size={24} />
              Recent Login Activity
            </Typography>

            <List>
              {securityData.loginHistory.map((login, index) => (
                <Box key={index}>
                  <ListItem>
                    <ListItemIcon>
                      <IconShield color={login.success ? 'green' : 'red'} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          {login.success ? 'Successful login' : 'Failed login attempt'}
                          <Chip label={login.success ? 'Success' : 'Failed'} size="small" color={login.success ? 'success' : 'error'} />
                        </Box>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body2" color="text.secondary">
                            {login.location}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {new Date(login.date).toLocaleString()}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                  {index < securityData.loginHistory.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
