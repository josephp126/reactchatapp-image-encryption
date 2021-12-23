/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import Footer from "components/Footer";
import Header from "components/Header";
import Logout from "pages/Auth/Logout";
import Home from "pages/Main/Home";
import SideBar from "components/SideBar";
import { Link } from "react-router-dom";
import Channel from "components/Channel";
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
