// @mui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// @project
import MainCard from '@/components/cards/MainCard';
import PresentationCard from '@/components/cards/PresentationCard';

/***************************  SAMPLE PAGE  ***************************/

export default function SamplePage() {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      <Grid size={12}>
        <PresentationCard title="Sample Page">
          <Stack spacing={3}>
            <Typography variant="body1">
              This is a sample page to demonstrate the SaasAble template structure and components. You can use this as a starting point for
              creating new pages in your application.
            </Typography>

            <Box>
              <Typography variant="h6" gutterBottom>
                Available Features:
              </Typography>
              <Stack spacing={1} sx={{ pl: 2 }}>
                <Typography variant="body2">• Material-UI v7 Components</Typography>
                <Typography variant="body2">• Responsive Grid System</Typography>
                <Typography variant="body2">• Custom Card Components</Typography>
                <Typography variant="body2">• Typography System</Typography>
                <Typography variant="body2">• Color Palette</Typography>
                <Typography variant="body2">• Shadow System</Typography>
              </Stack>
            </Box>

            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="primary">
                Primary Action
              </Button>
              <Button variant="outlined" color="secondary">
                Secondary Action
              </Button>
            </Stack>
          </Stack>
        </PresentationCard>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <MainCard>
          <Stack spacing={2}>
            <Typography variant="h6">Card Example 1</Typography>
            <Typography variant="body2" color="text.secondary">
              This is an example of using MainCard component with custom content. Perfect for displaying information in organized sections.
            </Typography>
            <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
              <Typography variant="caption">Content area with background highlight</Typography>
            </Box>
          </Stack>
        </MainCard>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <MainCard>
          <Stack spacing={2}>
            <Typography variant="h6">Card Example 2</Typography>
            <Typography variant="body2" color="text.secondary">
              Another example showing the flexibility of the card system. You can customize padding, spacing, and content as needed.
            </Typography>
            <Stack direction="row" spacing={1}>
              <Box sx={{ width: 40, height: 40, bgcolor: 'primary.main', borderRadius: 1 }} />
              <Box sx={{ width: 40, height: 40, bgcolor: 'secondary.main', borderRadius: 1 }} />
              <Box sx={{ width: 40, height: 40, bgcolor: 'success.main', borderRadius: 1 }} />
            </Stack>
          </Stack>
        </MainCard>
      </Grid>
    </Grid>
  );
}
