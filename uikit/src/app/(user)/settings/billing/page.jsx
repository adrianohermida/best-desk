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
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert
} from '@mui/material';
import { IconCreditCard, IconDownload, IconEdit, IconPlus, IconTrash, IconCheck } from '@tabler/icons-react';

const mockBillingData = {
  currentPlan: {
    name: 'Pro Plan',
    price: '$29',
    period: 'month',
    features: ['Unlimited projects', '100GB storage', 'Priority support', 'Advanced analytics'],
    nextBilling: '2024-02-15'
  },
  usage: {
    projects: { used: 12, limit: 'Unlimited' },
    storage: { used: '45GB', limit: '100GB' },
    apiCalls: { used: '125,430', limit: '1,000,000' }
  },
  paymentMethods: [
    {
      id: 1,
      type: 'card',
      brand: 'Visa',
      last4: '4242',
      expiry: '12/26',
      isDefault: true
    },
    {
      id: 2,
      type: 'card',
      brand: 'Mastercard',
      last4: '8888',
      expiry: '09/25',
      isDefault: false
    }
  ],
  invoices: [
    { id: 'INV-001', date: '2024-01-15', amount: '$29.00', status: 'Paid', description: 'Pro Plan - January 2024' },
    { id: 'INV-002', date: '2023-12-15', amount: '$29.00', status: 'Paid', description: 'Pro Plan - December 2023' },
    { id: 'INV-003', date: '2023-11-15', amount: '$29.00', status: 'Paid', description: 'Pro Plan - November 2023' },
    { id: 'INV-004', date: '2023-10-15', amount: '$29.00', status: 'Paid', description: 'Pro Plan - October 2023' }
  ]
};

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'month',
    features: ['5 projects', '1GB storage', 'Community support'],
    current: false
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'month',
    features: ['Unlimited projects', '100GB storage', 'Priority support', 'Advanced analytics'],
    current: true,
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'month',
    features: ['Everything in Pro', '1TB storage', 'Dedicated support', 'Custom integrations', 'SLA'],
    current: false
  }
];

