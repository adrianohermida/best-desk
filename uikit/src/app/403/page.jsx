import { Box, Typography, Button, Container } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Unauthorized() {
  const router = useRouter();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          gap: 3
        }}
      >
        <Typography variant="h1" component="h1" color="error" sx={{ fontSize: '6rem', fontWeight: 'bold' }}>
          403
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom>
          Access Denied
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          You don't have permission to access this resource. Please contact your administrator if you believe this is an error.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="contained" onClick={() => router.back()} size="large">
            Go Back
          </Button>

          <Button variant="outlined" onClick={() => router.push('/')} size="large">
            Go Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
