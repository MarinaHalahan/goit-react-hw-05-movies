import { ListWrap, ListItem } from './FilmList.styled';

const FilmList = ({ films }) => {
  return (
    <ListWrap>
      {films.map(({ id, title }) => (
        <ListItem key={id}>{title}</ListItem>
      ))}
    </ListWrap>
  );
};

export default FilmList;
