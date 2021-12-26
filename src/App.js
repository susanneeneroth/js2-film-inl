import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import TopList from './components/TopList';
import PopularMovies from './components/PopularMovies';
import LatestMovie from './components/LatestMovie';
import Header from './components/Header';
import Genres from './pages/Genres';
import MovieFacts from './pages/MovieFacts';
import GenreMovies from './components/GenreMovies';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className='App'>
          <Router>
            <Navigation />
            <Header />
            <div>
              <Switch>
                <Route exact path='/'>
                  <HomePage />
                </Route>

                <Route path='/LatestMovie'>
                  <LatestMovie />
                </Route>

                <Route path='/PopularMovies'>
                  <PopularMovies />
                </Route>

                <Route path='/TopList'>
                  <TopList />
                </Route>

                <Route path='/Genres'>
                  <Genres />
                </Route>

                <Route path='/movie/:id'>
                  <MovieFacts />
                </Route>

                <Route path='/movies/:genreName?/:genreId?/:genrePage?'>
                  <GenreMovies />
                </Route>
              </Switch>
            </div>
          </Router>
          <div className='main'></div>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
