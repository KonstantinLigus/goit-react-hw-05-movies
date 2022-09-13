import { useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/fetchMovies';
import { MovieDetails } from 'components/MovieDetails';
import { useEffect } from 'react';

export const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchMoviesById(movieId).then(resp => setMovie(resp.data));
  }, [movieId]);

  return (
    <>
      <h1>MoviePage</h1>
      {movie && <MovieDetails movie={movie} />}
      <Link to="cast">Cast</Link>
      <Link to="reviews">Previews</Link>
      <Outlet />
    </>
  );
};
