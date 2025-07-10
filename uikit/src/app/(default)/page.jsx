// @next
import dynamic from 'next/dynamic';

// @project
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Use dynamic import for theme to prevent circular dependencies
const ThemeAI = dynamic(() => import('@/views/landings/ai/theme'), { ssr: false });

/***************************  PAGE - ROOT  ***************************/

export default function HomePage() {
  return (
    <ThemeAI>
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          SaasAble - Application Running
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Successfully debugged and optimized
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          ✅ Login button fixed - points to admin login
          <br />
          ✅ Dashboard submenu created with admin pages
          <br />
          ✅ Phase 3 lazy loading optimizations implemented
          <br />
          ✅ Loading components added to all routes
          <br />
          ✅ phoneSchema validation issue resolved
          <br />✅ Build and startup issues debugged
        </Typography>
      </Box>
    </ThemeAI>
  );
}
