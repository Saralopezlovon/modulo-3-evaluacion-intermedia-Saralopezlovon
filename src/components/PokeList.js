import React from "react";

function PokeList(props) {
  return (
    <div className="pokemon-container">
      <ul className="PokeList">{props.children}</ul>
    </div>
  );
}

export default PokeList;
