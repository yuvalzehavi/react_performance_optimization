import React from 'react';

import ParentComponent from './ParentComponent';
import AppContextProvider from './AppContextProvider';
import StyledHeader from '../../../../general/StyledHeader';
import CodeDescription from '../../../../general/CodeDescription';
import { Typography } from '@material-ui/core';
import DescriptionTypography from '../../../../general/DescriptionTypography';

/**
 * React Context Provider provides context to all descendants
 * Each child may consume this context
 * Notice the cleaner code: No props are being passed to children
 */
const App = () => {
  return (
    <div>
      <StyledHeader>Using React Context</StyledHeader>
      <CodeDescription>
        <Typography>{`/////parent component`}</Typography>
        <Typography>{`const App = () => {`}</Typography>
        <Typography className={'indentedText'}>
          <span>{`return (`}</span>
          <span className={'indentedText'}>{`<AppContextProvider>`}</span>
          <span className={'indentedText2'}>{`<ParentComponent />`}</span>
          <span className={'indentedText'}>{`</AppContextProvider>`}</span>
          <span>{`);`}</span>
        </Typography>
        <br />
        <Typography>{`/////final child using context`}</Typography>
        <Typography>{` const FinalChild = (props) => {`}</Typography>
        <Typography className={'indentedText'}>
          <span>
            {`const { setCount, changeColor, count, currentColor } = useContext(AppContext);`}{' '}
            = props;
          </span>
          <span>{` return (`}</span>
          <span
            className={'indentedText'}
          >{`<button onClick = () => setCount(count + 1);> Set count </button>`}</span>
          <span
            className={'indentedText'}
          >{`<button onClick={changeColor}> Change Color </button>`}</span>
          <span>{`   );`}</span>
        </Typography>
        <Typography>{`}`}</Typography>
      </CodeDescription>
      <DescriptionTypography variant={'subtitle2'}>
        React Context Provider provides context to all descendants
        <br /> Each child may consume this context
        <br /> Notice the cleaner code: No props are being passed to children
      </DescriptionTypography>
      <br />

      <AppContextProvider>
        <ParentComponent />
      </AppContextProvider>
    </div>
  );
};

export default App;
