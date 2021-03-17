import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const StyledButton = styled(Button)`
  && {
    margin: 0.5rem;
    text-transform: none;
    & > * {
      pointer-events: none;
    }
  }
`;

export default function SecondaryButton({ onClick, children, ...rest }) {
  return (
    <StyledButton
      color="secondary"
      variant="contained"
      className={'button'}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}
