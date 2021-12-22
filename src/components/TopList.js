import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useQuery } from 'react-query';
import TopListMovieCard from './TopListMovieCard';
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
      <h2>Top List</h2>

      {isLoading && <p>Loading top list...</p>}
      {isError && <p>There was an error fetching data.</p>}
      {data && status === 'success' && (
        <>
          <Row>
            {data.results.slice(0, 10).map((movie, id) => (
              <Col lg={3} md={4} sm={6} key={id}>
                <TopListMovieCard key={movie.id} movie={movie} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default TopList;
