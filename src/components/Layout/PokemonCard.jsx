import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

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

const PokemonImage = styled.img`
  margin-top: 1rem;
`;

const PokemonCard = ({
  pokemon,
  selectedPokemon,
  setSelectedPokemon,
  buttonName,
}) => {
  const { img_url, korean_name, id } = pokemon;
  const navigate = useNavigate();

  // 포켓몬 추가
  const addPokemon = () => {
    if (selectedPokemon.length >= 6) return alert("포켓몬은 최대 6개까지 등록할 수 있습니다.");
    if (selectedPokemon.some((pokemon) => pokemon.id === id)) return alert("이미 등록된 포켓몬입니다.");

    setSelectedPokemon((prev) => [...prev, pokemon]);
  };

  // 포켓몬 삭제
  const deletePokemon = () => {
    const filteredPokemon = selectedPokemon.filter((pokemon) => pokemon.id !== id);

    setSelectedPokemon((prev) => [...filteredPokemon]);
  };

  const onClickEvent = buttonName === "추가" ? addPokemon : deletePokemon;

  return (
    <PokemonCardWrapper onClick={() => navigate(`/dex/${id}`, {state: {pokemonList: selectedPokemon}})}>
      <PokemonImage src={img_url} alt={korean_name} />
      <PokemonName>{korean_name}</PokemonName>
      <PokemonNumber>{`No. ` + `${id}`.padStart(3, "0")}</PokemonNumber>
      <Button 
        fontSize="0.875" 
        onClick={(e) => {
          e.stopPropagation(); // 이벤트 전파 방해
          onClickEvent();
        }}
      >
        {buttonName}
      </Button>
    </PokemonCardWrapper>
  );
};

export default PokemonCard;
