'use client';

import { Box, Container, Typography, Breadcrumbs, Link, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { IconChevronRight } from '@tabler/icons-react';
import { useApp } from '@/hooks/useAppState';
import ErrorBoundary from '@/components/ErrorBoundary';

const SectionLayout = ({
  children,
  title,
  subtitle,
  breadcrumbs = [],
  maxWidth = 'lg',
  headerSx = {},
  contentSx = {},
  showBreadcrumbs = true,
  centerHeader = false,
  actions = null,
  errorBoundary = true
}) => {
  const { layoutConfig } = useApp();

  const headerStyles = {
    mb: 4,
    textAlign: centerHeader ? 'center' : 'left',
    ...headerSx
  };

  const contentStyles = {
    flex: 1,
    ...contentSx
  };

  const layoutContent = (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Container maxWidth={maxWidth} sx={{ py: 4 }}>
        {/* Header Section */}
        <Box sx={headerStyles}>
          {/* Breadcrumbs */}
          {showBreadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumbs separator={<IconChevronRight size={16} />} sx={{ mb: 2 }}>
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;

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

          {/* Title and Actions */}
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
            <Box sx={{ flex: 1 }}>
              {title && (
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    fontWeight: 700,
                    color: 'text.primary'
                  }}
                >
                  {title}
                </Typography>
              )}

              {subtitle && (
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    maxWidth: centerHeader ? 'none' : '60ch',
                    mx: centerHeader ? 'auto' : 0
                  }}
                >
                  {subtitle}
                </Typography>
              )}
            </Box>

            {/* Actions */}
            {actions && <Box sx={{ flexShrink: 0 }}>{actions}</Box>}
          </Stack>
        </Box>

        {/* Content Section */}
        <Box sx={contentStyles}>{children}</Box>
      </Container>
    </Box>
  );

  if (errorBoundary) {
    return <ErrorBoundary>{layoutContent}</ErrorBoundary>;
  }

  return layoutContent;
};

SectionLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string
    })
  ),
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),
  headerSx: PropTypes.object,
  contentSx: PropTypes.object,
  showBreadcrumbs: PropTypes.bool,
  centerHeader: PropTypes.bool,
  actions: PropTypes.node,
  errorBoundary: PropTypes.bool
};

export default SectionLayout;
