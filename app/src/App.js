import React, { useState } from "react";
import styled from "styled-components";

import GlobalStyle from "./globalStyle";
import ComponentsContainer from "./ComponentsContainer";
import ComponentsMenu from "./ComponentsMenu";

const StyledContainer = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  & > :nth-child(1) {
    border-right: 1px solid;
    padding: 0 20px;
  }
  & > :nth-child(2) {
    padding-left: 20px;
  }
`;

const App = () => {
  const [componentName, setComponentName] = useState();
  const onComponentSelected = (name) => {
    setComponentName(name);
  };

  return (
    <>
      <GlobalStyle />
      <StyledContainer className="App">
        <ComponentsMenu onComponentSelected={onComponentSelected} />
        <ComponentsContainer componentName={componentName} />
      </StyledContainer>
    </>
  );
};

export default App;
