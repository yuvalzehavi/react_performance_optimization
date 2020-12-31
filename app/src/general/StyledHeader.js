import React from 'react';
import { Typography } from '@material-ui/core';

export default function StyledHeader({ children }) {
  return (
    <Typography variant={'h6'} className={'title'}>
      {children}
    </Typography>
  );
}
