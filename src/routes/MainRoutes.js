/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Main/Home";

export default (props) => {
  return (
    <>
      <Header {...props} />
      <div class="layout-content">
        <Switch>
          <Route
            path="/auth/signUp"
            component={(props) => <Home {...props} />}
          ></Route>
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer {...props} />
    </>
  );
};
