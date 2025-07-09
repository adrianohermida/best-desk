'use client';

import { useState } from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, TextField, Button, Avatar, Divider, Alert, Tab, Tabs } from '@mui/material';
import { IconUser, IconSettings, IconSecurity } from '@tabler/icons-react';

// @project
import { useAuth } from '@/hooks/useAuth';

/***************************  PROFILE VIEW  ***************************/

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

export default function ProfileView() {
  const { user, updateUser } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    bio: '',
    company: '',
    website: ''
  });
  const [message, setMessage] = useState('');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      await updateUser(formData);
      setMessage('Profile updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error updating profile. Please try again.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Profile Settings
      </Typography>

      <Grid container spacing={3}>
        {/* Profile Summary */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar src={user?.avatar} sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}>
                {user?.name?.charAt(0)?.toUpperCase()}
              </Avatar>
              <Typography variant="h6">{user?.name || 'User'}</Typography>
              <Typography variant="body2" color="text.secondary">
                {user?.email || 'user@example.com'}
              </Typography>
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                Member since {new Date().getFullYear()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Profile Details */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Tabs value={activeTab} onChange={handleTabChange}>
                <Tab icon={<IconUser />} label="Personal Info" />
                <Tab icon={<IconSettings />} label="Preferences" />
                <Tab icon={<IconSecurity />} label="Security" />
              </Tabs>

              <Divider sx={{ my: 2 }} />

              {message && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  {message}
                </Alert>
              )}

              <TabPanel value={activeTab} index={0}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleInputChange} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Company" name="company" value={formData.company} onChange={handleInputChange} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Bio" name="bio" multiline rows={3} value={formData.bio} onChange={handleInputChange} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Website" name="website" value={formData.website} onChange={handleInputChange} />
                  </Grid>
                </Grid>
              </TabPanel>

              <TabPanel value={activeTab} index={1}>
                <Typography variant="h6" gutterBottom>
                  Preferences
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Preference settings will be available in future updates.
                </Typography>
              </TabPanel>

              <TabPanel value={activeTab} index={2}>
                <Typography variant="h6" gutterBottom>
                  Security Settings
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Security settings will be available in future updates.
                </Typography>
              </TabPanel>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                <Button variant="contained" onClick={handleSave}>
                  Save Changes
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
