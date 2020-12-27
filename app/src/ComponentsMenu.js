import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Typography, Divider } from "@material-ui/core";

import { AppContext } from "./context/AppContext";
import StyledButton from "./components/general/PrimaryButton";

const StyledTitle = styled.div`
  && {
    background: #2b2b2b;
    display: table;
    margin: 0.8rem 0;
    padding: 0.2rem;
    p {
      color: #f4dc00;
    }
  }
`;

const ComponentsMenu = () => {
  const { onComponentSelected } = useContext(AppContext);

  useEffect(() => {
    onComponentSelected("SplitState");
  }, []);

  const onClick = (e) => {
    onComponentSelected(e.target.id);
  };
  const getButton = (id, text) => (
    <StyledButton id={id} onClick={onClick}>
      {text}
    </StyledButton>
  );

  const getTitle = (title) => (
    <StyledTitle>
      <Typography>{`{ ${title} }`}</Typography>
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
      {getButton("UseCallbackWithCustomHook", "3_useCallback With Custom Hook")}
      <Divider />
      {getTitle("useMemo")}
      {getButton("UseMemo", "useMemo")}
    </div>
  );
};
export default ComponentsMenu;
