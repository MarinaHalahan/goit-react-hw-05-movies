import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Movies from '../pages/Movies/Movies';
import Cast from './Cast/Cast';
import Reviews from './Review/Reviews';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
