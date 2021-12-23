import React from "react";
import { createBrowserHistory } from "history";

export const navigationRef = React.createRef(null);
const history = createBrowserHistory();

export const navigate = (name, params) => {
  history.push(name, params);
};
