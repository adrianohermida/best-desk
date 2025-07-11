'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Stack,
  Avatar,
  Chip,
  Slider,
  Alert
} from '@mui/material';
import { IconPalette, IconMoon, IconSun, IconDeviceDesktop, IconEye, IconTypography, IconLayout } from '@tabler/icons-react';

const themeOptions = [
  { id: 'light', name: 'Light', icon: <IconSun size={24} />, description: 'Clean and bright interface' },
  { id: 'dark', name: 'Dark', icon: <IconMoon size={24} />, description: 'Easy on the eyes in low light' },
  { id: 'auto', name: 'Auto', icon: <IconDeviceDesktop size={24} />, description: 'Matches your system preference' }
];

const colorSchemes = [
  { id: 'blue', name: 'Blue', color: '#1976d2', description: 'Classic and professional' },
  { id: 'purple', name: 'Purple', color: '#9c27b0', description: 'Creative and modern' },
  { id: 'green', name: 'Green', color: '#388e3c', description: 'Natural and calming' },
  { id: 'orange', name: 'Orange', color: '#f57c00', description: 'Energetic and warm' },
  { id: 'red', name: 'Red', color: '#d32f2f', description: 'Bold and attention-grabbing' },
  { id: 'teal', name: 'Teal', color: '#00796b', description: 'Sophisticated and unique' }
];

const fontSizes = [
  { id: 'small', name: 'Small', size: '14px' },
  { id: 'medium', name: 'Medium', size: '16px' },
  { id: 'large', name: 'Large', size: '18px' },
  { id: 'extra-large', name: 'Extra Large', size: '20px' }
];

const layouts = [
  { id: 'compact', name: 'Compact', description: 'More content in less space' },
  { id: 'comfortable', name: 'Comfortable', description: 'Balanced spacing and readability' },
  { id: 'spacious', name: 'Spacious', description: 'Extra breathing room' }
];

export default function AppearancePage() {
  const [settings, setSettings] = useState({
    theme: 'auto',
    colorScheme: 'blue',
    fontSize: 'medium',
    layout: 'comfortable',
    reduceMotion: false,
    highContrast: false,
    showAnimations: true,
    compactMode: false,
    density: 50
  });
  const [saved, setSaved] = useState(false);

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value
    }));
    setSaved(false);
  };

  const handleSave = () => {
    // Here you would save to backend
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setSettings({
      theme: 'auto',
      colorScheme: 'blue',
      fontSize: 'medium',
      layout: 'comfortable',
      reduceMotion: false,
      highContrast: false,
      showAnimations: true,
      compactMode: false,
      density: 50
    });
    setSaved(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Appearance Settings
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Customize how the interface looks and feels to match your preferences
          </Typography>
        </Box>

        {saved && <Alert severity="success">Appearance settings saved successfully!</Alert>}

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Button variant="contained" onClick={handleSave}>
            Save Changes
          </Button>
          <Button variant="outlined" onClick={handleReset}>
            Reset to Defaults
          </Button>
        </Box>

        {/* Theme Selection */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconPalette size={24} />
            Theme
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 3 }}>
            Choose your preferred theme mode
          </Typography>

          <Grid container spacing={2}>
            {themeOptions.map((theme) => (
              <Grid item xs={12} sm={4} key={theme.id}>
                <Card
                  variant={settings.theme === theme.id ? 'outlined' : 'outlined'}
                  sx={{
                    border: settings.theme === theme.id ? 2 : 1,
                    borderColor: settings.theme === theme.id ? 'primary.main' : 'divider'
                  }}
                >
                  <CardActionArea onClick={() => handleSettingChange('theme', theme.id)}>
                    <CardContent sx={{ textAlign: 'center', py: 3 }}>
                      <Box sx={{ mb: 2 }}>{theme.icon}</Box>
                      <Typography variant="h6" gutterBottom>
                        {theme.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {theme.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Color Scheme */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Color Scheme
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 3 }}>
            Select your preferred accent color
          </Typography>

          <Grid container spacing={2}>
            {colorSchemes.map((scheme) => (
              <Grid item xs={6} sm={4} md={2} key={scheme.id}>
                <Card
                  variant={settings.colorScheme === scheme.id ? 'outlined' : 'outlined'}
                  sx={{
                    border: settings.colorScheme === scheme.id ? 2 : 1,
                    borderColor: settings.colorScheme === scheme.id ? 'primary.main' : 'divider'
                  }}
                >
                  <CardActionArea onClick={() => handleSettingChange('colorScheme', scheme.id)}>
                    <CardContent sx={{ textAlign: 'center', py: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: scheme.color,
                          width: 32,
                          height: 32,
                          mx: 'auto',
                          mb: 1
                        }}
                      >
                        {' '}
                      </Avatar>
                      <Typography variant="body2" fontWeight="medium">
                        {scheme.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Typography & Layout */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconTypography size={24} />
                Typography
              </Typography>

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Font Size</InputLabel>
                <Select value={settings.fontSize} onChange={(e) => handleSettingChange('fontSize', e.target.value)} label="Font Size">
                  {fontSizes.map((size) => (
                    <MenuItem key={size.id} value={size.id}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <span>{size.name}</span>
                        <span style={{ fontSize: size.size }}>{size.size}</span>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Typography variant="subtitle2" gutterBottom>
                Preview Text
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: fontSizes.find((f) => f.id === settings.fontSize)?.size,
                  p: 2,
                  bgcolor: 'grey.50',
                  borderRadius: 1
                }}
              >
                The quick brown fox jumps over the lazy dog. This is how your text will appear with the selected font size.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconLayout size={24} />
                Layout
              </Typography>

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Layout Density</InputLabel>
                <Select value={settings.layout} onChange={(e) => handleSettingChange('layout', e.target.value)} label="Layout Density">
                  {layouts.map((layout) => (
                    <MenuItem key={layout.id} value={layout.id}>
                      <Box>
                        <Typography variant="body1">{layout.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {layout.description}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Typography variant="subtitle2" gutterBottom>
                Content Density: {settings.density}%
              </Typography>
              <Slider
                value={settings.density}
                onChange={(e, value) => handleSettingChange('density', value)}
                min={25}
                max={100}
                step={5}
                marks={[
                  { value: 25, label: 'Compact' },
                  { value: 50, label: 'Normal' },
                  { value: 75, label: 'Comfortable' },
                  { value: 100, label: 'Spacious' }
                ]}
                valueLabelDisplay="auto"
              />
            </Paper>
          </Grid>
        </Grid>

        {/* Accessibility Options */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconEye size={24} />
            Accessibility
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 3 }}>
            Options to improve accessibility and usability
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={<Switch checked={settings.reduceMotion} onChange={(e) => handleSettingChange('reduceMotion', e.target.checked)} />}
                label="Reduce Motion"
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                Minimize animations and transitions
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={<Switch checked={settings.highContrast} onChange={(e) => handleSettingChange('highContrast', e.target.checked)} />}
                label="High Contrast"
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                Increase contrast for better visibility
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch checked={settings.showAnimations} onChange={(e) => handleSettingChange('showAnimations', e.target.checked)} />
                }
                label="Show Animations"
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                Enable interface animations and transitions
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={<Switch checked={settings.compactMode} onChange={(e) => handleSettingChange('compactMode', e.target.checked)} />}
                label="Compact Mode"
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                Reduce spacing and padding throughout the interface
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Alert severity="info">
          <Typography variant="body2">
            <strong>Note:</strong> Some appearance changes may require a page refresh to take full effect. Your preferences are
            automatically synced across all devices.
          </Typography>
        </Alert>
      </Stack>
    </Container>
  );
}
