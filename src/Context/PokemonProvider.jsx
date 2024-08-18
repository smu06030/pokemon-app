import React, { useState } from "react";
import PokemonContext from "./PokemonContext";
import { useLocation } from "react-router-dom";
import MOCK_DATA from "../mocks/mock";

const PokemonProvider = ({ children }) => {
  const location = useLocation();
  const redirectedFrom = location.state?.pokemonList || [];

  const [allPokemon, setAllPokemon] = useState(MOCK_DATA);
  const [selectedPokemon, setSelectedPokemon] = useState(redirectedFrom);

  // 포켓몬 추가
  const addPokemon = (pokemon, id) => {
    if (selectedPokemon.length >= 6) return alert("포켓몬은 최대 6개까지 등록할 수 있습니다.");
    if (selectedPokemon.some((pokemon) => pokemon.id === id)) return alert("이미 등록된 포켓몬입니다.");

    setSelectedPokemon((prev) => [...prev, pokemon]);
  };

  // 포켓몬 삭제
  const deletePokemon = (id) => {
    const filteredPokemon = selectedPokemon.filter(
      (pokemon) => pokemon.id !== id
    );

    setSelectedPokemon((prev) => [...filteredPokemon]);
  };

  const pokemonContext = {
    allPokemon,
    selectedPokemon,
    addPokemon,
    deletePokemon,
  };

  return (
    <PokemonContext.Provider value={pokemonContext}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;