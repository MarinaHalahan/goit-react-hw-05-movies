import { Title } from './Home.styled';
import FilmList from '../../components/FilmList/FilmList';
import { getTrendingFilms } from '../../services/API';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingFilms()
      .then(res => setMovies(res))
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      <FilmList films={movies}></FilmList>
    </main>
  );
};
export default Home;
