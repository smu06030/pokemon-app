import React from "react";
import styled from "styled-components";

const CardWrapper = styled.section`
  width: 100%;
  padding: 1.5rem 1rem;
  margin-bottom : 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  background-color: #f3f3f3;
`;

const Card = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;