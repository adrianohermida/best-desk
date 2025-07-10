'use client';

import { useState } from 'react';
// @mui
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  TextField,
  InputAdornment,
  Button,
  Grid
} from '@mui/material';
import { IconSearch, IconDotsVertical, IconEdit, IconTrash, IconPlus, IconUser, IconMail, IconCalendar } from '@tabler/icons-react';

const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/assets/images/users/avatar-1.png',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2024-01-15 14:30',
    joinDate: '2023-01-15'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: '/assets/images/users/avatar-2.png',
    role: 'User',
    status: 'Active',
    lastLogin: '2024-01-14 09:15',
    joinDate: '2023-02-20'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    avatar: '/assets/images/users/avatar-3.png',
    role: 'Moderator',
    status: 'Inactive',
    lastLogin: '2024-01-10 16:45',
    joinDate: '2023-03-10'
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    avatar: '/assets/images/users/avatar-4.png',
    role: 'User',
    status: 'Active',
    lastLogin: '2024-01-15 11:20',
    joinDate: '2023-04-05'
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david@example.com',
    avatar: '/assets/images/users/avatar-5.png',
    role: 'User',
    status: 'Pending',
    lastLogin: 'Never',
    joinDate: '2024-01-15'
  }
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = mockUsers.filter(
    (user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMenuOpen = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'error';
      case 'Pending':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Admin':
        return 'primary';
      case 'Moderator':
        return 'secondary';
      case 'User':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Stack spacing={3}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h4" component="h1">
              User Management
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Manage and monitor user accounts
            </Typography>
          </Box>
          <Button variant="contained" startIcon={<IconPlus />}>
            Add User
          </Button>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <IconUser />
                  </Avatar>
                  <Box>
                    <Typography variant="h4">{mockUsers.length}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total Users
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar sx={{ bgcolor: 'success.main' }}>
                    <IconUser />
                  </Avatar>
                  <Box>
                    <Typography variant="h4">{mockUsers.filter((u) => u.status === 'Active').length}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Active Users
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar sx={{ bgcolor: 'warning.main' }}>
                    <IconUser />
                  </Avatar>
                  <Box>
                    <Typography variant="h4">{mockUsers.filter((u) => u.status === 'Pending').length}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Pending Users
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <IconUser />
                  </Avatar>
                  <Box>
                    <Typography variant="h4">{mockUsers.filter((u) => u.role === 'Admin').length}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Admins
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Search */}
        <TextField
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconSearch />
              </InputAdornment>
            )
          }}
          sx={{ maxWidth: 400 }}
        />

        {/* Users Table */}
        <Card>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Last Login</TableCell>
                  <TableCell>Join Date</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id} hover>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar src={user.avatar} alt={user.name}>
                          {user.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="body1" fontWeight="medium">
                            {user.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {user.email}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Chip label={user.role} color={getRoleColor(user.role)} size="small" />
                    </TableCell>
                    <TableCell>
                      <Chip label={user.status} color={getStatusColor(user.status)} size="small" />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{user.lastLogin}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{new Date(user.joinDate).toLocaleDateString()}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton onClick={(e) => handleMenuOpen(e, user)}>
                        <IconDotsVertical />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>

        {/* Action Menu */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>
            <IconEdit size={16} style={{ marginRight: 8 }} />
            Edit User
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <IconTrash size={16} style={{ marginRight: 8 }} />
            Delete User
          </MenuItem>
        </Menu>
      </Stack>
    </Container>
  );
}
