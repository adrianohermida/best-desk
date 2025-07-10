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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Stack,
  Avatar,
  Button,
  Alert,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import { IconLanguage, IconClock, IconGlobe, IconCheck, IconDownload } from '@tabler/icons-react';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', status: 'complete' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', status: 'complete' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', status: 'complete' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', status: 'complete' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', status: 'complete' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', status: 'partial' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', status: 'partial' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', status: 'partial' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳', status: 'coming-soon' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', status: 'coming-soon' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', status: 'coming-soon' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', status: 'coming-soon' }
];

const timeZones = [
  { value: 'America/New_York', label: 'Eastern Time (ET)', offset: 'UTC-5' },
  { value: 'America/Chicago', label: 'Central Time (CT)', offset: 'UTC-6' },
  { value: 'America/Denver', label: 'Mountain Time (MT)', offset: 'UTC-7' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)', offset: 'UTC-8' },
  { value: 'Europe/London', label: 'Greenwich Mean Time (GMT)', offset: 'UTC+0' },
  { value: 'Europe/Paris', label: 'Central European Time (CET)', offset: 'UTC+1' },
  { value: 'Europe/Berlin', label: 'Central European Time (CET)', offset: 'UTC+1' },
  { value: 'Asia/Tokyo', label: 'Japan Standard Time (JST)', offset: 'UTC+9' },
  { value: 'Asia/Shanghai', label: 'China Standard Time (CST)', offset: 'UTC+8' },
  { value: 'Asia/Kolkata', label: 'India Standard Time (IST)', offset: 'UTC+5:30' },
  { value: 'Australia/Sydney', label: 'Australian Eastern Time (AET)', offset: 'UTC+10' },
  { value: 'Pacific/Auckland', label: 'New Zealand Time (NZST)', offset: 'UTC+12' }
];

