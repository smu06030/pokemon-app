import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Layout/Header";
import Container from "./Container";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Layout = () => {
  const location = useLocation();

  return (
    <Container>
      {location.pathname === '/' || <Header />}
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default Layout;
