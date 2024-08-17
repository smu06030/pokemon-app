import React from "react";
import Pokeball from "../../assets/Pokeball";
import styled from "styled-components";

const PokemonCardWrapper = styled.div`
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

const MyPokeCard = ({data}) => {
  return (
    <PokemonCardWrapper>
      <Pokeball width="50" height="50"/>
    </PokemonCardWrapper>
  );
};

export default MyPokeCard;
