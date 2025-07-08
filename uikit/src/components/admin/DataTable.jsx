'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Box,
  Typography,
  Checkbox,
  IconButton,
  TableSortLabel
} from '@mui/material';
import { IconSelector } from '@tabler/icons-react';

export default function DataTable({
  columns,
  data,
  selectable = false,
  sortable = true,
  pagination = true,
  emptyMessage = 'No data available',
  onSelectionChange,
  onRowClick
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((row, index) => index);
      setSelected(newSelected);
      onSelectionChange?.(newSelected);
    } else {
      setSelected([]);
      onSelectionChange?.([]);
    }
  };

  const handleRowSelect = (event, index) => {
    const selectedIndex = selected.indexOf(index);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, index);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
    onSelectionChange?.(newSelected);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const isSelected = (index) => selected.indexOf(index) !== -1;

  // Sort data
  const sortedData = [...data].sort((a, b) => {
    if (!orderBy) return 0;

    const aValue = a[orderBy];
    const bValue = b[orderBy];

    if (order === 'desc') {
      return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
    }

    return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
  });

  // Paginate data
  const paginatedData = pagination ? sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : sortedData;

  if (data.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 200,
          textAlign: 'center'
        }}
      >
        <Typography variant="body1" color="text.secondary">
          {emptyMessage}
        </Typography>
      </Box>
    );
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {selectable && (
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    indeterminate={selected.length > 0 && selected.length < data.length}
                    checked={data.length > 0 && selected.length === data.length}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
              )}

              {columns.map((column) => (
                <TableCell key={column.id} style={{ minWidth: column.minWidth }} sortDirection={orderBy === column.id ? order : false}>
                  {sortable && column.sortable !== false ? (
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : 'asc'}
                      onClick={() => handleRequestSort(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  ) : (
                    column.label
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((row, index) => {
              const realIndex = page * rowsPerPage + index;
              const isItemSelected = isSelected(realIndex);

              return (
                <TableRow
                  hover
                  key={realIndex}
                  selected={isItemSelected}
                  onClick={() => onRowClick?.(row, realIndex)}
                  sx={{ cursor: onRowClick ? 'pointer' : 'default' }}
                >
                  {selectable && (
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        onChange={(event) => handleRowSelect(event, realIndex)}
                        onClick={(event) => event.stopPropagation()}
                      />
                    </TableCell>
                  )}

                  {columns.map((column) => (
                    <TableCell key={column.id}>{column.render ? column.render(row) : row[column.id]}</TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {pagination && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
}
