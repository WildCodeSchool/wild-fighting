import React, { Component } from 'react';
import './Pokedex.css';
import Pokemon from '../Pokemon';
import PokeList from '../PokeList/PokeList';
import DetailView from '../DetailView/DetailView';

class Pokedex extends Component {
    constructor() {
      super();
      this.state = {
        pokemon: {}
      };
  
      this.handleOnClick = this.handleOnClick.bind(this);
    }
  
    handleOnClick(id) {
      fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => {
          const pokemon = new Pokemon(data);
  
          this.setState({ pokemon });
        })
        .catch(err => console.log(err));
    }
  
    render() {
      return (
        <div className="App">
          <PokeList handleOnClick={this.handleOnClick} />
          <DetailView pokemon={this.state.pokemon} />
        </div>
      );
    }
  }
  
  export default Pokedex;