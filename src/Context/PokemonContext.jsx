import React from 'react'

const PokemonContext = React.createContext({
  allPokemon: [],
  selectedPokemon: [],
  addPokemon: (pokemon, id) => {},
  deletePokemon: (pokemon, id) => {},
});

export default PokemonContext