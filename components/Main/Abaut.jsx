import React from "react";
import styled from "styled-components";
import JavascriptIcon from "../../public/icons8-javascript.svg";
import Figma from "../../public/icons8-figma.svg";
import Git from "../../public/icons8-git.svg";
import Github from "../../public/icons8-github.svg";
import Html from "../../public/icons8-html-5.svg";
import Css from "../../public/icons8-css3.svg";
import Python from "../../public/icons8-python.svg";
import Node from "../../public/icons8-nodejs.svg";
import Npm from "../../public/icons8-npm.svg";
import Typescript from "../../public/icons8-typescript.svg";
import ReactIcon from "../../public/icons8-react-native.svg";
import Image from "next/image";
//skills
const skillsData = [
  { nombre: Html, key: 1, title: "Html5", Value: 100 },
  { nombre: Css, key: 2, title: "Css3", Value: 100 },
  { nombre: JavascriptIcon, key: 3, title: "JavasCript", Value: 70 },
  { nombre: Node, key: 4, title: "NodeJs", Value: 80 },
  { nombre: Npm, key: 5, title: "NPM", Value: 100 },
  { nombre: Git, key: 6, title: "Git", Value: 90 },
  { nombre: Github, key: 7, title: "Github", Value: 100 },
  { nombre: Typescript, key: 8, title: "Typescript", Value: 40 },
  { nombre: ReactIcon, key: 9, title: "ReactJs", Value: 85 },
  { nombre: Python, key: 10, title: "Python", Value: 60 },
  { nombre: Figma, key: 11, title: "Figma", Value: 100 },
];
const Container = styled.section`
  background-color: var(--secondary-color);
  padding: 15px;
  border-radius: 10px;
`;
const Title = styled.h2`
  font-size: 35px;
  position: relative;
  color: var(--primary-color);
  margin: ${(props) => props.margin};
  &::before {
    content: " ";
    position: absolute;
    border-radius: 10px;
    border: 1.5px solid white;
    bottom: 0;
    width: 30%;
    transition: width ease-in-out 0.4s;
  }
  &:hover::before {
    width: 5%;
  }
`;
const Info = styled.p`
  font-size: 18px;
`;
const SkillsContainer = styled.div``;
const Skill = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;
const SkillPorcentajeCont = styled.div`
  background-color: #fff;
  width: 80%;
  border: 5px solid transparent;
  position: relative;
  border-radius: 10px;
`;
const SkillPorcentaje = styled.span`
  width: ${(props) => props.width};
  background: var(--primary-color);
  border: 5px solid var(--primary-color);
  /* z-index: 1000; */
  position: absolute;
  top: -5px;
  /* bottom: -16px; */
  left: -5px;
  right: 10px;
  border-radius: 10px;
`;
const ValueSkill = styled.span`
  font-size: 20px;
  margin: 0 10px 0 0;
`;
const About = () => {
  return (
    <Container>
      <Title margin="0 0 10px 0">About me</Title>
      <Info>
        Integer accumsan nisi ut nisi blandit vestibulum. Fusce gravida sed nibh
        sed luctus. Integer ultrices quam eu lorem efficitur posuere.
        Pellentesque in rhoncus sem. Fusce ac ipsum commodo, finibus lorem eget,
        ornare nunc. Mauris blandit rutrum mi in congue. In nisi ligula, rutrum
        at scelerisque non, volutpat rutrum leo. Vivamus non feugiat magna.
      </Info>
      <Title margin="10px 0">My Skills</Title>
      <SkillsContainer>
        {skillsData.map(({ nombre, key, title, Value }) => {
          return (
            <Skill key={key}>
              <ValueSkill>{title}</ValueSkill>
              <Image src={nombre} alt={title} />
              <SkillPorcentajeCont>
                <SkillPorcentaje width={`${Value + 4}%`}></SkillPorcentaje>
              </SkillPorcentajeCont>
            </Skill>
          );
        })}
      </SkillsContainer>
    </Container>
  );
};

export default About;
