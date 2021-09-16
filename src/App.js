import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import TopList from './pages/TopList';
import LatestMovies from './pages/LatestMovies';
import FilmPage from './pages/FilmPage';
import Action from './pages/Action';
import Comedy from './pages/Comedy';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>

            <Route path='/LatestMovies'>
              <LatestMovies />
            </Route>

            <Route path='/TopList'>
              <TopList />
            </Route>

            <Route path='/FilmPage'>
              <FilmPage />
            </Route>

            <Route path='/Action'>
              <Action />
            </Route>

            <Route path='/Comedy'>
              <Comedy />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
