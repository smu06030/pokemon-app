import React from "react";
import styled from 'styled-components';

const Btn = styled.button`
  background-color: #ff0000;
  color: #fff;
  font-size: ${(props) => props.$fontSize ? props.$fontSize : "1rem"};
  border-radius: 6px;
  padding: 0.5rem 1rem;
  margin: 2rem 0 1rem 0;
  border: 0;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover{
    background-color: #ee0000;
  }
`;

const Button = ({ children, fontSize=null }) => {
  console.log(fontSize)
  return <Btn $fontSize={fontSize !== null ? fontSize : undefined}>{children}</Btn>;
};

export default Button;
