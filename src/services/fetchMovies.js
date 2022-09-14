import axios from 'axios';

const API_KEY = 'd09586658ff77be7f5ce53c1437aa9f2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const fetchDailyMovies = async () => {
  const resp = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return resp.data;
};

export const fetchMoviesBySearch = async query => {
  const resp = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return resp.data;
};
export const fetchMovieById = async movieId => {
  const movie = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return movie;
};
export const fetchCastOfMovieById = async movieId => {
  const cast = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  return cast.data;
};
export const fetchReviewsOfMovieById = async movieId => {
  const reviews = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return reviews;
};
