import React from "react";
import styled from 'styled-components';

const Btn = styled.button`
  background-color: #ff0000;
  color: #fff;
  font-size: 1rem;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  border: 0;
  cursor: pointer;
`;

const Button = ({ children }) => {
  return <Btn>{children}</Btn>;
};

export default Button;
