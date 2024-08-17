import React from "react";
import styled from 'styled-components';

const Btn = styled.button`
  background-color: red;
  color: #fff;
  font-size: 1rem;
  border-radius: 6px;
  outline: none;
`;

const Button = ({ children }) => {
  return <Btn>{children}</Btn>;
};

export default Button;
