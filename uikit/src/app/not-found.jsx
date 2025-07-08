'use client';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';

export default function NotFound() {
  const theme = useTheme();

  return (
    <ContainerWrapper>
      <Stack
        sx={{
          minHeight: '60vh',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 3,
          py: 8
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: '6rem',
            fontWeight: 'bold',
            color: 'primary.main',
            lineHeight: 1
          }}
        >
          404
        </Typography>

        <Stack spacing={2} sx={{ maxWidth: 500 }}>
          <Typography variant="h4" component="h1">
            Page Not Found
          </Typography>

          <Typography variant="body1" color="text.secondary">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </Typography>
        </Stack>

        <Button component={NextLink} href="/" variant="contained" size="large" sx={{ mt: 2 }}>
          Go Back Home
        </Button>
      </Stack>
    </ContainerWrapper>
  );
}
