import { useState } from 'react';
import { SearchBar } from 'components/SearchBar';
import { MoviesList } from 'components/MoviesList';
import { fetchMoviesBySearch } from 'services/fetchMovies';

export const MoviesPage = () => {
  // const [query, setQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const onSubmit = e => {
    e.preventDefault();
    // setQuery(e.currentTaget.elements.guery.value);
    fetchMoviesBySearch(e.target.elements.query.value).then(data =>
      setSearchedMovies(data.results)
    );
  };
  // useEffect(() => {
  // }, [query]);
  return (
    <>
      <h1>MoviesPage</h1>
      <SearchBar onSubmit={onSubmit} />
      {searchedMovies.length > 0 && <MoviesList movies={searchedMovies} />}
    </>
  );
};
