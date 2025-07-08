'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';
import SectionGrid from '@/components/SectionGrid';
import SvgIcon from '@/components/SvgIcon';

import useSectionFilter from '@/hooks/useSectionFilter';
import { filterList } from '@/data/sectionsData';

/***************************  SECTIONS LAYOUT  ***************************/

export default function Sections() {
  const theme = useTheme();
  const { filterBy, searchValue, filteredSections, isLoading, handleSearchValue, handleFilterChange, totalSections, filteredCount } =
    useSectionFilter();

  return (
    <>
      <SectionHero heading="Craft Stunning Design with SaasAble Blocks" search={false} offer />
      <ContainerWrapper>
        <Stack sx={{ py: 6, gap: { xs: 3, sm: 4, md: 5 } }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            sx={{ alignItems: 'center', justifyContent: 'space-between', gap: { xs: 2.5, md: 1.5 } }}
          >
            <OutlinedInput
              placeholder="Search for blocks... (e.g., Hero, Testimonial, Pricing)"
              value={searchValue}
              slotProps={{ input: { 'aria-label': 'Search blocks' } }}
              sx={{ '.MuiOutlinedInput-input': { pl: 1.5 }, width: { sm: 456, xs: 1 } }}
              startAdornment={<SvgIcon name="tabler-search" color="grey.700" />}
              onChange={handleSearchValue}
            />
            <Stack direction="row" sx={{ gap: 1.5, flexWrap: 'wrap' }}>
              {filterList.map((item, index) => (
                <Button
                  key={index}
                  variant={filterBy === item.value ? 'contained' : 'outlined'}
                  size="small"
                  sx={{
                    ...theme.typography.subtitle2,
                    whiteSpace: 'nowrap',
                    [theme.breakpoints.down('sm')]: { px: 1.5, py: 1 }
                  }}
                  onClick={() => handleFilterChange(item.value)}
                >
                  {item.title}
                </Button>
              ))}
            </Stack>
          </Stack>
          <SectionGrid sections={filteredSections} isLoading={isLoading} />
        </Stack>
      </ContainerWrapper>
    </>
  );
}
