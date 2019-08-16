import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  width: 100%;
  top: 109px;
  position: fixed;
  z-index: 100;
  background-color: black;
  color: #ffe919;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

export default function Nav(props) {
  return (
    <NavBar>
      <div>Prev</div>
      <div>Page: </div>
      <div>Next</div>
    </NavBar>
  );
}
