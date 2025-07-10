'use client';
import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

/***************************  SIMPLIFIED ADMIN LAYOUT  ***************************/

export default function AdminLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SaasAble Admin Dashboard
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" href="/admin/dashboard">
              Dashboard
            </Button>
            <Button color="inherit" href="/admin/analytics">
              Analytics
            </Button>
            <Button color="inherit" href="/admin/users">
              Users
            </Button>
            <Button color="inherit" href="/">
              ← Voltar ao Site
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        {children}
      </Container>
    </Box>
  );
}

AdminLayout.propTypes = { children: PropTypes.any };
