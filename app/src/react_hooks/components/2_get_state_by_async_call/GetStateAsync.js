import React, { useRef, useState } from "react";
import { Divider, Typography } from "@material-ui/core";
import styled from "styled-components";

import SecondaryButton from "../../../general/SecondaryButton";
import OutputLogger from "../../../general/OutputLogger";
import CodeDescription from "../../../general/CodeDescription";
import DescriptionTypography from "../../../general/DescriptionTypography";

const StyledDiv = styled.div``;

/**
 * This component has a count state, which is incremented with each button click
 * It also has a button returning the state's count after a 2sec timeout
 * Try incrementing the count by clicking the first button, click the second button,
 * and then continue to increment with the first button until "current count" is updated
 */

export default () => {
  const [count, setCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  const onClickAsync = () => {
    setTimeout(() => {
      setCurrentCount(count);
    }, 2000);
  };

  return (
    <StyledDiv>
      <Typography variant={"h6"} className={"title"}>
        Get State In Async Call
      </Typography>
      <CodeDescription>
        <Typography>{` const [count, setCount] = useState(0);`} </Typography>
        <Typography>
          {`const [currentCount, setCurrentCount] = useState(0); `}{" "}
        </Typography>
        <br />
        <Typography>{`const onClick = () => {`}</Typography>
        <Typography className={"indentedText"}>
          <span> {` setCount(count + 1);`}</span>
        </Typography>
        <Typography> {`};`} </Typography>
        <br />
        <Typography>{`const onClickAsync = () => {`}</Typography>
        <Typography className={"indentedText"}>
          <span> {`setTimeout(() => {`}</span>
          <span className={"indentedText"}> {`setCurrentCount(count);`}</span>
          <span> {`}, 2000);`}</span>
        </Typography>
        <Typography> {`};`} </Typography>
      </CodeDescription>
      <DescriptionTypography variant={"subtitle2"}>
        This component has a count state, which is incremented with each button
        click.
        <br />
        It also has a button returning the state's count after a 2sec timeout.
        <br />
        Try incrementing the count by clicking the first button, then click the
        second button,
        <br />
        and then continue to increment with the first button until "current
        count" is updated
      </DescriptionTypography>

      <SecondaryButton onClick={onClick}>invoke onClick()</SecondaryButton>
      <SecondaryButton onClick={onClickAsync}>
        invoke onClickAsync()
      </SecondaryButton>
      <Divider />
      <OutputLogger
        message={`count is: ${count}`}
        skipIdenticalMessage={true}
      />
      <OutputLogger
        message={`current count is: ${currentCount}`}
        skipIdenticalMessage={true}
      />
    </StyledDiv>
  );
};
