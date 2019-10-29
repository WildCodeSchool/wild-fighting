import React from 'react';
import './Winner.css';
import trophy from './trophy2.0.png';
import mewtwo from './150Mewtwo.png';
import returnArrow from './return.png';



function Winner(){
    return(
        <div className="winner-result">
            <div className = 'roll-in-blurred-left'><img className="trophy" alt ="#" src={trophy}/></div>
                <div className = "v-1">
                    <div className='slide-in-blurred-top'><div className = "win-result-title"><h1 style={{fontFamily:"pokemon_hollow"}}>victory</h1></div></div>
                        <div className='rotate-in-center'><img className="winner-pokemon" src={mewtwo} alt='pokemon winner'/></div>
                            <div className = "option">
                                {}
                                <div className='bounce-in-bottom'><img src={returnArrow} alt='returnarrow'/></div>
                            </div>
                            <div className = "comment">
                                {}</div>
                </div>
        </div>
    );
}

export default Winner;