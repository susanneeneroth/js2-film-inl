import React from 'react';
import { Card } from 'react-bootstrap';
import { useQuery } from 'react-query';

const BASE_URL = 'https://api.themoviedb.org/3';
const api_key = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

const fetchMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/latest${api_key}`);

  return res.json();
};

const LatestMovies = () => {
  const { data, status } = useQuery('latest', fetchMovies);

  console.log(data);

  return (
    <div className='container-fluid'>
      <h2>Latest Movie</h2>
      {/* <p>{status}</p> */}

      {status === 'loading' && <div>Loading...</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img src={getImage(data.poster_path)} alt='movie' />
            <Card.Title>{data.original_title}</Card.Title>
            <Card.Text>{data.overview}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default LatestMovies;
