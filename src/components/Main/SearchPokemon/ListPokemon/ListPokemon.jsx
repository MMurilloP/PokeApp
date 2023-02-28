import React from 'react';
import Card from '../Card/Card';
import { v4 as uuidv4 } from 'uuid';

function ListaPokemon({ pokemon, removePokemon }) {
  const handleRemove = (id) => {
    removePokemon(id);
  };

  return (
    <div>
      {pokemon.map((pokemon) => (
        <Card
          key={uuidv4()}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          type={pokemon.types[0].type.name}
          height={pokemon.height}
          weight={pokemon.weight}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
}

export default ListaPokemon;

