// @mui
import Grid from '@mui/material/Grid';

// @project
import AnalyticsOverviewCard from '@/sections/dashboard/AnalyticsOverviewCard';
import AnalyticsOverviewChart from '@/sections/dashboard/AnalyticsOverviewChart';
import AnalyticsTopRef from '@/sections/dashboard/AnalyticsTopRef';

/***************************  ANALYTICS - OVERVIEW  ***************************/

export default function AnalyticsOverview() {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      <Grid xs={12}>
        <AnalyticsOverviewCard />
      </Grid>
      <Grid xs={12}>
        <AnalyticsOverviewChart />
      </Grid>
      <Grid xs={12}>
        <AnalyticsTopRef />
      </Grid>
    </Grid>
  );
}
