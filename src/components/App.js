import React from "react";
import apiData from "../api/data.json";
import "../stylesheets/App.css";
import PokeList from "./PokeList.js";
import Pokemon from "./Pokemon.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: apiData
    };
  }

  render() {
    return (
      <div>
        <h1>Mi lista de pokemon</h1>
        <PokeList>
          {this.state.pokemons.map((pokemon, index) => {
            return <Pokemon key={index} pokemon={pokemon} />;
          })}
        </PokeList>
      </div>
    );
  }
}

export default App;
