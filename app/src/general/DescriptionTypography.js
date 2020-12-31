import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const StyledTypography = styled(Typography)`
  && {
    background-color: #efefef;
    color: black;
    padding: 1rem;
    margin: 1rem 0;
  }
`;

export default function DescriptionTypography({ onClick, children, ...rest }) {
  return <StyledTypography variant={'subtitle2'}>{children}</StyledTypography>;
}
