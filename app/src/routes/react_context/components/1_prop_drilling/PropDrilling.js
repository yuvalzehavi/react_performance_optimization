import React, { useState } from 'react';
import { Divider, Typography } from '@material-ui/core';
import styled from 'styled-components';

import SecondaryButton from '../../../../general/SecondaryButton';
import CodeDescription from '../../../../general/CodeDescription';
import DescriptionTypography from '../../../../general/DescriptionTypography';
import StyledHeader from '../../../../general/StyledHeader';

const colorsArr = ['black', 'red', 'blue', 'green', 'purple', 'cyan'];

const StyledTypography = styled(Typography)`
  color: ${props => props.current_color};
`;
const StyledDiv = styled.div`
  margin-bottom: 2rem;
  .childrenContainer > * {
    margin-left: 1rem;
  }
`;

/**
 * This is an example a deeply-nested child which may call a function in main Parent
 * All children in the tree must pass on that function, despite the fact they have no use of it
 * This causes the code to be less clean, tree-dependant, and harder to test
 * This is called 'prop drilling' - passing props down the components tree
 */
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [currentColor, setCurrentColor] = useState(colorsArr[0]);
  const changeColor = () => {
    const index = colorsArr.indexOf(currentColor);
    const nextColor = index < colorsArr.length - 1 ? index + 1 : 0;
    setCurrentColor(colorsArr[nextColor]);
  };

  const props = {
    setCount,
    changeColor,
    count,
    currentColor
  };
  return (
    <>
      <StyledTypography>{`Parent Component | Count is ${count}`}</StyledTypography>
      <Divider />
      <IntermediateParent {...props} />
    </>
  );
};

const IntermediateParent = props => {
  return (
    <>
      <IntermediateChild1 {...props}>
        <IntermediateChild1 {...props}>
          <IntermediateChild1 {...props}>
            <IntermediateChild1 {...props}>
              <IntermediateChild2 {...props} />
            </IntermediateChild1>
          </IntermediateChild1>
        </IntermediateChild1>
      </IntermediateChild1>
    </>
  );
};

const IntermediateChild1 = props => {
  return (
    <StyledDiv>
      <StyledTypography current_color={props.currentColor}>
        IntermediateChild
      </StyledTypography>
      <Divider />
      <div className={'childrenContainer'}>{props.children}</div>
    </StyledDiv>
  );
};

const IntermediateChild2 = props => {
  return (
    <StyledDiv>
      <StyledTypography current_color={props.currentColor}>
        IntermediateChild
      </StyledTypography>
      <Divider />
      <FinalChild {...props} />
    </StyledDiv>
  );
};

const FinalChild = props => {
  const { setCount, changeColor, count, currentColor } = props;

  const onChangeCountClick = () => {
    setCount(count + 1);
  };
  const onChangeColorClick = () => {
    changeColor();
  };

  return (
    <StyledDiv>
      <StyledTypography current_color={currentColor}>
        I am the final child!!!!!
      </StyledTypography>
      <SecondaryButton onClick={onChangeCountClick}>Set count</SecondaryButton>
      <SecondaryButton onClick={onChangeColorClick}>
        Change Color
      </SecondaryButton>
    </StyledDiv>
  );
};

export default () => {
  return (
    <StyledDiv>
      <StyledHeader>Prop Drilling When Not Using Context</StyledHeader>
      <CodeDescription>
        <Typography>{`/////parent component`}</Typography>
        <Typography>{`const ParentComponent = () => {`}</Typography>
        <Typography className={'indentedText'}>
          <span>{`const [count, setCount] = useState(0);`}</span>
          <span>{`const [currentColor, setCurrentColor] = useState(colorsArr[0]);`}</span>
          <br />
          <span>{` return (`}</span>
          <span
            className={'indentedText'}
          >{` <IntermediateParent {...props} />`}</span>
          <span>{` );`}</span>
        </Typography>
        <Typography>{`}`}</Typography>
        <br />
        <Typography>{`/////intermediate child containing other children`}</Typography>
        <Typography>{` const IntermediateParent = (props) => {`}</Typography>
        <Typography className={'indentedText'}>
          <span>{`return (`}</span>
          <span
            className={'indentedText'}
          >{` <IntermediateChild1 {...props}>`}</span>
          <span
            className={'indentedText2'}
          >{` <IntermediateChild1 {...props}>`}</span>
          <span
            className={'indentedText3'}
          >{` <IntermediateChild1 {...props}>`}</span>
          <span
            className={'indentedText4'}
          >{` <IntermediateChild1 {...props}>`}</span>
          <span
            className={'indentedText5'}
          >{` <IntermediateChild1 {...props}>`}</span>
          <span
            className={'indentedText6'}
          >{` <FinalChild {...props} />`}</span>
          <span className={'indentedText5'}>{`  </IntermediateChild1>`}</span>
          <span className={'indentedText4'}>{`  </IntermediateChild1>`}</span>
          <span className={'indentedText3'}>{`  </IntermediateChild1>`}</span>
          <span className={'indentedText2'}>{`  </IntermediateChild1>`}</span>
          <span className={'indentedText'}>{`  </IntermediateChild1>`}</span>
          <span>{`);`}</span>
        </Typography>
        <Typography>{`}`}</Typography>
        <br />
        <Typography>{`/////final child using the passed on props`}</Typography>
        <Typography>{` const FinalChild = (props) => {`}</Typography>
        <Typography className={'indentedText'}>
          <span>
            {`const { setCount, changeColor, count, currentColor }`} = props;
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
        This is an example a deeply-nested child which may call a function in
        main Parent <br />
        All children in the tree must pass on that function, despite the fact
        they have no use of it. <br />
        This causes the code to be less clean, tree-dependant, and harder to
        test <br />
        This is called 'prop drilling' - passing props down the components tree
      </DescriptionTypography>
      <br />

      <ParentComponent />
    </StyledDiv>
  );
};
