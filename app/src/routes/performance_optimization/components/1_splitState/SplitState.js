import React, { useState } from 'react';
import { Divider, Typography } from '@material-ui/core';
import styled from 'styled-components';

import OutputLogger from '../../../../general/OutputLogger';
import SecondaryButton from '../../../../general/SecondaryButton';
import DescriptionTypography from '../../../../general/DescriptionTypography';
import CodeDescription from '../../../../general/CodeDescription';
import { colors } from './colorsArray';
import StyledHeader from '../../../../general/StyledHeader';

/**
 * This component holds a split state (3 useStates which may update simultaneously)
 *  When updating all 3 within a React handler, React makes the updates in a single batch instead of one at a time.
 * However, when updates occur outside of a React handler (e.g an async call), React will not batch the updated state,
 * and the component will be rendered per state update
 */

const StyledDiv = styled.div``;

const SplitState = () => {
  const [name, setName] = useState('name');
  const [age, setAge] = useState('age');
  const [color, setColor] = useState('color');

  const setRandName = () => {
    setName(`name: ${Math.round(Math.random() * 1000)}`);
  };
  const setRandAge = () => {
    setAge(`age: ${Math.floor(Math.random() * (100 - 10 + 1)) + 10}`);
  };
  const setRandColor = () => {
    setColor(`color: ${colors[Math.floor(Math.random() * colors.length)]}`);
  };
  const setRandForAll = () => {
    setRandName();
    setRandAge();
    setRandColor();
  };
  const setRandNameAndAgeAsync = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(setRandForAll());
      }, 500);
    });
  };

  return (
    <StyledDiv>
      <StyledHeader>Split State</StyledHeader>
      <CodeDescription>
        <Typography>
          {`const [${name}, setName] = useState("name");`}
        </Typography>
        <Typography>{`const [${age}, setAge] = useState("age");`}</Typography>
        <Typography>
          {`const  [${color}, setColor] = useState("color");`}
        </Typography>
      </CodeDescription>
      <DescriptionTypography variant={'subtitle2'}>
        This component holds a split state (3 useStates which may update
        simultaneously). <br /> When updating all 3 within a React handler,
        React makes the updates in a single batch instead of one at a time.
        <br />
        However, when updates occur outside of a React handler (e.g an async
        call), React will not batch the updated state, <br /> and the component
        will be rendered per state update
      </DescriptionTypography>
      <div>
        <SecondaryButton onClick={setRandName}>set name</SecondaryButton>
        <SecondaryButton onClick={setRandAge}>set age</SecondaryButton>
        <SecondaryButton onClick={setRandColor}>set color</SecondaryButton>
        <SecondaryButton onClick={setRandForAll}>set all</SecondaryButton>
        <SecondaryButton onClick={setRandNameAndAgeAsync}>
          set all async
        </SecondaryButton>
      </div>
      <Divider />

      <OutputLogger message={'SplitState rendering....'} />
    </StyledDiv>
  );
};

export default SplitState;
