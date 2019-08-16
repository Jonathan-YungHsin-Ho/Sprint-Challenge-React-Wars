import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  width: 100%;
  top: 99px;
  position: fixed;
  z-index: 100;
  background-color: black;
  color: #ffe919;
`;

const Center = styled.div`
  width: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const PageTxt = styled.div`
  font-size: 18px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: black;
  color: #ffe919;
  font-size: 40px;
  cursor: pointer;
  outline: none;
`;

export default function Nav(props) {
  return (
    <NavBar>
      <Center>
        {props.page > 1 && (
          <StyledButton onClick={() => props.prevPage()}>
            {'\u21E6'}
          </StyledButton>
        )}
        <PageTxt>Page: {props.page}</PageTxt>
        {props.page < props.pageCount && (
          <StyledButton onClick={() => props.nextPage()}>
            {'\u21E8'}
          </StyledButton>
        )}
      </Center>
    </NavBar>
  );
}
