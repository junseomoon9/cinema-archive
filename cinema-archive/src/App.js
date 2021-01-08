import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Header} from './components/Header'
import {Movies} from './components/Movies'
import {TVshows} from './components/TVshows'
import {Watchlist} from './components/Watchlist'
import './App.css';

function App() {
  return (
    <Router>

        <Header />

        <Switch>

          <Route exact path="/">
            <Movies />
          </Route>

          <Route path="/movies">
            <Movies />
          </Route>

          <Route path="/tv">
            <TVshows />
          </Route>

          <Route path="/watchlist">
            <Watchlist />
          </Route>
          
        </Switch>

      </Router>
  );
}

export default App;
