import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import TopList from './pages/TopList';

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

            <Route exact path='/TopList'>
              <TopList />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
