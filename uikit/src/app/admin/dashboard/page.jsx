'use client';

import { Grid, Card, CardContent, Typography, Box, Paper, Avatar, Chip, IconButton } from '@mui/material';
import { IconUsers, IconFileText, IconMail, IconEye, IconTrendingUp, IconCalendar, IconSettings, IconRefresh } from '@tabler/icons-react';
import StatsCard from '@/components/admin/StatsCard';
import RecentActivity from '@/components/admin/RecentActivity';
import QuickActions from '@/components/admin/QuickActions';
import AnalyticsChart from '@/components/admin/AnalyticsChart';

export default function AdminDashboard() {
  // Mock data - replace with real API calls
  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12%',
      changeType: 'positive',
      icon: IconUsers,
      color: 'primary'
    },
    {
      title: 'Active Cases',
      value: '1,429',
      change: '+8%',
      changeType: 'positive',
      icon: IconFileText,
      color: 'success'
    },
    {
      title: 'Messages',
      value: '3,672',
      change: '+23%',
      changeType: 'positive',
      icon: IconMail,
      color: 'warning'
    },
    {
      title: 'Page Views',
      value: '12,847',
      change: '-3%',
      changeType: 'negative',
      icon: IconEye,
      color: 'info'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      user: 'João Silva',
      action: 'Created new case',
      target: 'Case #2847',
      time: '2 minutes ago',
      avatar: '/assets/images/user/avatar1.png',
      type: 'create'
    },
    {
      id: 2,
      user: 'Maria Santos',
      action: 'Updated client profile',
      target: 'Cliente: ABC Corp',
      time: '15 minutes ago',
      avatar: '/assets/images/user/avatar2.png',
      type: 'update'
    },
    {
      id: 3,
      user: 'Pedro Costa',
      action: 'Completed document review',
      target: 'Document #1234',
      time: '1 hour ago',
      avatar: '/assets/images/user/avatar3.png',
      type: 'complete'
    },
    {
      id: 4,
      user: 'Ana Oliveira',
      action: 'Scheduled meeting',
      target: 'Client consultation',
      time: '2 hours ago',
      avatar: '/assets/images/user/avatar4.png',
      type: 'schedule'
    }
  ];

  const quickActions = [
    {
      title: 'New Case',
      description: 'Create a new legal case',
      icon: IconFileText,
      color: 'primary',
      href: '/admin/cases/new'
    },
    {
      title: 'Add Client',
      description: 'Register new client',
      icon: IconUsers,
      color: 'success',
      href: '/admin/clients/new'
    },
    {
      title: 'Schedule Meeting',
      description: 'Book client consultation',
      icon: IconCalendar,
      color: 'warning',
      href: '/admin/calendar/new'
    },
    {
      title: 'System Settings',
      description: 'Configure system',
      icon: IconSettings,
      color: 'info',
      href: '/admin/settings'
    }
  ];

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Dashboard Overview
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Welcome back! Here's what's happening with your law practice.
          </Typography>
        </Box>
        <IconButton color="primary" sx={{ backgroundColor: 'primary.lighter' }}>
          <IconRefresh />
        </IconButton>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatsCard {...stat} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Analytics Chart */}
        <Grid item xs={12} lg={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">Cases Overview</Typography>
                <Chip label="Last 30 days" size="small" />
              </Box>
              <AnalyticsChart />
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} lg={4}>
          <QuickActions actions={quickActions} />
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} lg={8}>
          <RecentActivity activities={recentActivities} />
        </Grid>

        {/* System Status */}
        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                System Status
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2">Database</Typography>
                  <Chip label="Online" color="success" size="small" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2">Email Service</Typography>
                  <Chip label="Online" color="success" size="small" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2">File Storage</Typography>
                  <Chip label="Online" color="success" size="small" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2">Backup</Typography>
                  <Chip label="Warning" color="warning" size="small" />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
