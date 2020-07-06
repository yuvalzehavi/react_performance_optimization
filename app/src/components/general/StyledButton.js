import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  margin-bottom: 10px;
  background: #1976d2;
  color: white;
  text-transform: uppercase;
  padding: 6px 16px;
  border: none;
  border-radius: 4px;
  &:hover {
    background: #1956a8;
  }
  &:active, &:focus {
    border: none;
    outline: none;
  }
`;

export default ({ onClick, children, ...rest }) => {
  return (
    <StyledButton className={"ComponentsMenu"} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};
