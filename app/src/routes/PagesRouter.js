import React, { useContext, useLayoutEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "./history";
import PerformanceOptimization from "../performance_optimization/";
import ReactHooks from "../react_hooks/";
import Header from "../Header";

const PagesRouter = () => {
  // const { pathname } = history.location;

  useLayoutEffect(() => {
    //initial routing
    //history.push('performance');
  }, []);

  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path={["/performance"]} component={PerformanceOptimization} />
          <Route component={ReactHooks} />
        </Switch>
      </Router>
    </div>
  );
};
export default PagesRouter;
