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
      Good day, my name is Jorge and I am a junior web developer from Honduras. I have always had an interest in technology and how it can impact people's lives, which is why I decided to pursue a career in web development.

I have experience utilizing ReactJS, NextJS, Figma, and nodeJS, and have completed several individual projects with these technologies. I am consistently learning and expanding my skill set, and am always seeking new challenges.

In my leisure time, I enjoy constructing websites and applications for enjoyment and am constantly searching for ways to enhance my coding abilities. I believe that through hard work and determination, anything is possible and am resolute in achieving success in my career as a web developer.
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
