import React,{Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ShowChooseCard from './components/ShowChooseCard'
import ShowChooseCard2 from './components/ShowChooseCard2'
import './App.css'

class App extends Component {
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={ShowChooseCard} />
                        <Route path="/app" component={ShowChooseCard2} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App