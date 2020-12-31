import React, { useState } from 'react';

import OutputLogger from '../../../../general/OutputLogger';
import { Divider, Typography } from '@material-ui/core';
import CodeDescription from '../../../../general/CodeDescription';
import styled from 'styled-components';
import DescriptionTypography from '../../../../general/DescriptionTypography';
import SecondaryButton from '../../../../general/SecondaryButton';
import { colors } from './colorsArray';
import StyledHeader from '../../../../general/StyledHeader';

/**
 * This component holds a combined state (one object with multiple properties)
 * Updating this state only happens once per click, so multiple re-renders will not occur.
 */

const StyledDiv = styled.div``;

const CombinedState = () => {
  const initialState = {
    name: 'name',
    age: 'age',
    color: 'color'
  };

  const [state, setState] = useState(initialState);

  const setRandName = () => `name ${Math.round(Math.random() * 1000)}`;

  const setRandAge = () =>
    `age: ${Math.floor(Math.random() * (100 - 10 + 1)) + 10}`;

  const setRandColor = () =>
    `color: ${colors[Math.floor(Math.random() * colors.length)]}`;

  const setRandForAll = () => {
    setState({
      ...state,
      name: setRandName(),
      age: setRandAge(),
      color: setRandColor()
    });
  };

  const setRandForAllAsync = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(setRandForAll());
      }, 500);
    });
  };

  return (
    <StyledDiv>
      <StyledHeader>Combined State</StyledHeader>
      <CodeDescription>
        <Typography>
          const [state, setState] = useState(initialState);
        </Typography>
        <Typography>
          {`const initialState = {`} <br />
        </Typography>
        <Typography className={'indentedText'}>
          <span>{`name: ${state.name}, `}</span>
          <span>{`age: ${state.age}`}, </span>
          <span>{`color: ${state.color}`} </span>
        </Typography>
        <Typography> {`};`} </Typography>
      </CodeDescription>
      <DescriptionTypography variant={'subtitle2'}>
        This component holds a combined state (one object with multiple
        properties)
        <br />
        Updating this state only happens once per click, so multiple re-renders
        will not occur.
      </DescriptionTypography>

      <div>
        <SecondaryButton onClick={setRandForAll}>
          set all properties
        </SecondaryButton>
        <SecondaryButton onClick={setRandForAllAsync}>
          set all properties async
        </SecondaryButton>
      </div>
      <Divider />

      <OutputLogger message={'CombinedState rendering....'} />
    </StyledDiv>
  );
};

export default CombinedState;
