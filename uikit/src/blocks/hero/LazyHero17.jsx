'use client';
import PropTypes from 'prop-types';

import { useEffect, useRef, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import { LazyMotionDiv, useLazyMotion } from '@/components/LazyMotion';
import { LazyWrapper } from '@/components/LazyWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { getBackgroundDots } from '@/utils/getBackgroundDots';

// @assets
import Wave from '@/images/graphics/Wave';

// threshold - adjust threshold as needed
const options = { root: null, rootMargin: '0px', threshold: 0.6 };

/***************************  HERO - 17 LAZY  ***************************/

export default function LazyHero17({ chip, headLine, captionLine, primaryBtn, videoSrc, videoThumbnail, listData }) {
  const theme = useTheme();
  const boxRadius = { xs: 24, sm: 32, md: 40 };

  const containerRef = useRef(null);
  const { useScroll, useTransform, hasError } = useLazyMotion();

  // Fallback para quando Framer Motion não carrega
  const scrollYProgress = hasError
    ? { get: () => 0 }
    : useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
      });

  const scale = hasError ? { get: () => 1 } : useTransform(scrollYProgress, [0, 0.1, 0.2, 0.4, 0.6], [0.9, 0.92, 0.94, 0.96, 1]);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle video play/pause based on intersection with the viewport
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
          setIsPlaying(true);
        } else if (videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const currentVideoRef = videoRef.current;

    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  const backgroundDotsProps = getBackgroundDots({ color: theme.palette.primary.lighter, opacity: 0.6 });

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <LazyWrapper height={600} rootMargin="200px">
        <LazyMotionDiv
          ref={containerRef}
          style={{ scale: hasError ? undefined : scale }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Stack spacing={{ xs: 3, sm: 4 }} sx={{ alignItems: 'center', textAlign: 'center' }}>
            {chip && (
              <Chip
                variant="combined"
                color="primary"
                label={chip}
                sx={{
                  '& .MuiChip-label': { px: { xs: 1.5, sm: 2 }, typography: { xs: 'body2', sm: 'body1' } }
                }}
              />
            )}

            {headLine && (
              <Typography
                variant="h1"
                sx={{
                  maxWidth: { sm: 480, md: 580, lg: 680 },
                  ...theme.typography.h1,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' }
                }}
              >
                {headLine}
              </Typography>
            )}

            {captionLine && (
              <Typography
                color="text.secondary"
                sx={{
                  maxWidth: { sm: 420, md: 520 },
                  typography: { xs: 'body1', md: 'h6' }
                }}
              >
                {captionLine}
              </Typography>
            )}

            {primaryBtn && (
              <ButtonAnimationWrapper>
                <Button variant="contained" size="large" color="primary" sx={{ minWidth: 120 }}>
                  {primaryBtn}
                </Button>
              </ButtonAnimationWrapper>
            )}
          </Stack>

          {(videoSrc || videoThumbnail) && (
            <LazyWrapper height={400} rootMargin="100px">
              <Box
                sx={{
                  position: 'relative',
                  mt: { xs: 6, sm: 8, md: 10 },
                  mx: 'auto',
                  maxWidth: { xs: 420, sm: 500, md: 600, lg: 780 }
                }}
              >
                <GraphicsCard
                  sx={{
                    bgcolor: 'primary.lighter',
                    borderRadius: boxRadius,
                    overflow: 'hidden',
                    boxShadow: theme.shadows[12]
                  }}
                >
                  {videoSrc ? (
                    <Box
                      component="video"
                      ref={videoRef}
                      src={videoSrc}
                      poster={videoThumbnail}
                      muted
                      loop
                      sx={{
                        width: 1,
                        height: 'auto',
                        display: 'block',
                        borderRadius: boxRadius
                      }}
                    />
                  ) : (
                    <GraphicsImage
                      src={videoThumbnail}
                      alt="Video Thumbnail"
                      sx={{
                        width: 1,
                        height: 'auto',
                        borderRadius: boxRadius
                      }}
                    />
                  )}
                </GraphicsCard>

                {/* Wave decoration - lazy loaded */}
                <LazyWrapper height={100} rootMargin="50px">
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -50,
                      left: { xs: -60, sm: -80, md: -100 },
                      zIndex: -1,
                      opacity: 0.6
                    }}
                  >
                    <SvgIcon size={{ xs: 120, sm: 150, md: 180 }}>
                      <Wave />
                    </SvgIcon>
                  </Box>
                </LazyWrapper>
              </Box>
            </LazyWrapper>
          )}

          {listData && listData.length > 0 && (
            <LazyWrapper height={200} rootMargin="100px">
              <Stack
                spacing={{ xs: 2, sm: 3 }}
                sx={{
                  mt: { xs: 6, sm: 8, md: 10 },
                  alignItems: 'center'
                }}
              >
                {listData.map((item, index) => (
                  <LazyMotionDiv
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: 'primary.main'
                        }}
                      />
                      <Typography color="text.secondary">{item}</Typography>
                    </Stack>
                  </LazyMotionDiv>
                ))}
              </Stack>
            </LazyWrapper>
          )}

          {/* Background decoration */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '20%', md: '15%' },
              right: { xs: '-10%', md: '-5%' },
              zIndex: -1,
              opacity: 0.4,
              ...backgroundDotsProps
            }}
          />
        </LazyMotionDiv>
      </LazyWrapper>
    </ContainerWrapper>
  );
}

LazyHero17.propTypes = {
  chip: PropTypes.string,
  headLine: PropTypes.node,
  captionLine: PropTypes.string,
  primaryBtn: PropTypes.string,
  videoSrc: PropTypes.string,
  videoThumbnail: PropTypes.string,
  listData: PropTypes.array
};
