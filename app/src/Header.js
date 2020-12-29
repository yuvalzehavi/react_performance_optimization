import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Typography, Divider } from "@material-ui/core";
import { AppContext } from "./general/context/AppContext";

const StyledContainer = styled.div`
  position: relative;
  padding: 1rem;
  text-align: left;
  .titleAndDescriptionContainer {
    display: flex;
    align-items: center;
    .headerTitle {
      display: inline-block;
      cursor: pointer;
    }
    .moduleDescription {
        margin-left: 4rem;
        
    }
  }
`;

export default () => {
  const { moduleDescription } = useContext(AppContext);
  const history = useHistory();

  const onClick = () => history.push("");

  return (
    <StyledContainer>
      <div className={"titleAndDescriptionContainer"}>
        <Typography variant={"h5"} className={"headerTitle"} onClick={onClick}>
          React Training
        </Typography>
        <Typography className={"moduleDescription"}>
          <i>{moduleDescription}</i>
        </Typography>
      </div>
      <Divider />
    </StyledContainer>
  );
};
