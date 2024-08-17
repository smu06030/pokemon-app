import React from "react";
import PokemonLogo  from '../assets/PokemonLogo'
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <PokemonLogo />
      <Link to='/dex'><Button>포켓몬 도감 시작하기</Button></Link>
    </>
  );
};

export default Home;
