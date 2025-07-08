'use client';
import React from 'react';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionGrid from '@/components/SectionGrid';
import SvgIcon from '@/components/SvgIcon';

import useSectionFilter from '@/hooks/useSectionFilter';
import { filterList } from '@/data/sectionsData';

function SectionsNavigation({ showSearch = true, showFilters = true, itemsPerPage = 12, defaultCategory = '', enableLoadMore = false }) {
  const theme = useTheme();
  const { filterBy, searchValue, filteredSections, isLoading, handleSearchValue, handleFilterChange, totalSections, filteredCount } =
    useSectionFilter();

  // Set default category on mount if provided
  React.useEffect(() => {
    if (defaultCategory && defaultCategory !== filterBy) {
      handleFilterChange(defaultCategory);
    }
  }, [defaultCategory, filterBy, handleFilterChange]);

  return (
    <ContainerWrapper>
      <Stack sx={{ py: 6, gap: { xs: 3, sm: 4, md: 5 } }}>
        {/* Header */}
        <Stack spacing={2} sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h1">
            Browse UI Sections
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Explore {totalSections} professionally designed sections organized by category
          </Typography>
        </Stack>

        {/* Search and Filters */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          sx={{ alignItems: 'center', justifyContent: 'space-between', gap: { xs: 2.5, md: 1.5 } }}
        >
          {showSearch && (
            <OutlinedInput
              placeholder="Search for blocks... (e.g., Hero, Testimonial, Pricing)"
              value={searchValue}
              slotProps={{ input: { 'aria-label': 'Search blocks' } }}
              sx={{ '.MuiOutlinedInput-input': { pl: 1.5 }, width: { sm: 456, xs: 1 } }}
              startAdornment={<SvgIcon name="tabler-search" color="grey.700" />}
              onChange={handleSearchValue}
            />
          )}

          {showFilters && (
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
          )}
        </Stack>

        {/* Results Summary */}
        {(searchValue || filterBy) && (
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            {filteredCount === 0
              ? 'No sections found matching your criteria'
              : `Showing ${filteredCount} of ${totalSections} sections${filterBy ? ` in ${filterList.find((f) => f.value === filterBy)?.title}` : ''}${searchValue ? ` matching "${searchValue}"` : ''}`}
          </Typography>
        )}

        {/* Sections Grid */}
        <SectionGrid sections={filteredSections} isLoading={isLoading} itemsPerPage={itemsPerPage} enableLoadMore={enableLoadMore} />
      </Stack>
    </ContainerWrapper>
  );
}

SectionsNavigation.propTypes = {
  showSearch: PropTypes.bool,
  showFilters: PropTypes.bool,
  itemsPerPage: PropTypes.number,
  defaultCategory: PropTypes.string,
  enableLoadMore: PropTypes.bool
};

export default SectionsNavigation;
