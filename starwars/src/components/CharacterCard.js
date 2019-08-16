import React from 'react';
import styled from 'styled-components';

export default function CharacterCard(props) {
  return (
    <div>
      <h1>{props.character.name}</h1>
      <ul>
        <li>Gender: {props.character.gender}</li>
        <li>Height: {props.character.height}</li>
        <li>Mass: {props.character.mass}</li>
        <li>Hair: {props.character.hair_color}</li>
        <li>Complexion: {props.character.skin_color}</li>
        <li>Eyes: {props.character.eye_color}</li>
        <li>Birth Year: {props.character.birth_year}</li>
      </ul>
    </div>
  );
}
