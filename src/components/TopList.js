import React from 'react';
import { Card } from 'react-bootstrap';
import { useQuery } from 'react-query';
import TopListMovie from './TopListMovie';

const BASE_URL = 'https://api.themoviedb.org/3';
const api_key = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

const fetchMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/top_rated${api_key}`);

  return res.json();
};

const TopList = () => {
  const { data, status } = useQuery('toprated', fetchMovies);
  console.log(data);

  return (
    <div className='container-fluid'>
      <h2>Top Rated movies</h2>
      {/* <p>{status}</p> */}

      {status === 'loading' && <div>Loading...</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <Card style={{ width: '18rem' }}>
          {data.results.map((movie) => (
            <TopListMovie key={movie.id} movie={movie} />
          ))}
        </Card>
      )}
    </div>
  );
};

export default TopList;
