import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import TopList from './components/TopList';
import PopularMovies from './components/PopularMovies';
import LatestMovie from './components/LatestMovie';
import Action from './pages/Action';
import Comedy from './pages/Comedy';
import SciFi from './pages/SciFi';
import Header from './components/Header';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className='App'>
          <BrowserRouter>
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
          <div className='main'></div>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
