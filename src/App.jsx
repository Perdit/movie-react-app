import React, {useEffect, useState} from "react";
import axios from "axios";
import MoviesTable from './components/MoviesTable/MoviesTable';
import Header from './components/Header/Header';
import MovieModal from './components/MovieModal/MovieModal';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [order, setOrder] = useState({field: "", direction: ""});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const response = await axios.get("movies.json");
    setMovies(response.data);
    setFilteredMovies(response.data);
  };

  const handleDelete = (id) => {
    setFilteredMovies(filteredMovies.filter((movie) => movie.Id !== id));
  };

  const handleSearch = () => {
    if (searchText) {
      setFilteredMovies(
        movies.filter(
          (movie) =>
            typeof movie.Title === 'string' &&
            movie.Title.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    } else {
      setFilteredMovies(movies);
    }
  };

  const clearSearch = () => {
    setSearchText("");
    setFilteredMovies(movies);
  };

  const handleSort = (field) => {
    let direction = "asc";
    if (order.field === field) {
      direction = order.direction === "asc" ? "desc" : "asc";
    }
    setOrder({field, direction});

    const sortedMovies = [...filteredMovies].sort((a, b) => {
      if (field === "Title") {
        return direction === "asc" ? (a[field] || '').toString().localeCompare(b[field]) : (b[field] || '').toString().localeCompare(a[field]);
      } else {
        return direction === "asc" ? a[field] - b[field] : b[field] - a[field];
      }
    });

    setFilteredMovies(sortedMovies);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setModalOpen(false);
  };

  const goToPreviousMovie = () => {
    const currentIndex = filteredMovies.findIndex((movie) => movie.Id === selectedMovie.Id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredMovies.length - 1;
    setSelectedMovie(filteredMovies[previousIndex]);
  };

  const goToNextMovie = () => {
    const currentIndex = filteredMovies.findIndex((movie) => movie.Id === selectedMovie.Id);
    const nextIndex = currentIndex < filteredMovies.length - 1 ? currentIndex + 1 : 0;
    setSelectedMovie(filteredMovies[nextIndex]);
  };

  return (
    <div>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        clearSearch={clearSearch}
        loadMovies={loadMovies}
      />

      <MoviesTable
        filteredMovies={filteredMovies}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        openModal={openModal}
        handleDelete={handleDelete}
        handleSort={handleSort}
      />

      <MovieModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        selectedMovie={selectedMovie}
        goToPreviousMovie={goToPreviousMovie}
        goToNextMovie={goToNextMovie}
      />
    </div>
  );
};

export default App;
