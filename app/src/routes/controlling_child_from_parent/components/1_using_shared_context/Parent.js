import React, { useContext } from 'react';

import Child from './Child';
import Button from './Button';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { AppContext } from './ContextProvider';

const StyledDiv = styled.div`
  && {
    border: 1px solid #a8e99e;
    padding: 10px;
  }
`;

const Parent = () => {
  const { sharedState } = useContext(AppContext);

  return (
    <StyledDiv>
      <Typography variant={'h6'}>Parent Component</Typography>
      <Typography>{JSON.stringify(sharedState)}</Typography>
      <Child />
      <Button />
    </StyledDiv>
  );
};

export default Parent;
