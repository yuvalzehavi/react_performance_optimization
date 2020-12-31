import React, { useContext } from 'react';
import { Divider } from '@material-ui/core';
import styled from 'styled-components';

import { AppContext } from './AppContextProvider';
import IntermediateParent from './IntermediateParent';
import StyledTypography from './StyledTypography';

const StyledDiv = styled.div`
  margin-bottom: 2rem;
  .childrenContainer > * {
    margin-left: 1rem;
  }
`;

export default function ParentComponent() {
  const { count } = useContext(AppContext);
  return (
    <StyledDiv>
      <StyledTypography>{`Parent Component | Count is ${count}`}</StyledTypography>
      <Divider />
      <IntermediateParent />
    </StyledDiv>
  );
}
