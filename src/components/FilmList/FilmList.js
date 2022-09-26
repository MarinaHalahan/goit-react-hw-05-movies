import { ListWrap, ListItem } from './FilmList.styled';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const FilmList = ({ films }) => {
  const location = useLocation();

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
FilmList.propTypes = {
  films: PropTypes.array,
};
export default FilmList;
