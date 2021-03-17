import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from './ContextProvider';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const StyledDiv = styled.div`
  && {
    border: 1px solid grey;
    padding: 10px;
    margin: 10px 0;
    .unvalidated {
      color: grey;
    }
    .valid {
      color: blue;
    }
  }
`;

const Child = () => {
  const { shouldValidate, updateSharedState } = useContext(AppContext);
  const [validState, setValidState] = useState('unvalidated');

  useEffect(() => {
    if (shouldValidate) {
      setValidState('valid');
      updateSharedState({ childValidState: 'valid' });
    }
  }, [shouldValidate]);

  return (
    <StyledDiv>
      <Typography variant={'h6'}>Child Component</Typography>
      <Typography>
        Valid State: <span className={validState}>{validState}</span>
      </Typography>
    </StyledDiv>
  );
};

export default Child;
