import React, { useMemo, useState } from "react";

import OutputLogger from "../../../general/OutputLogger";
import { Divider, Typography } from "@material-ui/core";
import CodeDescription from "../../../general/CodeDescription";
import DescriptionTypography from "../../../general/DescriptionTypography";
import SecondaryButton from "../../../general/SecondaryButton";

/**
 * This component uses a very expensive calculation (setRandProp) with both memoized and un-memoized versions
 * notice the memoized value will run at first render, blocking the thread React runs on
 */

const UseMemo = () => {
  const [totalTime, setTotalTime] = useState(0);

  const setRandProp = () => {
    let highestNum = 0;
    for (let len = 100000000, i = 0; i < len; i++) {
      const rand = Math.round(Math.random() * 1000);
      rand > highestNum && (highestNum = rand);
    }
    return highestNum;
  };

  const setRandPropWithMemo = useMemo(() => {
    let highestNum = 0;
    for (let len = 100000000, i = 0; i < len; i++) {
      const rand = Math.round(Math.random() * 1000);
      rand > highestNum && (highestNum = rand);
    }
    return highestNum;
  }, []);

  const onClick = () => {
    const now = new Date();
    const result = setRandProp();
    setTotalTime(new Date() - now);
  };

  const onClickWithMemo = () => {
    const now = new Date();
    const result = setRandPropWithMemo;
    setTotalTime(new Date() - now);
  };

  return (
    <div>
      <Typography variant={"h6"} className={"title"}>
        useMemo
      </Typography>
      <CodeDescription>
        <Typography>{`const setRandPropWithMemo = useMemo(() => {`}</Typography>
        <Typography className={"indentedText"}>
          <span>{`let highestNum = 0;`} </span>
          <span>{`for (let len = 100000000, i = 0; i < len; i++) {`}</span>
          <span
            className={"indentedText"}
          >{`const rand = Math.round(Math.random() * 1000);`}</span>
          <span
            className={"indentedText"}
          >{`rand > highestNum && (highestNum = rand);`}</span>
          <span> {`}`} </span>
          <span> {`return highestNum;`} </span>
        </Typography>
        <Typography>{` }, []);`}</Typography>
        <br />
        <Typography>{` const onClickWithMemo = () => {`}</Typography>
        <Typography className={"indentedText"}>
          <span>{`const now = new Date();`}</span>
          <span>{`const result = setRandPropWithMemo;`}</span>
          <span>{`setTotalTime(new Date() - now);`}</span>
        </Typography>
        <Typography>{`};`}</Typography>
      </CodeDescription>
      <DescriptionTypography variant={"subtitle2"}>
        This component uses a very expensive calculation (setRandProp) with both
        memoized and un-memoized versions
        <br />
        notice the memoized value will run at first render, blocking the thread
        React runs on
      </DescriptionTypography>
      <div>
        <SecondaryButton onClick={onClick}>
          trigger expensive calculation
        </SecondaryButton>
        <SecondaryButton onClick={onClickWithMemo}>
          trigger expensive calculation with useMemo{" "}
        </SecondaryButton>
      </div>
      <Divider />

      <OutputLogger message={`total time: ${totalTime}`} />
    </div>
  );
};

export default UseMemo;
