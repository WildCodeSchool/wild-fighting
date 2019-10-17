import React from 'react';
import cross from './croixtest.png'; 
import './LoserPage.css';
import returne from './return.png';


function LoserPage () {
    return (
        <div className="container">
            <div className="element-animation2">
                <img className="cross" src={cross} alt="lose"/>
            </div>
            <div className="element-animation">
            <h2>You lose</h2>
            </div>
            <div className="return">
                <img className="retour" src={returne} alt="return to game" /> 
            </div>
        </div>
    );
}

export default LoserPage;