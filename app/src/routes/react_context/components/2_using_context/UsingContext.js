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
        <Typography>{`/////AppContext`}</Typography>
        <Typography>{`export default function AppContextProvider({ children }) {`}</Typography>
        <Typography className={'indentedText'}>
          <span>{`const [count, setCount] = useState(0);`}</span>
          <span>{` const [currentColor, setCurrentColor] = useState(colorsArr[0]);`}</span>
          <span>{`const changeColor = () => {`}</span>
          <span
            className={'indentedText'}
          >{`const index = colorsArr.indexOf(currentColor);`}</span>
          <span
            className={'indentedText'}
          >{`const nextColor = index < colorsArr.length - 1 ? index + 1 : 0;`}</span>
          <span
            className={'indentedText'}
          >{`setCurrentColor(colorsArr[nextColor]);`}</span>
          <span>{`};`}</span>
          <br />
          <span>{` return (`}</span>
          <span className={'indentedText'}>{`<AppContext.Provider`}</span>
          <span className={'indentedText2'}>{`value={{`}</span>
          <span
            className={'indentedText3'}
          >{`setCount, changeColor, count, currentColor`}</span>
          <span className={'indentedText2'}>{`}}`}</span>
          <span className={'indentedText'}>{`>`}</span>
          <span className={'indentedText2'}>{`{children}`}</span>
          <span className={'indentedText'}>{`</AppContext.Provider>`}</span>
          <span>{`);`}</span>
        </Typography>
        <Typography>{`}`}</Typography>
        <br />
        <Typography>{`/////App providing context to all children`}</Typography>
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
