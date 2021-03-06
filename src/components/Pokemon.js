import React from "react";

function Pokemon(props) {
  const items = props.pokemon.types;
  return (
    <li className="card-pokemon">
      <img src={props.pokemon.url}></img>
      <h2 className="pokemon-name">{props.pokemon.name}</h2>
      <ul className="pokemon-types">
        {items.map((item, index) => {
          return (
            <li key={index} className="types">
              {item}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default Pokemon;
