/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import Logout from "pages/Auth/Logout";
import Channels from "pages/Main/Channels";

export default (props) => {
  return (
    <>
      {/* <Header {...props} /> */}
      <main className="layout-content-main">
        <Switch>
          <Route
            path="/channels"
            component={(props) => <Channels {...props} />}
          ></Route>
          <Route
            path="/logout"
            component={(props) => <Logout {...props} />}
          ></Route>
          <Redirect to="/channels" />
        </Switch>
      </main>
      {/* <Footer {...props} /> */}
    </>
  );
};
