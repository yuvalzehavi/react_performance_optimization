import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #353535;
  color: white;
  padding: 1rem;
  .indentedText span {
    display: block;
    text-indent: 1rem;
    &.indentedText {
      text-indent: 2rem;
    }
  }
`;
export default ({ children }) => {
  return <StyledDiv variant={"subtitle2"}>{children}</StyledDiv>;
};
