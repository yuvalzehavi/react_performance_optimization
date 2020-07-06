import React, { useState } from "react";

import OutputLogger from "../general/OutputLogger";

/**
 * This component holds a split state (2 useStates which may update simultaneously)
 * When updating both within a React handler, React makes the updates in a batch instead of one at a time.
 * However, when updates occur outside of a React handler React will make the updates synchronously
 */
const SplitState = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const setRandName = () => {
    setName(`name ${Math.round(Math.random() * 1000)}`);
  };
  const setRandAge = () => {
    setAge(Math.floor(Math.random() * (100 - 10 + 1)) + 10);
  };
  const setRandNameAndAge = () => {
    setRandName();
    setRandAge();
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
      <div>{name}</div>
      <div>{age}</div>
      <button onClick={setRandName}>set name</button>
      <button onClick={setRandAge}>set age</button>
      <button onClick={setRandNameAndAge}>set ane and age</button>
      <button onClick={setRandNameAndAgeAsync}>set ane and age async</button>
      <OutputLogger message={"SplitState rendering...."} />
    </div>
  );
};

export default SplitState;
