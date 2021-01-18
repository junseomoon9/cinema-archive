import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Header} from './components/Header'
import {Movies} from './components/Movies'
import {TVshows} from './components/TVshows'
import {Watchlist} from './components/Watchlist'
import {Footer} from './components/Footer'
import './App.css';
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
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

        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
