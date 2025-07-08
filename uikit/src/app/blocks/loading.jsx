import { Box, Skeleton, Container } from '@mui/material';

export default function Loading() {
  return (
    <Container>
      <Box sx={{ py: 4 }}>
        {/* Header skeleton */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Skeleton variant="text" sx={{ fontSize: '2rem', mx: 'auto', width: '60%' }} />
          <Skeleton variant="text" sx={{ fontSize: '1rem', mx: 'auto', width: '80%', mt: 1 }} />
        </Box>

        {/* Content skeleton */}
        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' } }}>
          {[...Array(6)].map((_, index) => (
            <Box key={index} sx={{ p: 2 }}>
              <Skeleton variant="rectangular" width="100%" height={200} sx={{ mb: 2, borderRadius: 1 }} />
              <Skeleton variant="text" sx={{ fontSize: '1.2rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem', width: '60%' }} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
