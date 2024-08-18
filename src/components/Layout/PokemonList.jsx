import React, { useContext } from "react";
import Card from "../UI/Card";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import PokemonContext from "../../Context/PokemonContext";

const PokemonCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

const PokemonList = () => {
  const pokemonCtx = useContext(PokemonContext);

  const allPokemon = pokemonCtx.allPokemon.map((pokemon) => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon} buttonName="추가" />;
  });

  return (
    <Card>
      <PokemonCardWrapper>{allPokemon}</PokemonCardWrapper>
    </Card>
  );
};

export default PokemonList;
