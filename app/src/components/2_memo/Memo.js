import React, { useState, memo } from "react";
import styled from "styled-components";

import OutputLogger from "../general/OutputLogger";
import {Divider, Typography} from "@material-ui/core";
import CodeDescription from "../general/CodeDescription";
import DescriptionTypography from "../general/DescriptionTypography";
import SecondaryButton from "../general/SecondaryButton";

const LoggerWithMemo = memo(({ message }) => {
  return <OutputLogger message={message} />;
});

const StyledDiv = styled.div``;

/**
 * Comparison of 2 components (<OutputLogger> and <LoggerWithMemo>) receiving non-changing props
 * Updating the parent will only cause the non-memoized child to re-render
 */

const Memo = () => {
  const [_, setProp] = useState(0);

  const setRandProp = () => {
    setProp(Math.round(Math.random() * 1000));
  };

  return (
    <StyledDiv>
      <Typography variant={"h6"} className={"title"}>
        React.memo
      </Typography>
      <CodeDescription>
        <Typography>
          {`const LoggerWithMemo = memo(({ message }) => { `}
        </Typography>
        <Typography className={"indentedText"}>
          <span> {`return <OutputLogger message={message} `}/>;</span>
        </Typography>
        <Typography> {`});`} </Typography>
      </CodeDescription>
      <DescriptionTypography variant={"subtitle2"}>
        {`Comparison of 2 components (<OutputLogger> and <LoggerWithMemo>) receiving non-changing props`}
        <br />
        Updating the parent will only cause the non-memoized child to re-render
      </DescriptionTypography>
      <div>
        <SecondaryButton onClick={setRandProp}>
          trigger re-render in parent
        </SecondaryButton>
      </div>
      <Divider />

      <OutputLogger message={"Parent is re-rendering"} />
      <LoggerWithMemo message={"Output logger with React.memo"} />
      <OutputLogger message={"Output logger --without-- React.memo"} />
    </StyledDiv>
  );
};

export default Memo;
