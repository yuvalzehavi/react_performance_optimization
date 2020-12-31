import React, { useState, useCallback } from 'react';

import OutputLogger from '../../../../general/OutputLogger';
import { Divider, Typography } from '@material-ui/core';
import CodeDescription from '../../../../general/CodeDescription';
import DescriptionTypography from '../../../../general/DescriptionTypography';
import SecondaryButton from '../../../../general/SecondaryButton';
import StyledHeader from '../../../../general/StyledHeader';

const Container = React.memo(({ message, func }) => {
  return <OutputLogger message={message} />;
});

/**
 * This component holds button child which calls useState() when clicked
 * One child is memoized, and so is the callback passed on to it as prop
 * So when the parent updates, the child would not
 */

const FunctionAsPropMemoized = () => {
  const [_, setProp] = useState(0);
  const message = 'Child is rendering....';

  const setRandProp = useCallback(() => {
    setProp(Math.round(Math.random() * 1000));
  }, [setProp]);

  return (
    <div>
      <StyledHeader>
        Performance When Using a Memoized Function as Prop
      </StyledHeader>
      <CodeDescription>
        <Typography>
          {`const Container = React.memo(({ message, func }) => {`}
        </Typography>
        <Typography className={'indentedText'}>
          <span>{`return <OutputLogger message={message />; `} </span>
        </Typography>
        <Typography> {`});`} </Typography>
        <br />
        <Typography>{`const setRandProp = useCallback(() => {`}</Typography>
        <Typography className={'indentedText'}>
          <span>{` setProp(Math.round(Math.random() * 1000)); `} </span>
        </Typography>
        <Typography>{`}, [setProp]);`}</Typography>
        <br />
        <Typography>
          {`<Container message={message} func={setRandProp} />`}
        </Typography>
      </CodeDescription>
      <DescriptionTypography variant={'subtitle2'}>
        This component holds a button which calls useState() when clicked,
        <br />
        One child is memoized, and so is the callback passed on to it as prop
        <br />
        So when the parent updates, the child would not
      </DescriptionTypography>
      <SecondaryButton onClick={setRandProp}>
        trigger re-render in parent
      </SecondaryButton>
      <Divider />

      <OutputLogger message={'parent is rendering...'} />
      <Container message={message} func={setRandProp} />
    </div>
  );
};

export default FunctionAsPropMemoized;
