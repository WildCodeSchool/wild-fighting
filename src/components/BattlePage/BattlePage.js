import React,{Component} from 'react';
import './BattlePage.css'
import FightCard from '../FightCard/FightCard'
import Loading from '../Loading/Loading'
import axios from 'axios'

class BattlePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemon1: null,
      pokemon2: null
    }
  }

  componentDidMount(){
    this.getPokemon(1)
    this.getPokemon(2)
  }

  getPokemon = (index) => {
    const number =  Math.floor(Math.random() * 100) + 1;
    axios.get("https://pokeapi.co/api/v2/pokemon/" + number)
      .then(response => response.data)
      .then(pokemon => {
        this.setState({ ['pokemon' + index]: pokemon })
      })
  }
  
  render(){
    const { pokemon1, pokemon2 } = this.state;
    return (
      <div className="BattlePage">
        {
          pokemon2 && pokemon1 ?
          (
            <>
              <FightCard id="0" image={pokemon1.sprites.front_default} name={pokemon1.name} type={pokemon1.types.map(x => x.type.name)} hp='70' />
              <FightCard id="1" image={pokemon2.sprites.front_default} name={pokemon2.name} type={pokemon2.types.map(x => x.type.name)} hp='70' />
            </>
          ):
          <Loading />
        }
      </div>
    );
  }
}

export default BattlePage;
