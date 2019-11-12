import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Pokedex.css';
import NavBar from '../layout/NavBar/NavBar';
import Dashboard from '../layout/Dashboard';
import Pokemon from '../Pokemon/Pokemon';

function Pokedex() {
  return (
    <div className="Pokedex">
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
        </Switch>
      </div>
    </div>
  );
}

export default Pokedex;
