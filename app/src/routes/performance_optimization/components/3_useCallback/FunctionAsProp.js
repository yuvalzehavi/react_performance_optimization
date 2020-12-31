import React, { useState } from 'react';

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
 * This component holds a button which calls useState() when clicked,
 * And another memoized child. However the callback passed as prop is re-created on each render
 * So when the parent updates, so does its memoized child,
 */

const FunctionAsProp = () => {
  const [_, setProp] = useState(0);
  const message = 'Child is rendering....';

  const setRandProp = () => setProp(Math.round(Math.random() * 1000));

  return (
    <div>
      <StyledHeader>Performance When Using Function as Prop</StyledHeader>
      <CodeDescription>
        <Typography>
          {`const Container = React.memo(({ message, func }) => {`}
        </Typography>
        <Typography className={'indentedText'}>
          <span>{`//message = ${message} `} </span>
          <span>{`//func = ${setRandProp} `} </span>
          <span>{`return <OutputLogger message={message />; `} </span>
        </Typography>
        <Typography> {`});`} </Typography>
        <br />
        <Typography>{`const setRandProp = () => setProp(Math.round(Math.random() * 1000));`}</Typography>
        <br />
        <Typography>
          {`<Container message={message} func={setRandProp} />`}
        </Typography>
      </CodeDescription>
      <DescriptionTypography variant={'subtitle2'}>
        This component holds a button which calls useState() when clicked,
        <br />
        And another memoized child. However the callback passed as prop is
        re-created on each render
        <br />
        So when the parent updates, so does its memoized child,
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

export default FunctionAsProp;
