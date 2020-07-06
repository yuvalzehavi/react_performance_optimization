import React from "react";

import SplitState from "./components/splitState/SplitState";
import CombinedState from "./components/splitState/CombinedState";
import CombinedStateWithReducer from "./components/splitState/CombinedStateWithReducer";
import Memo from "./components/memo/Memo";
import MemoWithAreEqual from "./components/memo/MemoWithAreEqual";
import FunctionAsProp from "./components/useCallback/FunctionAsProp";
import FunctionAsPropMemoized from "./components/useCallback/FunctionAsPropMemoized";
import CustomHook from "./components/useCallback/CustomHook";
import UseCallbackWithCustomHook from "./components/useCallback/UseCallbackWithCustomHook";
import UseMemo from "./components/useMemo/UseMemo";

const componentsDic = {
  SplitState,
  CombinedState,
  CombinedStateWithReducer,
  FunctionAsProp,
  FunctionAsPropMemoized,
  Memo,
  MemoWithAreEqual,
  CustomHook,
  UseCallbackWithCustomHook,
  UseMemo,
};

const ComponentsContainer = ({ componentName }) => {
  const DynamicComponent = componentsDic[componentName];
  console.log("ComponentsContainer rendering...");
  return DynamicComponent ? <DynamicComponent /> : null;
};

export default ComponentsContainer;
