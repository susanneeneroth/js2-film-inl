import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const getImage = (poster_path) =>
  `https://image.tmdb.org/t/p/w300/${poster_path}`;

const LatestCard = (props) => {
  return (
    <Container>
      <Card bg='dark' text='white' style={{ width: '18rem' }} className='mt-40'>
        <Card.Header className='card_header'>
          {props.original_title}
        </Card.Header>
        <Card.Body>
          <Card.Img
            src={getImage(props.poster_path)}
            alt={props.original_title}
          />
          <Link to={`/movie/${props.id}`}>
            <Button variant='secondary' className='mt-20'>
              View details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LatestCard;
