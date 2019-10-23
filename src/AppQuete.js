import React,{Component} from 'react'; // React et Component 
import {                        // React Router
    Route,                     // React Router
    BrowserRouter,            // React Router
    Switch,                  // React Router
    NavLink                 // React Router
} from 'react-router-dom'; // React Router
import './App.css'; // CSS
import Home from './components/Home';
import History from './components/History';


class App extends Component {
    render(){
        return(
            <BrowserRouter>
            <div>
                <NavLink className="navLink" exact to="/">Acceuil</NavLink>
                <NavLink className="navLink" to="/notre-histoire">Notre histoire</NavLink>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/notre-histoire" component={History} />
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}

export default App