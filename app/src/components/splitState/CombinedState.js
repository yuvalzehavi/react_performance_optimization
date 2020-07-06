import React, { useState, } from "react";

import OutputLogger from "../general/OutputLogger";

/**
 * This component holds a combined state (one object with multiple properties)
 * Updating this state only happens once per click, so multiple re-renders will not occur.
 */
const CombinedState = () => {
  const initialState = {
    name: "",
    age: 0,
  };

  const [state, setState] = useState(initialState);

  const setRandName = () => `name ${Math.round(Math.random() * 1000)}`;

  const setRandAge = () => Math.floor(Math.random() * (100 - 10 + 1)) + 10;

  const setRandNameAndAge = () => {
    setState({ ...state, name: setRandName(), age: setRandAge() });
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

export default CombinedState;
