import React, { useState, useEffect, useRef, useCallback } from 'react';

import OutputLogger from '../../../../general/OutputLogger';
import { Divider, Typography } from '@material-ui/core';
import CodeDescription from '../../../../general/CodeDescription';
import DescriptionTypography from '../../../../general/DescriptionTypography';
import StyledHeader from '../../../../general/StyledHeader';

const useRandNum = (defaultValue = 0) => {
  const [value, setValue] = useState(defaultValue);
  const generateRandNum = useCallback(
    () => setValue(Math.round(Math.random() * 1000)),
    [setValue]
  );
  return [value, generateRandNum];
};

/**
 * This component uses a useEffect hook with a setter callback (generateRandNum) as a dependency
 * the setter function is memoized, so the reference to it would not change when called
 */

const UseCallbackWithCustomHook = () => {
  const [num, generateRandNum] = useRandNum();
  const maxCalls = useRef(0);
  useEffect(() => {
    if (maxCalls.current < 50) {
      generateRandNum();
      ++maxCalls.current;
    }
  }, [generateRandNum]);

  return (
    <div>
      <StyledHeader>
        Performance When a Using Custom Hook with No Memoization
      </StyledHeader>
      <CodeDescription>
        <Typography>{`const useRandNum = (defaultValue = 0) => {`}</Typography>
        <Typography className={'indentedText'}>
          <span>{` const [value, setValue] = useState(defaultValue);`} </span>
          <span>{`const generateRandNum = useCallback(`}</span>
          <span
            className={'indentedText'}
          >{`() => setValue(Math.round(Math.random() * 1000)),`}</span>
          <span className={'indentedText'}>{`[setValue]`}</span>
          <span> {`)`} </span>
        </Typography>
        <Typography>{`return [value, generateRandNum];`}</Typography>
        <br />
        <Typography>{`const setRandProp = () => setProp(Math.round(Math.random() * 1000));`}</Typography>
        <br />
        <Typography>
          {`const [num, generateRandNum] = useRandNum();`}
        </Typography>
        <br />
        <Typography>{`useEffect(() => {`}</Typography>
        <Typography className={'indentedText'}>
          <span>{`if (maxCalls.current < 49) {`} </span>
          <span className={'indentedText'}>{`generateRandNum();`} </span>
          <span className={'indentedText'}>{` ++maxCalls.current;`} </span>
          <span> {`}`} </span>
        </Typography>
        <Typography>{`}, [generateRandNum]);`}</Typography>
      </CodeDescription>
      <DescriptionTypography variant={'subtitle2'}>
        This component uses a useEffect hook with a setter callback
        (generateRandNum) as a dependency
        <br />
        the setter function is memoized, so the reference to it would not change
        when called
      </DescriptionTypography>
      <Divider />
      <OutputLogger
        message={
          'component with custom hook with memoized callback is rendering...'
        }
      />
    </div>
  );
};

export default UseCallbackWithCustomHook;
