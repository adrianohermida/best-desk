'use client';
import PropTypes from 'prop-types';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import LazySliderSimple from '@/components/LazySliderSimple';
import { LazyMotionDiv } from '@/components/LazyMotion';
import { LazyWrapper } from '@/components/LazyWrapper';

import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  CLIENTELE - 3 LAZY  ***************************/

export default function LazyClientele3({ title, clienteleList }) {
  const theme = useTheme();

  const settings = {
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    initialSlide: 0,
    pauseOnHover: true,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2, centerMode: true }
      }
    ]
  };

  const shade = {
    content: `' '`,
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(to right, ${theme.palette.background.default}, ${alpha(
      theme.palette.background.default,
      0
    )}, ${theme.palette.background.default})`
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <LazyWrapper height={200} rootMargin="150px">
        <Stack spacing={{ xs: 3, sm: 4 }} sx={{ alignItems: 'center', textAlign: 'center' }}>
          {title && (
            <LazyMotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Chip variant="combined" color="primary" label={title} />
            </LazyMotionDiv>
          )}

          {clienteleList && clienteleList.length > 0 && (
            <LazyWrapper height={120} rootMargin="100px">
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  width: 1,
                  '&::before': shade,
                  '&::after': shade
                }}
              >
                                <LazySliderSimple
                  settings={settings}
                  fallbackHeight={100}
                  style={{
                    '& .slick-slide': {
                      display: 'flex !important',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }
                  }}
                >
                  {clienteleList.map((item, index) => (
                    <LazyMotionDiv
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Box
                        sx={{
                          display: 'flex !important',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: { xs: 60, sm: 80 },
                          px: 2,
                          '& img': {
                            maxHeight: '100%',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            filter: 'grayscale(100%)',
                            opacity: 0.7,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              filter: 'grayscale(0%)',
                              opacity: 1
                            }
                          }
                        }}
                      >
                        <GraphicsImage src={item.image} alt={item.name || `Client ${index + 1}`} loading="lazy" />
                      </Box>
                    </LazyMotionDiv>
                  ))}
                </LazySlider>
              </Box>
            </LazyWrapper>
          )}
        </Stack>
      </LazyWrapper>
    </ContainerWrapper>
  );
}

LazyClientele3.propTypes = {
  title: PropTypes.string,
  clienteleList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string.isRequired
    })
  )
};