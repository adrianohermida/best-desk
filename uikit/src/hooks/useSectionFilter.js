import { useState, useEffect, useMemo, useCallback } from 'react';
import { sections } from '@/data/sectionsData';

export default function useSectionFilter() {
  const [filterBy, setFilterBy] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchValue = useCallback((event) => {
    const search = event.target.value.trim();
    setSearchValue(search);
  }, []);

  const handleFilterChange = useCallback((value) => {
    setIsLoading(true);
    setFilterBy(value);

    // Simulate brief loading state for UX
    setTimeout(() => setIsLoading(false), 150);
  }, []);

  const filteredSections = useMemo(() => {
    let filtered = sections;

    // Apply category filter
    if (filterBy) {
      filtered = filtered.filter((section) => section.category === filterBy);
    }

    // Apply search filter
    if (searchValue) {
      filtered = filtered.filter(
        (section) =>
          section.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          section.subTitle.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    return filtered;
  }, [filterBy, searchValue]);

  const resetFilters = useCallback(() => {
    setFilterBy('');
    setSearchValue('');
  }, []);

  return {
    filterBy,
    searchValue,
    filteredSections,
    isLoading,
    handleSearchValue,
    handleFilterChange,
    resetFilters,
    totalSections: sections.length,
    filteredCount: filteredSections.length
  };
}
