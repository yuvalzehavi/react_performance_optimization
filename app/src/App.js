import React, { useState } from "react";
import styled from "styled-components";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import GlobalStyle from "./globalStyle";
import MuiTheme from "./theme/materialUiTheme";
import AppContextProvider from "./context/AppContext";
import ComponentsContainer from "./ComponentsContainer";
import ComponentsMenu from "./ComponentsMenu";

const StyledContainer = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  & > :nth-child(1) {
    border-right: 1px solid;
    padding: 0 2rem;
  }
  & > :nth-child(2) {
    padding: 0 2rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const App = () => {
  return (
    <>
      <StyledThemeProvider theme={MuiTheme}>
        <MuiThemeProvider theme={MuiTheme}>
          <GlobalStyle />
          <StyledContainer className="App">
            <AppContextProvider>
              <ComponentsMenu />
              <ComponentsContainer />
            </AppContextProvider>
          </StyledContainer>
        </MuiThemeProvider>
      </StyledThemeProvider>
    </>
  );
};

export default App;
