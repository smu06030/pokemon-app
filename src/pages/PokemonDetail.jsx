import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import MOCK_DATA from '../mocks/mock';
import Container from '../components/UI/Container';
import Button from '../components/UI/Button';
import styled from 'styled-components';

const PokemonImage = styled.img`
  width: 150px;
`

const PokemonName = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff0000;
  margin-bottom: 2rem;
`

const PokemonTypes = styled.div`
  color: #4e4e4e;
  font-weight: 700;
  margin-bottom: 2rem;
`

const PokemonDescription = styled.div`
  color: #4e4e4e;
  font-weight: 700;
  margin-bottom: 2rem;
`

const PokemonDetail = () => {
  const params = useParams();
  const navigation = useNavigate();
  const location = useLocation();
  const from = location.state?.pokemonList || '';
  
  const {id, img_url, korean_name, description, types} = MOCK_DATA.filter(pokemon => pokemon.id === Number(params.id))[0]
  return (
    <Container>
      <PokemonImage src={img_url} alt={korean_name} />
      <PokemonName>{korean_name}</PokemonName>
      <PokemonTypes>{`타입: ${types.join(',')}`}</PokemonTypes>
      <PokemonDescription>{description}</PokemonDescription>
      <Button onClick={() => navigation('/dex', {state: {pokemonList: from}})}>뒤로가기</Button>
    </Container>
  )
}

export default PokemonDetail