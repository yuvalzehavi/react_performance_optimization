import React, { useState, useEffect, useRef } from "react";
import { Divider, Typography } from "@material-ui/core";

import OutputLogger from "../../../general/OutputLogger";
import CodeDescription from "../../../general/CodeDescription";
import DescriptionTypography from "../../../general/DescriptionTypography";

const useRandNum = (defaultValue = 0) => {
  const [value, setValue] = useState(defaultValue);
  const generateRandNum = () => setValue(Math.round(Math.random() * 1000));
  return [value, generateRandNum];
};

/**
 * This component uses a useEffect hook with a setter callback (generateRandNum) as a dependency
 * Since generateRandNum is not memoized, it will be re-created each time it's called, resulting in infinite re-renders
 */

const CustomHook = () => {
  const [num, generateRandNum] = useRandNum();
  const maxCalls = useRef(0);
  useEffect(() => {
    if (maxCalls.current < 49) {
      generateRandNum();
      ++maxCalls.current;
    }
  }, [generateRandNum]);

  return (
    <div>
      <Typography variant={"h6"} className={"title"}>
        Performance When a Using Custom Hook with No Memoization
      </Typography>
      <CodeDescription>
        <Typography>{`const useRandNum = (defaultValue = 0) => {`}</Typography>
        <Typography className={"indentedText"}>
          <span>{` const [value, setValue] = useState(defaultValue);`} </span>
          <span>
            {`const generateRandNum = () => setValue(Math.round(Math.random() * 1000)); `}{" "}
          </span>
          <span>{`return [value, generateRandNum]; `} </span>
        </Typography>
        <Typography> {`};`} </Typography>
        <br />
        <Typography>{`const setRandProp = () => setProp(Math.round(Math.random() * 1000));`}</Typography>
        <br />
        <Typography>
          {`const [num, generateRandNum] = useRandNum();`}
        </Typography>
        <br />
        <Typography>{`useEffect(() => {`}</Typography>
        <Typography className={"indentedText"}>
          <span>{`if (maxCalls.current < 49) {`} </span>
          <span className={"indentedText"}>{`generateRandNum();`} </span>
          <span className={"indentedText"}>{` ++maxCalls.current;`} </span>
          <span> {`}`} </span>
        </Typography>
        <Typography>{`}, [generateRandNum]);`}</Typography>
      </CodeDescription>
      <DescriptionTypography variant={"subtitle2"}>
        This component uses a useEffect hook with a setter callback
        (generateRandNum) as a dependency
        <br />
        Since generateRandNum is not memoized, it will be re-created each time
        it's called, resulting in infinite re-renders
      </DescriptionTypography>
      <Divider />
      <OutputLogger message={"component with custom hook rendering..."} />;
    </div>
  );
};

export default CustomHook;
