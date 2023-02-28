import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ListaPokemon from "../SearchPokemon/ListPokemon/ListPokemon";
import "../../../styles/styles.css";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [pokemon, setPokemon] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    addCustomPokemon(data);
  };

  const addCustomPokemon = (data) => {
    const newPokemon = {
      id: data.id,
      name: data.name,
      sprites: {
        front_default: data.image,
      },
      types: [
        { type: { name: data.typeOne } },
        { type: { name: data.typeTwo } },
      ],
    };
    setPokemon([...pokemon, newPokemon]);
  };

  return (
    <div className="form-container">
      <h1>CREA TÚ POKEMON</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="pokemon-form">
        <label>
          ID:
          <input type="number" {...register("id", { required: true })} />
          {errors.id && <span className="error-message">ID is required</span>}
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            {...register("name", { required: true, minLength: 3 })}
          />
          {errors.name && (
            <span className="error-message">
              Name is required and must be at least 3 characters
            </span>
          )}
        </label>
        <br />
        <label>
          Image:
          <input type="text" {...register("image", { required: true })} />
          {errors.image && (
            <span className="error-message">Image is required</span>
          )}
        </label>
        <br />
        <label>
          Type One:
          <select {...register("typeOne", { required: true })}>
            <option value="">Select a type</option>
            <option value="grass">Grass</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
          </select>
          {errors.typeOne && (
            <span className="error-message">Type One is required</span>
          )}
        </label>
        <br />
        <label>
          Type Two:
          <select {...register("typeTwo", { required: true })}>
            <option value="">Select a type</option>
            <option value="grass">Grass</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
          </select>
          {errors.typeTwo && (
            <span className="error-message">Type Two is required</span>
          )}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {pokemon.length > 0 && <ListaPokemon pokemon={pokemon} />}
    </div>
  );
}

export default Form;
