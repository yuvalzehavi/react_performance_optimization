import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import LocalVariable from "../1_local_variable_in_component/LocalVariable";

const componentsDic = {
  LocalVariable,
};

const ComponentsContainer = () => {
  const { componentName } = useContext(AppContext);
  const DynamicComponent = componentsDic[componentName];
  console.log("ComponentsContainer rendering...", componentName);
  return DynamicComponent ? <DynamicComponent /> : null;
};

export default ComponentsContainer;
