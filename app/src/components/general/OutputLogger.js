import React, { useRef } from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  & > *:first-child {
    margin-right: .4rem;
  }
`;

const OutputLogger = ({ message }) => {
  const messages = useRef([]);
  message && messages.current.push(message);

  return (
    <>
      {messages.current.map((str, index) => {
        return (
          <StyledDiv key={index}>
            <Typography variant={'subtitle2'} color={'primary'}>{`${index + 1})`}</Typography>
            <Typography>{str}</Typography>
          </StyledDiv>
        );
      })}
    </>
  );
};

export default OutputLogger;
