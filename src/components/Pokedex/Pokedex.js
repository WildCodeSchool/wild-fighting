import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Pokedex.css';
import NavBar from '../layout/NavBar/NavBar';
import Pokemon from '../Pokemon/Pokemon';
import PokemonList from "../PokemonList/PokemonList";


function Pokedex() {
  return (
    <div className="Pokedex">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col">
            <Switch>
              <Route exact path="/" component={PokemonList} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
