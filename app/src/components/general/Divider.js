import React from "react";
import styled from "styled-components";

const StyledHr = styled.hr`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.12);
`;

export default () => {
  return <StyledHr />;
};
