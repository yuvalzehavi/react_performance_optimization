import React, { useState, memo } from "react";

import OutputLogger from "../general/OutputLogger";

const areEqual = (prevProps, nextProps) => {
  return prevProps.randNum1 === nextProps.randNum1;
};

const LoggerWithMemo = memo(({ randNum1, randNum2 }) => {
  return <OutputLogger message={`randNum1=${randNum1} randNum2=${randNum2}`} />;
}, areEqual);

/**
 * Example of using React.memo with areEqual() implementation to only re-render on specific conditions
 */

const MemoWithAreEqual = () => {
  const [randNum1, setRandNum1] = useState(0);
  const [randNum2, setRandNum2] = useState(0);

  const setRandNum1Click = () => setRandNum1(Math.round(Math.random() * 1000));

  const setRandNum2Click = () => setRandNum2(Math.round(Math.random() * 1000));

  return (
    <div>
      <button onClick={setRandNum1Click}>setRandNum 1</button>
      <button onClick={setRandNum2Click}>setRandNum 2</button>
      <LoggerWithMemo randNum1={randNum1} randNum2={randNum2} />
    </div>
  );
};

export default MemoWithAreEqual;
