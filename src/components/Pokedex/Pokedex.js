import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './Pokedex.css';
import backgroundImage from './pattern.png';
import NavBar from '../layout/NavBar/NavBar';
import Dashboard from '../layout/Dashboard';
import Pokemon from '../pokemon/Pokemon';

class Pokedex extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Pokedex;
