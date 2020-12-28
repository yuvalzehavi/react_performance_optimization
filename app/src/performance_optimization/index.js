import React from "react";
import styled from "styled-components";

import AppContextProvider from "./context/AppContext";
import ComponentsContainer from "./components/containers/ComponentsContainer";
import ComponentsMenu from "./components/containers/ComponentsMenu";

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

export default () => {
  return (
    <>
      <AppContextProvider>
        <StyledContainer>
          <ComponentsMenu />
          <ComponentsContainer />
        </StyledContainer>
      </AppContextProvider>
    </>
  );
};
