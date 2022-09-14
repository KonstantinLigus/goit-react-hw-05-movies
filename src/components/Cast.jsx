import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastOfMovieById } from 'services/fetchMovies';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchCastOfMovieById(movieId).then(resp => setCast(resp.cast));
  }, [movieId]);
  return (
    <>
      {
        <ul>
          {cast.slice(0, 4).map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? BASE_IMG_URL + profile_path
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMq4cGfAmaJAYVpXFPLY57EzVip1FTMK-ETQH1aU24VD-bYx5wJ4srHFP99zAgqXBvfQ&usqp=CAU'
                }
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      }
    </>
  );
};
