import React from 'react';
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

const ButtonComponent = ({ onClick }) => {
  return (
    <StyledDiv>
      <SecondaryButton onClick={onClick}>Click!</SecondaryButton>
    </StyledDiv>
  );
};

export default ButtonComponent;
