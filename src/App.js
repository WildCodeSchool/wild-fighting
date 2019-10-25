/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LoserPage from './components/Loser/LoserPage';
import WinnerPage from './components/WinnerPage/WinnerPage';
import ModalPage from './components/ModalPage';
import Onglet from './components/Onglet/Onglet';


class App extends Component {
  render() {
  return (
    <Router>
    <Onglet />
    <div>
      <Switch>
        {/* <Route exact path="/" component={DisplayCardSelect} />*/}
        <Route path="/win" component={WinnerPage} />
        <Route path="/pokedex" component={ModalPage} />
        <Route path="/loose" component={LoserPage} />
      </Switch>
    </div>
    </Router>
  )
  }
}



export default App;