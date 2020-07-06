import React from "react";

import SplitState from "./components/splitState/SplitState";
import CombinedState from "./components/splitState/CombinedState";
import CombinedStateWithReducer from "./components/splitState/CombinedStateWithReducer";
import Memo from "./components/memo/Memo";
import MemoWithAreEqual from "./components/memo/MemoWithAreEqual";
import AnonymousFuncAsProp from "./components/useCallback/AnonymousFuncAsProp";
import UseCallbackFuncAsProp from "./components/useCallback/UseCallbackFuncAsProp";
import CustomHook from "./components/useCallback/CustomHook";
import UseCallbackWithCustomHook from "./components/useCallback/UseCallbackWithCustomHook";
import UseMemo from "./components/useMemo/UseMemo";

const componentsDic = {
  SplitState,
  CombinedState,
  CombinedStateWithReducer,
  AnonymousFuncAsProp,
  UseCallbackFuncAsProp,
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
