import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

const numberWithCommas = (x) => {
  if (!x) return null;

  const parts = x.toString().split(".");
  let integerPart = parts[0];
  const decimalPart = parts.length > 1 ? "." + parts[1] : "";
  const length = integerPart.length;
  let result = "";

  for (let i = 0; i < length; i++) {
    result = integerPart[length - 1 - i] + result;
    if (i !== length - 1 && (i + 1) % 3 === 0) {
      result = "." + result;
    }
  }

  return result + decimalPart;
};

const MovieModal = ({ modalOpen, closeModal, selectedMovie, goToPreviousMovie, goToNextMovie }) => {
  return (
    <Dialog open={modalOpen} onClose={closeModal} maxWidth="md" fullWidth>
      {selectedMovie && (
        <>
          <DialogTitle>{selectedMovie.Title}</DialogTitle>
          <DialogContent>
            <p>
              <strong>Rendező:</strong> {selectedMovie.Director}
            </p>
            <p>
              <strong>Forgalmazó:</strong> {selectedMovie.Distributor}
            </p>
            <p>
              <strong>Költségvetés:</strong> {numberWithCommas(selectedMovie.Production_Budget)}
            </p>
            <p>
              <strong>Összbevétel:</strong> {numberWithCommas(selectedMovie.Worldwide_Gross)}
            </p>
          </DialogContent>
          <DialogActions>
            <Button onClick={goToPreviousMovie} variant="contained" startIcon={<ArrowBackIcon />}>
              Előző film
            </Button>
            <Button onClick={goToNextMovie} variant="contained" endIcon={<ArrowForwardIcon />}>
              Következő film
            </Button>
            <Button onClick={closeModal} variant="contained" color="secondary">
              Bezár
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default MovieModal;