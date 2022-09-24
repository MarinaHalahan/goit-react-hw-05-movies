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

  // const getTrends = async () => {
  //   try {
  //     const data = await getTrendingFilms();
  //     console.log(data);
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // getTrendingFilms()
  //   .then(res => {
  //     trends = res.results;
  //     console.log(trends);
  //     return trends;
  //   })
  //   .catch(error => console.log(error));
  // let trends = getTrends();
  return (
    <main>
      <Title>Trending today</Title>
      <FilmList films={movies}></FilmList>
    </main>
  );
};
export default Home;
