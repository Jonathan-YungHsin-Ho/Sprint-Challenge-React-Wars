import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Nav from './components/Nav';
import CharacterCard from './components/CharacterCard';
// import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        setPeople(response.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(people);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Nav />
      <div>
        {people.map(character => {
          return <CharacterCard character={character} />;
        })}
      </div>
    </div>
  );
};

export default App;
