import { useState, useEffect } from "react";
import styled from "styled-components";
import { values } from "../../info/Proyects";
//style
const Data = styled.span`
  font-size: 25px;
`;
const Qualities = () => {
  const [index, setIndex] = useState(0);
  const randomInfo = () => {
    const randomNumber = Math.floor(Math.random() * (values.length - 0)) + 0;
    setIndex(randomNumber);
  };
  useEffect(() => {
    setInterval(randomInfo, 8000);
  }, []);
  return <Data>{values[index]}</Data>;
};

export default Qualities;
