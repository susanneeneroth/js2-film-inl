import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/MovieCard.css';

const getImage = (poster_path) =>
  `https://image.tmdb.org/t/p/w300/${poster_path}`;

const MovieCard = ({ movie }) => {
  return (
    <section className='movie-card'>
      <Card bg='dark' text='white' style={{ width: '18rem' }} className='mt-40'>
        <Card.Header className='card_header'>
          {movie.original_title}
        </Card.Header>
        <Card.Body>
          <Card.Img src={getImage(movie.poster_path)} alt='movie' />
          <Link to={`/movie/${movie.id}`}>
            <Button variant='secondary' className='mt-20'>
              View details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </section>
  );
};

export default MovieCard;
