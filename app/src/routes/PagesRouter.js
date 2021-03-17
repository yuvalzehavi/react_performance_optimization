import React, { useLayoutEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import PerformanceOptimization from './performance_optimization/';
import ReactHooks from './react_hooks/';
import ReactContext from './react_context/';
import ControlChildFromParent from './controlling_child_from_parent/';
import ExerciseApp from './exercise/';
import Header from '../Header';
import MainMenu from './MainMenu/MainMenu';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  & > :nth-child(1) {
    padding: 0 2rem;
  }
  .componentsMenu {
    border-right: 1px solid;
  }
  .componentsContainer {
    padding: 0 2rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const PagesRouter = () => {
  useLayoutEffect(() => {
    //initial routing
    history.push('/');
  }, []);

  return (
    <div>
      <Router history={history}>
        <Header />
        <StyledContainer>
          <Switch>
            <Route
              path={['/performance-optimization']}
              component={PerformanceOptimization}
            />
            <Route path={['/react-hooks']} component={ReactHooks} />
            <Route path={['/react-context']} component={ReactContext} />
            <Route path={['/control-child-from-parent']} component={ControlChildFromParent} />
            <Route path={['/exercise']} component={ExerciseApp} />
            <Route component={MainMenu} />
          </Switch>
        </StyledContainer>
      </Router>
    </div>
  );
};
export default PagesRouter;
