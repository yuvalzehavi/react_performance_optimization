import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const StyledButton = styled(Button)`
  && {
    display: block;
    margin-bottom: 1rem;
    & > * {
      pointer-events: none;
    }
    &.selected {
      pointer-events: none;
    }
  }
`;

export default ({ onClick, isSelected, children, ...rest }) => {
  return (
    <StyledButton
      color="primary"
      variant="contained"
      onClick={onClick}
      disabled={isSelected}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
