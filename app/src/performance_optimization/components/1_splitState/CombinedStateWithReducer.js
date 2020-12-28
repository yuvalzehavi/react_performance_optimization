import React, { useReducer } from "react";
import styled from "styled-components";

import OutputLogger from "../../../general/OutputLogger";
import { Divider, Typography } from "@material-ui/core";
import CodeDescription from "../../../general/CodeDescription";
import DescriptionTypography from "../../../general/DescriptionTypography";
import SecondaryButton from "../../../general/SecondaryButton";
import { colors } from "./colorsArray";

const StyledDiv = styled.div``;

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.name };
    case "changeAge":
      return { ...state, age: action.age };
    case "changeColor":
      return { ...state, color: action.color };
    case "changeAll":
      return {
        ...state,
        name: action.name,
        age: action.age,
        color: action.color,
      };
    default:
      throw new Error("Unexpected action");
  }
};

/**
 * This component holds a combined state (one object with multiple properties)
 * Updating this state via useReducer will only trigger a single re-render
 */

const CombinedStateWithReducer = () => {
  const initialState = {
    name: "name",
    age: "age",
    color: "color",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setRandName = () => `name ${Math.round(Math.random() * 1000)}`;

  const setRandAge = () =>
    `age: ${Math.floor(Math.random() * (100 - 10 + 1)) + 10}`;

  const setRandColor = () =>
    `color: ${colors[Math.floor(Math.random() * colors.length)]}`;

  const setRandForAll = () => {
    dispatch({
      type: "changeAll",
      name: setRandName(),
      age: setRandAge(),
      color: setRandColor(),
    });
  };

  const setRandForAllAsync = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(setRandForAll());
      }, 500);
    });
  };

  return (
    <StyledDiv>
      <Typography variant={"h6"} className={"title"}>
        Combined State With Reducer
      </Typography>
      <CodeDescription>
        <Typography>
          {`const initialState = {`} <br />
        </Typography>
        <Typography className={"indentedText"}>
          <span>{`name: ${state.name}, `} </span>
          <span>{`age: ${state.age}`},</span>
          <span>{`color: ${state.color}`} </span>
        </Typography>
        <Typography> {`};`} </Typography>
        <Typography>
          const [state, dispatch] = useReducer(reducer, initialState);
        </Typography>
      </CodeDescription>
      <DescriptionTypography variant={"subtitle2"}>
        This component holds a combined state (one object with multiple
        properties)
        <br />
        Updating this state via useReducer will only trigger a single re-render
      </DescriptionTypography>
      <div>
        <SecondaryButton onClick={setRandForAll}>
          set all properties
        </SecondaryButton>
        <SecondaryButton onClick={setRandForAllAsync}>
          set all properties async
        </SecondaryButton>
      </div>
      <Divider />

      <OutputLogger message={"CombinedState with reducer rendering...."} />
    </StyledDiv>
  );
};

export default CombinedStateWithReducer;
