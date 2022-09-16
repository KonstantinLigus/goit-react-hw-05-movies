import { useState, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/fetchMovies';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect } from 'react';
import { BackLink } from 'components/BackLink.styled';
import { CastPreviewsLink } from 'components/CastPreviewsLink.stykled';

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
      <BackLink to={backToMoviesList}>
        Back to {backToMoviesList.pathname === '/' ? 'Home' : 'Movies'}
      </BackLink>
      {movie ? (
        <>
          <MovieDetails movie={movie} backToMoviesList={backToMoviesList} />
          <CastPreviewsLink to="cast">Cast</CastPreviewsLink>
          <CastPreviewsLink to="reviews">Previews</CastPreviewsLink>
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <p>movie isn't found</p>
      )}
    </>
  );
};

export default MoviePage;
