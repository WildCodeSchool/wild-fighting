import React from 'react';
import CombatCard from './CombatCard'
import './CombatCard.css'

function ShowCombatCard() {
  return (
    <div className="ShowCombatCard">
      <CombatCard image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png" name="Pikachu" type="https://www.pokepedia.fr/images/e/e5/Miniature_Type_Feu_JCC.png" pv='70' />
      <CombatCard image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png" name="Pikachu" type="https://www.pokepedia.fr/images/e/e5/Miniature_Type_Feu_JCC.png" pv='70' />
    </div>
  );
}

export default ShowCombatCard;
