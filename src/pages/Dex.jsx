import React, { useState } from "react";
import Dashboard from "../components/Layout/Dashboard";
import PokemonList from "../components/Layout/PokemonList";
import MOCK_DATA from "../mocks/mock";
import { useLocation } from "react-router-dom";

const Dex = () => {
  const location = useLocation();
  const redirectedFrom = location.state?.pokemonList || [];

  const [allPokemon, setAllPokemon] = useState(MOCK_DATA);
  const [selectedPokemon, setSelectedPokemon] = useState(redirectedFrom);

  return (
    <>
      <Dashboard selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
      <PokemonList
        allPokemon={allPokemon}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </>
  );
};

export default Dex;
