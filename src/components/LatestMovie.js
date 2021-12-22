import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { getLatest } from '../services/TMDBApi';

const getImage = (poster_path) =>
  `https://image.tmdb.org/t/p/w300/${poster_path}`;

const LatestMovies = () => {
  const [latestMovie, setLatestMovie] = useState();
  const { data, isError, isLoading, status } = useQuery(
    ['latestMovie', latestMovie],
    () => {
      setLatestMovie(latestMovie);
      return getLatest(latestMovie);
    }
  );

  return (
    <div className='single-container'>
      <h2>Latest Movie</h2>

      {isLoading === 'loading' && <div>Loading...</div>}

      {isError === 'error' && <div>Error fetching data</div>}

      {data && status === 'success' && (
        <Card bg='dark' text='white' className='mt-20'>
          <div className='flex-center'>
            <Card.Img src={getImage(data.poster_path)} alt='movie poster' />
            <Card.Header>{data.original_title}</Card.Header>
            <Card.Text className='pd-20'>{data.overview}</Card.Text>
          </div>
        </Card>
      )}
    </div>
  );
};

export default LatestMovies;
