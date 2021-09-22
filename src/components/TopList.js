import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useQuery } from 'react-query';
import TopListMovieCard from './TopListMovieCard';

const BASE_URL = 'https://api.themoviedb.org/3';
const api_key = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

const fetchMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/top_rated${api_key}`);

  return res.json();
};

const TopList = () => {
  const { data, status } = useQuery('toprated', fetchMovies);
  // const [currentPage, setCurrentPage] = useState();
  // console.log(data);

  return (
    <Container>
      <h2>Top Rated movies</h2>
      <Button className='mt-20 mr-5' variant='dark'>
        Page 1
      </Button>
      <Button className='mt-20 mr-5' variant='dark'>
        Page 2
      </Button>
      <Button className='mt-20 mr-5' variant='dark'>
        Page 3
      </Button>

      {status === 'loading' && <div>Loading...</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <Row>
          {data.results.map((movie, id) => (
            <Col lg={3} md={4} sm={6} key={id}>
              <TopListMovieCard key={movie.id} movie={movie} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default TopList;
