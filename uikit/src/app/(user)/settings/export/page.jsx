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
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
  Alert,
  LinearProgress,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  IconDownload,
  IconDatabase,
  IconFileText,
  IconPhoto,
  IconSettings,
  IconUsers,
  IconCheck,
  IconClock,
  IconAlertCircle
} from '@tabler/icons-react';

const exportOptions = [
  {
    id: 'profile',
    title: 'Profile Data',
    description: 'Personal information, preferences, and account settings',
    icon: <IconUsers size={24} />,
    size: '< 1 MB',
    formats: ['JSON', 'CSV']
  },
  {
    id: 'projects',
    title: 'Projects',
    description: 'All your projects, including code, configurations, and metadata',
    icon: <IconDatabase size={24} />,
    size: '~50 MB',
    formats: ['ZIP', 'JSON']
  },
  {
    id: 'files',
    title: 'Files & Assets',
    description: 'Uploaded files, images, documents, and other assets',
    icon: <IconPhoto size={24} />,
    size: '~200 MB',
    formats: ['ZIP']
  },
  {
    id: 'settings',
    title: 'Settings & Preferences',
    description: 'Application settings, customizations, and preferences',
    icon: <IconSettings size={24} />,
    size: '< 1 MB',
    formats: ['JSON']
  },
  {
    id: 'activity',
    title: 'Activity History',
    description: 'Login history, activity logs, and usage statistics',
    icon: <IconClock size={24} />,
    size: '~5 MB',
    formats: ['JSON', 'CSV']
  },
  {
    id: 'documents',
    title: 'Documents',
    description: 'Generated reports, invoices, and other documents',
    icon: <IconFileText size={24} />,
    size: '~10 MB',
    formats: ['ZIP', 'PDF']
  }
];

const exportHistory = [
  {
    id: 1,
    type: 'Full Export',
    date: '2024-01-10',
    status: 'completed',
    size: '245 MB',
    downloadUrl: '#'
  },
  {
    id: 2,
    type: 'Profile Data',
    date: '2024-01-05',
    status: 'completed',
    size: '0.8 MB',
    downloadUrl: '#'
  },
  {
    id: 3,
    type: 'Projects Only',
    date: '2023-12-28',
    status: 'expired',
    size: '89 MB',
    downloadUrl: null
  }
];

