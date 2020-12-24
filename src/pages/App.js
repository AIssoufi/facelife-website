//Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Compoenents
import { Header } from '../components';

// CSS
import './App.scss';

function App() {
  return (
    <Router>
      <div id="app-comp">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <p className="placeholder-text">Accueil</p>
            </Route>
            <Route path="/friends">
              <p className="placeholder-text">Amis</p>
            </Route>
            <Route path="/watch">
              <p className="placeholder-text">Watch</p>
            </Route>
            <Route path="/marketplace">
              <p className="placeholder-text">Marketplace</p>
            </Route>
            <Route path="/groups">
              <p className="placeholder-text">Groupes</p>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
