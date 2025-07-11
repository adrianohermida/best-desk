// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

// @project
import branding from '@/branding.json';
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';

/***************************  PRICING - BREADCRUMBS  ***************************/

let breadcrumbs = [{ title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' }, { title: 'Pricing' }];

/***************************  PRICING - DATA  ***************************/

const pricingPlans = [
  {
    title: 'Free',
    price: '$0',
    period: '/month',
    features: ['1 User', '10 Projects', '5GB Storage', 'Basic Support'],
    buttonText: 'Get Started',
    popular: false
  },
  {
    title: 'Pro',
    price: '$29',
    period: '/month',
    features: ['10 Users', 'Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics'],
    buttonText: 'Start Free Trial',
    popular: true
  },
  {
    title: 'Enterprise',
    price: '$99',
    period: '/month',
    features: ['Unlimited Users', 'Unlimited Projects', '1TB Storage', '24/7 Support', 'Advanced Analytics', 'Custom Integrations'],
    buttonText: 'Contact Sales',
    popular: false
  }
];

/***************************  PRICING  ***************************/

export default function Pricing() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Pricing Plans`, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ py: { xs: 6, sm: 8 }, gap: 6 }}>
          <Stack sx={{ textAlign: 'center', gap: 2 }}>
            <Typography variant="h2">Choose Your Perfect Plan</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Select the plan that best fits your needs. All plans include our core features with varying levels of usage and support.
            </Typography>
          </Stack>

          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    ...(plan.popular && {
                      border: 2,
                      borderColor: 'primary.main',
                      '&::before': {
                        content: '"Most Popular"',
                        position: 'absolute',
                        top: -10,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: 'body2.fontSize',
                        fontWeight: 'bold'
                      }
                    })
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Stack spacing={3}>
                      <Typography variant="h5" component="h3">
                        {plan.title}
                      </Typography>

                      <Stack direction="row" justifyContent="center" alignItems="baseline">
                        <Typography variant="h3" component="span">
                          {plan.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {plan.period}
                        </Typography>
                      </Stack>

                      <Stack spacing={2}>
                        {plan.features.map((feature, featureIndex) => (
                          <Typography key={featureIndex} variant="body2">
                            ✓ {feature}
                          </Typography>
                        ))}
                      </Stack>

                      <Button variant={plan.popular ? 'contained' : 'outlined'} size="large" fullWidth sx={{ mt: 2 }}>
                        {plan.buttonText}
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </ContainerWrapper>
    </>
  );
}
