import { ListWrap, ListItem } from './FilmList.styled';

const FilmList = ({ films }) => {
  return (
    <ListWrap>
      {films.map(({ id }) => (
        <ListItem key={id} />
      ))}
    </ListWrap>
  );
};

export default FilmList;
