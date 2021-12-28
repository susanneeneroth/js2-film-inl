import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../css/App.css';
import { useQuery } from 'react-query';
import MovieCard from './MovieCard';
import { getTopList } from '../services/TMDBApi';

const TopList = () => {
  const [topList, setTopList] = useState();
  const { data, isError, isLoading, status } = useQuery(
    ['topList', topList],
    () => {
      setTopList(topList);
      return getTopList(topList);
    }
  );

  return (
    <Container>
      <h2>Toplist</h2>

      {isLoading && <p>Loading top list...</p>}
      {isError && <p>There was an error fetching data.</p>}
      {data && status === 'success' && (
        <>
          <Row>
            {data.results.slice(0, 12).map((movie, id) => (
              <Col lg={3} md={4} sm={6} key={id}>
                <MovieCard key={movie.id} movie={movie} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default TopList;
