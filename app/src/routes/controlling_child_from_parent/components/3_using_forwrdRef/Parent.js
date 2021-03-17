import React, {
  useRef,
  useState
} from 'react';

import Child from './Child';
import Button from './Button';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const StyledDiv = styled.div`
  && {
    border: 1px solid #a8e99e;
    padding: 10px;
  }
`;

const Parent = () => {
  const childRef = useRef(null);
  const [childValidState, setChildValidState] = useState('unvalidated');
  const triggerValidate = () => {
    setChildValidState(childRef.current.setChildValidation());
  };

  return (
    <StyledDiv>
      <Typography variant={'h6'}>Parent Component</Typography>
      <Typography>{childValidState}</Typography>
      <Child ref={childRef} />
      <Button onClick={triggerValidate} />
    </StyledDiv>
  );
};

export default Parent;
