import React from 'react';
import '../../../../styles/styles.css';

function Card({ id, name, image, type, height, weight, onRemove }) {
  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className='pokemon-container'>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>Tipo: <span className="type">{type}</span></p>
      <p>Altura: {height /10} m</p>
      <p>Peso: {weight / 10 } kg</p>
      <button className="remove-button" onClick={handleRemove}>
        Eliminar
      </button>
    </div>
  );
}

export default Card;

