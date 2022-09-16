import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchMoviesBySearch } from 'services/fetchMovies';
import { useEffect } from 'react';

const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  useEffect(() => {
    if (query) {
      fetchMoviesBySearch(query).then(data => setSearchedMovies(data.results));
    }
  }, [query]);
  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.query.value });
  };
  return (
    <>
      <SearchBar onSubmit={onSubmit} query={query} />
      {searchedMovies.length > 0 && <MoviesList movies={searchedMovies} />}
    </>
  );
};

export default MoviesPage;
