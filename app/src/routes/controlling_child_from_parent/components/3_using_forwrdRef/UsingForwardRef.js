import React from 'react';
import { Typography } from '@material-ui/core';

import ParentComponent from './Parent';
import StyledHeader from '../../../../general/StyledHeader';
import CodeDescription from '../../../../general/CodeDescription';
import DescriptionTypography from '../../../../general/DescriptionTypography';

/**
 * Using render props pattern to activate validation in child via parent
 * Validation function reference in Child is passed to parent in render function
 * enabling Parent can trigger validation in child
 */
const App = () => {
  return (
    <div>
      <StyledHeader>
        Parent-Child Relationship - forwardRef and useImperativeHandler
      </StyledHeader>
      <CodeDescription>
        <Typography>{`/////parent component`}</Typography>
        <Typography>{`const Parent = () => (`}</Typography>
        <Typography className={'indentedText'}>
          <span>{`const childRef = useRef(null);`}</span>
          <span>{`const [childValidState, setChildValidState] = useState('unvalidated');`}</span>
          <span>{`const triggerValidate = () => {`}</span>
          <span
            className={'indentedText'}
          >{`setChildValidState(childRef.current.setChildValidation());`}</span>
          <span>{`}`}</span>
          <span>{`<Typography>{childValidState}</Typography>`}</span>
          <span>{`<Child ref={childRef} />`}</span>
          <span>{`<Button onClick={triggerValidate} />`}</span>
        </Typography>
        <Typography>{`);`}</Typography>
        <br />
        <Typography>{`/////child component`}</Typography>
        <Typography>{`const Child = forwardRef((props, ref) => {`}</Typography>
        <Typography className={'indentedText'}>
          <span>{`const [validState, setValidState] = useState('unvalidated');`}</span>
          <span>{`const setChildValidation = () => {`}</span>
          <span className={'indentedText'}>{`setValidState('valid');`}</span>
          <span className={'indentedText'}>{`return 'valid';`}</span>
          <span>{`};`}</span>
        </Typography>
        <Typography>{`}`}</Typography>
        <Typography className={'indentedText'}>
          <span>{`useImperativeHandle(ref, () => ({`}</span>
          <span className={'indentedText'}>{`setChildValidation`}</span>
          <span>{`}), [setChildValidation]);`}</span>
        </Typography>
        <br />
        <Typography>{`/////button component`}</Typography>
        <Typography>{`const Button = ({onClick}) => {`}</Typography>
        <Typography className={'indentedText'}>
          <span>{`return (`}</span>
          <span
            className={'indentedText'}
          >{`<button onClick={onClick}>Click!</button>`}</span>
          <span>{`)`}</span>
        </Typography>
        <Typography>{`}`}</Typography>
      </CodeDescription>
      <DescriptionTypography variant={'subtitle2'}>
        Using Render Props pattern to activate validation function in child from
        parent
        <br /> Child returns its reference to validation function
        <br /> Parent can then call that function
      </DescriptionTypography>

      <ParentComponent />
    </div>
  );
};

export default App;
