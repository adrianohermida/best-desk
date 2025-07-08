'use client';

import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs
} from '@mui/material';
import { IconSearch, IconPlus, IconFilter, IconDots, IconEye, IconEdit, IconTrash } from '@tabler/icons-react';
import DataTable from '@/components/admin/DataTable';
import PageHeader from '@/components/admin/PageHeader';

export default function CasesPage() {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  // Mock data - replace with real API
  const cases = [
    {
      id: 'CASE-001',
      title: 'Contract Dispute - TechCorp vs DataSys',
      client: 'TechCorp Solutions',
      lawyer: 'Dr. João Silva',
      status: 'active',
      priority: 'high',
      createdAt: '2024-01-15',
      nextHearing: '2024-02-15',
      value: 'R$ 250.000,00'
    },
    {
      id: 'CASE-002',
      title: 'Employment Law - Wrongful Termination',
      client: 'Maria Santos',
      lawyer: 'Dra. Ana Costa',
      status: 'pending',
      priority: 'medium',
      createdAt: '2024-01-12',
      nextHearing: '2024-02-20',
      value: 'R$ 75.000,00'
    },
    {
      id: 'CASE-003',
      title: 'Corporate Law - Merger & Acquisition',
      client: 'Global Industries',
      lawyer: 'Dr. Pedro Oliveira',
      status: 'completed',
      priority: 'high',
      createdAt: '2024-01-10',
      nextHearing: null,
      value: 'R$ 500.000,00'
    },
    {
      id: 'CASE-004',
      title: 'Real Estate - Property Dispute',
      client: 'Construtora ABC',
      lawyer: 'Dra. Carla Lima',
      status: 'active',
      priority: 'low',
      createdAt: '2024-01-08',
      nextHearing: '2024-02-25',
      value: 'R$ 120.000,00'
    }
  ];

  const columns = [
    {
      id: 'id',
      label: 'Case ID',
      minWidth: 100,
      render: (row) => (
        <Typography variant="subtitle2" color="primary">
          {row.id}
        </Typography>
      )
    },
    {
      id: 'title',
      label: 'Case Title',
      minWidth: 250,
      render: (row) => (
        <Box>
          <Typography variant="subtitle2">{row.title}</Typography>
          <Typography variant="caption" color="text.secondary">
            Client: {row.client}
          </Typography>
        </Box>
      )
    },
    {
      id: 'lawyer',
      label: 'Assigned Lawyer',
      minWidth: 150
    },
    {
      id: 'status',
      label: 'Status',
      minWidth: 100,
      render: (row) => (
        <Chip
          label={row.status}
          color={row.status === 'active' ? 'success' : row.status === 'pending' ? 'warning' : 'default'}
          size="small"
        />
      )
    },
    {
      id: 'priority',
      label: 'Priority',
      minWidth: 100,
      render: (row) => (
        <Chip
          label={row.priority}
          color={row.priority === 'high' ? 'error' : row.priority === 'medium' ? 'warning' : 'default'}
          variant="outlined"
          size="small"
        />
      )
    },
    {
      id: 'nextHearing',
      label: 'Next Hearing',
      minWidth: 120,
      render: (row) => (
        <Typography variant="body2">{row.nextHearing ? new Date(row.nextHearing).toLocaleDateString('pt-BR') : 'N/A'}</Typography>
      )
    },
    {
      id: 'value',
      label: 'Case Value',
      minWidth: 120,
      render: (row) => (
        <Typography variant="subtitle2" color="success.main">
          {row.value}
        </Typography>
      )
    },
    {
      id: 'actions',
      label: 'Actions',
      minWidth: 100,
      render: (row) => (
        <Box>
          <IconButton size="small" color="primary">
            <IconEye size={16} />
          </IconButton>
          <IconButton size="small" color="secondary">
            <IconEdit size={16} />
          </IconButton>
          <IconButton size="small" color="error" onClick={(e) => setAnchorEl(e.currentTarget)}>
            <IconDots size={16} />
          </IconButton>
        </Box>
      )
    }
  ];

  const tabs = [
    { label: 'All Cases', value: 0, count: cases.length },
    { label: 'Active', value: 1, count: cases.filter((c) => c.status === 'active').length },
    { label: 'Pending', value: 2, count: cases.filter((c) => c.status === 'pending').length },
    { label: 'Completed', value: 3, count: cases.filter((c) => c.status === 'completed').length }
  ];

  const filteredCases = cases.filter((case_) => {
    const matchesSearch =
      case_.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTab =
      tabValue === 0 ||
      (tabValue === 1 && case_.status === 'active') ||
      (tabValue === 2 && case_.status === 'pending') ||
      (tabValue === 3 && case_.status === 'completed');

    return matchesSearch && matchesTab;
  });

  return (
    <Box>
      <PageHeader
        title="Cases Management"
        subtitle="Manage and track all legal cases"
        action={
          <Button variant="contained" startIcon={<IconPlus />} href="/admin/cases/new">
            New Case
          </Button>
        }
      />

      <Card>
        <CardContent>
          {/* Filters and Search */}
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
            <TextField
              placeholder="Search cases..."
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconSearch size={20} />
                  </InputAdornment>
                )
              }}
              sx={{ minWidth: 300 }}
            />
            <Button variant="outlined" startIcon={<IconFilter />} size="small">
              Filters
            </Button>
          </Box>

          {/* Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {tab.label}
                      <Chip label={tab.count} size="small" />
                    </Box>
                  }
                />
              ))}
            </Tabs>
          </Box>

          {/* Data Table */}
          <DataTable columns={columns} data={filteredCases} emptyMessage="No cases found" />
        </CardContent>
      </Card>

      {/* Context Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <IconEye size={16} style={{ marginRight: 8 }} />
          View Details
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <IconEdit size={16} style={{ marginRight: 8 }} />
          Edit Case
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)} sx={{ color: 'error.main' }}>
          <IconTrash size={16} style={{ marginRight: 8 }} />
          Delete Case
        </MenuItem>
      </Menu>
    </Box>
  );
}
