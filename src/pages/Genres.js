import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { getGenres } from '../services/TMDBApi';

const Genres = () => {
  // börja här

  const [genres, setGenres] = useState();
  const { data, isError, isLoading, status } = useQuery(
    ['genres', genres],
    () => {
      setGenres(genres);
      return getGenres(genres);
    }
  );

  return (
    <Container>
      <h2>Genres</h2>
      {isLoading && <p>Loading genres...</p>}
      {isError && <p>There was an error fetching data.</p>}
      {data && status === 'success' && (
        <>
          <Row>data här</Row>
        </>
      )}
    </Container>
  );
};

export default Genres;
