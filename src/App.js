<<<<<<< HEAD
import React,{ Component } from 'react';
=======
<<<<<<< HEAD
import React,{Component} from 'react';
>>>>>>> page loser fonctionnel
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import BattlePage from './components/BattlePage/BattlePage'
import LoserPage from './components/Loser/LoserPage';
import Loading from './components/Loading/Loading'


class App extends Component {
<<<<<<< HEAD
  render(){
  return(
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/" component={DisplayCardSelect} />*/}
          <Route path="/battle" component={BattlePage} />
          <Route path="/load" component={Loading} />
          {/*<Route path="/win" component={Winner} /> */}
          <Route path="/loose" component={LoserPage} />
        </Switch>
      </div>
    </Router>
  )
  }
=======
    render(){
      return(
        <Router>
          <div>
              <Switch>
                {/* <Route exact path="/" component={DisplayCardSelect} />*/}
                <Route path="/battle" component={BattlePage} />
                <Route path="/load" component={Loading} />
                {/*<Route path="/win" component={Winner} /> */}
                <Route path="/loose" component={LoserPage} />
              </Switch>
          </div>
        </Router>
      )
    }
=======
import React from 'react';
import LoserPage from './components/Loser/LoserPage.js';

/*import logo from './logo.svg';
import './App.css';*/


function App() {
  return (
    <div className="App">
     <LoserPage />
    </div>
  );
>>>>>>> page loser fonctionnel
>>>>>>> page loser fonctionnel
}

export default App;
