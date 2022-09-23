import { Title } from './Home.styled';
import FilmList from '../../components/FilmList/FilmList';

export const Home = () => {
  return (
    <main>
      <Title>Trending today</Title>
      <FilmList></FilmList>
    </main>
  );
};
export default Home;
