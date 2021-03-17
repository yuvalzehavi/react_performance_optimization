import React, { useContext } from 'react';
import { AppContext } from './ContextProvider';
import SecondaryButton from '../../../../general/SecondaryButton';
import styled from 'styled-components';

const StyledDiv = styled.div`
  && {
    border: 1px solid #deb076;
    display: flex;
    justify-content: center;
    padding: 10px;
  }
`;

const ButtonComponent = () => {
  const { setShouldValidate } = useContext(AppContext);

  return (
    <StyledDiv>
      <SecondaryButton onClick={() => setShouldValidate(true)}>
        Click!
      </SecondaryButton>
    </StyledDiv>
  );
};

export default ButtonComponent;
