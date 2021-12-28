import React, { useState } from 'react';
// import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { getLatest } from '../services/TMDBApi';
import '../css/App.css';
import LatestCard from './LatestCard';
import '../css/LatestMovie.css';
import { Carousel } from 'react-bootstrap';

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
    <section>
      <h2>Latest Movies</h2>

      {isLoading === 'loading' && <div>Loading...</div>}

      {isError === 'error' && <div>Error fetching data</div>}

      {data && status === 'success' && (
        <div className='container-latest-movie'>
          <Carousel controls={false} interval={5000}>
            {data.results.slice(0, 10).map((movie, i) => (
              <Carousel.Item key={movie.id}>
                <LatestCard key={i} {...movie} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </section>
  );
};

export default LatestMovies;
