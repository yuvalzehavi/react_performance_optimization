import React, { useMemo, useState } from "react";

import OutputLogger from "../general/OutputLogger";

/**
 * This component uses a very expensive calculation (setRandProp) with both memoized and un-memoized versions
 * notice the memoized value will run at first render, blocking the thread React runs on
 */

const UseMemo = () => {
  const [totalTime, setTotalTime] = useState(0);

  const setRandProp = () => {
    let highestNum = 0;
    for (let len = 100000000, i = 0; i < len; i++) {
      const rand = Math.round(Math.random() * 1000);
      rand > highestNum && (highestNum = rand);
    }
    return highestNum;
  };

  const setRandPropWithMemo = useMemo(() => {
    let highestNum = 0;
    for (let len = 100000000, i = 0; i < len; i++) {
      const rand = Math.round(Math.random() * 1000);
      rand > highestNum && (highestNum = rand);
    }
    return highestNum;
  }, []);

  const onClick = () => {
    const now = new Date();
    const result = setRandProp();
    setTotalTime(new Date() - now);
  };

  const onClickWithMemo = () => {
    const now = new Date();
    const result = setRandPropWithMemo;
    setTotalTime(new Date() - now);
  };

  return (
    <div>
      <button onClick={onClick}>trigger expensive calculation</button>
      <button onClick={onClickWithMemo}>
        trigger expensive calculation with useMemo
      </button>
      <OutputLogger message={`total time: ${totalTime}`} />
    </div>
  );
};

export default UseMemo;
