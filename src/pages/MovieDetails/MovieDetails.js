import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getFilmById } from '../../services/API';
import { NavLink, Link, Outlet } from 'react-router-dom';
import {
  GeneralInfoWrap,
  FilmTitle,
  Poster,
  FilmInfo,
  InfoText,
  Overview,
  Genres,
  AdditionalBox,
  AdditionalItem,
  BackBtn,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);
  const backLink = location.state?.from;
  // console.log(backLink);
  useEffect(() => {
    getFilmById(Number(movieId))
      .then(res => {
        setMovie(res);
        setGenres(res.genres);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  const { backdrop_path, title, vote_average, overview } = movie;

  return (
    <main>
      {movie && (
        <GeneralInfoWrap>
          <Link to={backLink}>
            <BackBtn>Back</BackBtn>
          </Link>
          <Poster
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={title}
          />
          <FilmInfo>
            <FilmTitle>{title}</FilmTitle>
            <InfoText>User Score: {vote_average}</InfoText>
            <Overview>Overview</Overview>
            <InfoText>{overview}</InfoText>
            <Genres>Genres</Genres>
            <InfoText>{genres.map(({ name }) => name).join(' ')}</InfoText>
          </FilmInfo>
          <AdditionalBox>
            Additional information
            <AdditionalItem>
              <NavLink to="cast" state={{ from: location.state.from }}>
                Cast
              </NavLink>
            </AdditionalItem>
            <AdditionalItem>
              <NavLink to="reviews" state={{ from: location.state.from }}>
                Reviews
              </NavLink>
            </AdditionalItem>
          </AdditionalBox>
          <Outlet />
        </GeneralInfoWrap>
      )}
    </main>
  );
};

export default MovieDetails;
