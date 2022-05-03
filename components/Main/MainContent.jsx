import React from "react";
import styled from "styled-components";
import Qualities from "./Qualities";
const ContainerInfo = styled.main`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 65% 0;
`;
const Info = styled.h1`
  font-family: var(--rubik);
  font-size: 50px;
  color: var(--primary-color);
  margin: 0 0 10px 0;
`;
const MainContent = () => {
  return (
    <ContainerInfo>
      <Info>Hey 👋, my name is Jorge </Info>
      <Qualities />
    </ContainerInfo>
  );
};

export default MainContent;
