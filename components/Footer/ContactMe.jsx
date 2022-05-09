import React from "react";
import styled from "styled-components";
import { Title } from "../Main/Abaut";
const ContactContainer = styled.section`
  margin: 20px 0 0 0;
  padding: 20px 15px;
  background-color: var(--secondary-color);
  display: flex;
  justify-content: center;
`;

/* const Form = styled.form``;
const ContainerInfo = styled.div`
  .inputContainer {
    display: flex;
    flex-direction: column;
  }
`;
const Label = styled.label`
  font-size: 20px;
  margin: 0 0 10px 0;
`;
const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px 25px 10px 10px;
  width: 80%;
  margin: 0 0 15px 0;
`;
const InfoMain = styled.textarea`
  width: 80%;
  height: 50%;
`; */
const ContactMe = () => {
  return (
    <ContactContainer>
      <span>Made with love</span>
      {/* <Title>Contact me</Title>
      <Form onSubmit={(e) => e.preventDefault()}>
        <ContainerInfo>
          <div className="inputContainer">
            <Label>Email</Label>
            <Input type="email" name="" id="" placeholder="type your email" />
          </div>
          <div className="inputContainer">
            <Label>Info</Label>
            <InfoMain></InfoMain>
          </div>
        </ContainerInfo>
      </Form> */}
    </ContactContainer>
  );
};

export default ContactMe;
