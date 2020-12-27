import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const StyledButton = styled(Button)`
  && {
    display: block;
    margin-bottom: 10px;
    & > * {
    pointer-events: none;
    }
  }
`;

export default ({ onClick, children, ...rest }) => {
  return (
    <StyledButton
      color="primary"
      variant="contained"
      className={"ComponentsMenu"}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
