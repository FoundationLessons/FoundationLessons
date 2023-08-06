import React from "react";
import styled from "styled-components";

const MyButton = styled("button")`
  width: 180px;
  height: 60px;
  outline: none;
  border: 1px solid black;
  text-align: center;
  background: blue;
  border-radius: 8px;
  color: white;
  font-size: 1.1rem;
`;

const MyInput = styled("input")`
  width: 150px;
  height: 20px;
  border: none;
  outline: none;
  color: white;
  padding: 1rem;
  background: lightblue;
`;

const MyLabel = styled("label")`
  color: #191919;
  font-size: large;
  font-family: monospace;
`;

const MyForm = styled("form")`
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
      <MyForm>
        <MyLabel>Username:</MyLabel>
        <MyInput placeholder="Username" type="text" />
        <MyLabel>Password:</MyLabel>
        <MyInput placeholder="Password" type="password" />
        <MyButton>Sign in</MyButton>
      </MyForm>
    </div>
  );
};

export default App;
