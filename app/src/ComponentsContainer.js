import React, { useContext } from "react";

import { AppContext } from "./context/AppContext";
import SplitState from "./components/1_splitState/SplitState";
import CombinedState from "./components/1_splitState/CombinedState";
import CombinedStateWithReducer from "./components/1_splitState/CombinedStateWithReducer";
import Memo from "./components/2_memo/Memo";
import MemoWithAreEqual from "./components/2_memo/MemoWithAreEqual";
import FunctionAsProp from "./components/3_useCallback/FunctionAsProp";
import FunctionAsPropMemoized from "./components/3_useCallback/FunctionAsPropMemoized";
import CustomHook from "./components/3_useCallback/CustomHook";
import UseCallbackWithCustomHook from "./components/3_useCallback/UseCallbackWithCustomHook";
import UseMemo from "./components/4_useMemo/UseMemo";

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

const ComponentsContainer = () => {
  const { componentName } = useContext(AppContext);
  const DynamicComponent = componentsDic[componentName];
  console.log("ComponentsContainer rendering...", componentName);
  return DynamicComponent ? <DynamicComponent /> : null;
};

export default ComponentsContainer;
