'use client';

import { Box, Typography, Breadcrumbs, Link } from '@mui/material';
import { IconChevronRight } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';

export default function PageHeader({ title, subtitle, action, breadcrumbs = [] }) {
  const pathname = usePathname();

  // Auto-generate breadcrumbs if not provided
  const defaultBreadcrumbs =
    breadcrumbs.length > 0
      ? breadcrumbs
      : pathname
          .split('/')
          .filter(Boolean)
          .map((segment, index, array) => {
            const path = '/' + array.slice(0, index + 1).join('/');
            const isLast = index === array.length - 1;

            return {
              label: segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' '),
              href: isLast ? null : path
            };
          });

  return (
    <Box sx={{ mb: 3 }}>
      {/* Breadcrumbs */}
      {defaultBreadcrumbs.length > 1 && (
        <Breadcrumbs separator={<IconChevronRight size={16} />} sx={{ mb: 1 }}>
          {defaultBreadcrumbs.map((crumb, index) => {
            const isLast = index === defaultBreadcrumbs.length - 1;

            if (isLast || !crumb.href) {
              return (
                <Typography key={index} variant="body2" color="text.secondary">
                  {crumb.label}
                </Typography>
              );
            }

            return (
              <Link key={index} href={crumb.href} variant="body2" color="text.secondary" underline="hover">
                {crumb.label}
              </Link>
            );
          })}
        </Breadcrumbs>
      )}

      {/* Header Content */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body1" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>

        {action && <Box sx={{ ml: 2 }}>{action}</Box>}
      </Box>
    </Box>
  );
}
