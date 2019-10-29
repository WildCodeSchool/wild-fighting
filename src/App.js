import React,{Component} from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import DisplayCardFight from './components/DisplayCardFight'
import LoserPage from './components/Loser/LoserPage.js';


class App extends Component {
    render(){
      return(
        <Router>
          <div>
              <Switch>
                {/* <Route exact path="/" component={DisplayCardSelect} />
                <Route path="/app" component={DisplayCardFight} />
                <Route path="/load" component={Loading} />
                <Route path="/win" component={Winner} /> */}
                <Route path="/loose" component={LoserPage} />
              </Switch>
          </div>
        </Router>
      )
    }
}

export default App;
