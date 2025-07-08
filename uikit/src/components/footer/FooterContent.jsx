'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

// @mui
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import branding from '@/branding.json';
import LogoSection from '@/components/logo';

function FooterContent({ logoContent, menuData, usefulLinks }) {
  const defaultLogoContent = (
    <Stack sx={{ alignItems: 'flex-start', gap: { xs: 1.5, sm: 3 } }}>
      <LogoSection />
      <Typography variant="h6" sx={{ maxWidth: { sm: 280 }, mb: { xs: -1, sm: -2.5 } }}>
        {process.env.NEXT_PUBLIC_VERSION}
      </Typography>
      <Typography variant="body2" sx={{ maxWidth: { sm: 280 } }}>
        Explore the different versions of our {branding.brandName} template.
      </Typography>
    </Stack>
  );

  return (
    <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
      {/* Logo and Description */}
      <Grid size={{ xs: 12, sm: 5, md: 4, lg: 3 }}>{logoContent || defaultLogoContent}</Grid>

      {/* Navigation Links */}
      <Grid size={{ xs: 12, sm: 7, md: 8, lg: 9 }}>
        <Grid container spacing={{ xs: 3, sm: 4 }}>
          {menuData.map((item) => (
            <Grid key={item.id} {...item.grid}>
              <Stack sx={{ gap: { xs: 1.5, sm: 2 } }}>
                <Typography variant="h6">{item.title}</Typography>
                <Stack sx={{ gap: 1 }}>
                  {item.menu.map((menu, menuIndex) => (
                    <Link
                      key={menuIndex}
                      component={NextLink}
                      variant="body2"
                      sx={{ color: 'text.secondary', width: 'fit-content' }}
                      {...menu.link}
                    >
                      {menu.label}
                    </Link>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Useful Links */}
      {usefulLinks && usefulLinks.length > 0 && (
        <Grid size={12}>
          <Stack sx={{ gap: { xs: 1.5, sm: 2 } }}>
            <Typography variant="h6">Useful Links</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: { xs: 1.5, sm: 3 } }}>
              {usefulLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'text.secondary',
                    textDecoration: 'none',
                    width: 'fit-content',
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }}
                >
                  {item.icon}
                  <Typography variant="body2">{item.title}</Typography>
                </Link>
              ))}
            </Stack>
          </Stack>
        </Grid>
      )}
    </Grid>
  );
}

FooterContent.propTypes = {
  logoContent: PropTypes.node,
  menuData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      grid: PropTypes.object,
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          link: PropTypes.object.isRequired
        })
      ).isRequired
    })
  ).isRequired,
  usefulLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  )
};

export default FooterContent;
