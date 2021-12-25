import React from 'react';
import { getMovieCredits, getMovieFacts } from '../services/TMDBApi';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import '../css/MovieFacts.css';

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

          {movieCredits.data && (
            <div>
              <h2>Cast</h2>
              {movieCredits.data.cast.map((actor, i) => (
                <Link to={`/actor/${actor.id}`} className='actorItem' key={i}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    className='movie-facts-img'
                    alt={!actor.profile_path && 'no image'} // för att jag tröttnade på fula brutna bildlänkar
                  />
                  <p key={i}>{actor.name}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default MovieFacts;
