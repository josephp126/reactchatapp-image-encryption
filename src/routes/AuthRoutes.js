/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SingIn from "../pages/Auth/SingIn";

export default (props) => {
  return (
    <>
      <Header {...props} />
      <div class="layout-content">
        <Switch>
          <Route path="/login" component={(props) => <SingIn {...props} />}></Route>
          <Redirect to="/login" />
        </Switch>
      </div>
      <Footer {...props} />
    </>
  );
};
