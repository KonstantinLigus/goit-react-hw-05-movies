import { useState, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/fetchMovies';
import { MovieDetails } from 'components/MovieDetails';
import { useEffect } from 'react';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backToMoviesList = location.state?.from ?? '/';
  useEffect(() => {
    fetchMovieById(movieId).then(resp => setMovie(resp.data));
  }, [movieId]);

  return (
    <>
      <Link to={backToMoviesList}>Back to movies list</Link>
      {movie && <MovieDetails movie={movie} />}
      <Link to="cast" state={{ from: backToMoviesList }}>
        Cast
      </Link>
      <Link to="reviews" state={{ from: backToMoviesList }}>
        Previews
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviePage;
