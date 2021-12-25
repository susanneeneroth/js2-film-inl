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

export const getMovieGenres = async () => {
  return get(`genre/movie/list${api_key}&language=en-US`);
};

export const getMoviesWithGenres = async (genreId, page) => {
  return get(
    `https://api.themoviedb.org/3/discover/movie?api_key=7673fbec2310e113e97235da3faeeb11&language=en-US&page=${page}&with_genres=${genreId}`
  );
};

export const getMovieFacts = async (id) => {
  return get(`movie/${id}${api_key}&language=en-US`);
};

export const getMovieCredits = async (movie_id) => {
  return get(`movie/${movie_id}/credits${api_key}&language=en-US`);
};

const apiQuery = {
  getTopList,
  getPopular,
  getLatest,
  getMovieGenres,
  getMoviesWithGenres,
  getMovieFacts,
  getMovieCredits,
};

export default apiQuery;
