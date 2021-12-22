import React from 'react';
import LatestMovie from '../components/LatestMovie';
import PopularMovies from '../components/PopularMovies';
import TopList from '../components/TopList';

function HomePage() {
  return (
    <div className='App'>
      <LatestMovie />
      <hr className='hr-color' />
      <TopList />
      <hr className='hr-color' />
      <PopularMovies />
    </div>
  );
}

export default HomePage;
