const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

export const MovieDetails = ({ movie }) => {
  return (
    <>
      <img src={BASE_IMG_URL + movie.poster_path} alt="" />
    </>
  );
};
