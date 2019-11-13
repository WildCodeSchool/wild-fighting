/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import BattlePage from './components/BattlePage/BattlePage';
import LoserPage from './components/Loser/LoserPage';
import Loading from './components/Loading/Loading';
import SelectPage from './components/SelectPage/SelectPage';
import ModalPage from './components/ModalPage';
import Onglet from './components/Onglet/Onglet';

class App extends Component {
    constructor(props){
        super(props)
        this.state= {
            pokemonIndex1:null,
            pokemonIndex2:null,
            pokemon1:null,
            pokemon2:null,
        }
    }
    addPokemon = ( pkIndex ) => {
        this.setState({pokemonIndex:pkIndex})
    }
    pokemonStats = (number,id,atks) => {
      this.setState({['pokemonIndex'+number]:id})
      this.setState(
        {
          ['pokemon' + number] :  {
            ...['pokemon' + number],
            atks : {
              atk1:{name:atks.atk1.name,damage:atks.atk1.damage},
              atk2:{name:atks.atk2.name,damage:atks.atk2.damage},
            }
          }
        }
      )
    }
  render () {
      return (
        <Router>
          <div className="App">
              <Onglet />
              <Switch>
                <Route exact path="/">
                  <SelectPage 
                    pokemonIndex1={this.state.pokemonIndex1} 
                    pokemonIndex2={this.state.pokemonIndex2} 
                    pokemonStats={this.pokemonStats}/>
                </Route>
                <Route path="/battle">
                {
                  this.state.pokemon1 && this.state.pokemon2
                    ? <BattlePage 
                        pokemonIndex1={this.state.pokemonIndex1} 
                        pokemonIndex2={this.state.pokemonIndex2} 
                        pokemon1Atks={this.state.pokemon1.atks} 
                        pokemon2Atks={this.state.pokemon2.atks} 
                        doDamage={this.doDamage}/>
                    : <Redirect to="/"/>
                  }
                </Route>
                <Route path="/load" component={Loading} />
                
                <Route path="/loose" component={LoserPage} />
                <Route path="/pokedex" component={ModalPage} />
              </Switch>
          </div>
        </Router>
      )
    }
}
export default App;
