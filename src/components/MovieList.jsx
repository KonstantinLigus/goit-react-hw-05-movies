const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <img
            src={
              movie.poster_path
                ? BASE_IMG_URL + movie.poster_path
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMq4cGfAmaJAYVpXFPLY57EzVip1FTMK-ETQH1aU24VD-bYx5wJ4srHFP99zAgqXBvfQ&usqp=CAU'
            }
            alt={movie.title}
          />
          {movie.title}
        </li>
      ))}
    </ul>
  );
};
