import React from 'react';
import { pokeClasses } from '../PokeClasses';
import PokeCell from '../PokeCell/PokeCell';
import './PokeList.css';

const PokeList = ({ handleOnClick }) => {
    const cells = pokeClasses.map(pokeClass => {
      return (
        <PokeCell 
          key={pokeClass.id} 
          pokeClass={pokeClass} 
          handleOnClick={handleOnClick}
        />
      );
    });
  
    return (
      <section className="poke-list">
        {cells}
      </section>
    )
  }
  
  export default PokeList;