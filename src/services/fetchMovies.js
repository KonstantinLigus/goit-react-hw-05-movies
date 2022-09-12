import axios from 'axios';

const API_KEY = 'd09586658ff77be7f5ce53c1437aa9f2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const fetchDailyMovies = async () => {
  const resp = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return resp.data;
};
