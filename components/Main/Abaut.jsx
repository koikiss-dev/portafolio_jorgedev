import React from "react";
import styled from "styled-components";
import Image from "next/image";
//skills
import { skillsData } from "../../info/Proyects";
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 15px;
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 20px;
  }
`;
const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  border-radius: 5px;
  padding: 5px;
  /* max-width: 100%;
  @media (min-width: 1000px) {
    width: 100%;
  } */
`;
const ValueSkill = styled.span`
  font-size: 18px;
  margin: 0 0 0 10px;
  font-weight: 500;
  @media (min-width: 1000px) {
    font-size: 20px;
  }
`;
const About = () => {
  return (
    <Container>
      <Title margin="0 0 10px 0">About me</Title>
      <Info>
      Hi, I am Jorge, a Honduran programmer with experience in web development. Trained in all stages of development. Bringing experience in design, installation, testing and maintenance of web systems. Equipped with a diverse and promising skill set. Experience with ReactJS
      </Info>
      <Title margin="10px 0">My Skills</Title>
      <SkillsContainer>
        {skillsData.map(({ image, key, title, Value }) => {
          return (
            <Skill key={key}>
              <Image src={image} alt={title} />
              <ValueSkill>{title}</ValueSkill>
            </Skill>
          );
        })}
      </SkillsContainer>
    </Container>
  );
};

export default About;
