import { useEffect } from 'react';
import { useState } from 'react';
import { fetchDailyMovies } from 'services/fetchMovies';
import { MovieList } from 'components/MovieList';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchDailyMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <>
      <h1>HomePage</h1>;
      <MovieList movies={movies} />
    </>
  );
};
