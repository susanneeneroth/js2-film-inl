import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import PopularMovieCard from './PopularMovieCard';
import { getPopular } from '../services/TMDBApi';

// const BASE_URL = 'https://api.themoviedb.org/3';
// const api_key = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
// const currentPage = 3;

// const fetchMovies = async (key, currentPage) => {
//   const res = await fetch(
//     `${BASE_URL}/movie/popular${api_key}&page=${currentPage}`
//   );

//   return res.json();
// };

const PopularMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, status } = useQuery(['movies', currentPage], () => {
    return getPopular(currentPage);
  });

  console.log(data);

  return (
    <Container>
      <h2>The 20 most popular movies</h2>
      {/* <p>{status}</p> */}
      <Button
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
      </Button>

      {status === 'loading' && <div>Loading...</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <Row>
          {data.results.map((movie, id) => (
            <Col lg={3} md={4} sm={6} key={id}>
              <PopularMovieCard key={movie.id} movie={movie} />
            </Col>
          ))}
        </Row>
      )}
      <Button
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
      </Button>
    </Container>
  );
};

export default PopularMovies;
