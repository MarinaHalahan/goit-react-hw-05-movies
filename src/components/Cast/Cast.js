import { CastList, CastItem, ImgCast, InfoCast } from './Cast.styled';
import { getCastById } from '../../services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import Image from '../../images/no-img-picture.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getCastById(Number(movieId))
      .then(res => setCast(res))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <CastList>
      {cast.map(({ id, name, character, profile_path }) => (
        <CastItem key={id}>
          <ImgCast
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : '../../images/no-img-picture.png'
            }
            alt={name}
          />
          <InfoCast bold>{name}</InfoCast>
          <InfoCast>
            Character: {character === '' ? 'No information.' : character}
          </InfoCast>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
