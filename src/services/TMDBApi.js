import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const api_key = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

const get = async (endpoint) => {
  const response = await axios.get(endpoint);

  return response.data;
};

/**
 * Get top rated movies
 *
 * @param {number} page Page of films to get
 * @returns Promise
 */
export const getTopRated = async (page = null) => {
  return get(`/movie/top_rated?page=${page}`);
};

/**
 * Get popular movies
 *
 * @param {number} page Page of films to get
 * @returns Promise
 */

export const getPopular = async (page = null) => {
  return get(`/movie/popular${api_key}?page=${page}`);
};

export default {
  getTopRated,
  getPopular,
};
