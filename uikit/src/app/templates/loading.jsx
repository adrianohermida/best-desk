import { Box, Skeleton, Container, Grid } from '@mui/material';

export default function Loading() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        {/* Header skeleton */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Skeleton variant="text" sx={{ fontSize: '2.5rem', mx: 'auto', width: '50%' }} />
          <Skeleton variant="text" sx={{ fontSize: '1rem', mx: 'auto', width: '70%', mt: 1 }} />
        </Box>

        {/* Filter controls skeleton */}
        <Box sx={{ mb: 4, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} variant="rounded" width={120} height={40} />
          ))}
        </Box>

        {/* Template grid skeleton */}
        <Grid container spacing={3}>
          {[...Array(8)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}>
                <Skeleton variant="rectangular" width="100%" height={250} />
                <Box sx={{ p: 2 }}>
                  <Skeleton variant="text" sx={{ fontSize: '1.2rem' }} />
                  <Skeleton variant="text" sx={{ fontSize: '0.9rem', width: '80%' }} />
                  <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                    <Skeleton variant="rounded" width={60} height={24} />
                    <Skeleton variant="rounded" width={60} height={24} />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
