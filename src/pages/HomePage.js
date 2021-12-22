import React from 'react';
import LatestMovie from '../components/LatestMovie';
// import PopularMovies from '../components/PopularMovies';
import TopList from '../components/TopList';
// import axios from 'axios';

// const api_key = '435c8880fa41fdbe5fba133c47f78d2b';
// const BASE_URL = 'https://api.themoviedb.org/3/';
// const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function HomePage() {
  // const [data, setData] = useState([]);

  // const api = axios.create({ baseURL: BASE_URL });

  // const getUpcoming = api.get('movie/popular', { params: { api_key } });

  // useEffect(() => {
  //   getUpcoming.then((res) => {
  //     setData(res.data.results);
  //   });
  // }, [setData]);

  return (
    <div className='App'>
      <LatestMovie />
      <TopList />
      {/* <PopularMovies /> */}
    </div>
  );
}

export default HomePage;
