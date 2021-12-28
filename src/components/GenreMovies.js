//sida som ska visa filmer från en specifik genre

import React from 'react';
import { useHistory } from 'react-router';
import { getMoviesWithGenres } from '../services/TMDBApi';
import { useQuery } from 'react-query';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../css/GenreMovies.css';
import GenreCard from './GenreCard';
import { useParams } from 'react-router-dom';

const GenreMovies = () => {
  const { genreId, genreName, genrePage } = useParams();
  let page = parseInt(genrePage);
  let history = useHistory();

  const { data, isPreviousData } = useQuery(
    ['getMoviesWithGenres', page, genreId],
    () => getMoviesWithGenres(genreId, page),
    {
      keepPreviousData: true,
    }
  );

  const handleNextClick = () => {
    if (!isPreviousData && page < data.total_pages) {
      history.push(`/movies/${genreName}/${genreId}/${page + 1}`);
    }
  };

  const handlePrevClick = () => {
    history.push(`/movies/${genreName}/${genreId}/${page - 1}`);
  };

  return (
    <section>
      <Container>
        <h1>{genreName}</h1>

        {data && (
          <Row>
            {data.results.map((movie, i) => (
              <Col lg={3} md={4} sm={6} key={i}>
                <GenreCard key={i} {...movie} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
      <Button
        className='page-btn'
        variant='outline-secondary'
        onClick={handlePrevClick}
        disabled={page === 1}
      >
        Previous page
      </Button>
      <Button
        className='page-btn'
        variant='outline-secondary'
        onClick={handleNextClick}
        disabled={isPreviousData || data?.page === data?.total_pages}
      >
        Next page
      </Button>
    </section>
  );
};

export default GenreMovies;
