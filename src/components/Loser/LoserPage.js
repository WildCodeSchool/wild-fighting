import React from 'react';
import cross from './croixtest.png'; 
import './LoserPage.css';
<<<<<<< HEAD
import Row from './return.png';
import PokeFinal from './pokefinal.png';


function LoserPage(){
    return(
        <div className="container">
            <div className="loser-poke">
                <img src={PokeFinal} alt="pokefinal" />
            </div>
=======
import returne from './return.png';


function LoserPage () {
    return (
        <div className="container">
>>>>>>> page loser fonctionnel
            <div className="element-animation2">
                <img className="cross" src={cross} alt="lose"/>
            </div>
            <div className="element-animation">
<<<<<<< HEAD
                <h2 className="loser--title">You loose</h2>
            </div>
            <div className="bounce-in-bottom">
                <img className="row" src={Row} alt="lose"/>
            </div>
        </div>
    )
}

export default LoserPage;
=======
            <h2>You lose</h2>
            </div>
            <div className="return">
                <img className="retour" src={returne} alt="return to game" /> 
            </div>
        </div>
    );
}

export default LoserPage;
>>>>>>> page loser fonctionnel
