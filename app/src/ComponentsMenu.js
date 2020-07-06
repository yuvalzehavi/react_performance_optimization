import React from "react";
import styled from "styled-components";

import StyledButton from "./components/general/StyledButton";
import Divider from "./components/general/Divider";

const StyledTitle = styled.div`
  background: #2b2b2b;
  display: table;
  margin: 8px 0;
  span {
    color: #f4dc00;
  }
`;

const ComponentsMenu = ({ onComponentSelected }) => {
  const onClick = (e) => onComponentSelected(e.target.id);
  const getButton = (id, text) => (
    <StyledButton id={id} onClick={onClick}>
      {text}
    </StyledButton>
  );

  const getTitle = (title) => (
    <StyledTitle>
      <span>{`{ ${title} }`}</span>
    </StyledTitle>
  );

  return (
    <div className={"ComponentsMenu"}>
      {getTitle("useState")}
      {getButton("SplitState", "Split State")}
      {getButton("CombinedState", "Combined State")}
      {getButton("CombinedStateWithReducer", "Combined State With Reducer")}
      <Divider />
      {getTitle("React.memo")}
      {getButton("Memo", "React.memo")}
      {getButton("MemoWithAreEqual", "React.memo with equality check")}
      <Divider />
      {getTitle("useCallback")}
      {getButton("FunctionAsProp", "Function as Prop")}
      {getButton("FunctionAsPropMemoized", "Memoized Function as Prop")}
      {getButton("CustomHook", "Custom Hook")}
      {getButton("UseCallbackWithCustomHook", "useCallback With Custom Hook")}
      <Divider />
      {getTitle("useMemo")}
      {getButton("UseMemo", "useMemo")}
    </div>
  );
};
export default ComponentsMenu;
