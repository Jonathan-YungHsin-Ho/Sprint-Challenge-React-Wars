import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Nav from './components/Nav';
import CharacterCard from './components/CharacterCard';
// import './App.css';

const StyledHeader = styled.h1`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: black;
  margin: 0;
  padding: 20px 0 10px 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 60px;
  text-shadow: -2px -2px 0 #ffe919, 2px -2px 0 #ffe919, -2px 2px 0 #ffe919,
    2px 2px 0 #ffe919;
`;

const CardWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 170px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${page}`)
      .then(response => {
        setPeople(response.data.results);
        // console.log(response.data);
        setPageCount(response.data.count);
      })
      .catch(err => console.log(err));
  }, [page]);

  const prevPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);

  return (
    <div className="App">
      <StyledHeader className="Header">React Wars</StyledHeader>
      <Nav
        page={page}
        pageCount={pageCount}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      <CardWrapper>
        {people.map(character => {
          return <CharacterCard character={character} />;
        })}
      </CardWrapper>
    </div>
  );
};

export default App;
