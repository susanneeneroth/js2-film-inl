import React from 'react';
import { getMovieCredits, getMovieFacts } from '../services/TMDBApi';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import '../css/MovieFacts.css';
import '../css/App.css';
import { Container, Row, Col } from 'react-bootstrap';

const MovieFacts = () => {
  const { id } = useParams();
  const movieFacts = useQuery(['movieFacts', id], () => getMovieFacts(id));
  const movieCredits = useQuery(['movieCredits', id], () =>
    getMovieCredits(id)
  );

  return (
    <section>
      {movieFacts.data && (
        <div>
          <h1>{movieFacts.data.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w300${movieFacts.data.poster_path}`}
            className='movie-facts-poster'
            alt={movieFacts.data.title}
          />
          <p className='movie-facts-text'>{movieFacts.data.overview}</p>
          <hr className='hr-color' />

          {movieCredits.data && (
            <Container>
              <h2 className='movie-facts-cast'>Cast</h2>
              <Row>
                {movieCredits.data.cast.map((actor, i) => (
                  <Col lg={2} md={2} sm={4}>
                    <Link
                      to={`/actor/${actor.id}`}
                      className='actorItem'
                      key={i}
                    >
                      <img
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            'https://dummyimage.com/100x150/c4c4c4/383838&text=No+image';
                        }}
                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        className='movie-facts-img'
                        alt='actor'
                      />
                      <p key={i}>{actor.name}</p>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Container>
          )}
        </div>
      )}
    </section>
  );
};

export default MovieFacts;
