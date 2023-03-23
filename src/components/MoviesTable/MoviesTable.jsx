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
import {Delete as DeleteIcon} from '@mui/icons-material';

const rowStyle = (index) => ({
  backgroundColor: index % 2 === 0 ? "#f3f3f3" : "white",
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
});

const ratingColor = (rating) => {
  if (rating < 4) return 'red';
  if (rating < 7) return 'black';
  return 'green';
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
                     }) => {
  return (
    <TableContainer component={Paper} style={{marginTop: '20px'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell onClick={() => handleSort("Cím")}>
              CÍM
            </TableCell>
            <TableCell onClick={() => handleSort("Running_Time_min")}>
              HOSSZ
            </TableCell>
            <TableCell onClick={() => handleSort("Release_Date")}>
              MEGJELENÉS DÁTUMA
            </TableCell>
            <TableCell onClick={() => handleSort("IMDB_Rating")}>
              ÉRTÉKELÉS
            </TableCell>
            <TableCell>TÖRLÉS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredMovies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((movie, index) => (
            <TableRow
              key={movie.Id}
              onClick={() => openModal(movie)}
              sx={rowStyle(index)}
            >
              <TableCell>{movie.Title}</TableCell>
              <TableCell>{movie.Running_Time_min}</TableCell>
              <TableCell>{movie.Release_Date}</TableCell>
              <TableCell style={{color: ratingColor(movie.IMDB_Rating)}}>
                {movie.IMDB_Rating || "—"}
              </TableCell>
              <TableCell>
                <IconButton onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(movie.Id);
                }}>
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