export default function ExportPage() {
  const [selectedOptions, setSelectedOptions] = useState(['profile']);
  const [exportFormat, setExportFormat] = useState('ZIP');
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleOptionChange = (optionId) => {
    setSelectedOptions((prev) => (prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId]));
  };

  const handleStartExport = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmExport = () => {
    setShowConfirmDialog(false);
    setIsExporting(true);
    setExportProgress(0);

    // Simulate export progress
    const interval = setInterval(() => {
      setExportProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExporting(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'processing':
        return 'warning';
      case 'expired':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <IconCheck size={16} />;
      case 'processing':
        return <IconClock size={16} />;
      case 'expired':
        return <IconAlertCircle size={16} />;
      default:
        return null;
    }
  };

  const estimatedSize = exportOptions
    .filter((option) => selectedOptions.includes(option.id))
    .reduce((total, option) => {
      const sizeMatch = option.size.match(/(\d+)/);
      return total + (sizeMatch ? parseInt(sizeMatch[1]) : 0);
    }, 0);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Export Data
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Download your data in various formats for backup or migration purposes
          </Typography>
        </Box>

        <Alert severity="info">
          <Typography variant="body2">
            <strong>Data Privacy:</strong> Your exported data will be available for download for 7 days. After that, the download links will
            expire for security reasons.
          </Typography>
        </Alert>

        {/* Export Options */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Select Data to Export
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 3 }}>
            Choose which data you want to include in your export
          </Typography>

          <Grid container spacing={2}>
            {exportOptions.map((option) => (
              <Grid item xs={12} md={6} key={option.id}>
                <Card
                  variant="outlined"
                  sx={{
                    border: selectedOptions.includes(option.id) ? 2 : 1,
                    borderColor: selectedOptions.includes(option.id) ? 'primary.main' : 'divider'
                  }}
                >
                  <CardContent>
                    <FormControlLabel
                      control={<Checkbox checked={selectedOptions.includes(option.id)} onChange={() => handleOptionChange(option.id)} />}
                      label={
                        <Box sx={{ ml: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            {option.icon}
                            <Typography variant="subtitle1" fontWeight="medium">
                              {option.title}
                            </Typography>
                            <Chip label={option.size} size="small" variant="outlined" />
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {option.description}
                          </Typography>
                          <Box sx={{ mt: 1 }}>
                            <Typography variant="caption" color="text.secondary">
                              Available formats: {option.formats.join(', ')}
                            </Typography>
                          </Box>
                        </Box>
                      }
                      sx={{ alignItems: 'flex-start', m: 0 }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Export Settings */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Export Settings
          </Typography>

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Export Format</InputLabel>
                <Select value={exportFormat} onChange={(e) => setExportFormat(e.target.value)} label="Export Format">
                  <MenuItem value="ZIP">ZIP Archive</MenuItem>
                  <MenuItem value="JSON">JSON</MenuItem>
                  <MenuItem value="CSV">CSV (where applicable)</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Estimated Size
                </Typography>
                <Typography variant="h6">~{estimatedSize} MB</Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<IconDownload />}
              onClick={handleStartExport}
              disabled={selectedOptions.length === 0 || isExporting}
              fullWidth
            >
              {isExporting ? 'Preparing Export...' : 'Start Export'}
            </Button>
          </Box>

          {isExporting && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" gutterBottom>
                Export Progress: {exportProgress}%
              </Typography>
              <LinearProgress variant="determinate" value={exportProgress} />
            </Box>
          )}
        </Paper>

        {/* Export History */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Export History
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 3 }}>
            Your recent data exports and downloads
          </Typography>

          <List>
            {exportHistory.map((export_item, index) => (
              <ListItem
                key={export_item.id}
                sx={{
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 1,
                  mb: index < exportHistory.length - 1 ? 1 : 0
                }}
                secondaryAction={
                  export_item.status === 'completed' && export_item.downloadUrl ? (
                    <Button variant="outlined" size="small" startIcon={<IconDownload size={16} />} href={export_item.downloadUrl}>
                      Download
                    </Button>
                  ) : null
                }
              >
                <ListItemIcon>{getStatusIcon(export_item.status)}</ListItemIcon>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body1">{export_item.type}</Typography>
                      <Chip label={export_item.status} color={getStatusColor(export_item.status)} size="small" />
                    </Box>
                  }
                  secondary={
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        {new Date(export_item.date).toLocaleDateString()} • {export_item.size}
                      </Typography>
                      {export_item.status === 'expired' && (
                        <Typography variant="caption" color="error.main">
                          Download link expired
                        </Typography>
                      )}
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Confirmation Dialog */}
        <Dialog open={showConfirmDialog} onClose={() => setShowConfirmDialog(false)}>
          <DialogTitle>Confirm Data Export</DialogTitle>
          <DialogContent>
            <Typography variant="body1" gutterBottom>
              You are about to export the following data:
            </Typography>
            <List dense>
              {selectedOptions.map((optionId) => {
                const option = exportOptions.find((opt) => opt.id === optionId);
                return (
                  <ListItem key={optionId}>
                    <ListItemIcon>{option?.icon}</ListItemIcon>
                    <ListItemText primary={option?.title} />
                  </ListItem>
                );
              })}
            </List>
            <Alert severity="warning" sx={{ mt: 2 }}>
              <Typography variant="body2">
                The export process may take several minutes depending on the amount of data. You'll receive an email when the export is
                ready for download.
              </Typography>
            </Alert>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowConfirmDialog(false)}>Cancel</Button>
            <Button variant="contained" onClick={handleConfirmExport}>
              Confirm Export
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Container>
  );
}
