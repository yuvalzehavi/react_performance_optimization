import React, { useContext } from 'react';
import { Divider } from '@material-ui/core';

import { AppContext } from './AppContextProvider';
import StyledTypography from './StyledTypography';

export default function IntermediateChild1({ children }) {
  const { currentColor } = useContext(AppContext);
  return (
    <div>
      <StyledTypography currentColor={currentColor}>
        IntermediateChild
      </StyledTypography>
      <Divider />
      <div className={'childrenContainer'}>{children}</div>
    </div>
  );
}
