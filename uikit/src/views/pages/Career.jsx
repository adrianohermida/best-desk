// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// @project
import branding from '@/branding.json';
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';

/***************************  CAREER - BREADCRUMBS  ***************************/

let breadcrumbs = [{ title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' }, { title: 'Career' }];

/***************************  PAGE - CAREER  ***************************/

export default function Career() {
  return (
    <>
      <SectionHero
        {...{
          heading: `Join the ${branding.brandName} Team`,
          breadcrumbs,
          caption: 'Build the future of SaaS applications with our innovative team'
        }}
      />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 }, my: 6, textAlign: 'center' }}>
          <Stack sx={{ gap: 2 }}>
            <Typography variant="h2">We're Hiring!</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              Join our dynamic team and help us build the next generation of SaaS applications. We offer competitive salaries, flexible
              working arrangements, and opportunities for growth.
            </Typography>
          </Stack>

          <Stack sx={{ gap: 3, mt: 4 }}>
            <Typography variant="h4">Open Positions</Typography>

            <Stack sx={{ gap: 2, textAlign: 'left', maxWidth: 800, mx: 'auto' }}>
              {[
                { title: 'Frontend Developer', department: 'Engineering', type: 'Full-time' },
                { title: 'Backend Developer', department: 'Engineering', type: 'Full-time' },
                { title: 'UI/UX Designer', department: 'Design', type: 'Full-time' },
                { title: 'Product Manager', department: 'Product', type: 'Full-time' },
                { title: 'DevOps Engineer', department: 'Engineering', type: 'Full-time' }
              ].map((job, index) => (
                <Stack
                  key={index}
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    p: 3,
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 2,
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    gap: 2
                  }}
                >
                  <Stack sx={{ gap: 0.5 }}>
                    <Typography variant="h6">{job.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {job.department} • {job.type}
                    </Typography>
                  </Stack>
                  <Button variant="outlined" size="small">
                    Apply Now
                  </Button>
                </Stack>
              ))}
            </Stack>
          </Stack>

          <Stack sx={{ gap: 2, mt: 4 }}>
            <Typography variant="h4">Why Work With Us?</Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 3, mt: 2 }}>
              {[
                { title: 'Remote First', desc: 'Work from anywhere in the world' },
                { title: 'Growth Opportunities', desc: 'Learn and advance your career' },
                { title: 'Competitive Benefits', desc: 'Health, dental, and retirement plans' },
                { title: 'Innovation Culture', desc: 'Work with cutting-edge technologies' }
              ].map((benefit, index) => (
                <Stack key={index} sx={{ gap: 1, textAlign: 'center', flex: 1 }}>
                  <Typography variant="h6">{benefit.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.desc}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </ContainerWrapper>
    </>
  );
}
