import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Cast from './Cast/Cast';
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
// const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Review/Reviews'));

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/" state={{ from: '/' }}>
          Home
        </NavLink>
        <NavLink to="/movies" state={{ from: '/movies' }}>
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
