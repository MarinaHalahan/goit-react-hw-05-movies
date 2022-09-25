import { ListWrap, ListItem } from './FilmList.styled';
import { Link, useLocation } from 'react-router-dom';

const FilmList = ({ films }) => {
  const location = useLocation();
  console.log(films);
  return (
    <ListWrap>
      {films.map(({ id, title }) => (
        <ListItem key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
            }}
            state={{ from: location }}
          >
            {title}
          </Link>
        </ListItem>
      ))}
    </ListWrap>
  );
};

export default FilmList;
