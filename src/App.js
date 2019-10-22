import React,{Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import ShowChooseCard from './components/ShowChooseCard'

class App extends Component {
    render(){
      return(
        <Router>
          <Switch>
            <Route exact path="/" component={ShowChooseCard} />
            <Route path="/app" component={ShowChooseCard} />
            {/* <Route path="/load" component={Loader} /> */}
            {/* <Route path="/win" component={Winner} />
            <Route path="/loose" component={Loser} /> */}
          </Switch>
        </Router>
      )
    }
}

export default App;
