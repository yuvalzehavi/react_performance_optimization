import React, { useState } from "react";

import OutputLogger from "../general/OutputLogger";

const Container = React.memo(({ message, func }) => {
  return <OutputLogger message={message} />;
});


/**
 * This component holds button child which calls useState() when clicked
 * One child is memoized, however the callback passed as prop is re-created on each render
 * So when the parent updates, so do its memoized child,
 */

const AnonymousFuncAsProp = () => {
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

export default AnonymousFuncAsProp;
