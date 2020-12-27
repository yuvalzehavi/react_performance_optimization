import React, { useState, useEffect, useRef, useCallback } from "react";

import OutputLogger from "../general/OutputLogger";

const useRandNum = (defaultValue = 0) => {
  const [value, setValue] = useState(defaultValue);
  const generateRandNum = useCallback(
    () => setValue(Math.round(Math.random() * 1000)),
    [setValue]
  );
  return [value, generateRandNum];
};

/**
 * This component uses a useEffect hook with a setter callback (generateRandNum) as a dependency
 * the setter function is memoized, so the reference to it would not change when called
 */


const UseCallbackWithCustomHook = () => {
  const [num, generateRandNum] = useRandNum();
  const maxCalls = useRef(0);
  useEffect(() => {
    if (maxCalls.current < 50) {
      generateRandNum();
      ++maxCalls.current;
    }
  }, [generateRandNum]);

  return <OutputLogger message={"3_useCallback With Custom Hook rendering..."} />;
};

export default UseCallbackWithCustomHook;
