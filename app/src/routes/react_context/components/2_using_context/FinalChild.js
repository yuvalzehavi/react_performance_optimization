import React, { useContext } from 'react';

import { AppContext } from './AppContextProvider';
import StyledTypography from './StyledTypography';
import SecondaryButton from '../../../../general/SecondaryButton';

export default function FinalChild() {
  const { setCount, changeColor, count, currentColor } = useContext(AppContext);

  const onChangeCountClick = () => {
    setCount(count + 1);
  };
  const onChangeColorClick = () => {
    changeColor();
  };

  return (
    <div>
      <StyledTypography currentColor={currentColor}>
        I am the final child!!!!!
      </StyledTypography>
      <SecondaryButton onClick={onChangeCountClick}>Set count</SecondaryButton>
      <SecondaryButton onClick={onChangeColorClick}>
        Change Color
      </SecondaryButton>
    </div>
  );
}
