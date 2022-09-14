import { useEffect } from 'react';
import { useState } from 'react';
import { fetchDailyMovies } from 'services/fetchMovies';
import { MoviesList } from 'components/MoviesList';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchDailyMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
};
