import { Link, Outlet } from 'react-router-dom';

export const MoviePage = () => (
  <>
    <Link to="cast">Cast</Link>
    <Link to="reviews">Previews</Link>
    <h1>MoviePage</h1>
    <Outlet />
  </>
);
