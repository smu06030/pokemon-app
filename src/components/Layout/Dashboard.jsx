import React from "react";
import Card from "../UI/Card";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import Pokeball from "./../../assets/Pokeball";

const Title = styled.h2`
  color: #ce0000;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const PokeList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin: 1rem 0;
  gap: 1rem;
`;

const EmptyCardWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  background-color: rgb(255, 255, 255);
  border: 2px dashed rgb(224, 224, 224);
  border-radius: 0.5rem;
`;

const Dashboard = ({ selectedPokemon, setSelectedPokemon }) => {
  const emptySlots = 6 - selectedPokemon.length;

  // 추가한 포켓몬 리스트
  const myPokemonList = selectedPokemon.map((pokemon) => (
    <PokemonCard
      key={pokemon.id}
      pokemon={pokemon}
      selectedPokemon={selectedPokemon}
      setSelectedPokemon={setSelectedPokemon}
      buttonName="삭제"
    />
  ));

  // 나머지 포켓볼
  const pokeBallList = Array.from({ length: emptySlots }, (_, index) => (
    <EmptyCardWrapper key={index}>
      <Pokeball width="50" height="50" />
    </EmptyCardWrapper>
  ));

  return (
    <Card>
      <Title>나만의 포켓몬</Title>
      <PokeList>
        {myPokemonList}
        {pokeBallList}
      </PokeList>
    </Card>
  );
};

export default Dashboard;
