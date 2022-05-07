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
  { image: Html, key: 1, title: "Html5", Value: 100 },
  { image: Css, key: 2, title: "Css3", Value: 100 },
  { image: JavascriptIcon, key: 3, title: "JavasCript", Value: 70 },
  { image: Node, key: 4, title: "NodeJs", Value: 80 },
  { image: Npm, key: 5, title: "NPM", Value: 100 },
  { image: Git, key: 6, title: "Git", Value: 90 },
  { image: Github, key: 7, title: "Github", Value: 100 },
  { image: Typescript, key: 8, title: "Typescript", Value: 40 },
  { image: ReactIcon, key: 9, title: "ReactJs", Value: 85 },
  { image: Python, key: 10, title: "Python", Value: 60 },
  { image: Figma, key: 11, title: "Figma", Value: 80 },
];
const Container = styled.section`
  background-color: var(--secondary-color);
  padding: 15px;
  border-radius: 10px;
  @media (min-width: 1000px) {
    margin: 0 20px;
  }
`;
export const Title = styled.h2`
  font-size: 35px;
  color: var(--primary-color);
  margin: ${(props) => props.margin};
`;
const Info = styled.p`
  font-size: 18px;
`;
const SkillsContainer = styled.div`
  width: 100%;
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 10px;
  }
`;
const Skill = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  max-width: 100%;
  @media (min-width: 1000px) {
    width: 100%;
  }
`;
const SkillPorcentajeCont = styled.div`
  width: 69%;
  position: relative;
  margin: 0 0 0 15px;
`;
const SkillPorcentaje = styled.span`
  max-width: ${(props) => props.width};
  background: var(--primary-color);
  border: 5px solid var(--primary-color);
  position: absolute;
  top: -5px;
  left: -5px;
  right: 10px;
  border-radius: 10px;
`;
const ValueSkill = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
const About = () => {
  return (
    <Container>
      <Title margin="0 0 10px 0">About me</Title>
      <Info>
        I{"'"}m Jorge, an anime enthusiast and programmer. Experienced Honduran
        web developer, trained in all stages of advanced web development.
        Bringing expertise in designing, installing, testing and maintaining web
        systems. Equipped with a diverse and promising skill set. Experience
        with ReactJS
      </Info>
      <Title margin="10px 0">My Skills</Title>
      <SkillsContainer>
        {skillsData.map(({ image, key, title, Value }) => {
          return (
            <Skill key={key}>
              <Image src={image} alt={title} />
              <SkillPorcentajeCont>
                <SkillPorcentaje width={`${Value}%`}></SkillPorcentaje>
              </SkillPorcentajeCont>
              <ValueSkill>{Value}%</ValueSkill>
            </Skill>
          );
        })}
      </SkillsContainer>
    </Container>
  );
};

export default About;
