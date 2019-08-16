import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  opacity: 0.9;
  width: 300px;
  margin: 10px;
  border-radius: 10px;
  border-bottom: 2px solid #8e3d19;
`;

const StyledH1 = styled.h1`
  background: black;
  color: #ffe919;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  font-size: 22px;
  margin: 0;
`;

const ListWrapper = styled.ul`
  opacity: 0.6;
`;

const StyledLi = styled.li`
  list-style-type: square;
  font-size: 18px;
`;

export default function CharacterCard(props) {
  return (
    <Card>
      <StyledH1>{props.character.name}</StyledH1>
      <ListWrapper>
        <StyledLi>Gender: {props.character.gender}</StyledLi>
        <StyledLi>Height: {props.character.height}</StyledLi>
        <StyledLi>Mass: {props.character.mass}</StyledLi>
        <StyledLi>Hair: {props.character.hair_color}</StyledLi>
        <StyledLi>Complexion: {props.character.skin_color}</StyledLi>
        <StyledLi>Eyes: {props.character.eye_color}</StyledLi>
        <StyledLi>Birth Year: {props.character.birth_year}</StyledLi>
      </ListWrapper>
    </Card>
  );
}
