import React from "react";
import styled from "styled-components";
import Qualities from "./Qualities";
/* import JorgeCV from "../../JorgeDuronCV.pdf"; */
const ContainerInfo = styled.main`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 28rem 0 15rem 0;
  @media (min-width: 1000px) {
    margin: 28rem 0 15rem 0;
  }
`;
const Info = styled.h1`
  font-family: var(--rubik);
  font-size: 50px;
  color: var(--primary-color);
  margin: 0 0 10px 0;
`;
const Button = styled.a`
  border: none;
  outline: none;
  font-size: 25px;
  padding: 20px 50px;
  background-color: var(--primary-color);
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  margin: ${(props) => props.margin};
  transition: transform ease-in-out 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
  }

  color: #fff;
`;

const MainContent = () => {
  return (
    <ContainerInfo>
      <Info>Hi, I am Jorge </Info>
      <Qualities />

      <Button
        margin="20px 0"
        target="blank"
        href="https://res.cloudinary.com/dxp8a4fhe/image/upload/v1652303216/Jorge_Alberto_Posadas_Dur%C3%B3n_-_Frontend_Developer_ingasc.pdf"
        download={"https://res.cloudinary.com/dxp8a4fhe/image/upload/v1652303216/Jorge_Alberto_Posadas_Dur%C3%B3n_-_Frontend_Developer_ingasc.pdf"}
      >
        Download my cv
      </Button>
    </ContainerInfo>
  );
};

export default MainContent;
