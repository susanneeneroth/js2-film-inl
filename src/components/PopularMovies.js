import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import MovieCard from './MovieCard';
import { getPopular } from '../services/TMDBApi';
import '../css/App.css';

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

      {isLoading === 'loading' && <div>Loading...</div>}

      {isError === 'error' && <div>Error fetching data</div>}

      {data && status === 'success' && (
        <div className='container-small'>
          <Row>
            {data.results.slice(0, 12).map((movie, id) => (
              <Col lg={3} md={4} sm={6} key={id}>
                <MovieCard key={movie.id} movie={movie} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
};

export default PopularMovies;
