import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const api_key = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

const get = async (endpoint) => {
  const response = await axios.get(endpoint);
  return response.data;
};

export const getTopList = async () => {
  return get(`movie/top_rated${api_key}&language=en-US&page=1`);
};

export const getPopular = async () => {
  return get(`/movie/popular${api_key}&language=en-US&include_adult=false`);
};

export const getLatest = async () => {
  return get(`/movie/latest${api_key}&language=en-US&include_adult=false`);
};

export const getGenres = async () => {
  return get(`genre/movie/list${api_key}&language=en-US`);
};

const apiQuery = {
  getTopList,
  getPopular,
  getLatest,
  getGenres,
};

export default apiQuery;
