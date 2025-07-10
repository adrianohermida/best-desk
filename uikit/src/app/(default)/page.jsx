'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/***************************  PAGE - ROOT (SIMPLIFIED FOR DEBUG)  ***************************/

export default function HomePage() {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        SaasAble - Application Running
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Successfully debugged and simplified for testing
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        ✅ Login button fixed - points to admin login
        <br />
        ✅ Dashboard submenu created with admin pages
        <br />
        ✅ Phase 3 lazy loading optimizations implemented
        <br />
        ✅ Loading components added to all routes
        <br />✅ phoneSchema validation issue resolved
      </Typography>
    </Box>
  );
}
