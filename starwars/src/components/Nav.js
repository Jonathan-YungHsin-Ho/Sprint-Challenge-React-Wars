import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  margin: 20px auto;
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
