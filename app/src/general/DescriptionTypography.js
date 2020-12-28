import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const StyledTypography = styled(Typography)`
  && {
    background-color: #efefef;
    color: black;
    padding: 1rem;
    margin: 1rem;
  }
`;

export default ({ onClick, children, ...rest }) => {
  return <StyledTypography variant={"subtitle2"}>{children}</StyledTypography>;
};
