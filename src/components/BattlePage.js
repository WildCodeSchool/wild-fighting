import React,{Component} from 'react';
import FightCard from './FightCard/FightCard'
import Loading from './Loading/Loading'
import axios from 'axios'

class BattlePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemon1 : null,
      pokemon2 : null
    }
    this.getPokemon1= this.getPokemon1.bind(this)
    this.getPokemon2= this.getPokemon2.bind(this)
  }
  componentDidMount(){
    this.getPokemon1()
    this.getPokemon2()
  }
  getPokemon1(){
    const number =  Math.floor(Math.random() * (101 - 1)) + 1;
    axios.get("https://pokeapi.co/api/v2/pokemon/"+number)
      .then( response => response.data )
      .then( pokemon1 =>{
        this.setState({pokemon1:pokemon1})})
  }
  getPokemon2(){
    const number =  Math.floor(Math.random() * (101 - 1)) + 1;
    axios.get("https://pokeapi.co/api/v2/pokemon/"+number)
      .then( response => response.data )
      .then( pokemon2 =>{
        this.setState({pokemon2:pokemon2})})
  }
  render(){
    const {pokemon1,pokemon2} = this.state;
    return (
      <div>
        
        {
          
          this.state.pokemon2&&this.state.pokemon1 ?
          (
            <div className="App">
            <FightCard id="0" image={pokemon1.sprites.front_default} name={pokemon1.name} type={pokemon1.types.map(x=>x.type.name)} hp='70' />
            <FightCard id="1" image={pokemon2.sprites.front_default} name={pokemon2.name} type={pokemon2.types.map(x=>x.type.name)} hp='70' />
          </div>
          ):
          <Loading />
        }
        </div>
    );
  }
}

export default BattlePage;
