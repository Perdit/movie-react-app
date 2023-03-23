import React from "react";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";

const StyledTopRow = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "10px",
});

const StyledRightAlignedButton = styled(Button)(({ theme }) => ({
  marginLeft: "auto",
}));

const Header = ({
                  searchText,
                  setSearchText,
                  handleSearch,
                  clearSearch,
                  loadMovies,
                }) => {
  return (
    <StyledTopRow>
      <TextField
        label="Keresés"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Keresés
      </Button>
      <Button variant="contained" color="primary" onClick={clearSearch}>
        Keresés törlése
      </Button>
      <StyledRightAlignedButton variant="contained" color="primary" onClick={loadMovies}>
        Újratöltés
      </StyledRightAlignedButton>
    </StyledTopRow>
  );
};

export default Header;
