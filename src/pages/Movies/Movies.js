import { useEffect, useState } from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import FilmList from '../../components/FilmList/FilmList';
import { getFilmBySearchWord } from '../../services/API';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = value => {
    setSearchParams(value !== '' ? { search: value } : {});
  };

  const query = searchParams.get('search');
  useEffect(() => {
    if (!query) {
      return;
    }
    getFilmBySearchWord(query)
      .then(res => {
        if (res.length === 0) {
          alert('Nothing was found. Try new request.');
          return;
        }
        setMovies(res);
      })
      .catch(error => console.log(error));
  }, [query]);

  return (
    <>
      <SearchBox onSubmit={filter} />
      {movies && <FilmList films={movies}></FilmList>}
    </>
  );
};
export default Movies;
