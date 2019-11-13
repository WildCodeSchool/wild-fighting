import React, { Component } from 'react';
//import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import BattlePage from './components/BattlePage/BattlePage'
import LoserPage from './components/Loser/LoserPage';
import Loading from './components/Loading/Loading'
import ModalPage from './components/ModalPage';

class App extends Component {
  render(){
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/" component={DisplayCardSelect} />*/}
          <Route path="/battle" component={BattlePage} />
          <Route path="/load" component={Loading} />
          <Route path="/pokedex" component={ModalPage} />
          <Route path="/loose" component={LoserPage} />
        </Switch>
      </div>
    </Router>
  )
  }
}

export default App;
