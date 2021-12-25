import React from 'react';
import { useHistory } from 'react-router';
import MovieCard from '../components/MovieCard';
import { getMoviesWithGenres } from '../services/TMDBApi';
import { useQuery } from 'react-query';
import { Button, Row, Col } from 'react-bootstrap';

const FilteredMovies = ({ genreId, genreName, genrePage }) => {
  let page = parseInt(genrePage);
  let history = useHistory();

  const { data, isPreviousData } = useQuery(
    ['getMoviesWithGenre', page, genreId],
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
          {/* {data.results.map((movie, i) => (
            <MovieCard key={i} {...movie} />
          ))} */}
        </div>
      )}
      <span className='pagBtnWrapper'>
        <button
          className='pagBtn'
          onClick={handlePrevClick}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button
          className='pagBtn'
          onClick={handleNextClick}
          disabled={isPreviousData || data?.page === data?.total_pages}
        >
          Next
        </button>
      </span>
    </section>
  );
};

export default FilteredMovies;

// const FilteredMovies = ({ genreId, genreName, genrePage }) => {
//   let page = parseInt(genrePage);
//   let history = useHistory();

//   const { data, isPreviousData } = useQuery(
//     ['getGenre', page, genreId],
//     () => getGenre(genreId, page),
//     {
//       keepPreviousData: true,
//     });

//   const handleNextClick = () => {
//     if (!isPreviousData && page < data.total_pages) {
//       history.push(`/movies/${genreName}/${genreId}/${page + 1}`);
//     }
//   };

//   const handlePrevClick = () => {
//     history.push(`/movies/${genreName}/${genreId}/${page - 1}`);
//   };

//   return (
//     <section className='filteredMoviesSection'>
//       {data && (
//         <div className='filteredMoviesItems'>
//           {data.results.map((movie, i) => (
//             <MovieCard key={i} {...movie} />
//           ))}
//         </div>
//       )}
//       <span className='pagBtnWrapper'>
//         <button
//           className='pagBtn'
//           onClick={handlePrevClick}
//           disabled={page === 1}
//         >
//           Previous Page
//         </button>
//         <button
//           className='pagBtn'
//           onClick={handleNextClick}
//           disabled={isPreviousData || data?.page === data?.total_pages}
//         >
//           Next
//         </button>
//       </span>
//     </section>
//   );
// };

// export default FilteredMovies;
