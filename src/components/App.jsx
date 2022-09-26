import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navigation, StyledLink, NavBtn } from './App.styled';
import Cast from './Cast/Cast';
import Reviews from './Review/Reviews';
import PropTypes from 'prop-types';

const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));

export const App = () => {
  return (
    <>
      <Navigation>
        <StyledLink to="/" home>
          {<NavBtn>Home</NavBtn>}
        </StyledLink>
        <StyledLink to="/movies" movies>
          {<NavBtn>Movies</NavBtn>}
        </StyledLink>
      </Navigation>
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

App.propTypes = {
  to: PropTypes.string,
  path: PropTypes.string,
  state: PropTypes.object,
  element: PropTypes.element,
};
