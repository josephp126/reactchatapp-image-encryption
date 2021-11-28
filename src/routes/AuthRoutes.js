/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Footer from "components/Footer";
import Header from "components/Header";
import Register from "pages/Auth/Register";
import SingIn from "pages/Auth/SingIn";

export default (props) => {
  return (
    <>
      <Header {...props} />
      <main className="layout-content">
        <Switch>
          <Route
            path="/login"
            component={(props) => <SingIn {...props} />}
          ></Route>
          <Route
            path="/register"
            component={(props) => <Register {...props} />}
          ></Route>
          <Redirect to="/login" />
        </Switch>
      </main>
      {/* <Footer {...props} /> */}
    </>
  );
};
