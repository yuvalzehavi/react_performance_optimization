import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

const ComponentsContainer = ({ componentsDictionary }) => {
  const { componentName } = useContext(AppContext);
  const DynamicComponent = componentsDictionary[componentName];
  return DynamicComponent ? (
    <div className={"componentsContainer"}>
      <DynamicComponent />
    </div>
  ) : null;
};

export default ComponentsContainer;
