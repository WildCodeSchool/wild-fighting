<<<<<<< HEAD
import React,{Component} from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import BattlePage from './components/BattlePage/BattlePage'
import LoserPage from './components/Loser/LoserPage';
import Loading from './components/Loading/Loading'


class App extends Component {
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
/*import logo from './logo.svg';*/
import './App.css';
import Winner from './components/WinnerPage/Winner';

function App() {
  return (
    <div className="App">
      < Winner />
    </div>
  );
>>>>>>> Add animation on winner page
}

export default App;
