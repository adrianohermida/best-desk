'use client';
import PropTypes from 'prop-types';

import { useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import FaqDetails from '@/components/faq/FaqDetails';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import LazySliderSimple from '@/components/LazySliderSimple';
import { LazyMotionDiv } from '@/components/LazyMotion';
import { LazyWrapper } from '@/components/LazyWrapper';

import useFocusWithin from '@/hooks/useFocusWithin';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  FAQ - 6 LAZY  ***************************/

export default function LazyFaq6({ heading, caption, defaultExpanded, faqList, getInTouch, categories, activeCategory }) {
  const theme = useTheme();
  const isFocusWithin = useFocusWithin();
  const [expanded, setExpanded] = useState(defaultExpanded || false);
  const [activeTopic, setActiveTopic] = useState(activeCategory || '');
  const [filterFaqList, setFilterFaqList] = useState(activeCategory ? faqList.filter((item) => item.category === activeCategory) : faqList);

  const cardRadius = { xs: 4, sm: 6 };
  const accordionRadius = { xs: cardRadius.xs * 4, sm: cardRadius.sm * 4 };
  const accordionPX = { xs: 2, sm: 3 };
  const iconProps = { color: 'text.primary' };

  // Handles the expansion of accordion panels
  const handleChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false);

  const slickStyle = { '& .slick-slide': { ' > div': { px: { xs: 0.5, md: 0.75 } } } };

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    initialSlide: 0,
    variableWidth: true,
    lazyLoad: 'ondemand'
  };

  // Filter function for categories
  const handleFilterCategories = (category) => {
    setActiveTopic(category);
    if (category) {
      setFilterFaqList(faqList.filter((item) => item.category === category));
    } else {
      setFilterFaqList(faqList);
    }
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <LazyWrapper height={800} rootMargin="200px">
        <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
          <LazyMotionDiv
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: 'easeOut'
            }}
          >
            <Typeset {...{ heading, caption }} stackProps={{ sx: { textAlign: 'center' } }} />
          </LazyMotionDiv>

          {categories && categories.length > 0 && (
            <LazyWrapper height={80} rootMargin="100px">
              <Stack sx={{ ...slickStyle }}>
                <LazySlider settings={settings} fallbackHeight={60}>
                  <div>
                    <Button
                      variant={activeTopic === '' ? 'contained' : 'outlined'}
                      color="primary"
                      onClick={() => handleFilterCategories('')}
                      sx={{
                        borderRadius: accordionRadius,
                        whiteSpace: 'nowrap',
                        minWidth: 'auto'
                      }}
                    >
                      All Topics
                    </Button>
                  </div>
                  {categories.map((category, index) => (
                    <div key={index}>
                      <Button
                        variant={activeTopic === category ? 'contained' : 'outlined'}
                        color="primary"
                        onClick={() => handleFilterCategories(category)}
                        sx={{
                          borderRadius: accordionRadius,
                          whiteSpace: 'nowrap',
                          minWidth: 'auto'
                        }}
                      >
                        {category}
                      </Button>
                    </div>
                  ))}
                </LazySlider>
              </Stack>
            </LazyWrapper>
          )}

          {filterFaqList && filterFaqList.length > 0 && (
            <LazyWrapper height={600} rootMargin="150px">
              <Stack spacing={1.5}>
                {filterFaqList.map((faq, index) => (
                  <LazyMotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: 'easeOut'
                    }}
                  >
                    <Accordion
                      expanded={expanded === `panel${index}`}
                      onChange={handleChange(`panel${index}`)}
                      elevation={0}
                      sx={{
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: accordionRadius,
                        '&::before': { display: 'none' },
                        '&.Mui-expanded': {
                          my: '0 !important',
                          boxShadow: theme.shadows[2]
                        },
                        ...generateFocusVisibleStyles(theme.palette.primary.main),
                        '&:focus-within': isFocusWithin
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<SvgIcon {...iconProps} />}
                        sx={{
                          px: accordionPX,
                          borderRadius: accordionRadius,
                          '& .MuiAccordionSummary-content': {
                            my: { xs: 1.5, sm: 2 }
                          }
                        }}
                      >
                        <Typography variant="h6" color="text.primary">
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ px: accordionPX, pt: 0 }}>
                        <FaqDetails answer={faq.answer} />
                      </AccordionDetails>
                    </Accordion>
                  </LazyMotionDiv>
                ))}
              </Stack>
            </LazyWrapper>
          )}

          {getInTouch && (
            <LazyMotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Stack spacing={2} sx={{ alignItems: 'center', textAlign: 'center' }}>
                <Typography variant="h6" color="text.primary">
                  {getInTouch.title}
                </Typography>
                <Typography color="text.secondary">{getInTouch.description}</Typography>
                <ButtonAnimationWrapper>
                  <Button component={NextLink} href={getInTouch.primaryBtn?.link || '#'} variant="contained" color="primary" size="large">
                    {getInTouch.primaryBtn?.children}
                  </Button>
                </ButtonAnimationWrapper>
              </Stack>
            </LazyMotionDiv>
          )}
        </Stack>
      </LazyWrapper>
    </ContainerWrapper>
  );
}

LazyFaq6.propTypes = {
  heading: PropTypes.node,
  caption: PropTypes.string,
  defaultExpanded: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  faqList: PropTypes.array,
  getInTouch: PropTypes.object,
  categories: PropTypes.array,
  activeCategory: PropTypes.string
};
