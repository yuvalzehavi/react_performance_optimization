import React, { useState, memo } from "react";

import OutputLogger from "../general/OutputLogger";
import { Divider, Typography } from "@material-ui/core";
import CodeDescription from "../general/CodeDescription";
import DescriptionTypography from "../general/DescriptionTypography";
import SecondaryButton from "../general/SecondaryButton";

const areEqual = (prevProps, nextProps) => {
  return prevProps.randNum1 === nextProps.randNum1;
};

const LoggerWithMemo = memo(({ randNum1, randNum2 }) => {
  return <OutputLogger message={`randNum1=${randNum1} randNum2=${randNum2}`} />;
}, areEqual);

/**
 * Example of using React.2_memo with areEqual() implementation to only re-render on specific conditions
 * One button affects randNum1, the other affects randNum2.
 * The component will only re-render if randNum1 has changed, and ignore randNum2
 */

const MemoWithAreEqual = () => {
  const [randNum1, setRandNum1] = useState(0);
  const [randNum2, setRandNum2] = useState(0);

  const setRandNum1Click = () => setRandNum1(Math.round(Math.random() * 1000));

  const setRandNum2Click = () => setRandNum2(Math.round(Math.random() * 1000));

  return (
    <div>
      <Typography variant={"h6"} className={"title"}>
        React.memo with areEqual() function
      </Typography>
      <CodeDescription>
        <Typography>
          {`const areEqual = (prevProps, nextProps) => { `}
        </Typography>
        <Typography className={"indentedText"}>
          <span>{`//equality check will cause re-render only if prevProps.randNum1 !== nextProps.randNum1 `}</span>
          <span>{`return prevProps.randNum1 === nextProps.randNum1; `}</span>
        </Typography>
        <Typography> {`};`} </Typography>
        <Typography>
          {`const LoggerWithMemo = memo(({ randNum1, randNum2 }) => {`}
        </Typography>
        <Typography className={"indentedText"}>
          <span>
            {`return <OutputLogger message={\`randNum1=${randNum1} randNum2=${randNum2}\`}; `}
          </span>
        </Typography>
        <Typography> {`}, areEqual);`} </Typography>
      </CodeDescription>
      <DescriptionTypography variant={"subtitle2"}>
        Example of using React.memo with areEqual() implementation to only
        re-render on specific conditions
        <br />
        One button affects randNum1, the other affects randNum2.
        <br />
        The component will only re-render if randNum1 has changed, and ignore
        randNum2
      </DescriptionTypography>
      <div>
        <SecondaryButton onClick={setRandNum1Click}>
          setRandNum 1
        </SecondaryButton>
        <SecondaryButton onClick={setRandNum2Click}>setRandNum</SecondaryButton>
      </div>
      <Divider />

      <LoggerWithMemo randNum1={randNum1} randNum2={randNum2} />
    </div>
  );
};

export default MemoWithAreEqual;
