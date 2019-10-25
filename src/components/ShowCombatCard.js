import React from 'react';
import CombatCard from './CombatCard'
import './CombatCard.css'

function ShowCombatCard() {
  return (
    <div className="ShowCombatCard">
      <CombatCard id="1" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png" name="Pikachu" type={["ghost","normal"]} pv='70' />
      <CombatCard id="2" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png" name="Pikachu" type={["fighting","dragon"]} pv='70' />
    </div>
  );
}

export default ShowCombatCard;
