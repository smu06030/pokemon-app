import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PokemonLogo from "../../assets/PokemonLogo";

const Logo = styled.header`
  font-size: 1rem;
  font-weight: 700;
`;

const Header = () => {
  return (
    <Logo>
      <NavLink to="/">
        <PokemonLogo width="80" height="50"/>
      </NavLink>
    </Logo>
  );
};

export default Header;
