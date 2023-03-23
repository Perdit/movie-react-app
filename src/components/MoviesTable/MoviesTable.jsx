import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
} from '@mui/material';
import {Delete as DeleteIcon, ArrowUpward, ArrowDownward} from '@mui/icons-material';

const rowStyle = (index) => ({
  backgroundColor: index % 2 === 0 ? '#f3f3f3' : 'white',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
});

const iconStyle = {
  verticalAlign: 'middle',
  marginLeft: '4px',
};

const ratingColor = (rating) => {
  if (rating < 4) return 'red';
  if (rating < 7) return 'black';
  return 'green';
};

const clickableHeader = {
  cursor: 'pointer',
};

const MoviesTable = ({
                       filteredMovies,
                       rowsPerPage,
                       page,
                       handleChangePage,
                       handleChangeRowsPerPage,
                       openModal,
                       handleDelete,
                       handleSort,
                       order,
                     }) => {
  const renderArrow = (field) => {
    if (order.field === field) {
      return order.direction === 'asc' ? (
        <ArrowUpward style={iconStyle}/>
      ) : (
        <ArrowDownward style={iconStyle}/>
      );
    }
    return null;
  };

  return (
    <TableContainer component={Paper} style={{marginTop: '20px'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell onClick={() => handleSort('Title')} style={clickableHeader}>
              CÍM {renderArrow('Title')}
            </TableCell>
            <TableCell onClick={() => handleSort('Running_Time_min')} style={clickableHeader}>
              HOSSZ {renderArrow('Running_Time_min')}
            </TableCell>
            <TableCell onClick={() => handleSort('Release_Date')} style={clickableHeader}>
              MEGJELENÉS DÁTUMA {renderArrow('Release_Date')}
            </TableCell>
            <TableCell onClick={() => handleSort('IMDB_Rating')} style={clickableHeader}>
              ÉRTÉKELÉS {renderArrow('IMDB_Rating')}
            </TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredMovies
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((movie, index) => (
              <TableRow
                key={movie.Id}
                onClick={() => openModal(movie)}
                sx={rowStyle(index)}
              >
                <TableCell>{movie.Title}</TableCell>
                <TableCell>{movie.Running_Time_min}</TableCell>
                <TableCell>{movie.Release_Date}</TableCell>
                <TableCell style={{color: ratingColor(movie.IMDB_Rating)}}>
                  {movie.IMDB_Rating || '—'}
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(movie.Id);
                    }}
                  >
                    <DeleteIcon/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[50]}
        component='div'
        count={filteredMovies.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default MoviesTable;