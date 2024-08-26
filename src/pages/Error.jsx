import React from "react";
import styled from "styled-components";
import Header from "../components/Layout/Header";
import Container from "../components/UI/Container";

const ErrorMessage = styled.p`
  font-size: 3rem;
  font-weight: 700;
`;

const ErrorStatus = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 2rem 0;
`;

const Error = () => {
  return (
    <Container>
      <Header />
      <ErrorStatus>404</ErrorStatus>
      <ErrorMessage>해당 페이지를 찾을 수 없습니다.</ErrorMessage>
    </Container>
  );
};

export default Error;
