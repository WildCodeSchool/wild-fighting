import React,{Component} from 'react';
import CardSelect from './CardSelect';
import Loading from '../Loading/Loading'
import axios from 'axios'


class DisplayCardSelect extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemon1 : null,
      pokemon2 : null
    }
    this.axiosRequest= this.axiosRequest.bind(this)
  }
  componentDidMount(){
    this.axiosRequest()
  }
  axiosRequest(){
    const min = Math.ceil(1);
    const max = Math.floor(101);
    const number =  Math.floor(Math.random() * (max - min)) + min;
    axios.get("https://pokeapi.co/api/v2/pokemon/"+number)
      .then( response => response.data )
      .then( pokemon =>{
        this.setState({pokemon2:pokemon}) 
        console.log(this.state.pokemon2)})
  }

  render(){
    return (
      <div>
        
        {
          this.state.pokemon2 ?
          (
            <div className="App">
            <CardSelect id="0" image={this.state.pokemon2.sprites.front_default} name={this.state.pokemon2.name} type={this.state.pokemon2.types.map(x=>x.type.name)} hp='70' />
            <div className="App--VS"><button className="App--VS-button">V S</button></div>
            <CardSelect id="1" image={this.state.pokemon2.sprites.front_default} name={this.state.pokemon2.name} type={this.state.pokemon2.types.map(x=>x.type.name)} hp='70' />
          </div>
          ):
          <Loading />
        }
        </div>
    );
  }
}

export default DisplayCardSelect;
