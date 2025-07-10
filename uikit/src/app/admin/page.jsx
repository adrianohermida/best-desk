'use client';

// @mui
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Stack, Avatar } from '@mui/material';
import { IconDashboard, IconChartBar, IconUsers, IconSettings, IconUser, IconShield, IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

const adminModules = [
  {
    title: 'Dashboard',
    description: 'View overall system metrics and key performance indicators',
    icon: IconDashboard,
    href: '/admin/dashboard',
    color: 'primary'
  },
  {
    title: 'Analytics',
    description: 'Detailed analytics and reporting on user behavior and system performance',
    icon: IconChartBar,
    href: '/admin/analytics',
    color: 'success'
  },
  {
    title: 'User Management',
    description: 'Manage user accounts, roles and permissions',
    icon: IconUsers,
    href: '/admin/users',
    color: 'warning'
  },
  {
    title: 'Profile Settings',
    description: 'Manage your personal profile and account settings',
    icon: IconUser,
    href: '/profile',
    color: 'info'
  },
  {
    title: 'Account Settings',
    description: 'Configure account preferences and security settings',
    icon: IconSettings,
    href: '/settings',
    color: 'secondary'
  },
  {
    title: 'Security',
    description: 'Manage security settings, passwords and two-factor authentication',
    icon: IconShield,
    href: '/settings/security',
    color: 'error'
  }
];

export default function AdminPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Stack spacing={4}>
        {/* Header */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Admin Panel
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Welcome to the SaasAble Administration Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Choose a module below to get started with managing your application
          </Typography>
        </Box>

        {/* Module Cards */}
        <Grid container spacing={3}>
          {adminModules.map((module, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: (theme) => theme.shadows[8]
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Stack spacing={2}>
                    <Avatar
                      sx={{
                        bgcolor: `${module.color}.main`,
                        width: 56,
                        height: 56
                      }}
                    >
                      <module.icon size={28} />
                    </Avatar>

                    <Typography variant="h6" component="h2">
                      {module.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {module.description}
                    </Typography>
                  </Stack>
                </CardContent>

                <CardActions>
                  <Button
                    component={Link}
                    href={module.href}
                    variant="contained"
                    color={module.color}
                    endIcon={<IconArrowRight size={16} />}
                    fullWidth
                  >
                    Access {module.title}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Footer Info */}
        <Box sx={{ textAlign: 'center', mt: 6, p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Need help? Check out the documentation or contact support
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
            <Button variant="outlined" size="small">
              Documentation
            </Button>
            <Button variant="outlined" size="small">
              Support
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
