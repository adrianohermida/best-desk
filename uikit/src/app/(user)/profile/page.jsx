'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch,
  FormControlLabel
} from '@mui/material';

// Dynamic imports for icons to reduce initial bundle size
const IconUser = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconUser })));
const IconMail = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconMail })));
const IconPhone = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconPhone })));
const IconMapPin = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconMapPin })));
const IconCalendar = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconCalendar })));
const IconSettings = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconSettings })));
const IconBell = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconBell })));
const IconShield = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconShield })));
const IconCreditCard = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconCreditCard })));

// Mock user data - replace with real user data
const mockUser = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'New York, USA',
  joinDate: '2023-01-15',
  avatar: '/assets/images/users/avatar-1.png',
  plan: 'Pro',
  status: 'Active',
  lastLogin: '2024-01-15 14:30:00',
  preferences: {
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true,
    securityAlerts: true
  }
};

export default function ProfilePage() {
  const [user, setUser] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    location: user.location
  });

  const handleInputChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSave = () => {
    setUser((prev) => ({ ...prev, ...formData }));
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const handleCancel = () => {
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      location: user.location
    });
    setIsEditing(false);
  };

  const handlePreferenceChange = (preference) => (event) => {
    setUser((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [preference]: event.target.checked
      }
    }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My Profile
      </Typography>

      <Grid container spacing={3}>
        {/* Profile Info Card */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Avatar
              src={user.avatar}
              sx={{
                width: 120,
                height: 120,
                mx: 'auto',
                mb: 2
              }}
            />
            <Typography variant="h5" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {user.email}
            </Typography>
            <Chip label={`${user.plan} Plan`} color="primary" variant="outlined" sx={{ mb: 2 }} />
            <Chip label={user.status} color="success" size="small" />

            <Divider sx={{ my: 2 }} />

            <List dense>
              <ListItem>
                <ListItemIcon>
                  <IconCalendar size={20} />
                </ListItemIcon>
                <ListItemText primary="Joined" secondary={new Date(user.joinDate).toLocaleDateString()} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <IconShield size={20} />
                </ListItemIcon>
                <ListItemText primary="Last Login" secondary={new Date(user.lastLogin).toLocaleString()} />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Profile Details */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6">Profile Information</Typography>
              {!isEditing ? (
                <Button variant="outlined" startIcon={<IconSettings />} onClick={() => setIsEditing(true)}>
                  Edit Profile
                </Button>
              ) : (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button variant="outlined" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button variant="contained" onClick={handleSave}>
                    Save Changes
                  </Button>
                </Box>
              )}
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  value={isEditing ? formData.name : user.name}
                  onChange={handleInputChange('name')}
                  disabled={!isEditing}
                  InputProps={{
                    startAdornment: <IconUser size={20} style={{ marginRight: 8 }} />
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={isEditing ? formData.email : user.email}
                  onChange={handleInputChange('email')}
                  disabled={!isEditing}
                  InputProps={{
                    startAdornment: <IconMail size={20} style={{ marginRight: 8 }} />
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={isEditing ? formData.phone : user.phone}
                  onChange={handleInputChange('phone')}
                  disabled={!isEditing}
                  InputProps={{
                    startAdornment: <IconPhone size={20} style={{ marginRight: 8 }} />
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Location"
                  value={isEditing ? formData.location : user.location}
                  onChange={handleInputChange('location')}
                  disabled={!isEditing}
                  InputProps={{
                    startAdornment: <IconMapPin size={20} style={{ marginRight: 8 }} />
                  }}
                />
              </Grid>
            </Grid>
          </Paper>

          {/* Preferences */}
          <Paper sx={{ p: 3, mt: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconBell size={24} />
              Notification Preferences
            </Typography>

            <List>
              <ListItem>
                <ListItemText primary="Email Notifications" secondary="Receive notifications via email" />
                <FormControlLabel
                  control={<Switch checked={user.preferences.emailNotifications} onChange={handlePreferenceChange('emailNotifications')} />}
                  label=""
                />
              </ListItem>

              <ListItem>
                <ListItemText primary="Push Notifications" secondary="Receive push notifications on your device" />
                <FormControlLabel
                  control={<Switch checked={user.preferences.pushNotifications} onChange={handlePreferenceChange('pushNotifications')} />}
                  label=""
                />
              </ListItem>

              <ListItem>
                <ListItemText primary="Marketing Emails" secondary="Receive marketing and promotional emails" />
                <FormControlLabel
                  control={<Switch checked={user.preferences.marketingEmails} onChange={handlePreferenceChange('marketingEmails')} />}
                  label=""
                />
              </ListItem>

              <ListItem>
                <ListItemText primary="Security Alerts" secondary="Receive important security notifications" />
                <FormControlLabel
                  control={<Switch checked={user.preferences.securityAlerts} onChange={handlePreferenceChange('securityAlerts')} />}
                  label=""
                />
              </ListItem>
            </List>
          </Paper>

          {/* Account Actions */}
          <Paper sx={{ p: 3, mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Account Actions
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="outlined" startIcon={<IconShield />} href="/settings/security">
                Security Settings
              </Button>

              <Button variant="outlined" startIcon={<IconCreditCard />} href="/settings/billing">
                Billing & Subscription
              </Button>

              <Button variant="outlined" color="error" href="/settings/account">
                Delete Account
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
