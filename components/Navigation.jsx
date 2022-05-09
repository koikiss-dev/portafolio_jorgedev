import { useNav } from "../hooks/useNav";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  border-bottom: ${(props) => props.border};
`;
const Nav = styled.nav`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-primary);
  backdrop-filter: blur(10px);
  @media (min-width: 1000px) {
    background-color: ${(props) => props.bg};
  }
  /* border-bottom: 1px solid var(--secondary-color); */
  position: relative;
`;
const Logo = styled.a`
  font-size: 35px;
  color: var(--primary-color);
  font-family: var(--rubik);
`;
const UlItems = styled.ul`
  display: ${(props) => props.visible};
  border-bottom: ${(props) => props.border};
  position: absolute;
  padding: 15px;
  top: 5rem;
  flex-direction: column;
  right: 0;
  width: 100%;
  background-color: var(--bg-primary);
  transition: display ease-in-out 0.2s;
  /* border-radius: 0 0 15px 15px; */
  @media (min-width: 1000px) {
    position: inherit;

    background-color: transparent;

    top: 0;
    flex-direction: row;
    border-radius: 0;
    width: auto;
    padding: 0;
  }
`;
const ListNav = styled.li`
  margin: ${(props) => props.margin};
  font-size: 35px;
  color: var(--primary-color);
  font-weight: 300;
  @media (min-width: 1000px) {
    margin: ${(props) => props.marginMobile};
    font-size: 25px;
  }
  & > a {
    color: var(--primary-color);
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Navigation = () => {
  const [y, toggle, width, ShowItems] = useNav();
  return (
    <Header border={y >= 159 ? "2px solid var(--secondary-color)" : "none"}>
      <Nav bg={y >= 159 ? "var(--bg-transparent)" : "var(--bg-primary)"}>
        <Logo href="#">JORGEDEVJ</Logo>
        {width <= 1000 ? (
          <FontAwesomeIcon
            onClick={ShowItems}
            className="fa-xl icon"
            icon={faBars}
          />
        ) : null}

        <UlItems visible={toggle ? "flex" : "none"}>
          <ListNav margin="0 0 3rem 0" marginMobile="0 2rem 0 0">
            <a href="https://github.com/JorgeDevJ" target="blank">
              GitHub
            </a>
          </ListNav>
          <ListNav margin="0 0 3rem 0" marginMobile="0 2rem 0 0">
            <a
              href="https://www.linkedin.com/in/jorge-dur%C3%B3n-850a461bb/"
              target="blank"
            >
              LinkedIn
            </a>
          </ListNav>
          <ListNav>
            <a href="https://twitter.com/jdd2_" target="blank">
              Twitter
            </a>
          </ListNav>
        </UlItems>
      </Nav>
    </Header>
  );
};

export default Navigation;
