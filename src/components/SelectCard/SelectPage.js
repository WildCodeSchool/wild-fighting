/* eslint-disable linebreak-style */
import React,{Component} from 'react';
import CardSelect from './SelectCard';
import Loading from '../Loading/Loading'
import axios from 'axios'


class DisplayCardSelect extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemon1 : null,
      pokemon2 : null
    }
  }
  componentDidMount(){
    this.getPokemon(1, this.props.pokemonIndex)
    this.getPokemon(2, Math.floor(Math.random() * (100)) + 1)
  }
  getPokemon = (index,number) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/"+number)
      .then( response => response.data )
      .then( pokemon =>{
        this.setState({['pokemon'+index]:pokemon})})
  }

  render(){
    const {pokemon1,pokemon2} = this.state;
    return (
      <div>
        {
          pokemon1 && pokemon2 ?
          (
            <div className="SelectPage">
              <CardSelect id="0" stats={pokemon1.stats} move={this.state.pokemon1.moves} image={pokemon1.sprites.front_default} name={pokemon1.name} type={pokemon1.types.map(x=>x.type.name)} hp={pokemon1.stats[5].base_stat} />
              <div className="App--VS"><button className="App--VS-button">V S</button></div>
              <CardSelect id="1" stats={pokemon2.stats} move={this.state.pokemon2.moves} image={pokemon2.sprites.front_default} name={pokemon2.name} type={pokemon2.types.map(x=>x.type.name)} hp={pokemon2.stats[5].base_stat} />
            </div>
          ):
          <Loading />
        }
        </div>
    );
  }
}

export default DisplayCardSelect;
