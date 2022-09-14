import { useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/fetchMovies';
import { MovieDetails } from 'components/MovieDetails';
import { useEffect } from 'react';

export const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchMovieById(movieId).then(resp => setMovie(resp.data));
  }, [movieId]);

  return (
    <>
      {movie && <MovieDetails movie={movie} />}
      <Link to="cast">Cast</Link>
      <Link to="reviews">Previews</Link>
      <Outlet />
    </>
  );
};
