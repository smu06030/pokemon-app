import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const PokemonCardWrapper = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  }
`;

const PokemonName = styled.p`
  font-weight: 700;
  margin-bottom: 1rem;
`;

const PokemonNumber = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

const PokemonCard = ({ pokemon }) => {
  const { img_url, korean_name, id } = pokemon;
  let formatId = `${id}`;

  return (
    <PokemonCardWrapper>
      <img src={img_url} alt={korean_name} />
      <PokemonName>{korean_name}</PokemonName>
      <PokemonNumber>{`No. ${formatId.padStart(3, "0")}`}</PokemonNumber>
      <Button fontSize="0.875">추가</Button>
    </PokemonCardWrapper>
  );
};

export default PokemonCard;
