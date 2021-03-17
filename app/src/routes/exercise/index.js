import React from 'react';
import styled from 'styled-components';
import SecondaryButton from '../../general/SecondaryButton';
import { Typography } from '@material-ui/core';

const StyledContainer = styled.div`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    .contentWrapper {
      display: flex;
      flex-direction: column;
      .textWrapper {
        .title {
          text-align: center;
        }
      }
      .button {
        margin: 20px auto;
      }
    }
  }
`;

const filePath = 'https://randomuser.me/api/?results=10';

export default () => {
  const fetchUsers = async () => {
    const res = await fetch(filePath);
    const users = await res.json();
    console.log(users.results);
  };
  return (
    <StyledContainer className={'container'}>
      <div className={'contentWrapper'}>
        <div className={'textWrapper'}>
          <Typography variant={'h5'} className={'title'}>
            Exercise - Build a Mini-App
          </Typography>
          <hr />
          <Typography>
            Build an app that fetches users from URL and presents their info and
            picture
          </Typography>
          <Typography>
            use React hooks and context to manage components and data flow
          </Typography>
        </div>
        <SecondaryButton onClick={fetchUsers} className={'button'}>
          Fetch Users
        </SecondaryButton>
      </div>
    </StyledContainer>
  );
};
