import PropTypes from 'prop-types';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

export const MovieDetails = ({ movie }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;
  return (
    <>
      <img src={BASE_IMG_URL + poster_path} alt="" />
      <h3>
        {original_title} ({release_date.slice(0, 4)})
      </h3>
      <p>Vote average: {vote_average.toFixed(2)}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres.map(genre => genre.name).join(', ')}</p>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};
