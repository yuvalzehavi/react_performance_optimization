import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import GlobalStyle from "./globalStyle";
import MuiTheme from "./theme/materialUiTheme";
import PagesRouter from "./routes/PagesRouter";

const App = () => {
  return (
    <>
      <StyledThemeProvider theme={MuiTheme}>
        <MuiThemeProvider theme={MuiTheme}>
          <GlobalStyle />
          <PagesRouter />
        </MuiThemeProvider>
      </StyledThemeProvider>
    </>
  );
};

export default App;
