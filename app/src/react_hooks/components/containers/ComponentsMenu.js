import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Typography, Divider } from "@material-ui/core";

import { AppContext } from "../../context/AppContext";
import StyledButton from "../../../general/PrimaryButton";

const StyledTitle = styled.div`
  && {
    background: #2b2b2b;
    display: table;
    margin: 0.8rem 0;
    padding: 0.2rem;
    p {
      color: #f4dc00;
    }
  }
`;

const ComponentsMenu = () => {
  const { onComponentSelected } = useContext(AppContext);

  useEffect(() => {
    onComponentSelected("LocalVariable");
  }, []);

  const onClick = (e) => {
    onComponentSelected(e.target.id);
  };
  const getButton = (id, text) => (
    <StyledButton id={id} onClick={onClick}>
      {text}
    </StyledButton>
  );

  const getTitle = (title) => (
    <StyledTitle>
      <Typography>{`{ ${title} }`}</Typography>
    </StyledTitle>
  );

  return (
    <div className={"ComponentsMenu"}>
      {getButton("LocalVariable", "Local Variables")}
      <Divider />

    </div>
  );
};
export default ComponentsMenu;
