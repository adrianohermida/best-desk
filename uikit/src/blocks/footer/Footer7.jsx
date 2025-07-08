'use client';

// @mui
import Stack from '@mui/material/Stack';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS, Sitemap } from '@/components/footer';
import FooterContent from '@/components/footer/FooterContent';

import { CopyrightType } from '@/enum';
import { footerMenuData, usefulLinksData } from '@/data/footerData';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  FOOTER - 7  ***************************/

export default function Footer7() {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack id="footer-7" role="contentinfo" rel="noopener noreferrer" aria-label="Footer 7" sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FooterContent menuData={footerMenuData} usefulLinks={usefulLinksData} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <GraphicsCard>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              sx={{
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: { xs: 2, sm: 1 },
                p: { xs: 2, sm: 3 }
              }}
            >
              <FollowUS />
              <Sitemap />
            </Stack>
          </GraphicsCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Copyright type={CopyrightType.TYPE1} />
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}
