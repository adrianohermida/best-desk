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
  Avatar,
  Menu,
  MenuItem
} from '@mui/material';
import { IconSearch, IconPlus, IconFilter, IconDots, IconEye, IconEdit, IconTrash, IconMail, IconPhone } from '@tabler/icons-react';
import DataTable from '@/components/admin/DataTable';
import PageHeader from '@/components/admin/PageHeader';

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  // Mock data - replace with real API
  const clients = [
    {
      id: 'CLI-001',
      name: 'TechCorp Solutions',
      type: 'Corporate',
      email: 'contact@techcorp.com',
      phone: '+55 11 99999-9999',
      activeCases: 3,
      totalCases: 8,
      status: 'active',
      avatar: null,
      createdAt: '2023-06-15',
      lastContact: '2024-01-15'
    },
    {
      id: 'CLI-002',
      name: 'Maria Santos',
      type: 'Individual',
      email: 'maria.santos@email.com',
      phone: '+55 11 98888-8888',
      activeCases: 1,
      totalCases: 2,
      status: 'active',
      avatar: '/assets/images/user/avatar2.png',
      createdAt: '2023-08-20',
      lastContact: '2024-01-12'
    },
    {
      id: 'CLI-003',
      name: 'Global Industries',
      type: 'Corporate',
      email: 'legal@globalind.com',
      phone: '+55 11 97777-7777',
      activeCases: 2,
      totalCases: 5,
      status: 'active',
      avatar: null,
      createdAt: '2023-04-10',
      lastContact: '2024-01-10'
    },
    {
      id: 'CLI-004',
      name: 'João Silva',
      type: 'Individual',
      email: 'joao.silva@email.com',
      phone: '+55 11 96666-6666',
      activeCases: 0,
      totalCases: 1,
      status: 'inactive',
      avatar: '/assets/images/user/avatar1.png',
      createdAt: '2023-12-05',
      lastContact: '2023-12-20'
    }
  ];

  const columns = [
    {
      id: 'client',
      label: 'Client',
      minWidth: 200,
      render: (row) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar src={row.avatar} sx={{ width: 40, height: 40 }}>
            {row.name.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="subtitle2">{row.name}</Typography>
            <Typography variant="caption" color="text.secondary">
              {row.id}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      id: 'type',
      label: 'Type',
      minWidth: 100,
      render: (row) => <Chip label={row.type} color={row.type === 'Corporate' ? 'primary' : 'secondary'} variant="outlined" size="small" />
    },
    {
      id: 'contact',
      label: 'Contact',
      minWidth: 200,
      render: (row) => (
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <IconMail size={14} />
            <Typography variant="body2">{row.email}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconPhone size={14} />
            <Typography variant="body2">{row.phone}</Typography>
          </Box>
        </Box>
      )
    },
    {
      id: 'cases',
      label: 'Cases',
      minWidth: 120,
      render: (row) => (
        <Box>
          <Typography variant="subtitle2">{row.activeCases} active</Typography>
          <Typography variant="caption" color="text.secondary">
            {row.totalCases} total
          </Typography>
        </Box>
      )
    },
    {
      id: 'status',
      label: 'Status',
      minWidth: 100,
      render: (row) => <Chip label={row.status} color={row.status === 'active' ? 'success' : 'default'} size="small" />
    },
    {
      id: 'lastContact',
      label: 'Last Contact',
      minWidth: 120,
      render: (row) => <Typography variant="body2">{new Date(row.lastContact).toLocaleDateString('pt-BR')}</Typography>
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

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <PageHeader
        title="Clients Management"
        subtitle="Manage your client base and relationships"
        action={
          <Button variant="contained" startIcon={<IconPlus />} href="/admin/clients/new">
            New Client
          </Button>
        }
      />

      <Card>
        <CardContent>
          {/* Search and Filters */}
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
            <TextField
              placeholder="Search clients..."
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

          {/* Stats */}
          <Box sx={{ mb: 3, display: 'flex', gap: 3 }}>
            <Box>
              <Typography variant="h6" color="primary">
                {clients.filter((c) => c.status === 'active').length}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Active Clients
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" color="success.main">
                {clients.reduce((sum, c) => sum + c.activeCases, 0)}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Active Cases
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" color="warning.main">
                {clients.filter((c) => c.type === 'Corporate').length}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Corporate Clients
              </Typography>
            </Box>
          </Box>

          {/* Data Table */}
          <DataTable columns={columns} data={filteredClients} emptyMessage="No clients found" />
        </CardContent>
      </Card>

      {/* Context Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <IconEye size={16} style={{ marginRight: 8 }} />
          View Profile
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <IconEdit size={16} style={{ marginRight: 8 }} />
          Edit Client
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <IconMail size={16} style={{ marginRight: 8 }} />
          Send Email
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)} sx={{ color: 'error.main' }}>
          <IconTrash size={16} style={{ marginRight: 8 }} />
          Delete Client
        </MenuItem>
      </Menu>
    </Box>
  );
}
