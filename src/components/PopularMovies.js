import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useQuery } from 'react-query';
import PopularMovie from './PopularMovie';

const BASE_URL = 'https://api.themoviedb.org/3';
const api_key = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
// const currentPage = 3;

const fetchMovies = async (key, currentPage) => {
  const res = await fetch(
    `${BASE_URL}/movie/popular${api_key}&page=${currentPage}`
  );

  return res.json();
};

const PopularMovies = () => {
  const [currentPage, setCurrentPage] = useState();
  const { data, status } = useQuery(['movies', currentPage], fetchMovies);

  console.log(data);

  return (
    <div className='container-fluid'>
      <h2>The 20 most popular movies</h2>
      {/* <p>{status}</p> */}
      <Button onClick={() => setCurrentPage(1)}>Page 1</Button>
      <Button onClick={() => setCurrentPage(2)}>Page 2</Button>
      <Button onClick={() => setCurrentPage(3)}>Page 3</Button>

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
