import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import StyledButton from '../../general/PrimaryButton';
import StyledMenuTitle from '../../general/StyledMenuTitle';
import { AppContext } from '../../context/AppContext';

const StyledContainer = styled.div`
  .buttonAndTextContainer {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: max-content;
    cursor: pointer;
    padding: 0.5rem 1rem;
    background-color: #efefef;
    &:nth-child(even) {
      background-color: #e0e0e0;
    }
    & > * {
      pointer-events: none;
    }
    .text {
      display: inline-table;
    }
    .button {
      margin: 0;
    }
  }
`;

const items = [
  {
    id: 'react-hooks',
    buttonText: 'React Hooks',
    textDescription: 'How do React Hooks Really Work?'
  },
  {
    id: 'performance-optimization',
    buttonText: 'Performance Optimization',
    textDescription: 'Learn Performance Optimization Hooks'
  },
  {
    id: 'react-context',
    buttonText: 'React Context',
    textDescription: 'Using React Context'
  },
  {
    id: 'control-child-from-parent',
    buttonText: 'Control a Child from Parent',
    textDescription: 'Different patterns to solve child-parent control'
  }
];
export default function MainMenu() {
  const { setModuleDescription } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    setModuleDescription('');
  }, []);

  const onClick = e => {
    const item = items.filter(item => item.id === e.target.id)[0];
    setModuleDescription(item.textDescription);
    history.push(item.id);
  };

  const mapItems = () =>
    items.map((item, idx) => (
      <div
        className={'buttonAndTextContainer'}
        id={item.id}
        onClick={onClick}
        key={idx}
      >
        <StyledMenuTitle>
          <Typography>{`{ ${idx + 1} }`}</Typography>
        </StyledMenuTitle>
        <StyledButton className={'button'}>{item.buttonText}</StyledButton>
        <Typography variant={'subtitle1'} className={'text'}>
          <i>{item.textDescription}</i>
        </Typography>
      </div>
    ));

  return <StyledContainer>{mapItems()}</StyledContainer>;
}
