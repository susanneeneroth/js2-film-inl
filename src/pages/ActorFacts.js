import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getActorById } from '../services/TMDBApi';
import { getMovieActorById } from '../services/TMDBApi';
import ActorMovieCard from '../components/ActorMovieCard';
import '../css/ActorFacts.css';
import '../css/App.css';
import { Container, Row, Col } from 'react-bootstrap';

const ActorFacts = () => {
  const { id } = useParams();
  const actorFacts = useQuery(['actorById', id], () => getActorById(id));
  const actorMovie = useQuery(['movieByActorId', id], () => {
    return getMovieActorById(id);
  });

  return (
    <section>
      {actorFacts.data && (
        <div>
          <h2 className='actor-facts-title'>{actorFacts.data.name}</h2>
          <img
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://dummyimage.com/100x150/c4c4c4/383838&text=No+image';
            }}
            src={`https://image.tmdb.org/t/p/w300${actorFacts.data.profile_path}`}
            alt={actorFacts.data.title}
          />
        </div>
      )}
      <hr className='hr-color' />
      {actorMovie.data && (
        <Container>
          <h2>Cast in</h2>
          <Row>
            {actorMovie.data.results.map((movie, i) => (
              <Col lg={3} md={3} sm={6}>
                <Link
                  to={`/movie/${movie.id}`}
                  key={i}
                  className='actorMovieItem'
                >
                  <ActorMovieCard {...movie} className='actorMovieCard' />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </section>
  );
};

export default ActorFacts;
