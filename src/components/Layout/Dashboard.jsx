import React from "react";
import Card from "../UI/Card";
import styled from "styled-components";
import MyPokeCard from "./MyPokeCard";

const DUMMY = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];

const Title = styled.h2`
  color: #ce0000;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const PokeList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  gap: 1rem;
`;

const Dashboard = () => {
  return (
    <Card>
      <Title>나만의 포켓몬</Title>
      <PokeList>
        {DUMMY.map((pokemon) => {
          return <MyPokeCard key={pokemon.id} data={pokemon} />;
        })}
      </PokeList>
    </Card>
  );
};

export default Dashboard;
