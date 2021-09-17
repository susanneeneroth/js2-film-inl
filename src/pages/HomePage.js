import React, { useEffect, useState } from 'react';
import axios from 'axios';

const api_key = '435c8880fa41fdbe5fba133c47f78d2b';
const BASE_URL = 'https://api.themoviedb.org/3';
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function HomePage() {
  const [data, setData] = useState([]);

  const api = axios.create({ baseURL: BASE_URL });

  const getUpcoming = api.get('movie/upcoming', { params: { api_key } });

  useEffect(() => {
    getUpcoming.then((res) => {
      setData(res.data.results);
    });
  }, [setData]);

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='grid'>
          {data.map((movie) => (
            <div className='item'>
              <img src={getImage(movie.poster_path)} alt='movie' />
              <p>{movie.original_title}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default HomePage;
