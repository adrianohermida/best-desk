'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Stack,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stepper,
  Step,
  StepLabel,
  StepContent
} from '@mui/material';
import { IconTrash, IconAlertTriangle, IconDownload, IconCheck, IconX } from '@tabler/icons-react';

const deletionSteps = [
  {
    label: 'Export Your Data',
    description: 'Download a copy of your data before deletion',
    action: 'Export Data',
    link: '/settings/export'
  },
  {
    label: 'Cancel Active Subscriptions',
    description: 'Cancel any active subscriptions to avoid future charges',
    action: 'Manage Billing',
    link: '/settings/billing'
  },
  {
    label: 'Review Account Data',
    description: 'Understand what data will be permanently deleted',
    completed: true
  },
  {
    label: 'Confirm Deletion',
    description: 'Final confirmation and account deletion',
    current: true
  }
];

const dataToBeDeleted = [
  'Personal profile information',
  'All projects and their files',
  'Upload history and assets',
  'Settings and preferences',
  'Activity logs and usage data',
  'Billing and payment history',
  'API keys and integrations'
];

const consequencesOfDeletion = [
  'You will lose access to all your projects and data',
  'Any active subscriptions will be cancelled',
  'API keys will be immediately revoked',
  'You cannot recover your account after deletion',
  'Team collaborations will be removed',
  'Custom domains will be released'
];

export default function DeleteAccountPage() {
  const [confirmationText, setConfirmationText] = useState('');
  const [confirmChecks, setConfirmChecks] = useState({
    understand: false,
    exported: false,
    final: false
  });
  const [showFinalDialog, setShowFinalDialog] = useState(false);
  const [reason, setReason] = useState('');

  const handleCheckChange = (key) => (event) => {
    setConfirmChecks((prev) => ({
      ...prev,
      [key]: event.target.checked
    }));
  };

  const canProceed = confirmationText === 'DELETE MY ACCOUNT' && Object.values(confirmChecks).every(Boolean);

  const handleDeleteAccount = () => {
    // Here you would actually delete the account
    alert('Account deletion initiated. You will receive a confirmation email.');
    setShowFinalDialog(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={4}>
        <Box sx={{ textAlign: 'center' }}>
          <IconTrash size={48} color="#d32f2f" style={{ marginBottom: 16 }} />
          <Typography variant="h4" component="h1" gutterBottom color="error">
            Delete Account
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Permanently delete your account and all associated data
          </Typography>
        </Box>

        <Alert severity="error">
          <Typography variant="body2">
            <strong>Warning:</strong> Account deletion is permanent and cannot be undone. Make sure you have exported any important data
            before proceeding.
          </Typography>
        </Alert>

        {/* Deletion Steps */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Before You Delete Your Account
          </Typography>

          <Stepper orientation="vertical">
            {deletionSteps.map((step, index) => (
              <Step key={index} active={step.current} completed={step.completed}>
                <StepLabel>
                  <Typography variant="subtitle1">{step.label}</Typography>
                </StepLabel>
                <StepContent>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {step.description}
                  </Typography>
                  {step.action && (
                    <Button variant="outlined" size="small" href={step.link} sx={{ mt: 1 }}>
                      {step.action}
                    </Button>
                  )}
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Paper>

        {/* What Will Be Deleted */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconAlertTriangle size={24} color="#d32f2f" />
            What Will Be Deleted
          </Typography>

          <List>
            {dataToBeDeleted.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <IconX size={20} color="#d32f2f" />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Consequences */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Consequences of Account Deletion
          </Typography>

          <List>
            {consequencesOfDeletion.map((consequence, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <IconAlertTriangle size={20} color="#ff9800" />
                </ListItemIcon>
                <ListItemText primary={consequence} primaryTypographyProps={{ color: 'text.secondary' }} />
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Reason for Deletion */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Help Us Improve (Optional)
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Let us know why you're leaving so we can improve our service
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={3}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Tell us why you're deleting your account..."
            sx={{ mt: 2 }}
          />
        </Paper>

        {/* Confirmation */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom color="error">
            Final Confirmation
          </Typography>

          <Stack spacing={2}>
            <FormControlLabel
              control={<Checkbox checked={confirmChecks.understand} onChange={handleCheckChange('understand')} />}
              label="I understand that this action cannot be undone"
            />

            <FormControlLabel
              control={<Checkbox checked={confirmChecks.exported} onChange={handleCheckChange('exported')} />}
              label="I have exported any data I want to keep"
            />

            <FormControlLabel
              control={<Checkbox checked={confirmChecks.final} onChange={handleCheckChange('final')} />}
              label="I want to permanently delete my account"
            />

            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" gutterBottom>
                Type "DELETE MY ACCOUNT" to confirm:
              </Typography>
              <TextField
                fullWidth
                value={confirmationText}
                onChange={(e) => setConfirmationText(e.target.value)}
                placeholder="DELETE MY ACCOUNT"
                error={confirmationText !== '' && confirmationText !== 'DELETE MY ACCOUNT'}
                helperText={
                  confirmationText !== '' && confirmationText !== 'DELETE MY ACCOUNT' ? 'Please type exactly: DELETE MY ACCOUNT' : ''
                }
              />
            </Box>
          </Stack>
        </Paper>

        {/* Delete Button */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            color="error"
            size="large"
            onClick={() => setShowFinalDialog(true)}
            disabled={!canProceed}
            startIcon={<IconTrash />}
            sx={{ minWidth: 200 }}
          >
            Delete My Account
          </Button>
        </Box>

        {/* Final Confirmation Dialog */}
        <Dialog open={showFinalDialog} onClose={() => setShowFinalDialog(false)} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ color: 'error.main' }}>
            <IconAlertTriangle size={24} style={{ marginRight: 8 }} />
            Final Confirmation
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1" gutterBottom>
              This is your last chance to change your mind. Are you absolutely sure you want to delete your account?
            </Typography>

            <Alert severity="error" sx={{ mt: 2 }}>
              <Typography variant="body2">
                This action will permanently delete your account and all associated data. This cannot be undone.
              </Typography>
            </Alert>

            {reason && (
              <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Your feedback:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {reason}
                </Typography>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowFinalDialog(false)}>Cancel</Button>
            <Button variant="contained" color="error" onClick={handleDeleteAccount} startIcon={<IconTrash />}>
              Yes, Delete My Account
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Container>
  );
}
