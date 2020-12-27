import React, { useState, useEffect, useRef } from "react";

import OutputLogger from "../general/OutputLogger";

const useRandNum = (defaultValue = 0) => {
  const [value, setValue] = useState(defaultValue);
  const generateRandNum = () => setValue(Math.round(Math.random() * 1000));
  return [value, generateRandNum];
};


/**
 * This component uses a useEffect hook with a setter callback (generateRandNum) as a dependency
 * Since generateRandNum is not memoized, it will be re-created each time it's called, resulting in infinite re-renders
 */

const CustomHook = () => {
  const [num, generateRandNum] = useRandNum();
  const maxCalls = useRef(0);
  useEffect(() => {
    if (maxCalls.current < 49) {
      generateRandNum();
      ++maxCalls.current;
    }
  }, [generateRandNum]);

  return <OutputLogger message={"3_useCallback With Custom Hook rendering..."} />;
};

export default CustomHook;
