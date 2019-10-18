import React from 'react';
import './winner.css';


function Winner(){
    return(
        <div className="winnerResult">
            <img className="trophy" alt ="#" src="https://imgur.com/pd0ZNve.jpg"/>
                <div className = "v_1">
                    <div className = "winResultTitle"><h1>VICTORY</h1></div>
                        <img className="winnerPokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" alt="winnerPokemon"/>
                            <div className = "option">
                                <button>Share it</button>
                                <button>Restart</button>
                            </div>
                            <div className = "comment"><button>Leave comment</button></div>
                </div>
        </div>
    );
}

export default Winner;