import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const StyledButton = styled(Button)`
  && {
    margin: 5px;
    text-transform: none;
    & > * {
      pointer-events: none;
    }
  }
`;

export default ({ onClick, children, ...rest }) => {
  return (
    <StyledButton
      color="secondary"
      variant="contained"
      className={"ComponentsMenu"}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
