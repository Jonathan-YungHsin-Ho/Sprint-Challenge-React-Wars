import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  width: 100%;
  // top: 99px;
  top: 0;
  position: fixed;
  z-index: 100;
  background-color: black;
  color: #ffe919;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgWrapper = styled.div`
  max-width: 510px;
`;

const CenterImg = styled.img`
  width: 100%;
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
  min-width: 80px;
  text-align: center;
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
      <ImgWrapper>
        <a href="https://fontmeme.com/star-wars-font/">
          <CenterImg
            src="https://fontmeme.com/permalink/190816/e719ef4e71466e5a1d74d2f83ac4cc2b.png"
            alt="star-wars-font"
            border="0"
          />
        </a>
      </ImgWrapper>
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