export default function BillingPage() {
  const [addPaymentOpen, setAddPaymentOpen] = useState(false);
  const [changePlanOpen, setChangePlanOpen] = useState(false);
  const [newCard, setNewCard] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  });

  const handleCardChange = (field) => (event) => {
    setNewCard((prev) => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleAddPaymentMethod = () => {
    // Here you would process the payment method
    setAddPaymentOpen(false);
    setNewCard({ number: '', expiry: '', cvc: '', name: '' });
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'success';
      case 'pending':
        return 'warning';
      case 'failed':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Billing & Subscription
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage your subscription, payment methods, and billing history
          </Typography>
        </Box>

        {/* Current Plan */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconCreditCard size={24} />
            Current Plan
          </Typography>

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Typography variant="h5">{mockBillingData.currentPlan.name}</Typography>
                <Chip label="Active" color="success" size="small" />
              </Box>

              <Typography variant="h4" gutterBottom>
                {mockBillingData.currentPlan.price}
                <Typography component="span" variant="body1" color="text.secondary">
                  /{mockBillingData.currentPlan.period}
                </Typography>
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                {mockBillingData.currentPlan.features.map((feature, index) => (
                  <Chip key={index} label={feature} variant="outlined" size="small" />
                ))}
              </Stack>

              <Typography variant="body2" color="text.secondary">
                Next billing date: {new Date(mockBillingData.currentPlan.nextBilling).toLocaleDateString()}
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Button variant="contained" onClick={() => setChangePlanOpen(true)}>
                  Change Plan
                </Button>
                <Button variant="outlined" color="error">
                  Cancel Subscription
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>

        {/* Usage Statistics */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Current Usage
          </Typography>

          <Grid container spacing={3}>
            {Object.entries(mockBillingData.usage).map(([key, usage]) => (
              <Grid item xs={12} sm={4} key={key}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Typography>
                    <Typography variant="h6">
                      {usage.used} / {usage.limit}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Payment Methods */}
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6">Payment Methods</Typography>
            <Button variant="outlined" startIcon={<IconPlus />} onClick={() => setAddPaymentOpen(true)}>
              Add Payment Method
            </Button>
          </Box>

          <Stack spacing={2}>
            {mockBillingData.paymentMethods.map((method) => (
              <Card key={method.id} variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <IconCreditCard size={24} />
                      <Box>
                        <Typography variant="body1">
                          {method.brand} •••• {method.last4}
                          {method.isDefault && <Chip label="Default" size="small" color="primary" sx={{ ml: 1 }} />}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Expires {method.expiry}
                        </Typography>
                      </Box>
                    </Box>
                    <Stack direction="row" spacing={1}>
                      <Button size="small" startIcon={<IconEdit size={16} />}>
                        Edit
                      </Button>
                      <Button size="small" color="error" startIcon={<IconTrash size={16} />}>
                        Remove
                      </Button>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Paper>

        {/* Billing History */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Billing History
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Invoice</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockBillingData.invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell>{invoice.id}</TableCell>
                    <TableCell>{new Date(invoice.date).toLocaleDateString()}</TableCell>
                    <TableCell>{invoice.description}</TableCell>
                    <TableCell>{invoice.amount}</TableCell>
                    <TableCell>
                      <Chip label={invoice.status} color={getStatusColor(invoice.status)} size="small" />
                    </TableCell>
                    <TableCell align="right">
                      <Button size="small" startIcon={<IconDownload size={16} />}>
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Add Payment Method Dialog */}
        <Dialog open={addPaymentOpen} onClose={() => setAddPaymentOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Add Payment Method</DialogTitle>
          <DialogContent>
            <Stack spacing={3} sx={{ mt: 1 }}>
              <TextField
                fullWidth
                label="Card Number"
                value={newCard.number}
                onChange={handleCardChange('number')}
                placeholder="1234 5678 9012 3456"
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Expiry Date"
                    value={newCard.expiry}
                    onChange={handleCardChange('expiry')}
                    placeholder="MM/YY"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="CVC" value={newCard.cvc} onChange={handleCardChange('cvc')} placeholder="123" />
                </Grid>
              </Grid>
              <TextField
                fullWidth
                label="Cardholder Name"
                value={newCard.name}
                onChange={handleCardChange('name')}
                placeholder="John Doe"
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setAddPaymentOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={handleAddPaymentMethod}>
              Add Payment Method
            </Button>
          </DialogActions>
        </Dialog>

        {/* Change Plan Dialog */}
        <Dialog open={changePlanOpen} onClose={() => setChangePlanOpen(false)} maxWidth="md" fullWidth>
          <DialogTitle>Change Plan</DialogTitle>
          <DialogContent>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              {plans.map((plan) => (
                <Grid item xs={12} md={4} key={plan.name}>
                  <Card
                    variant={plan.current ? 'outlined' : 'outlined'}
                    sx={{
                      position: 'relative',
                      border: plan.current ? 2 : 1,
                      borderColor: plan.current ? 'primary.main' : 'divider'
                    }}
                  >
                    {plan.popular && (
                      <Chip label="Most Popular" color="primary" size="small" sx={{ position: 'absolute', top: -8, left: 16 }} />
                    )}
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" gutterBottom>
                        {plan.name}
                      </Typography>
                      <Typography variant="h4" gutterBottom>
                        {plan.price}
                        <Typography component="span" variant="body2" color="text.secondary">
                          /{plan.period}
                        </Typography>
                      </Typography>
                      <Stack spacing={1} sx={{ mb: 2 }}>
                        {plan.features.map((feature, index) => (
                          <Typography key={index} variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <IconCheck size={16} color="green" />
                            {feature}
                          </Typography>
                        ))}
                      </Stack>
                      <Button variant={plan.current ? 'outlined' : 'contained'} fullWidth disabled={plan.current}>
                        {plan.current ? 'Current Plan' : 'Select Plan'}
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setChangePlanOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Container>
  );
}
