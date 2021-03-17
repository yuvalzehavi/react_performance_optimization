import React from 'react';
import { Typography } from '@material-ui/core';

import ParentComponent from './Parent';
import ContextProvider from './ContextProvider';
import StyledHeader from '../../../../general/StyledHeader';
import CodeDescription from '../../../../general/CodeDescription';
import DescriptionTypography from '../../../../general/DescriptionTypography';

/**
 * Using React Context to share state and functionality between components
 * Button click updates the 'shouldValidate' state
 * Then Child component validates itself and updates shared state
 */
const App = () => {
  return (
    <div>
      <StyledHeader>Parent-Child Relationship - React Context</StyledHeader>
      <CodeDescription>
        <Typography>{`/////Context Provider`}</Typography>
        <Typography>{`export default function AppContextProvider({ children }) {`}</Typography>
        <Typography className={'indentedText'}>
          <span>{`const [sharedState, setSharedState] = useState(initialState);`}</span>
          <span>{`const [shouldValidate, setShouldValidate] = useState(false);`}</span>
          <span>{`const updateSharedState = obj => {`}</span>
          <span className={'indentedText'}>{`setSharedState({ ...sharedState, ...obj });`}</span>
          <span>{`};`}</span>
          <span>{`return (`}</span>
          <span className={'indentedText'}>{`<AppContext.Provider`}</span>
          <span className={'indentedText2'}>{`value={{`}</span>
          <span className={'indentedText3'}>{`sharedState`}</span>
          <span className={'indentedText3'}>{`updateSharedState`}</span>
          <span className={'indentedText3'}>{`shouldValidate`}</span>
          <span className={'indentedText3'}>{`setShouldValidate`}</span>
          <span className={'indentedText2'}>{`}}`}</span>
          <span className={'indentedText'}>{`</AppContext.Provider>`}</span>
          <span>{`)`}</span>
        </Typography>
        <br/>
        <Typography>{`/////parent component`}</Typography>
        <Typography>{`const Parent = () => (`}</Typography>
        <Typography className={'indentedText'}>
          <span>{`<Typography>{JSON.stringify(sharedState)}</Typography>`}</span>
          <span>{`<Child />`}</span>
          <span>{`<Button />`}</span>
        </Typography>
        <Typography>{`);`}</Typography>
        <br />
        <Typography>{`/////child component`}</Typography>
        <Typography>{`const Child = () => {`}</Typography>
        <Typography className={'indentedText'}>
          <span>{`const { shouldValidate, updateSharedState } = useContext(AppContext);`}</span>
          <span>{`useEffect(() => {`}</span>
          <span className={'indentedText'}>{`if (shouldValidate) {`}</span>
          <span
            className={'indentedText'}
          >{`updateSharedState({ childValidState: 'valid' });`}</span>
          <span>{`);`}</span>
        </Typography>
        <Typography>{`}`}</Typography>
        <br />
        <Typography>{`/////button component`}</Typography>
        <Typography>{`const Button = () => {`}</Typography>
        <Typography className={'indentedText'}>
          <span>{`const { setShouldValidate } = useContext(AppContext);`}</span>
          <span>{`return (`}</span>
          <span
            className={'indentedText'}
          >{`<button onClick={() => setShouldValidate(true)}> Click!</button>`}</span>
          <span>{`)`}</span>
        </Typography>
        <Typography>{`}`}</Typography>
      </CodeDescription>
      <DescriptionTypography variant={'subtitle2'}>
        Using React Context to share state and functionality between components
        <br /> Button click changes the 'shouldValidate' state
        <br /> Child validates itself and updates shared state
      </DescriptionTypography>

      <ContextProvider>
        <ParentComponent />
      </ContextProvider>
    </div>
  );
};

export default App;
