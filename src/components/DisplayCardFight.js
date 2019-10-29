import React from 'react';
import CardFight from './CardFight'

function DisplayCardFight() {
  return (
    <div className="ShowCombatCard">
      <CardFight id="0" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png" name="Pikachu" type={["ghost","normal"]} hp='70' />
      <CardFight id="1" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png" name="Pikachu" type={["fighting","dragon"]} hp='70' />
    </div>
  );
}

export default DisplayCardFight;
