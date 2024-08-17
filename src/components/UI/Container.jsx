import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding: 1rem 1.5rem;
  text-align: center;
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
