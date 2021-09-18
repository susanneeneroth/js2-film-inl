import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import TopList from './pages/TopList';
import PopularMovies from './components/PopularMovies';
import Action from './pages/Action';
import Comedy from './pages/Comedy';
import SciFi from './pages/SciFi';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navigation />
        <div>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>

            <Route path='/LatestMovies'>
              <PopularMovies />
            </Route>

            <Route path='/TopList'>
              <TopList />
            </Route>

            <Route path='/Action'>
              <Action />
            </Route>

            <Route path='/Comedy'>
              <Comedy />
            </Route>

            <Route path='/SciFi'>
              <SciFi />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
