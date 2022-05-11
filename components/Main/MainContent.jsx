import React from "react";
import styled from "styled-components";
import Qualities from "./Qualities";
import { saveAs } from "file-saver";
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
  transition: transform ease-in-out 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
  }
  & > a {
    color: #fff;
  }
`;
const saveFile = () => {
  saveAs(
    "https://mega.nz/file/9jZDEKpQ#mT09tGTOtvu9QipaqywQklhZFp9y63ODXr2FtoO66s0",
    "JorgeDuronCV"
  );
};
const MainContent = () => {
  return (
    <ContainerInfo>
      <Info>Hi, I am Jorge </Info>
      <Qualities />
      <Button margin="20px 0">
        <a
          target="blank"
          href="https://mega.nz/file/9jZDEKpQ#mT09tGTOtvu9QipaqywQklhZFp9y63ODXr2FtoO66s0"
          download={"JorgeDuronCV.pdf"}
        >
          Download my cv
        </a>
      </Button>
    </ContainerInfo>
  );
};

export default MainContent;
