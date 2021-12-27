//sida med genreknappar

import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { getMovieGenres } from '../services/TMDBApi';
import '../css/Genres.css';

const Genres = () => {
  let { genreId } = useParams();

  const [selectedGenre, setSelectedGenre] = useState({
    id: genreId,
  });

  const {
    data: movieGenresData,
    isError,
    isLoading,
    status,
  } = useQuery(['genres', selectedGenre], () => {
    return getMovieGenres(selectedGenre);
  });

  let history = useHistory();

  const handleBtnClick = async (genre) => {
    setSelectedGenre(genre);
    history.push(`/movies/${genre.name}/${genre.id}/1`);
  };

  return (
    <Container>
      <h2>Genres</h2>

      {isLoading === 'loading' && <div>Loading...</div>}
      {isError === 'error' && <div>Error fetching data</div>}
      {movieGenresData && status === 'success' && (
        <>
          <div className='btn-container'>
            {movieGenresData.genres.map((genre, i) => (
              <div key={i} onClick={() => handleBtnClick(genre)}>
                <Button variant='outline-secondary' className='btn-margin'>
                  {genre.name}
                </Button>
              </div>
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default Genres;
