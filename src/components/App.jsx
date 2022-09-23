import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MovieDetails from '../pages/MovieDetails';
import Movies from '../pages/Movies';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          {/* <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */}
        </Route>
      </Routes>
    </>
  );
};
