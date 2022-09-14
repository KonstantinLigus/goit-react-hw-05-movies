import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsOfMovieById } from 'services/fetchMovies';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviewsOfMovieById(movieId).then(resp =>
      setReviews(resp.data.results)
    );
  }, [movieId]);
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h4>Autor: {author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
