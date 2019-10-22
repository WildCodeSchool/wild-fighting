import React from 'react';
import ChooseCard from './ChooseCard';

function ShowChooseCard() {
  return (
    <div className="App">
      <ChooseCard image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png" name="Pikachu" type="https://www.pokepedia.fr/images/e/e5/Miniature_Type_Feu_JCC.png" pv='70'/>
      <div className="App--VS"><button className="App--VS-button">V S</button></div>
      <ChooseCard image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png" name="Pikachu" type="https://www.pokepedia.fr/images/e/e5/Miniature_Type_Feu_JCC.png"pv='70'/>
    </div>
  );
}

export default ShowChooseCard;
