import React,{Component} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
    render(){
      return(
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ChoicePage} />
            <Route path="/load" component={Loader} />
            <Route path="/app" component={CombatPage} />
            <Route path="/win" component={Winner} />
            <Route path="/loose" component={Loser} />
          </Switch>
        </BrowserRouter>
      )
    }
}

export default App;
