// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';

// @project
import DynamicIcon from './DynamicIcon';

/***************************  ADMIN BREADCRUMBS  ***************************/

export default function AdminBreadcrumbs() {
  // Simple breadcrumbs for admin
  const breadcrumbs = [
    {
      title: 'Admin',
      icon: 'settings',
      href: '/admin'
    },
    {
      title: 'Dashboard',
      icon: 'dashboard'
    }
  ];

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {breadcrumbs.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1;

        if (isLast) {
          return (
            <Stack key={index} direction="row" spacing={0.5} alignItems="center">
              <DynamicIcon name={item.icon} size={16} />
              <Typography color="text.primary" variant="body2">
                {item.title}
              </Typography>
            </Stack>
          );
        }

        return (
          <Link key={index} underline="hover" color="inherit" href={item.href} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <DynamicIcon name={item.icon} size={16} />
            {item.title}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
