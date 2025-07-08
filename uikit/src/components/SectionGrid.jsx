'use client';
import PropTypes from 'prop-types';
import { useState, useMemo, useCallback } from 'react';

// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import SectionCard from './SectionCard';

const ITEMS_PER_PAGE = 12;

function SectionGrid({ sections, isLoading = false, itemsPerPage = ITEMS_PER_PAGE, enableLoadMore = false }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [loadMoreMode, setLoadMoreMode] = useState(enableLoadMore);

  const totalPages = Math.ceil(sections.length / itemsPerPage);

  const currentSections = useMemo(() => {
    if (loadMoreMode) {
      return sections.slice(0, currentPage * itemsPerPage);
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sections.slice(startIndex, startIndex + itemsPerPage);
  }, [sections, currentPage, loadMoreMode, itemsPerPage]);

  const handlePageChange = useCallback((event, page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleLoadMore = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage, totalPages]);

  const togglePaginationMode = useCallback(() => {
    setLoadMoreMode((prev) => !prev);
    setCurrentPage(1);
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (sections.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h6" color="text.secondary">
          No sections found matching your criteria
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Try adjusting your search or filter settings
        </Typography>
      </Box>
    );
  }

  return (
    <Stack spacing={4}>
      {/* Results Summary */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
        <Typography variant="body2" color="text.secondary">
          Showing{' '}
          {loadMoreMode
            ? currentSections.length
            : `${(currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, sections.length)}`}{' '}
          of {sections.length} sections
        </Typography>
        <Button variant="outlined" size="small" onClick={togglePaginationMode} sx={{ whiteSpace: 'nowrap' }}>
          {loadMoreMode ? 'Use Pagination' : 'Load More Mode'}
        </Button>
      </Stack>

      {/* Sections Grid */}
      <Grid container spacing={1.5}>
        {currentSections.map((item, index) => (
          <SectionCard key={`${item.title}-${index}`} item={item} index={index} />
        ))}
      </Grid>

      {/* Navigation */}
      {sections.length > itemsPerPage && (
        <Stack spacing={3} alignItems="center">
          {loadMoreMode ? (
            currentPage < totalPages && (
              <Button variant="outlined" onClick={handleLoadMore} size="large" sx={{ minWidth: 200 }}>
                Load More ({sections.length - currentSections.length} remaining)
              </Button>
            )
          ) : (
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              size="large"
              showFirstButton
              showLastButton
              sx={{
                '& .MuiPagination-ul': {
                  justifyContent: 'center'
                }
              }}
            />
          )}
        </Stack>
      )}
    </Stack>
  );
}

SectionGrid.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired,
  isLoading: PropTypes.bool,
  itemsPerPage: PropTypes.number,
  enableLoadMore: PropTypes.bool
};

export default SectionGrid;
