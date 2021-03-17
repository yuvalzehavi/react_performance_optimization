import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState
} from 'react';
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

const Child = forwardRef((props, ref) => {
  const [validState, setValidState] = useState('unvalidated');
  const setChildValidation = useCallback(() => {
    setValidState('valid');
    return 'valid';
  }, [setValidState]);

  useImperativeHandle(ref, () => ({
    setChildValidation
  }), [setChildValidation]);

  return (
    <StyledDiv>
      <Typography variant={'h6'}>Child Component</Typography>
      <Typography>
        Valid State: <span className={validState}>{validState}</span>
      </Typography>
    </StyledDiv>
  );
});

export default Child;
