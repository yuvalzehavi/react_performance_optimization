import React, { useReducer } from "react";

import OutputLogger from "../general/OutputLogger";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.name };
    case "changeAge":
      return { ...state, age: action.age };
    case "changeNameAndAge":
      return { ...state, name: action.name, age: action.age };
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
    name: "",
    age: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setRandName = () => `name ${Math.round(Math.random() * 1000)}`;

  const setRandAge = () => Math.floor(Math.random() * (100 - 10 + 1)) + 10;

  const setRandNameAndAge = () => {
    dispatch({
      type: "changeNameAndAge",
      name: setRandName(),
      age: setRandAge(),
    });
  };

  const setRandNameAndAgeAsync = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(setRandNameAndAge());
      }, 500);
    });
  };

  return (
    <div>
      <div>{state.name}</div>
      <div>{state.age}</div>
      <button onClick={setRandNameAndAge}>set ane and age</button>
      <button onClick={setRandNameAndAgeAsync}>set ane and age async</button>
      <OutputLogger message={"CombinedState rendering...."} />
    </div>
  );
};

export default CombinedStateWithReducer;
