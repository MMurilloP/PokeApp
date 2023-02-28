import React from "react";
import SearchPokemon from "./SearchPokemon/SearchPokemon";
import Home from "./Home/Home";
import Form from "./Form/Form";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Form />} />
        <Route path="/pokemon/:id" element={<SearchPokemon />} />
        <Route path="/search" element={<SearchPokemon />} />
      </Routes>
    </div>
  );
};

export default Main;
