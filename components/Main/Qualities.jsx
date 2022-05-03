import { useState, useEffect } from "react";
import styled from "styled-components";
//style
const Data = styled.span`
  font-size: 25px;
`;
const values = [
  "A frontend developer 🤪",
  "A designer 🤔",
  "A student 🤓",
  "Latin 💯",
  "Hondureño 🇭🇳",
  "An apassionate of the anime 👺",
];
const Qualities = () => {
  const [index, setIndex] = useState(0);
  const randomInfo = () => {
    const randomNumber = Math.floor(Math.random() * (values.length - 0)) + 0;
    setIndex(randomNumber);
  };
  useEffect(() => {
    setInterval(randomInfo, 10000);
  }, []);
  return <Data>{values[index]}</Data>;
};

export default Qualities;
