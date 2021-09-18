import React from 'react';
import { Card } from 'react-bootstrap';
import { useQuery } from 'react-query';
import PopularMovie from './PopularMovie';

const BASE_URL = 'https://api.themoviedb.org/3';
const api_key = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

const fetchMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular${api_key}`);

  return res.json();
};

const PopularMovies = () => {
  const { data, status } = useQuery('movies', fetchMovies);

  console.log(data);

  return (
    <div className='container-fluid'>
      <h2>The 20 most popular movies</h2>
      {/* <p>{status}</p> */}

      {status === 'loading' && <div>Loading...</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <Card style={{ width: '18rem' }}>
          {data.results.map((movie) => (
            <PopularMovie key={movie.id} movie={movie} />
          ))}
        </Card>
      )}
    </div>
  );
};

export default PopularMovies;
