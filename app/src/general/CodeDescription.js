import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #353535;
  color: white;
  padding: 1rem;
  .indentedText span {
    display: block;
    text-indent: 1rem;
    &.indentedText {
      text-indent: 2rem;
    }
    &.indentedText2 {
      text-indent: 4rem;
    }
    &.indentedText3 {
      text-indent: 6rem;
    }
    &.indentedText4 {
      text-indent: 8rem;
    }
    &.indentedText5 {
      text-indent: 10rem;
    }
    &.indentedText6 {
      text-indent: 12rem;
    }
  }
`;
export default function CodeDescription({ children }) {
  return <StyledDiv variant={'subtitle2'}>{children}</StyledDiv>;
}
