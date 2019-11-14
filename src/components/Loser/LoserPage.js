import React from 'react';
import cross from './croixtest.png'; 
import './LoserPage.css';
import Row from './return.png';
import PokeFinal from './pokefinal.png';
import Loading from '../Loading/Loading';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function LoserPage(){
        return(
                <div className="loser-block--page">
                    <div className="loser-structure--page">
                    <div className="element-animation2">
                        <img className="cross" src={cross} alt="lose"/>
                    </div>
                    <div className="element-animation">
                        <h2 className="loser--title">You loose</h2>
                    </div>     
                    <div className="bounce-in-bottom ">
                        <Link path to="/">     
                            <img className="row" src={Row} alt="lose"/>
                        </Link>      
                    </div>
                        <img className="pokeball--fond" src={PokeFinal} alt="pokeball_fond-Png"/>
                        </div>
                        
                </div>
    )
}

export default LoserPage;
