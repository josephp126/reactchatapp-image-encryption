/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logout from "../pages/Auth/Logout";
import Home from "../pages/Main/Home";

export default (props) => {
  return (
    <>
      {/* <Header {...props} /> */}
      <main className="layout-content-main">
        <Switch>
          <Route
            path="/home"
            component={(props) => <Home {...props} />}
          ></Route>
          <Route
            path="/logout"
            component={(props) => <Logout {...props} />}
          ></Route>
          <Redirect to="/home"/>
        </Switch>
      </main>
      {/* <Footer {...props} /> */}
    </>
  );
};
