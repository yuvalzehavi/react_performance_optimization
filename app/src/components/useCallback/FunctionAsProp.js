import React, { useState } from "react";

import OutputLogger from "../general/OutputLogger";

const Container = React.memo(({ message, func }) => {
  return <OutputLogger message={message} />;
});


/**
 * This component holds a button which calls useState() when clicked,
 * And another memoized child. However the callback passed as prop is re-created on each render
 * So when the parent updates, so does its memoized child,
 */

const FunctionAsProp = () => {
  const [_, setProp] = useState(0);
  const message = "Child is rendering....";

  const setRandProp = () => {
    setProp(Math.round(Math.random() * 1000));
  };
  return (
    <div>
      <button onClick={setRandProp}>trigger re-render in parent</button>
      <Container message={message} func={setRandProp} />
    </div>
  );
};

export default FunctionAsProp;
