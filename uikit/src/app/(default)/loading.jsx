import { Box, Skeleton, Container } from '@mui/material';

export default function Loading() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 4 }}>
        {/* Hero section skeleton */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Skeleton variant="text" sx={{ fontSize: '3rem', mx: 'auto', width: '70%' }} />
          <Skeleton variant="text" sx={{ fontSize: '1.2rem', mx: 'auto', width: '60%', mt: 2 }} />
          <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Skeleton variant="rounded" width={140} height={48} />
            <Skeleton variant="rounded" width={140} height={48} />
          </Box>
        </Box>

        {/* Features section skeleton */}
        <Box sx={{ mb: 6 }}>
          <Skeleton variant="text" sx={{ fontSize: '2rem', mx: 'auto', width: '40%', textAlign: 'center', mb: 4 }} />
          <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' } }}>
            {[...Array(6)].map((_, index) => (
              <Box key={index} sx={{ textAlign: 'center', p: 3 }}>
                <Skeleton variant="circular" width={64} height={64} sx={{ mx: 'auto', mb: 2 }} />
                <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', width: '80%', mx: 'auto' }} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* CTA section skeleton */}
        <Box sx={{ textAlign: 'center', py: 6, bgcolor: 'grey.50', borderRadius: 2 }}>
          <Skeleton variant="text" sx={{ fontSize: '2rem', mx: 'auto', width: '50%' }} />
          <Skeleton variant="text" sx={{ fontSize: '1rem', mx: 'auto', width: '60%', mt: 1 }} />
          <Skeleton variant="rounded" width={160} height={48} sx={{ mx: 'auto', mt: 3 }} />
        </Box>
      </Box>
    </Container>
  );
}
