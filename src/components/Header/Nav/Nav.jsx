import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/styles.css"; 

function Nav() {
  return (
    <div className="nav-container">
      <img className="nav-img" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="" />
      
      <div className="nav-links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/search">
          Buscador
        </Link>
        <Link className="nav-link" to="/new">
          Nuevo Pokemon
        </Link>
      </div>
    </div>
  );
}

export default Nav;
