'use client';
import PropTypes from 'prop-types';
import { memo } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import useFocusWithin from '@/hooks/useFocusWithin';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import GetImagePath from '@/utils/GetImagePath';

// @assets
import Background from '@/images/graphics/Background';
import Wave from '@/images/graphics/Wave';

function SectionCard({ item, index }) {
  const theme = useTheme();
  const isFocusWithin = useFocusWithin();

  return (
    <Grid size={{ xs: 6, sm: 4, md: 4 }}>
      <GraphicsCard sx={{ overflow: 'hidden', WebkitTapHighlightColor: 'transparent' }}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: (index % 12) * 0.1
          }}
        >
          <GraphicsCard
            sx={{
              height: { xs: 240, sm: 324, md: 380 },
              position: 'relative',
              overflow: 'hidden',
              ...(isFocusWithin && { '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main) })
            }}
          >
            <Link
              href={item.link}
              component={NextLink}
              aria-label={item.title}
              sx={{ position: 'absolute', top: 0, height: 1, width: 1, borderRadius: { xs: 6, sm: 8, md: 10 }, zIndex: 1 }}
            />
            <Background />
            <Box sx={{ position: 'absolute', top: 0, width: 1, height: 1, textAlign: 'center' }}>
              <CardMedia
                component="img"
                image={GetImagePath(item.image)}
                sx={{ px: '14.5%', pt: '16%', pb: { xs: 2, md: 1 }, objectFit: 'contain' }}
                alt={`${item.title} section preview`}
                loading="lazy"
              />
              <Box sx={{ '& div': { alignItems: 'center', pt: 0.875 } }}>
                <Wave />
              </Box>
            </Box>
            <Stack
              sx={{
                height: 177,
                bottom: 0,
                width: 1,
                position: 'absolute',
                justifyContent: 'end',
                textAlign: 'center',
                gap: { xs: 0.25, md: 0.5, sm: 1 },
                p: 3,
                background: `linear-gradient(180deg, ${alpha(theme.palette.grey[100], 0)} 0%, ${theme.palette.grey[100]} 100%)`
              }}
            >
              <Typography variant="h4" sx={{ color: 'primary.main' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.subTitle}
              </Typography>
            </Stack>
          </GraphicsCard>
        </motion.div>
      </GraphicsCard>
    </Grid>
  );
}

SectionCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default memo(SectionCard);
