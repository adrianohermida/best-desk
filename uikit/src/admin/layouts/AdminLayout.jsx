'use client';
import PropTypes from 'prop-types';

import { useEffect } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import AdminDrawer from './AdminDrawer';
import AdminHeader from './AdminHeader';
import { handlerDrawerOpen, useGetMenuMaster } from '../states/menu';
import AdminBreadcrumbs from '../components/AdminBreadcrumbs';
import Loader from '../components/Loader';

import { DRAWER_WIDTH } from '../config';

/***************************  ADMIN LAYOUT  ***************************/

export default function AdminLayout({ children }) {
  const { menuMasterLoading } = useGetMenuMaster();

  const downXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));

  useEffect(() => {
    handlerDrawerOpen(!downXL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downXL]);

  if (menuMasterLoading) return <Loader />;

  return (
    <Stack direction="row" width={1}>
      <AdminHeader />
      <AdminDrawer />
      <Box component="main" sx={{ width: `calc(100% - ${DRAWER_WIDTH}px)`, flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar sx={{ minHeight: { xs: 54, sm: 46, md: 76 } }} />
        <Box
          sx={{
            py: 0.4,
            px: 1.5,
            mx: { xs: -2, sm: -3 },
            display: { xs: 'block', md: 'none' },
            borderBottom: 1,
            borderColor: 'divider',
            mb: 2
          }}
        >
          <AdminBreadcrumbs />
        </Box>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
          {children}
        </Container>
      </Box>
    </Stack>
  );
}

AdminLayout.propTypes = { children: PropTypes.any };
