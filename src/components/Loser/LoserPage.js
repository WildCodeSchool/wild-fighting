import React from 'react';
import cross from './croixtest.png'; 
import './LoserPage.css';
import Row from './return.png';
import PokeFinal from './pokefinal.png';


function LoserPage(){
        return(
            <div className="container">
                <div className="loser-poke">
                    <img src={PokeFinal} alt="pokefinal" />
                </div>
                <div className="element-animation2">
                    <img className="cross" src={cross} alt="lose"/>
                </div>
                <div className="element-animation">
                    <h2 className="loser--title">You loose</h2>
                </div>
                <div className="bounce-in-bottom">
                    <img className="row" src={Row} alt="lose"/>
                </div>
            </div>
        )
    }

export default LoserPage;
