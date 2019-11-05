import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import backgroundImage from './pattern.png';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';

class Pokedex extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
<<<<<<< HEAD
              <Route exact path="/pokemon/:pokemonIndex" render={(props) => <Pokemon addPokemon={this.props.addPokemon} {...props} />} />
=======
              <Route exact path="/pokemon/:pokemonIndex">
                <Pokemon addPokemon={this.props.addPokemon}/>
              </Route>
>>>>>>> WIP
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Pokedex;