const dateFormats = [
  { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY', example: '01/15/2024' },
  { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY', example: '15/01/2024' },
  { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD', example: '2024-01-15' },
  { value: 'DD MMM YYYY', label: 'DD MMM YYYY', example: '15 Jan 2024' },
  { value: 'MMM DD, YYYY', label: 'MMM DD, YYYY', example: 'Jan 15, 2024' }
];

const timeFormats = [
  { value: '12h', label: '12-hour', example: '2:30 PM' },
  { value: '24h', label: '24-hour', example: '14:30' }
];

export default function LanguageRegionPage() {
  const [settings, setSettings] = useState({
    language: 'en',
    timeZone: 'America/New_York',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    autoDetectLocation: true,
    rtlSupport: false,
    downloadOfflineLanguages: false
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

  const getLanguageStatus = (status) => {
    switch (status) {
      case 'complete':
        return { color: 'success', label: 'Complete' };
      case 'partial':
        return { color: 'warning', label: 'Partial' };
      case 'coming-soon':
        return { color: 'default', label: 'Coming Soon' };
      default:
        return { color: 'default', label: 'Unknown' };
    }
  };

  const selectedLanguage = languages.find((lang) => lang.code === settings.language);
  const selectedTimezone = timeZones.find((tz) => tz.value === settings.timeZone);
  const selectedDateFormat = dateFormats.find((df) => df.value === settings.dateFormat);
  const selectedTimeFormat = timeFormats.find((tf) => tf.value === settings.timeFormat);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Language & Region
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Customize language, time zone, and regional formatting preferences
          </Typography>
        </Box>

        {saved && <Alert severity="success">Language and region settings saved successfully!</Alert>}

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Button variant="contained" onClick={handleSave}>
            Save Changes
          </Button>
          <Button variant="outlined" startIcon={<IconDownload />}>
            Download Languages for Offline Use
          </Button>
        </Box>

        {/* Language Selection */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconLanguage size={24} />
            Language
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 3 }}>
            Choose your preferred language for the interface
          </Typography>

          <Grid container spacing={2}>
            {languages.map((language) => {
              const statusInfo = getLanguageStatus(language.status);
              return (
                <Grid item xs={12} sm={6} md={4} key={language.code}>
                  <Card
                    variant={settings.language === language.code ? 'outlined' : 'outlined'}
                    sx={{
                      border: settings.language === language.code ? 2 : 1,
                      borderColor: settings.language === language.code ? 'primary.main' : 'divider',
                      opacity: language.status === 'coming-soon' ? 0.6 : 1
                    }}
                  >
                    <CardActionArea
                      onClick={() => language.status !== 'coming-soon' && handleSettingChange('language', language.code)}
                      disabled={language.status === 'coming-soon'}
                    >
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="h6" component="span">
                              {language.flag}
                            </Typography>
                            <Typography variant="body1" fontWeight="medium">
                              {language.name}
                            </Typography>
                          </Box>
                          {settings.language === language.code && <IconCheck size={20} color="green" />}
                        </Box>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {language.nativeName}
                        </Typography>
                        <Chip label={statusInfo.label} color={statusInfo.color} size="small" variant="outlined" />
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Paper>

        {/* Time Zone and Date/Time Format */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconClock size={24} />
                Time Zone
              </Typography>

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Time Zone</InputLabel>
                <Select value={settings.timeZone} onChange={(e) => handleSettingChange('timeZone', e.target.value)} label="Time Zone">
                  {timeZones.map((tz) => (
                    <MenuItem key={tz.value} value={tz.value}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <span>{tz.label}</span>
                        <span style={{ color: 'text.secondary' }}>{tz.offset}</span>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControlLabel
                control={
                  <Switch
                    checked={settings.autoDetectLocation}
                    onChange={(e) => handleSettingChange('autoDetectLocation', e.target.checked)}
                  />
                }
                label="Auto-detect time zone"
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                Automatically update time zone based on your location
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconGlobe size={24} />
                Date & Time Format
              </Typography>

              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Date Format</InputLabel>
                <Select value={settings.dateFormat} onChange={(e) => handleSettingChange('dateFormat', e.target.value)} label="Date Format">
                  {dateFormats.map((format) => (
                    <MenuItem key={format.value} value={format.value}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <span>{format.label}</span>
                        <span style={{ color: 'text.secondary' }}>{format.example}</span>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Time Format</InputLabel>
                <Select value={settings.timeFormat} onChange={(e) => handleSettingChange('timeFormat', e.target.value)} label="Time Format">
                  {timeFormats.map((format) => (
                    <MenuItem key={format.value} value={format.value}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <span>{format.label}</span>
                        <span style={{ color: 'text.secondary' }}>{format.example}</span>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>

        {/* Current Settings Preview */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Current Settings Preview
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <IconLanguage />
              </ListItemIcon>
              <ListItemText
                primary="Language"
                secondary={`${selectedLanguage?.flag} ${selectedLanguage?.name} (${selectedLanguage?.nativeName})`}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <IconClock />
              </ListItemIcon>
              <ListItemText primary="Time Zone" secondary={`${selectedTimezone?.label} (${selectedTimezone?.offset})`} />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <IconGlobe />
              </ListItemIcon>
              <ListItemText primary="Date & Time Format" secondary={`${selectedDateFormat?.example} • ${selectedTimeFormat?.example}`} />
            </ListItem>
          </List>

          <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
            <Typography variant="subtitle2" gutterBottom>
              Live Preview:
            </Typography>
            <Typography variant="body1">
              Current date and time: {new Date().toLocaleDateString()} • {new Date().toLocaleTimeString()}
            </Typography>
          </Box>
        </Paper>

        {/* Additional Options */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Additional Options
          </Typography>

          <Stack spacing={2}>
            <FormControlLabel
              control={<Switch checked={settings.rtlSupport} onChange={(e) => handleSettingChange('rtlSupport', e.target.checked)} />}
              label="Enable Right-to-Left (RTL) Support"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
              Enable support for right-to-left languages like Arabic and Hebrew
            </Typography>

            <FormControlLabel
              control={
                <Switch
                  checked={settings.downloadOfflineLanguages}
                  onChange={(e) => handleSettingChange('downloadOfflineLanguages', e.target.checked)}
                />
              }
              label="Download Languages for Offline Use"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
              Download language packs to use the application offline
            </Typography>
          </Stack>
        </Paper>

        <Alert severity="info">
          <Typography variant="body2">
            <strong>Note:</strong> Some language changes may require a page refresh to take full effect. Incomplete translations will fall
            back to English.
          </Typography>
        </Alert>
      </Stack>
    </Container>
  );
}
