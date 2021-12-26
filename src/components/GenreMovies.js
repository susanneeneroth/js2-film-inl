//sida som ska visa filmer från en specifik genre

import React from 'react';
import { useHistory } from 'react-router';
import { getMoviesWithGenres } from '../services/TMDBApi';
import { useQuery } from 'react-query';
import { Button } from 'react-bootstrap';
import '../css/GenreMovies.css';
import GenreCard from './GenreCard';
// import MovieCard from './MovieCard';

const GenreMovies = ({ genreId, genreName, genrePage }) => {
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

  console.log(data);
  return (
    <section className='filteredMoviesSection'>
      {data && (
        <div className='filteredMoviesItems'>
          {data.results.map((movie, i) => (
            <GenreCard key={i} {...movie} />
          ))}
        </div>
      )}
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
