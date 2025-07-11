// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// @project
import branding from '@/branding.json';
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';

/***************************  CONTACT US - BREADCRUMBS  ***************************/

let breadcrumbs = [{ title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' }, { title: 'Contact Us' }];

/***************************  PAGE - CONTACT US  ***************************/

export default function ContactUs() {
  return (
    <>
      <SectionHero
        {...{
          heading: `Contact ${branding.brandName}`,
          breadcrumbs,
          caption: "Get in touch with our team. We're here to help!"
        }}
      />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 }, my: 6 }}>
          <Grid container spacing={4}>
            <Grid xs={12} md={8}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Stack sx={{ gap: 3 }}>
                    <Typography variant="h4">Send us a Message</Typography>

                    <Grid container spacing={2}>
                      <Grid xs={12} sm={6}>
                        <TextField fullWidth label="First Name" variant="outlined" required />
                      </Grid>
                      <Grid xs={12} sm={6}>
                        <TextField fullWidth label="Last Name" variant="outlined" required />
                      </Grid>
                      <Grid xs={12}>
                        <TextField fullWidth label="Email Address" type="email" variant="outlined" required />
                      </Grid>
                      <Grid xs={12}>
                        <TextField fullWidth label="Subject" variant="outlined" required />
                      </Grid>
                      <Grid xs={12}>
                        <TextField fullWidth label="Message" multiline rows={4} variant="outlined" required />
                      </Grid>
                      <Grid xs={12}>
                        <Button variant="contained" size="large" sx={{ mt: 2 }}>
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={12} md={4}>
              <Stack sx={{ gap: 3 }}>
                <Card>
                  <CardContent>
                    <Stack sx={{ gap: 2 }}>
                      <Typography variant="h6">Get in Touch</Typography>

                      <Stack sx={{ gap: 1.5 }}>
                        <Stack>
                          <Typography variant="subtitle2" color="primary">
                            Email
                          </Typography>
                          <Typography variant="body2">support@saasable.io</Typography>
                        </Stack>

                        <Stack>
                          <Typography variant="subtitle2" color="primary">
                            Phone
                          </Typography>
                          <Typography variant="body2">+1 (555) 123-4567</Typography>
                        </Stack>

                        <Stack>
                          <Typography variant="subtitle2" color="primary">
                            Address
                          </Typography>
                          <Typography variant="body2">
                            123 Tech Street
                            <br />
                            San Francisco, CA 94107
                            <br />
                            United States
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Stack sx={{ gap: 2 }}>
                      <Typography variant="h6">Business Hours</Typography>

                      <Stack sx={{ gap: 1 }}>
                        <Stack direction="row" justifyContent="space-between">
                          <Typography variant="body2">Monday - Friday</Typography>
                          <Typography variant="body2">9:00 AM - 6:00 PM</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
                          <Typography variant="body2">Saturday</Typography>
                          <Typography variant="body2">10:00 AM - 4:00 PM</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
                          <Typography variant="body2">Sunday</Typography>
                          <Typography variant="body2">Closed</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </ContainerWrapper>
    </>
  );
}
