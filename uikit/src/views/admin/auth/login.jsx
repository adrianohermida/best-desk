// @next
import NextLink from 'next/link';

// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

/***************************  ADMIN AUTH - LOGIN  ***************************/

export default function Login() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Card>
        <CardContent sx={{ p: 4 }}>
          <Stack spacing={3}>
            {/* Header */}
            <Stack textAlign="center" spacing={1}>
              <Typography variant="h3" component="h1">
                Admin Login
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Welcome back! Enter your credentials to access the admin dashboard.
              </Typography>
            </Stack>

            {/* Login Form */}
            <Stack spacing={2}>
              <TextField fullWidth label="Email Address" type="email" variant="outlined" placeholder="Enter your email" />

              <TextField fullWidth label="Password" type="password" variant="outlined" placeholder="Enter your password" />

              <Button fullWidth variant="contained" size="large" sx={{ mt: 2 }}>
                Sign In
              </Button>
            </Stack>

            <Divider />

            {/* Footer links */}
            <Stack spacing={2} textAlign="center">
              <Typography variant="body2" color="text.secondary">
                Don't have an account?{' '}
                <Link component={NextLink} href="/admin/auth/register" color="primary">
                  Sign Up
                </Link>
              </Typography>

              <Typography variant="body2" color="text.secondary">
                <Link component={NextLink} href="/admin/dashboard" color="primary">
                  Back to Dashboard
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
