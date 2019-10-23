import React from 'react';
import ChooseCard from './ChooseCard';
import './ChooseCard.css';
import { Link } from 'react-router-dom';

function ShowChooseCard() {
  return (
    <div className="App">
      <ChooseCard image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png" name="Pikachu" type="https://www.pokepedia.fr/images/e/e5/Miniature_Type_Feu_JCC.png" pv='70'/>
      
      <Link to="/app" className="App--VS">
        <button className="App--VS-button">V S</button>
      </Link>
      
      <ChooseCard image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png" name="Pikachu" type="https://www.pokepedia.fr/images/e/e5/Miniature_Type_Feu_JCC.png"pv='70'/>
    </div>
  );
}

export default ShowChooseCard;
