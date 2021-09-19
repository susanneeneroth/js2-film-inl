import React from 'react';
import { Card } from 'react-bootstrap';

const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

const TopListMovie = ({ movie }) => {
  return (
    <div>
      <Card.Body>
        <Card.Img src={getImage(movie.poster_path)} alt='movie' />
        <Card.Title>{movie.original_title}</Card.Title>
        <Card.Text>{movie.overview}</Card.Text>
      </Card.Body>
    </div>
  );
};

export default TopListMovie;
