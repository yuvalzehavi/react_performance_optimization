import React, { useState, memo } from "react";

import OutputLogger from "../general/OutputLogger";

const LoggerWithMemo = memo(({ message }) => {
  return <OutputLogger message={message} />;
});


/**
 * Comparison of 2 components (<OutputLogger> and <LoggerWithMemo>) receiving non-changing props
 * Updating the parent will only cause the non-memoized child to re-render
 */

const Memo = () => {
  const [_, setProp] = useState(0);

  const setRandProp = () => {
    setProp(Math.round(Math.random() * 1000));
  };

  return (
    <div>
      <button onClick={setRandProp}>trigger re-render in parent</button>
      <OutputLogger message={"Output logger --without-- React.memo"} />
      <LoggerWithMemo message={"Output logger with React.memo"} />
    </div>
  );
};

export default Memo;
