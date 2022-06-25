import React from "react";
import styled from "styled-components";
import { Header, Section } from "./components";

function App() {
  return (
    <>
      <AppWrap>
        <Header />
        <Section />
      </AppWrap>
    </>
  );
}

const AppWrap = styled.div`
  min-width: 1200px;
`;

export default App;
