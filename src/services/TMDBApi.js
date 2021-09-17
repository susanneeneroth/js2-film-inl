import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const api_key = import.meta.env.TMDB_API_KEY;

const getUpcoming = api.get('movie/upcoming', {
  params: { api_key },
});
