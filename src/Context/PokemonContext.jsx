import React from 'react'

const PokemonContext = React.createContext({
  allPokemon: [],
  selectedPokemon: [],
  addPokemon: (pokemon, id) => {},
  deletePokemon: (id) => {},
});

export default PokemonContext