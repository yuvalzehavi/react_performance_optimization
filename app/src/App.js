import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import GlobalStyle from "./globalStyle";
import MuiTheme from "./theme/materialUiTheme";
import PagesRouter from "./routes/PagesRouter";
import AppContextProvider from "./general/context/AppContext";

const App = () => {
  return (
    <>
      <StyledThemeProvider theme={MuiTheme}>
        <MuiThemeProvider theme={MuiTheme}>
          <GlobalStyle />
          <AppContextProvider>
            <PagesRouter />
          </AppContextProvider>
        </MuiThemeProvider>
      </StyledThemeProvider>
    </>
  );
};

export default App;
