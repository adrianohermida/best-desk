// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

/***************************  HEADER - EMPTY NOTIFICATION ***************************/

export default function EmptyNotification() {
  return (
    <Stack sx={{ alignItems: 'center', justifyContent: 'center', height: 236, textAlign: 'center', gap: 1, p: 2 }}>
      <Box
        sx={{
          width: 80,
          height: 80,
          backgroundColor: 'grey.200',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2
        }}
      >
        📖
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 400, maxWidth: 232 }}>
        Nothing to see here! You&apos;re all up to date.
      </Typography>
    </Stack>
  );
}
