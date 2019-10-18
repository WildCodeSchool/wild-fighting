import React from 'react';
import './Winner.css';
import trophy from './trophy2.0.png';
import mewtwo from './150Mewtwo.png';
import returnArrow from './return.png';



function Winner(){
    return(
        <div className="winnerResult">
            <div className = 'roll-in-blurred-left'><img className="trophy" alt ="#" src={trophy}/></div>
                <div className = "v_1">
                    <div className='slide-in-blurred-top'><div className = "winResultTitle"><h1>VICTORY</h1></div></div>
                        <div className='rotate-in-center'><img className="winnerPokemon" src={mewtwo} alt='pokemon winner'/></div>
                            <div className = "option">
                                {/*<button>Share it</button> */}
                                <div className='bounce-in-bottom'><img src={returnArrow} alt='returnarrow'/></div>
                            </div>
                            <div className = "comment">
                                {/*<button class="button">
		                            <span>Bouton</span>	
                                </button>*/}</div>
                </div>
        </div>
    );
}

export default Winner;