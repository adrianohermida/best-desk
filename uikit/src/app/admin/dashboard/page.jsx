'use client';

// @next
import { useEffect, useState } from 'react';

// @mui
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

/***************************  ADMIN DASHBOARD PAGE  ***************************/

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {loading ? (
        <Stack
          sx={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2
          }}
        >
          <CircularProgress />
          <Typography variant="body1">Carregando Dashboard...</Typography>
        </Stack>
      ) : (
        <iframe
          src="http://localhost:3001/dashboard"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            margin: 0,
            padding: 0
          }}
          title="Admin Dashboard"
        />
      )}
    </Box>
  );
}
