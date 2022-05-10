import MainContent from "../components/Main/MainContent";
import About from "../components/Main/Abaut";
import IndexLayaut from "./layaut/IndexLayaut";
import { Title } from "../components/Main/Abaut";
import ContactMe from "../components/Footer/ContactMe";
import { Proyects } from "../info/Proyects";
import CardProyects from "../components/CardProyects";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const animationDown = keyframes`
from{
  top: 20px
}
to{
  top: -5px;
}
`;
const SectionProyects = styled.article`
  padding: 0 20px;
  margin: 30px 0;
  .mainProjects {
    @media (min-width: 1000px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
    }
  }
`;
const DownIcon = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  animation: ${animationDown} 3s ease-in-out infinite;
  margin: 0px 0 100px 0;
`;
export default function Home() {
  return (
    <>
      <IndexLayaut title={"JorgeDevJ | Portfolio"}>
        <MainContent />
        <DownIcon>
          <FontAwesomeIcon className="fa-2xl" icon={faAngleDown} />
        </DownIcon>
        <About />
        <SectionProyects>
          <Title margin="0 0 20px 0;">My Projects</Title>
          <div className="mainProjects">
            {Proyects.map(({ name, imagesrc, page, repo }) => {
              return (
                <CardProyects
                  key={name}
                  srcImage={imagesrc}
                  nameProyect={name}
                  linkPoryectPage={page}
                  linkPoryectGithub={repo}
                />
              );
            })}
          </div>
        </SectionProyects>
      </IndexLayaut>
    </>
  );
}
