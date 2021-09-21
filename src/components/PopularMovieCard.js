import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

const PopularMovieCard = ({ movie }) => {
  return (
    <Card bg='dark' text='white' style={{ width: '18rem' }} className='mt-40'>
      <Card.Header className='card_header'>{movie.original_title}</Card.Header>
      <Card.Body>
        <Card.Img src={getImage(movie.poster_path)} alt='movie' />
        {/* <Card.Text>{movie.overview}</Card.Text> */}
        <Button variant='secondary' className='mt-20'>
          Read more about Movie
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PopularMovieCard;
