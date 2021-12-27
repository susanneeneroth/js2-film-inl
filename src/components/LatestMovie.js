import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { getLatest } from '../services/TMDBApi';
import '../css/App.css';
import LatestCard from './LatestCard';

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
    <Container>
      <h2>Latest Movie</h2>

      {isLoading === 'loading' && <div>Loading...</div>}

      {isError === 'error' && <div>Error fetching data</div>}

      {data && status === 'success' && (
        <div>
          {data.results.slice(0, 1).map((movie, i) => (
            <LatestCard key={i} {...movie} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default LatestMovies;
