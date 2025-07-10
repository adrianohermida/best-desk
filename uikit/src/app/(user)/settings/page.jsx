'use client';

import dynamic from 'next/dynamic';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider
} from '@mui/material';
import Link from 'next/link';

// Dynamic imports for icons to reduce initial bundle size
const IconUser = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconUser })));
const IconShield = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconShield })));
const IconCreditCard = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconCreditCard })));
const IconBell = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconBell })));
const IconPalette = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconPalette })));
const IconLanguage = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconLanguage })));
const IconDownload = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconDownload })));
const IconTrash = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconTrash })));
const IconChevronRight = dynamic(() => import('@tabler/icons-react').then((mod) => ({ default: mod.IconChevronRight })));

const settingsCategories = [
  {
    title: 'Account',
    items: [
      {
        icon: <IconUser size={24} />,
        title: 'Profile Settings',
        description: 'Manage your personal information and profile',
        href: '/profile'
      },
      {
        icon: <IconShield size={24} />,
        title: 'Security',
        description: 'Password, two-factor authentication, and security',
        href: '/settings/security'
      },
      {
        icon: <IconBell size={24} />,
        title: 'Notifications',
        description: 'Configure your notification preferences',
        href: '/settings/notifications'
      }
    ]
  },
  {
    title: 'Subscription & Billing',
    items: [
      {
        icon: <IconCreditCard size={24} />,
        title: 'Billing & Payment',
        description: 'Manage your subscription and payment methods',
        href: '/settings/billing'
      },
      {
        icon: <IconDownload size={24} />,
        title: 'Usage & Limits',
        description: 'View your current usage and plan limits',
        href: '/settings/usage'
      }
    ]
  },
  {
    title: 'Preferences',
    items: [
      {
        icon: <IconPalette size={24} />,
        title: 'Appearance',
        description: 'Theme, dark mode, and interface preferences',
        href: '/settings/appearance'
      },
      {
        icon: <IconLanguage size={24} />,
        title: 'Language & Region',
        description: 'Language, timezone, and regional settings',
        href: '/settings/language'
      }
    ]
  },
  {
    title: 'Data & Privacy',
    items: [
      {
        icon: <IconDownload size={24} />,
        title: 'Export Data',
        description: 'Download your data and information',
        href: '/settings/export'
      },
      {
        icon: <IconTrash size={24} />,
        title: 'Delete Account',
        description: 'Permanently delete your account and data',
        href: '/settings/delete-account',
        color: 'error'
      }
    ]
  }
];

export default function SettingsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>

      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ mb: 4 }}>
        Manage your account settings, preferences, and privacy controls
      </Typography>

      <Grid container spacing={3}>
        {settingsCategories.map((category, categoryIndex) => (
          <Grid item xs={12} md={6} key={categoryIndex}>
            <Paper sx={{ p: 3, height: 'fit-content' }}>
              <Typography variant="h6" gutterBottom>
                {category.title}
              </Typography>

              <List disablePadding>
                {category.items.map((item, itemIndex) => (
                  <Box key={itemIndex}>
                    <ListItem disablePadding>
                      <ListItemButton
                        component={Link}
                        href={item.href}
                        sx={{
                          py: 2,
                          borderRadius: 1,
                          '&:hover': {
                            backgroundColor: 'action.hover'
                          }
                        }}
                      >
                        <ListItemIcon sx={{ color: item.color || 'inherit' }}>{item.icon}</ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 500,
                                color: item.color || 'inherit'
                              }}
                            >
                              {item.title}
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body2" color="text.secondary">
                              {item.description}
                            </Typography>
                          }
                        />
                        <IconChevronRight size={20} />
                      </ListItemButton>
                    </ListItem>
                    {itemIndex < category.items.length - 1 && <Divider variant="inset" component="li" />}
                  </Box>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
