/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import BattlePage from './components/BattlePage/BattlePage';
import LoserPage from './components/Loser/LoserPage';
import Loading from './components/Loading/Loading';
import WinnerPage from './components/WinnerPage/WinnerPage';
import ModalPage from './components/ModalPage';
import Onglet from './components/Onglet/Onglet';


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            pokemonIndex:15
        }
    }
    addPokemon = ( pkIndex ) => {
        this.setState({pokemonIndex:pkIndex})
        console.log(pkIndex)
    }
  render () {
      return (
        <Router>
          <div className="App">
              <Onglet />
              <Switch>
                <Route exact path="/">
                  <DisplayCardSelect pokemonIndex={this.state.pokemonIndex} />
                </Route>
                <Route path="/battle" component={BattlePage} />
                <Route path="/load" component={Loading} />
                <Route path="/win" component={WinnerPage} />
                <Route path="/loose" component={LoserPage} />
                <Route path="/pokedex" component={ModalPage} />
              </Switch>
          </div>
        </Router>
      )
    }
}
export default App;
