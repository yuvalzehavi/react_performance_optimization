import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Typography, Divider } from "@material-ui/core";

const StyledContainer = styled.div`
  position: relative;
  padding: 1rem;
  text-align: left;
  .headerTitle {
    display: inline-block;
    cursor: pointer;
  }
`;

export default () => {
  const history = useHistory();

  const onClick = () => history.push("");

  return (
    <StyledContainer>
      <Typography variant={"h5"} className={"headerTitle"} onClick={onClick}>
        React Training
      </Typography>
      <Divider />
    </StyledContainer>
  );
};
