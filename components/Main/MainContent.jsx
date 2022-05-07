import React from "react";
import styled from "styled-components";
import Qualities from "./Qualities";
const ContainerInfo = styled.main`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20rem 0;
  @media (min-width: 1000px) {
    margin: 18rem 0;
  }
`;
const Info = styled.h1`
  font-family: var(--rubik);
  font-size: 50px;
  color: var(--primary-color);
  margin: 0 0 10px 0;
`;
const Button = styled.button`
  border: none;
  outline: none;
  font-size: 25px;
  padding: 20px 50px;
  background-color: var(--primary-color);
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  margin: ${(props) => props.margin};
`;
const MainContent = () => {
  return (
    <ContainerInfo>
      <Info>Hey 👋, my name is Jorge </Info>
      <Qualities />
      <Button margin="20px 0">Download my cv</Button>
    </ContainerInfo>
  );
};

export default MainContent;
