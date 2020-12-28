import React, { useState } from "react";
import { Divider, Typography } from "@material-ui/core";
import styled from "styled-components";

import SecondaryButton from "../../../general/SecondaryButton";
import OutputLogger from "../../../general/OutputLogger";
import CodeDescription from "../../../general/CodeDescription";
import DescriptionTypography from "../../../general/DescriptionTypography";

const StyledDiv = styled.div``;

export default () => {
  const [randNum, setRandNum] = useState(0);
  let count = 0;

  const onClick = () => {
    count++;
    setRandNum(Math.random() * 1000000);
  };

  return (
    <StyledDiv>
      <Typography variant={"h6"} className={"title"}>
        Local Variables in Component
      </Typography>
      <CodeDescription>
        <Typography>{`let count = 0; `}</Typography>
        <br />
        <Typography>{`const onClick = () => {`}</Typography>
        <Typography className={"indentedText"}>
          <span> {`count++;`}</span>
          <span>
            {`setRandNum(Math.random() * 1000000); //trigger re-render`}
          </span>
        </Typography>
        <Typography> {`};`} </Typography>
      </CodeDescription>
      <DescriptionTypography variant={"subtitle2"}>
        Behavior of local variables (<i>let count</i>) within a React Component
        <br />
        What happens when we increment count and trigger a re-render?
      </DescriptionTypography>

      <SecondaryButton onClick={onClick}>
        increment count and re-trigger
      </SecondaryButton>
      <Divider />
      <OutputLogger message={`count is: ${count}`} />
    </StyledDiv>
  );
};
