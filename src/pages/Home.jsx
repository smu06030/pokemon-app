import React from "react";
import PokemonLogo from "../assets/PokemonLogo";
import Button from "../components/UI/Button";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <PokemonLogo width="450" height="200" />
      <NavLink to="/dex">
        <Button>포켓몬 도감 시작하기</Button>
      </NavLink>
    </>
  );
};

export default Home;
