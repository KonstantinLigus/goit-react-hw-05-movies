import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
// import { HomePage } from 'pages/HomePage';
// import { MoviesPage } from 'pages/MoviesPage';
// import { MoviePage } from 'pages/MoviePage';
// import { Cast } from './Cast';
// import { Reviews } from './Reviews';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MoviePage = lazy(() => import('../pages/MoviePage'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
