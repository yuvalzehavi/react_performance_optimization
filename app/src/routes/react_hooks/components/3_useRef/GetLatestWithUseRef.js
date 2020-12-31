import React, { useRef, useState } from 'react';
import { Divider, Typography } from '@material-ui/core';
import styled from 'styled-components';

import SecondaryButton from '../../../../general/SecondaryButton';
import OutputLogger from '../../../../general/OutputLogger';
import CodeDescription from '../../../../general/CodeDescription';
import DescriptionTypography from '../../../../general/DescriptionTypography';
import StyledHeader from '../../../../general/StyledHeader';

const StyledDiv = styled.div``;

/**
 * This component has a count state, which is incremented with each button click
 * It also has a countRef object which is aligned with state's count
 * When invoking onClickAsync(), countRef will be presented after a 2sec timeout.
 * Try incrementing the count by clicking the first button, click the second button,
 * and then continue to increment with the first button until "current count" is updated
 */

export default () => {
  const [count, setCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  const countRef = useRef(0);

  const onClick = () => {
    setCount(count + 1);
    countRef.current = count + 1;
  };

  const onClickAsync = () => {
    setTimeout(() => {
      setCurrentCount(countRef.current);
    }, 2000);
  };

  return (
    <StyledDiv>
      <StyledHeader>Get Latest State with UseRef</StyledHeader>
      <CodeDescription>
        <Typography>{` const [count, setCount] = useState(0);`} </Typography>
        <Typography>
          {`const [currentCount, setCurrentCount] = useState(0); `}{' '}
        </Typography>
        <Typography>{`const countRef = useRef(0);`}</Typography>
        <br />
        <Typography>{`const onClick = () => {`}</Typography>
        <Typography className={'indentedText'}>
          <span> {` setCount(count + 1);`}</span>
          <span> {` countRef.current = count + 1;`}</span>
        </Typography>
        <Typography> {`};`} </Typography>
        <br />
        <Typography>{`const onClickAsync = () => {`}</Typography>
        <Typography className={'indentedText'}>
          <span> {`setTimeout(() => {`}</span>
          <span className={'indentedText'}>
            {' '}
            {`setCurrentCount(countRef.current);`}
          </span>
          <span> {`}, 2000);`}</span>
        </Typography>
        <Typography> {`};`} </Typography>
      </CodeDescription>
      <DescriptionTypography variant={'subtitle2'}>
        This component has a count state, which is incremented with each button
        click
        <br />
        It also has a countRef object which is aligned with state's count
        <br />
        When invoking onClickAsync(), countRef will be presented after a 2sec
        timeout.
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
