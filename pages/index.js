import MainContent from "../components/Main/MainContent";
import About from "../components/Main/Abaut";
import IndexLayaut from "./layaut/IndexLayaut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { keyframes } from "styled-components";
import ContactMe from "../components/Footer/ContactMe";
const animationDown = keyframes`
  /* 0%{
    top: 20px
  }
  40%{
    top: 10px;
  }
  80%{
    top: 0px;
  }
  100%{
    top: -5px;
  } */
  from{
    top: 20px
  }
  to{
    top: -5px;
  }
`;
const DownIcon = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  animation: ${animationDown} 3s ease-in-out infinite;
  margin: 0 0 80px 0;
`;
export default function Home() {
  return (
    <>
      <IndexLayaut title={"JorgeDevJ Portafolio"}>
        <MainContent />
        <DownIcon>
          <FontAwesomeIcon className="fa-2xl" icon={faAngleDown} />
        </DownIcon>
        <About />
        <ContactMe />
      </IndexLayaut>
    </>
  );
}
