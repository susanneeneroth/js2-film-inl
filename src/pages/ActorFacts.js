import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getActorById } from '../services/TMDBApi';
import { getMovieActorById } from '../services/TMDBApi';

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
          <h2>{actorFacts.data.name}</h2>
          <p>{actorFacts.data.place_of_birth}</p>
        </div>
      )}
    </section>
  );
};

export default ActorFacts;
