import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import MovieCard from './MovieCard';
import { getPopular } from '../services/TMDBApi';

const PopularMovies = () => {
  const [popularMovie, setPopularMovie] = useState();
  const { data, isError, isLoading, status } = useQuery(
    ['popularMovie', popularMovie],
    () => {
      setPopularMovie(popularMovie);
      return getPopular(popularMovie);
    }
  );

  return (
    <Container>
      <h2>Popular movies</h2>
      {/* <Button
        className='mt-20 mr-5'
        variant='dark'
        onClick={() => setCurrentPage(1)}
      >
        Page 1
      </Button>
      <Button
        className='mt-20 mr-5'
        variant='dark'
        onClick={() => setCurrentPage(2)}
      >
        Page 2
      </Button>
      <Button
        className='mt-20 mr-5'
        variant='dark'
        onClick={() => setCurrentPage(3)}
      >
        Page 3
      </Button> */}

      {isLoading === 'loading' && <div>Loading...</div>}

      {isError === 'error' && <div>Error fetching data</div>}

      {data && status === 'success' && (
        <Row>
          {data.results.slice(0, 10).map((movie, id) => (
            <Col lg={3} md={4} sm={6} key={id}>
              <MovieCard key={movie.id} movie={movie} />
            </Col>
          ))}
        </Row>
      )}
      {/* <Button
        className='mt-20 mr-5'
        variant='dark'
        onClick={() => setCurrentPage(1)}
      >
        Page 1
      </Button>
      <Button
        className='mt-20 mr-5'
        variant='dark'
        onClick={() => setCurrentPage(2)}
      >
        Page 2
      </Button>
      <Button
        className='mt-20 mr-5'
        variant='dark'
        onClick={() => setCurrentPage(3)}
      >
        Page 3
      </Button> */}
    </Container>
  );
};

export default PopularMovies;
