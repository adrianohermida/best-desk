'use client';

import { Box, Container, Typography, Card, CardContent } from '@mui/material';

/***************************  PROFILE VIEW  ***************************/

export default function ProfileView() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Profile Settings
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            Profile page is being developed. This functionality will be available soon.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
