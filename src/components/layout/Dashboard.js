import React from 'react';
import PokemonList from '../PokemonList/PokemonList';

function Dashboard() {
  return (
    <div className="row">
      <div className="col">
        <PokemonList />
      </div>
    </div>
  );
}

export default Dashboard;
