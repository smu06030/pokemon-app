import React from "react";
import Card from "../UI/Card";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const PokemonCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

const PokemonList = ({ allPokemon }) => {
  return (
    <Card>
      <PokemonCardWrapper>
        {allPokemon.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </PokemonCardWrapper>
    </Card>
  );
};

export default PokemonList;
