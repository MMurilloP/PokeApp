import React, { useState, useEffect } from "react";
import ListaPokemon from "./ListPokemon/ListPokemon";
import "../../../styles/styles.css";

function SearchPokemon() {
  const [inputValue, setInputValue] = useState("");
  const [pokemon, setPokemon] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const fetchPokemon = async () => {
    if (inputValue === "") {
      return;
    }
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputValue}`
      );
      if (response.ok) {
        const data = await response.json();
        if (!pokemon.find((p) => p.id === data.id)) {
          setPokemon([...pokemon, data]);
        }
        setInputValue("");
      } else {
        throw new Error("Pokemon no encontrado");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (inputValue) {
      fetchPokemon();
    }
    // eslint-disable-next-line
  }, []);

  const removePokemon = (id) => {
    setPokemon(pokemon.filter((pokemon) => pokemon.id !== id));
  };
  return (
    <div className="form-container">
      <h1>BUSCA UN POKEMON</h1>
      <input
        className="input-pokemon"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="button-pokemon" onClick={fetchPokemon}>
        Buscar
      </button>
      {pokemon.length > 0 && (
        <ListaPokemon pokemon={pokemon} removePokemon={removePokemon} />
      )}
    </div>
  );
}

export default SearchPokemon;
