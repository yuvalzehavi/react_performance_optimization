import React, { useRef } from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  & > *:first-child {
    margin-right: 0.4rem;
  }
`;

const OutputLogger = ({ message, skipIdenticalMessage }) => {
  const messages = useRef([]);

  if (
    !skipIdenticalMessage ||
    (skipIdenticalMessage &&
      messages.current[messages.current.length - 1] !== message)
  ) {
    message && messages.current.push(message);
  }

  return (
    <>
      {messages.current.map((str, index) => {
        return (
          <StyledDiv key={index}>
            <Typography variant={"subtitle2"} color={"primary"}>{`${
              index + 1
            })`}</Typography>
            <Typography>{str}</Typography>
          </StyledDiv>
        );
      })}
    </>
  );
};

export default OutputLogger;
