import React, { useState, useCallback } from "react";

import OutputLogger from "../general/OutputLogger";

const Container = React.memo(({ message, func }) => {
  return <OutputLogger message={message} />;
});

/**
 * This component holds button child which calls useState() when clicked
 * One child is memoized, and so is the callback passed on to it as prop
 * So when the parent updates, the child would not
 */
const UseCallbackFuncAsProp = () => {
  const [_, setProp] = useState(0);
  const message = "Child is rendering....";

  const setRandProp = useCallback(() => {
    setProp(Math.round(Math.random() * 1000));
  }, []);

  return (
    <div>
      <button onClick={setRandProp}>trigger re-render in parent</button>
      <Container message={message} func={setRandProp} />
    </div>
  );
};

export default UseCallbackFuncAsProp;
